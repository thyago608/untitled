import { DribbbleLogo } from "phosphor-react";
import { Form } from "./Form";
import { SignUpButton } from "./SignUpButton";

export function CreateAnAccount() {
  return (
    <aside className="flex flex-col gap-4 px-2 py-6 md:px-8 bg-slate-50">
      <DribbbleLogo
        size={40}
        color="#353b49"
        className="lg:opacity-0 transition-opacity"
      />
      <div className="flex flex-col lg:mt-6 mb-6">
        <h2 className="text-2xl font-bold text-[#353b49]">Create an account</h2>
        <span className="text-sm text-zinc-500">
          Let's get started with your 30 days free trial.
        </span>
      </div>
      <Form />
      <SignUpButton />
      <span className="block mt-12 text-sm text-zinc-500 text-center">
        Already have an account ?
        <a href="#" className="underline text-[#101727] mx-1">
          Log in
        </a>
      </span>
    </aside>
  );
}
