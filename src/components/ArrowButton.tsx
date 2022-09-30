import { ButtonHTMLAttributes, ReactElement } from "react";

type ArrowButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactElement;
};

export function ArrowButton({ children, ...rest }: ArrowButtonProps) {
  return (
    <button
      type="button"
      className={`w-9 h-9 border-y border-x rounded-full flex items-center justify-center text-zinc-50 
      ${
        rest.disabled
          ? "opacity-30 cursor-default"
          : "hover:bg-white hover:text-black"
      }`}
      {...rest}
    >
      {children}
    </button>
  );
}
