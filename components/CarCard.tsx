import React from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import { useState } from "react";

interface CarCardProps {
  car: CarProps;
}
const CarCard = ({ car }: CarCardProps) => {
  return <div>CarCard</div>;
};

export default CarCard;
