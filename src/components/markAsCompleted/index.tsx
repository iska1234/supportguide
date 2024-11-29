import React from 'react'
import { Checkbox } from '../ui/checkbox'
import { Button } from '../ui/button'

interface MarkAsCompletedProps{
    isChecked: boolean;
    setIsChecked: (checked: boolean) => void; 
    combinate: () => void;
}

const MarkAsCompleted:React.FC<MarkAsCompletedProps> = ({isChecked, combinate, setIsChecked}) => {
  return (
    <div className="flex items-center justify-center space-x-4 mt-8">
          <Checkbox
            id="skip-intro"
            checked={isChecked}
            onCheckedChange={(checked) => setIsChecked(Boolean(checked))}
            className="data-[state=checked]:bg-pink-300 data-[state=checked]:border-none border-pink-500 text-white"
          />
          <label
            htmlFor="skip-intro"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Marcar como completada
          </label>
          <Button
            className="bg-pink-400 hover:bg-pink-500 text-white"
            disabled={!isChecked}
            onClick={combinate}
          >
            Ir a la siguiente sección
          </Button>
        </div>
  )
}

export default MarkAsCompleted