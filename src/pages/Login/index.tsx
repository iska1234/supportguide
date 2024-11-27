import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { onLogIn } from "@/services/auth";
import { useNavigate } from "react-router-dom";

interface LoginFormInputs {
  username: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>();
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      const {data: responseData, success} = await onLogIn(data.username, data.password);
      if(success){
        console.log("Login successful:", responseData);
        localStorage.setItem('token', responseData.token)
        navigate('/home')
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="h-screen w-screen relative text-gray-900 overflow-hidden flex items-center justify-center bg-pink-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border flex flex-col gap-4 p-8 border-pink-400 rounded-md bg-white shadow-lg w-80"
      >
        <h1 className="text-center text-2xl font-bold text-pink-600">Inicia Sesión</h1>
        <div>
          <Input
                    labelClass="text-pink-500 font-semibold"
          label="Usuario"
            id="username"
            placeholder="Ingresa tu usuario"
            {...register("username", {
              required: "El usuario es obligatorio.",
              minLength: {
                value: 3,
                message: "El usuario debe tener al menos 3 caracteres.",
              },
            })}
            className={`mt-1 border-pink-300 ${
              errors.username ? "border-red-500" : ""
            }`}
          />
          {errors.username && (
            <p className="text-sm text-red-500 mt-1">{errors.username.message}</p>
          )}
        </div>
        <div>
          <Input
          labelClass="text-pink-500 font-semibold"
          label="Contraseña"
            id="password"
            type="password"
            rightIcon="eye"
            placeholder="Ingresa tu contraseña"
            {...register("password", {
              required: "La contraseña es obligatoria.",
              minLength: {
                value: 6,
                message: "La contraseña debe tener al menos 6 caracteres.",
              },
            })}
            className={`mt-1 border-pink-300 ${
              errors.password ? "border-red-500" : ""
            }`}
          />
          {errors.password && (
            <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
          )}
        </div>

        {/* Botón de Login */}
        <Button
          type="submit"
          className="bg-pink-300 hover:bg-pink-400 text-white font-bold py-2 px-4 rounded"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Cargando..." : "Login"}
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
