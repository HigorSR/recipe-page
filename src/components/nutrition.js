export default function Nutrition() {
    return (
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
          <div className="flex pb-2 lg:pb-0">
            <p className="w-1/2 pl-6">Fat</p>
            <p className="text-Brown-800 font-bold">22g</p>
          </div>
        </div>
      </div>
    );
}