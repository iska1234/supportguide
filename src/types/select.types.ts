import { ReactNode } from "react";

export interface SelectOption {
	label: string;
	value?: string;
	color?: string;
	childItem?: ReactNode;
	itemClass?: string;
}

export interface SelectOptionGroup {
	items: SelectOption[];
	title: string;
}