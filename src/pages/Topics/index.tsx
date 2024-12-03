import ImageCarousel from '@/components/imageCarousel';
import Lottie from '@/components/Lottie';
import TransitionEffect from '@/components/transitionEffect/TransitionEffect';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/Icon';
import { useAppSelector } from '@/redux/storeHooks';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CatAmim from "../../assets/animation/cat.json";
import CatAmim2 from "../../assets/animation/cat2.json";

const TopicsPage: React.FC = () => {
  
  const { topics } = useAppSelector(store => store.topic);
  const navigate = useNavigate();

  const allTopics = topics ?? [];

  const handleNavigate = (topicId: number) => {
    navigate(`/topic/${topicId}`);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <TransitionEffect />
      <div className="mt-10 pb-16 bg-gradient-to-b from-pink-50 to-pink-100 px-12 lg:px-24 text-gray-800 ">
        <h1 className="mt-24 text-4xl font-bold text-center text-pink-700 mb-12">
          Guía para el Rol de Soporte
        </h1>
        <div className="flex justify-between">
          <div className="w-full max-w-2xl">
            <ol className="list-decimal space-y-6 text-lg lg:text-xl">
              {allTopics.map((topic, index) => (
                <li key={topic.id} className="flex items-center justify-between w-4/5">
                  <div>
                    <span className="font-semibold">{topic.title}</span>
                    <p className="text-sm text-gray-600 mt-2">{topic.description}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Checkbox
                      checked={topic.iscompleted}
                      disabled
                      className={`data-[disabled]:cursor-auto data-[state=checked]:border-none border-pink-500 text-white ${
                        topic.iscompleted ? 'data-[state=checked]:bg-pink-400 data-[disabled]:opacity-100' : 'data-[state=checked]:bg-gray-300'
                      }`}
                    />
                    <Icon
                      onClick={() => handleNavigate(index + 1)}
                      name="chevronpink"
                      width={25}
                    />
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="w-full flex flex-col justify-between">
            <ImageCarousel />
            <div className="flex items-center">
              <Lottie animationData={CatAmim2} width={"200px"} height={"200px"} />
              <Lottie animationData={CatAmim} width={"300px"} height={"300px"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopicsPage;
