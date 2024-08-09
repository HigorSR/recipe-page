export default function PreparationTime() {
    return (
      <div className="bg-Rose-50 font-text py-5 px-6 rounded-xl flex flex-col gap-2">
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
    );
}