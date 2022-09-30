import googleIcon from "../assets/icon-google.svg";

export function SignUpButton() {
  return (
    <button
      type="button"
      className="mt-4 w-[100%] h-10 rounded text-gray-700 text-[15px] border-x-[1px] border-y-[1px] flex gap-1 justify-center items-center transition-borderColor hover:border-slate-500"
    >
      <img src={googleIcon} alt="google icon" className="w-8 h-8" />
      Sign up with Google
    </button>
  );
}
