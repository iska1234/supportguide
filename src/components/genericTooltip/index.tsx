import React, { ReactNode, useEffect, useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { TooltipSide } from "@/types/TooltipSide.types";

interface TooltipPrivderProps{
    triggerClass: string;
    contentClass: string;
    triggerContent: ReactNode; 
    content: ReactNode;
    delayDuration?: number;
    side?: TooltipSide;
    asChild?: boolean; 
    isVisible?: boolean;
}

const TooltipComponent:React.FC<TooltipPrivderProps> = ({delayDuration = 100, side = 'top' ,content,contentClass,triggerClass,triggerContent, asChild = false,   isVisible = false,}) => {

  const [visible, setVisible] = useState(isVisible);

  useEffect(() => {
    setVisible(isVisible);
  }, [isVisible]);

  const toggleTooltip = () => setVisible((prev) => !prev);

  return (
    <TooltipProvider delayDuration={delayDuration}>
       <Tooltip open={visible} onOpenChange={setVisible}>
        <TooltipTrigger onClick={toggleTooltip} className={triggerClass} asChild={asChild}>
          {triggerContent}
        </TooltipTrigger>
        {visible && (
          <TooltipContent side={side} className={contentClass}>
            {content}
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipComponent;
