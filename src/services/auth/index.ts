import { BASE_URL } from "@/lib/constants/enviroment";
import { MainUserRegister } from "@/types/AuthResponse.types";
import { LoginResponse, NetworkSuccess } from "@/types/NetworkResponse.types";
import { User } from "@/types/User.types";
import axios from "axios";

const USER_END_POINT = BASE_URL + "users";
const END_POINT = BASE_URL + "auth";

const getUserByEmail = async (email: string) => {
  try {
    const response = await axios.get(`${USER_END_POINT}?email=${email}`);
    return response;
  } catch (error) {
    throw error;
  }
};


const getUserById = async (): Promise<NetworkSuccess> => {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('No se encontró el token en el almacenamiento local.');
        }
        const response = await axios.get<NetworkSuccess<{ data: User }>>(`${END_POINT}/user`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        return response.data;
    } catch (error) {
        throw error;
    }
}

const createMainUser = async (
  email: string,
  name: string,
  lastname: string,
  password: string,
  phone: string
) => {
  try {
    const response = await axios.post<NetworkSuccess<MainUserRegister>>(
      `${USER_END_POINT}`,
      {
        email,
        name,
        lastname,
        password,
        phone,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const onLogIn = async (email: string, password: string) => {
  try {
    const response = await axios.post<LoginResponse>(`${END_POINT}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const changeTenant = async (name: string) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post<NetworkSuccess>(
      `${END_POINT}/changeTenant`,
      {
        name,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const onLogOut = () => {
  try {
    localStorage.removeItem("token");
    sessionStorage.removeItem("currentBuisnessId");
    sessionStorage.removeItem("currentPipeline");
    sessionStorage.removeItem("currentPipelineId");
  } catch (error) {
    console.error("Error signing out:", error);
  }
};

export { onLogIn, getUserByEmail, createMainUser, changeTenant, onLogOut, getUserById };
