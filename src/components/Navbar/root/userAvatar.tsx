import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { User } from "@/types/User.types";
import React from "react";


interface UserAvatarProps {
  user: User;
  width?: string;
  statusClassName?: string;
  lastname?: boolean;
  nameClass?: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ width, user, statusClassName, lastname, nameClass }) => {
  
  return (
    <div className="relative inline-block">
      {user?.proffilePic ? (
        <Avatar className={cn("rounded-full", width)}>
          <AvatarImage src={user?.proffilePic} alt="Profile Picture" />
          <AvatarFallback className={cn("bg-primary text-white rounded-full", width)} />
        </Avatar>
      ) : (
        <Avatar className={cn("rounded-full", width)}>
          <AvatarFallback className={cn("bg-primary text-white rounded-full ", width)}>
            <span className={nameClass}>
            {user?.name?.charAt(0).toUpperCase()}
            </span>
            {lastname &&  user?.lastname?.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      )}
      <span
        className={cn(
          "absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full",
          statusClassName
        )}
      />
    </div>
  );
};

export default UserAvatar;
