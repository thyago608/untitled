import { FormEvent } from "react";
import { Input } from "./Input";

export function Form() {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input type="text" placeholder="name" />
      <Input type="email" placeholder="email" />
      <Input type="password" placeholder="password" />
      <button
        type="submit"
        className="mt-5 w-[100%] h-10 bg-stone-900 text-zinc-100 text-sm rounded hover:bg-stone-700 transition-colors"
      >
        Create account
      </button>
    </form>
  );
}
