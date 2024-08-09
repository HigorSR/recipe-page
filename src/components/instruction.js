export default function Instructions() {
  const instructions = [
    {
      id: "1.",
      title: "Beat the eggs",
      text: ": In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
    },
    {
      id: "2.",
      title: "Heat the pan",
      text: ": Place a non-stick frying pan over medium heat and add butter or oil.",
    },
    {
      id: "3.",
      title: "Cook the omelette",
      text: ": Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
    },
    {
      id: "4.",
      title: "Add fillings (optional)",
      text: ": When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
    },
    {
      id: "5.",
      title: "Fold and serve",
      text: ": As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
    },
    {
      id: "6.",
      title: "Enjoy",
      text: ": Serve hot, with additional salt and pepper if needed.",
    },
  ];

  const listItens = instructions.map((instructions) => (
    <div className="flex gap-6 ml-1">
      <p className="font-bold text-Brown-800">{instructions.id}</p>
      <p>
        <span className="font-bold">{instructions.title}</span>{instructions.text}
      </p>
    </div>
  ));

  return (
    <div className="flex flex-col gap-5">
      <h2 className="font-head text-3xl text-Brown-800">Instructions</h2>
      <div className="font-text text-Stone-600 flex flex-col gap-3">
        {listItens}
      </div>
    </div>
  );
}
