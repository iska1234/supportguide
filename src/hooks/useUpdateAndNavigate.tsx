import { setTopics } from "@/redux/slices/topic.slice";
import { useAppDispatch, useAppSelector } from "@/redux/storeHooks";
import { updateTopic } from "@/services/topic";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface UseUpdateAndNavigateProps {
  topicId: number;
  nextRoute: string;
}

export const useUpdateAndNavigate = ({ topicId, nextRoute }: UseUpdateAndNavigateProps) => {
  const { topics } = useAppSelector((store) => store.topic);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const update = async (): Promise<boolean> => {
    try {
      const response = await updateTopic({ id: topicId, isCompleted: isChecked });

      if (response.success && response.data) {
        const updatedTopics = topics.map((topic) =>
          topic.id === response.data.id ? { ...topic, ...response.data } : topic
        );
        dispatch(setTopics(updatedTopics));
        return true;
      }

      console.error("Error en la respuesta del servidor:", response);
      return false;
    } catch (error) {
      console.error("Error al actualizar el topic:", error);
      return false;
    }
  };

  const combinate = async () => {
    const isUpdated = await update();
    if (isUpdated) {
      navigate(nextRoute);
    } else {
      console.warn("No se pudo completar la actualización. No se permite navegar.");
    }
  };

  return {
    isChecked,
    setIsChecked,
    update,
    combinate,
  };
};
