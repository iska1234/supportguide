import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Icon from "@/components/ui/Icon";

import { onLogOut } from "@/services/auth";
import { useNavigate } from "react-router-dom";
import { resetAllStates } from "@/redux/store";
import { useAppDispatch, useAppSelector } from "@/redux/storeHooks";
import { IconName } from "@/lib/constants/icons";
import UserAvatar from "./userAvatar";
import MenuItem from "./menuItem";


const menuItems = [
  { iconName: "cat.png", label: "Ajustes" },
];

const UserDropdown: React.FC = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {user}  = useAppSelector(store => store.user);

  const handleLogOut = () => {
    onLogOut();
    navigate('/login');
    dispatch(resetAllStates());
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-[#E5ECF680] flex p-2 rounded-md items-center gap-2">
      <UserAvatar statusClassName="-bottom-[3px] -right-[3px]" width="w-6 h-6 text-sm " user={user!}/>
        <Icon name="chevronDownBlue" width={12} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-5  mt-3  w-[360px] p-4 drop-shadow-xl shadow-xl font-primaryRegular justify-between flex flex-col">
        <div>
          <DropdownMenuItem className="gap-2 ">
            <UserAvatar nameClass="mt-1" width="w-10 h-10 text-md" user={user!}/>
            <div className="flex flex-col gap-1">
              {user?.name}
              <span className="text-[#9F9FA5]">En linea</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="my-4" />
          <div className="flex flex-col gap-4">
            {menuItems.map((item, index) => (
              <MenuItem
                key={index}
                iconName={item.iconName}
                label={item.label}
              />
            ))}
          </div>
        </div>
        <div>
          <DropdownMenuSeparator className="my-2" />
          <DropdownMenuItem onClick={handleLogOut}>
            <div className="flex items-center gap-2">
              <Icon name={"logOutBlue"} width={20} />
              <span className="mt-1">
              Cerrar Sesión
              </span>
            </div>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
