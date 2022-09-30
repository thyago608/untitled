import { ButtonHTMLAttributes } from "react";
import googleIcon from "../assets/icon-google.svg";

type SignUpButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function SignUpButton(props: SignUpButtonProps) {
  const classes = `w-[100%] h-10 rounded-md text-gray-700 text-[15px] border-x-[1px] border-y-[1px] flex gap-1 justify-center items-center transition-borderColor hover:border-slate-500 ${
    props.className ?? ""
  }`;

  return (
    <button type="button" className={classes}>
      <img src={googleIcon} alt="google icon" className="w-8 h-8" />
      Sign up with Google
    </button>
  );
}
