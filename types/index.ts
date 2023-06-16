import { MouseEventHandler } from "react";

export interface CustomeButtonProps {
  title: string;
  type?: "button" | "submit" ;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
