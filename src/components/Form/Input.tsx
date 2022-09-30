import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input(props: InputProps) {
  return (
    <input
      className="h-8 border-b-2 border-b-stone-200 bg-transparent outline-2 outline-transparent placeholder:capitalize placeholder:text-gray-500 placeholder:text-sm text-base focus:px-3 focus:transition-spacing focus:outline-[#333] focus:rounded-2xl focus:border-none"
      {...props}
    />
  );
}
