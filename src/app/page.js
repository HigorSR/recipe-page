import Image from "next/image";
import imageOmelette from "../../public/image-omelette.jpeg";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-full bg-Stone-100 py-10">
      <div className="bg-white w-[736px] p-10 rounded-2xl flex flex-col gap-7">
        <div className="rounded-xl overflow-hidden">
          <Image src={imageOmelette} />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="font-head text-4xl text-Stone-900">
            Simple Omelette Recipe
          </h1>
          <p className="font-text text-Stone-600">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </div>

        <div className="bg-Rose-50 font-text py-5 px-8 rounded-xl flex flex-col gap-2">
          <h2 className="text-Rose-800 font-bold text-lg">Preparation time</h2>
          <ul className="list-disc list-inside text-Stone-600 flex flex-col gap-1">
            <li>
              <span className="font-semibold">Total</span>: Approximately 10
              minutes
            </li>
            <li>
              <span className="font-semibold">Preparation</span>: 5 minutes
            </li>
            <li>
              <span className="font-semibold">Cooking</span>: 5 minutes
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="font-head text-3xl text-Brown-800">Ingredients</h2>
          <ul className="list-disc list-inside font-text text-Stone-600 flex flex-col gap-2">
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </div>

        <hr></hr>

        <div className="flex flex-col gap-5">
          <h2 className="font-head text-3xl text-Brown-800">Instructions</h2>

          <div className="font-text text-Stone-600 flex flex-col gap-3">
            <div className="flex gap-6 ml-1">
              <p className="font-bold text-Brown-800">1.</p>
              <p>
                <span className="font-bold">Beat the eggs</span>: In a bowl,
                beat the eggs with a pinch of salt and pepper until they are
                well mixed. You can add a tablespoon of water or milk for a
                fluffier texture.
              </p>
            </div>
            <div className="flex gap-6 ml-1">
              <p className="font-bold text-Brown-800">2.</p>
              <p>
                <span className="font-bold">Heat the pan</span>: Place a
                non-stick frying pan over medium heat and add butter or oil.
              </p>
            </div>
            <div className="flex gap-6 ml-1">
              <p className="font-bold text-Brown-800">3.</p>
              <p>
                <span className="font-bold">Cook the omelette</span>: Once the
                butter is melted and bubbling, pour in the eggs. Tilt the pan to
                ensure the eggs evenly coat the surface.
              </p>
            </div>
            <div className="flex gap-6 ml-1">
              <p className="font-bold text-Brown-800">4.</p>
              <p>
                <span className="font-bold">Add fillings (optional)</span>: When
                the eggs begin to set at the edges but are still slightly runny
                in the middle, sprinkle your chosen fillings over one half of
                the omelette.
              </p>
            </div>
            <div className="flex gap-6 ml-1">
              <p className="font-bold text-Brown-800">5.</p>
              <p>
                <span className="font-bold">Fold and serve</span>: As the
                omelette continues to cook, carefully lift one edge and fold it
                over the fillings. Let it cook for another minute, then slide it
                onto a plate.
              </p>
            </div>
            <div className="flex gap-6 ml-1">
              <p className="font-bold text-Brown-800">6.</p>
              <p>
                <span className="font-bold">Enjoy</span>: Serve hot, with
                additional salt and pepper if needed.
              </p>
            </div>
          </div>
        </div>

        <hr></hr>

        <div className="flex flex-col gap-5">
          <h2 className="font-head text-3xl text-Brown-800">Nutrition</h2>
          <p className="font-text text-Stone-600">
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <div className="font-text text-Stone-600 flex flex-col gap-3">
            <div className="flex border-b-2 pb-3">
              <p className="w-1/2 pl-6">Calories</p>
              <p className="text-Brown-800 font-bold">277kcal</p>
            </div>
            <div className="flex border-b-2 pb-3">
              <p className="w-1/2 pl-6">Carbs</p>
              <p className="text-Brown-800 font-bold">0g</p>
            </div>
            <div className="flex border-b-2 pb-3">
              <p className="w-1/2 pl-6">Protein</p>
              <p className="text-Brown-800 font-bold">20g</p>
            </div>
            <div className="flex pb-2">
              <p className="w-1/2 pl-6">Fat</p>
              <p className="text-Brown-800 font-bold">22g</p>
            </div>
          </div>
        </div>
      </div>

      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/HigorSR" target="_blank">Higor Rocha</a>.
      </div>
    </main>
  );
}
