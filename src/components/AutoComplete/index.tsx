import { useEffect, useState } from "react";

import { BsSearch } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";

import { Highlighter } from "../";

interface Props {
  data: string[];
  selectedItem: string;
  setSelectedItem: (value: string) => void;
}

export const AutoComplete = ({
  data,
  selectedItem,
  setSelectedItem,
}: Props) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (selectedItem) {
      setValue(selectedItem);
    }
  }, [selectedItem]);

  return (
    <div className="inline-flex w-full flex-col justify-center relative text-gray-500">
      <div className="relative w-full">
        <input
          type="text"
          className="p-2 w-full pl-8 rounded border border-gray-200 bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
          placeholder="search..."
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setSelectedItem("");
          }}
        />

        <BsSearch className="absolute left-2.5 top-3.5" />
      </div>
      <ul className="bg-white border border-gray-100 w-full mt-2 absolute top-9 z-10">
        {!selectedItem
          ? data
              .filter(
                (item) =>
                  value && item.toLowerCase().includes(value.toLowerCase())
              )
              .map((item) => (
                <li
                  key={item}
                  onClick={() => {
                    setValue(item);
                    setSelectedItem(item);
                  }}
                  className="pl-8 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900"
                >
                  <BiRightArrowAlt
                    size={20}
                    className="absolute left-2 top-2"
                  />
                  <Highlighter val={value} text={item} />
                </li>
              ))
          : null}
      </ul>
    </div>
  );
};
