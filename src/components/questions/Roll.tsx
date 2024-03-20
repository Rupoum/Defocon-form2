import React from "react";

type Props = {};

function Roll({
  handleChange,
}: {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <input
        onChange={handleChange}
        type="number"
        name="roll"
        id="roll"
        placeholder="Type your roll no  here .."
        className="border-b w-96 focus:outline-none py-1 focus:border-b-2 peer text-white bg-black"
      />
    </div>
  );
}

export default Roll;
