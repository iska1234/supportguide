import ImageMagnifier from "@/components/ImageMagnifier";
import MarkAsCompleted from "@/components/markAsCompleted";
import TransitionEffect from "@/components/transitionEffect/TransitionEffect";
import { useUpdateAndNavigate } from "@/hooks/useUpdateAndNavigate";
import React from "react";

const Topic6Page: React.FC = () => {

  const { isChecked, isCompleted,setIsChecked, combinate } = useUpdateAndNavigate({
    topicId: 6,
    nextRoute: "/topic/7",
  });

  return (
    <>
      <TransitionEffect />
      <div className="mt-10 pb-16 bg-gradient-to-b from-pink-50 to-pink-100 px-12 lg:px-20 text-gray-800">
        <h1 className="mt-24 text-4xl font-bold text-center text-pink-700 mb-12">
          Roaming
        </h1>
        <div className="flex justify-center">
          <p className="italic text-black text-lg text-justify w-2/3 pb-10 px-10">
            Roamear es una habilidad esencial que sirve para apoyar otras líneas y ganar ventaja global.
            En esta sección hay pasos detallados para entender cómo, cuándo y por qué roamear puede marcar la diferencia en tus partidas
          </p>
        </div>
        <div className="px-4 mt-10 text-black text-lg space-y-8 flex flex-col gap-8">
          <section>
            <h2 className="text-2xl font-semibold text-pink-600 mb-4">1. ¿Qué es el Roaming?</h2>
            <p>
              Se refiere a dejar tu carril para apoyar a otras líneas con el objetivo de asegurar asesinatos, objetivos, o simplemente generar presión en el mapa
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-pink-600 mb-4">2. ¿Cuándo hacer Roaming?</h2>
            <p>Intenta hacer roaming unicamente si: </p>
            <ul className="list-disc list-inside">
              <li>Cuando tu línea está empujada y tienes visión del jungla enemigo</li>
              <li>Después de empujar una oleada hacia la torre enemiga</li>
              <li>Si alguien de la bot enemiga ha muerto o está demasiado lejos para contestarte el roam</li>
              <li>Cuando tu jg esté cerca y quieran realizar alguna play, ya sea un dive o un invade</li>
            </ul>
          </section>
          <section className="flex justify-between gap-20">
            <div>
            <h2 className="text-2xl font-semibold text-pink-600 mb-4">3. Cómo hacer Roaming</h2>
            <ul className="list-disc list-inside">
              <li>Avísales a tu team que vas a moverte, utiliza las señales para ahorrar tiempo en esto</li>
              <li>Usa la visión y pathings rápidos para ir a las otras lineas (Seguir el ejemplo de la imagen)</li>
              <li>Toma caminos seguros y controla arbustos con wards para tener en cuenta el movimiento del enemigo</li>
              <li>Intenta seguir al enemigo, hay varios players supports enemigos que buscarán lo mismo que tu, lo que deberias hacer es avisar e intentar asomarte un poco a ver si el logra hacer el roaming, para luego intentar contestarlo</li>
            </ul>
            </div>
          <ImageMagnifier image="../movimientosRoaming.webp"/>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-pink-600 mb-4">4. Beneficios del Roaming</h2>
            <ul className="list-disc list-inside">
              <li>Generar ventaja en otras líneas al asegurar asesinatos o quemar hechizos enemigos</li>
              <li>Crear presión global, obligando a que el equipo enemigo juegue más defensivo y con miedo</li>
              <li>Controlar el ritmo de la partida al asegurar objetivos</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-pink-600 mb-4">5. Consejos Adicionales</h2>
            <ul className="list-disc list-inside">
              <li>No abandones tu línea por demasiado tiempo o caso contrario perderás demasiada experiencia y oro</li>
              <li>No fuerces roaming innecesario si tu equipo no está preparado para colaborar (esto pasa a veces, te darás cuenta según lo que suceda en la partida)</li>
              <li>Analiza siempre tu matchup enemigo respondiendote esto: Te puede seguir, puedes ganar el roam, pueden divear a tu adc, etc
              </li>
            </ul>
          </section>
        </div>
        <MarkAsCompleted
          isCompleted={isCompleted}
          combinate={combinate}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
        />
      </div>
    </>
  );
};

export default Topic6Page;
