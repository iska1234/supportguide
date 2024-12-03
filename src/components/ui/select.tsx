import  React, { ReactNode, useState } from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"
import { Label } from "./label"

import colors from "@/lib/constants/colors"
import { SelectOption, SelectOptionGroup } from "@/types/select.types"

const Selecter = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between data-[placeholder]:text-blue-700 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-lightGray focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 dark:border-slate-800 dark:bg-slate-950 dark:placeholder:text-lightGray",
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50 ml-1" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white text-slate-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-primarySemibold", className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
      className
    )}
    {...props}
  >

    <SelectPrimitive.ItemText className="font-primaryRegular">{children}</SelectPrimitive.ItemText>
    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center ">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" color={colors.secondary}/>
      </SelectPrimitive.ItemIndicator>
    </span>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

interface Props extends SelectPrimitive.SelectProps {
	placeholder?: ReactNode;
	items?: SelectOption[];
  itemsGroup?: SelectOptionGroup[];
  className?: string;
  widthClass?: string;
  name: string;
  type?: 'simple' | 'group';
  label?: string;
  itemPersonalized?: boolean;
  itemClass?:string;
  labelClass?: string;
}

const Select: React.FC<Props> = ({items, placeholder, className, widthClass, type = 'simple', itemsGroup, name, label,onValueChange, value, defaultValue, itemPersonalized = false, itemClass, labelClass, ...props}) => {

  //@ts-expect-error
  const [_value, setValue] = useState<string>(value ?? defaultValue);

	return (
    <div className={
      cn('mt-4', widthClass)
      }>
      { label && <Label className={labelClass}>{label}</Label>
      }
      <Selecter
        onValueChange={(ev) => {
          setValue(ev);
          onValueChange?.(ev);
        }}
        value={value}
        defaultValue={defaultValue}
        {...props}
      >
        <SelectTrigger className={
          cn('font-primaryRegular', className, label && 'mt-2', !_value && '')
        }>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>

          { type === 'simple' && items?.map((item, i) => (
            <SelectItem  className={cn(
              'font-primaryRegular',
              itemClass,
            )}  value={item.value ?? item.label} key={`select-${name}-${i}`}>
              {itemPersonalized ? (
                <div className="flex gap-4">
                  <div className="">
                    {item.childItem}
                  </div>
                 {item.label}
                </div>
              ):(
                <>
                 {item.label}
                </>
              )}
            </SelectItem>
          ))}
          { type === 'group' && itemsGroup?.map((item, i) => (
            <SelectGroup key={`group-${name}-${item.title}-${i}`}>
              <SelectLabel className="w-[1000px]">{item.title}</SelectLabel>
              { item.items.map((itm, id) => (
                <SelectItem className="font-primaryRegular" value={itm.value ?? itm.label} key={`select-${name}-${i}-${id}`}>{itm.label}</SelectItem>

              ))}
            </SelectGroup>
          ))}
        </SelectContent>
      </Selecter>
    </div>
	)
}

export default Select;