import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import Icon from "@/components/ui/Icon";
import React from "react";
import { useNavigate } from "react-router-dom";

interface MenuItemProps {
  iconName: string;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ iconName, label }) => {
  const navigate = useNavigate();
  const handleSettings = () => {
    navigate("/settings");
  };
  return (
    <DropdownMenuItem onClick={handleSettings} className="justify-between">
      <div className="flex items-center gap-3">
        <img src={iconName} width={20} alt="cat" />
        {label}
      </div>
      <Icon name="chevronRight" width={8} />
    </DropdownMenuItem>
  );
};

export default MenuItem;
