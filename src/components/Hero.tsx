import { useEffect, useState } from "react";
import { DribbbleLogo, ArrowLeft, ArrowRight } from "phosphor-react";
import { pexelsClient } from "../services/pexels";
import { Photo } from "pexels";
import { ArrowButton } from "./ArrowButton";

const page = Math.floor(Math.random() * 20 + 1);

export function Hero() {
  const [images, setImages] = useState<Photo[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleFetchImages = async () => {
      return await pexelsClient.photos
        .search({ page, per_page: 3, query: "woman" })
        .then((data) => {
          if ("photos" in data) {
            setImages(data.photos);
          }
        });
    };

    handleFetchImages();
  }, []);

  const backgroundImage = images.length > 0 ? images[index].src.large2x : "";

  return (
    <section
      className="hidden lg:flex w-[100%] flex-col justify-between bg-slate-400 bg-cover bg-bottom py-10 px-10 transition-transitionBackground duration-[0.8s]"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <DribbbleLogo color="#FFF" size={50} />
      <p className="text-zinc-50 text-3xl font-medium">
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
        cupiditate impedit placeat sint facere vel incidunt, quae quisquam fugit
        eveniet tempora perspiciatis, dolores ipsa obcaecati, hic enim ex at.
        Natus!"
      </p>
      <div className="flex justify-between items-end pr-4">
        <div className="text-zinc-50 flex flex-col gap-4">
          <h3 className="font-bold text-2xl">{images[index]?.photographer}</h3>
          <div className="flex flex-col">
            <span className="font-normal w-52">{images[index]?.alt}</span>
          </div>
        </div>

        <div className="flex gap-8">
          <ArrowButton
            disabled={index === 0}
            onClick={() => setIndex(index - 1)}
          >
            <ArrowLeft size={25} />
          </ArrowButton>
          <ArrowButton
            disabled={index === images.length - 1}
            onClick={() => setIndex(index + 1)}
          >
            <ArrowRight size={25} />
          </ArrowButton>
        </div>
      </div>
    </section>
  );
}
