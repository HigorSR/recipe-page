export default function Header() {
    return (
      <div className="flex flex-col gap-4">
        <h1 className="font-head text-4xl text-Stone-900">
          Simple Omelette Recipe
        </h1>
        <p className="font-text text-Stone-600">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
      </div>
    );
}