"use client";

import { CustonButtonProps } from "@/types";

import Image from "next/image";

export const CustomButton = (props: CustonButtonProps) => {
  return (
    <button
      disabled={false}
      type={props.btnType || "button"}
      className={`custom-btn ${props.containerStyles}`}
      onClick={props.handleClick}
    >
        <span className={`flex-1`}>
            {props.title}
        </span>
      </button>
  );
};
