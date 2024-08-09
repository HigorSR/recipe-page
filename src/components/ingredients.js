export default function Ingredients() {
    return (
      <div className="flex flex-col gap-5">
        <h2 className="font-head text-3xl text-Brown-800">Ingredients</h2>
        <ul className="list-disc list-inside font-text text-Stone-600 flex flex-col gap-2">
          <li>2-3 large eggs</li>
          <li>Salt, to taste</li>
          <li>Pepper, to taste</li>
          <li>1 tablespoon of butter or oil</li>
          <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
        </ul>
      </div>
    );
}