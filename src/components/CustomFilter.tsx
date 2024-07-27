"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CustomFilterProps, OptionsProps } from "@/types";
import { Listbox, Transition } from "@headlessui/react";
import { updateSearchParams } from "@/utils";

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const [selected, setSelected] = React.useState(options[0]);

  const router = useRouter();

  const handleUpdatePrams = (e: { title: string; value: string }) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase());

    router.push(newPathName);
  };

  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
          handleUpdatePrams(e);
        }}
      >
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn mt-4">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              alt="arrow-down"
              width={20}
              height={20}
              className="object-contain ml-4"
            />
          </Listbox.Button>
          <Transition
            as={React.Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className={"custom-filter__options"}>
              {options.map((option: OptionsProps) => (
                <Listbox.Option key={option.title} value={option}>
                  {({ active }) => (
                    <div
                      className={`${
                        active ? "text-blue-800" : "text-red-500"
                      } cursor-pointer select-none relative py-2 pl-10 pr-4`}
                    >
                      <span className="block truncate">{option.title}</span>
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

/*

http://localhost:3000/?Gas=gas&2017=2017&model=q5&manufacturer=audi
 */

export default CustomFilter;
