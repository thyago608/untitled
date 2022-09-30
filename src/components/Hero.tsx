import { DribbbleLogo } from "phosphor-react";

export function Hero() {
  return (
    <section className="hidden lg:flex w-[100%] flex-col justify-between bg-orange-400 py-10 px-10">
      <DribbbleLogo color="#FFF" size={50} />
      <p className="text-zinc-50 text-3xl font-normal">
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
        cupiditate impedit placeat sint facere vel incidunt, quae quisquam fugit
        eveniet tempora perspiciatis, dolores ipsa obcaecati, hic enim ex at.
        Natus!"
      </p>
      <div className="text-zinc-50 flex flex-col gap-4">
        <h3 className="font-bold text-2xl">Moose Photos</h3>
        <div className="flex flex-col">
          <strong className="font-normal">Woman Wearing Pink</strong>
          <span>Collared Half-sleeved Top</span>
        </div>
      </div>
    </section>
  );
}
