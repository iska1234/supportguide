import axios from "axios";
import { BASE_URL } from "@/lib/constants/enviroment";
import { NetworkSuccess } from "@/types/NetworkResponse.types";
import { Topic, UpdateTopic } from "@/types/Topic.types";

const TOPIC_END_POINT = BASE_URL + "topic";

const getTopics = async (): Promise<NetworkSuccess> => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No se encontró el token en el almacenamiento local.");
    }

    const response = await axios.get<NetworkSuccess<{ data: Topic[] }>>(
      TOPIC_END_POINT,
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

const updateTopic = async ({
  id,
  title,
  description,
  isCompleted,
}: UpdateTopic): Promise<NetworkSuccess> => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No se encontró el token en el almacenamiento local.");
    }

    const response = await axios.put<NetworkSuccess<{ data: Topic }>>(
      `${TOPIC_END_POINT}/${id}`,
      { title, description, isCompleted },
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

export { getTopics, updateTopic };
