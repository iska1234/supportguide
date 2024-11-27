import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import Icon from '@/components/ui/Icon';
import { IconName } from '@/lib/constants/icons';
import React from 'react'

interface MenuItemProps {
    iconName: IconName;
    label: string;

  }
  
  const MenuItem: React.FC<MenuItemProps> = ({ iconName, label }) => {
  return (
    <DropdownMenuItem className="justify-between">
    <div className="flex items-center gap-3">
      <Icon name={iconName} width={20} />
      {label}
    </div>
    <Icon name="chevronRight" width={8} />
  </DropdownMenuItem>
  )
}

export default MenuItem