import { FormEvent } from "react";
import { Input } from "./Input";

export function Form() {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input type="text" placeholder="name" />
      <Input type="email" placeholder="email" />
      <Input type="password" placeholder="password" />
      <button type="submit">create account</button>
    </form>
  );
}
