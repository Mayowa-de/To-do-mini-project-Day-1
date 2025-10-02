import { useEffect, useState } from "react";

export default function Counter() {
  // initialize the state value and getting the state
  const [value, setValue] = useState<number>(() => {
    const saved = localStorage.getItem("value");
    return saved ? Number(saved) : 0;
  });
  // declare default value to reset the state of the value
  const resetValue: number = 0;
  // save value to localStorage
  useEffect(() => {
    localStorage.setItem("value", value.toString());
  }, [value]);
  return (
    <div className="flex flex-col justify-center items-center gap-15 ">
      <h1 className="text-3xl font-bold ">Counter </h1>
      <h2 className="text-2xl font-bold ">{value}</h2>
      <div className="flex gap-10">
        <button
          name="Increment button"
          onClick={() => {
            setValue((prev) => prev + 1);
          }}
          className="hover:border-2 bg-teal-300 transition-colors hover:bg-white rounded-xl p-3  cursor-pointer"
        >
          Increment
        </button>
        <button
          name="Decrement button"
          onClick={() => {
            setValue((prev) => prev - 1);
          }}
          className="hover:border-2 bg-teal-300 cursor-pointer rounded-xl p-3 transition-colors hover:bg-white"
        >
          Decrement
        </button>
        <button
          name="Reset button"
          onClick={() => {
            setValue(resetValue);
          }}
          className="hover:border-2 bg-teal-300 rounded-xl p-3 transition-colors hover:bg-white cursor-pointer"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
