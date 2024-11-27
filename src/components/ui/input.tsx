import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { IconName } from "@/lib/constants/icons";
import Icon from "./Icon";
import { Label } from "./label";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: IconName;
  leftIconWidth?:number;
  rightIconWidth?:number;
  leftIconClassname?: string;
  rightIcon?: IconName;
  label?: string | ReactNode;
  wrapperClassName?: string;
  onLeftIconClick?: () => void;
  onRightIconClick?: () => void;
  hint?: string;
  error?: string;
  labelClass?: string;
  isRequired?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      labelClass,
      type,
      leftIcon,
      leftIconWidth,
      rightIconWidth,
      leftIconClassname,
      rightIcon,
      label,
      wrapperClassName,
      onLeftIconClick,
      onRightIconClick,
      isRequired,
      hint,
      error,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleTogglePasswordVisibility = () => {
      setShowPassword((prevState) => !prevState);
    };

    const inputType = type === "password" && showPassword ? "text" : type;

    return (
      <div className={
        cn(
          "mt-4",
          wrapperClassName
        )
      }>
        {label && (
          <Label className={cn("font-primaryBold ", labelClass)}>
            {label} {isRequired && <span className="text-red-500">*</span>}
          </Label>
        )}
        <div className="relative">
          {leftIcon && (
            <Icon
              width={leftIconWidth}
              onClick={onLeftIconClick}
              name={leftIcon}
              className={cn("absolute left-3 top-2 ", leftIconClassname)}
            />
          )}
          <input
            type={inputType}
            className={cn(
              "font-primaryBook flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-primaryMedium placeholder:text-gray focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 focus-visible:ring-offset disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              label && "mt-1",
              className,
              error && "border-red-500"
            )}
            ref={ref}
            {...props}
          />
          {rightIcon && (
            <Icon
              width={rightIconWidth}
              onClick={type === 'password' ? handleTogglePasswordVisibility : onRightIconClick}
              name={type === 'password' ? (showPassword ? 'eye' : 'eyeOff') : rightIcon}
              className="absolute right-3 top-2 cursor-pointer"
            />
          )}
          {hint || error && (
            <div className="flex items-center mt- gap-1">
            <Icon width={20} name="alertIcon"/>
            <p
              className={
                cn(
                  "text-xs font-primaryBook text-slate-500 mt-1 ",
                  error && "text-red-500"
                )
              }
            >
              {hint || error}
            </p>
            </div>
          )}
        </div>
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
