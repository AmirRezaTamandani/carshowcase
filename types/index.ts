import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  type?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
}
export interface searchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
export interface updateSearchParamsProps {
  manufacturer?: string;
  model?: string;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
export interface filterProps {
  manufacturer: string;
  year: number;
  limit: number;
  model: string;
  fuel: string;
}
export interface HomeProps {
  searchParams: filterProps;
}
export interface OptionProps {
  title: string;
  value: string;
}
export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}
export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}
