import { CarProps } from "@/types";
import { Dialog, Transition, TransitionChild } from "@headlessui/react";
import React, { Fragment } from "react";

interface CardDetailsProps {
  isOpen: boolean;
  closeModel: () => void;
  car: CarProps;
}

const CardDetails = ({ isOpen, closeModel, car }: CardDetailsProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className={"relative z-10"} onClose={closeModel}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
           <div>
            
           </div>
            </div>
        </div>

      </Dialog>
    </Transition>
  );
};

export default CardDetails;
