import React from "react";

type Props = {};

function TryHackId({
  handleChange,
}: {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <input
        onChange={handleChange}
        type="url"
        name="id"
        id="id"
        placeholder="Type your roll no  here .."
        className="border-b w-96 focus:outline-none py-1 focus:border-b-2 peer text-white bg-black"
      />
    </div>
  );
}

export default TryHackId;
