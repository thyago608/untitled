import { Coffee } from "phosphor-react";
import { Form } from "./Form";

export function CreateAnAccount() {
  return (
    <aside className="h-[100vh] px-2 py-6 bg-slate-50">
      <Coffee size={32} color="#333" />
      <div className="flex flex-col mt-2 mb-6">
        <h2 className="text-2xl font-bold text-[#333]">Create an account</h2>
        <span className="text-sm text-zinc-500">
          Let's get started with your 30 days free trial.
        </span>
      </div>
      <Form />
    </aside>
  );
}
