import Image from "next/image";
import imageOmelette from "../../public/image-omelette.jpeg";
import Header from "@/components/header";
import PreparationTime from "@/components/preparation-time";
import Ingredients from "@/components/ingredients";
import Instructions from "@/components/instruction";
import Nutrition from "@/components/nutrition";

export default function Home() {
  return (
    <main className="flex flex-col gap-3 lg:bg-Stone-100 lg:items-center lg:py-10">
      <div className="bg-white lg:w-[736px] lg:p-10 lg:rounded-3xl lg:flex lg:flex-col lg:gap-8">
        <div className="lg:rounded-xl lg:overflow-hidden">
          <Image src={imageOmelette} />
        </div>

        <div className="flex flex-col gap-8 p-8 lg:p-0">
          <Header />

          <PreparationTime />
          
          <Ingredients />

          <hr />
          
          <Instructions />

          <hr/>

          <Nutrition />
          
        </div>
      </div>

      <div className="flex flex-col items-center mb-4 font-semibold">
        <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor.</a></p>
        <p>Coded by <a href="https://github.com/HigorSR" target="_blank">Higor Rocha.</a></p>
      </div>
    </main>
  );
}
