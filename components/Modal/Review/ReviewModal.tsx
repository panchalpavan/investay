import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { countryCodes } from "../../../utilities/countryCodes";
import { toast } from "react-toastify";
import { downLoadFile } from "../../../action-creators/downloads";

type TProps = {
  isOpen: boolean;
  setIsOpen: Function;
  review:any;
  setReview:Function;
};

const Review = ({ isOpen, setIsOpen, review, setReview }: TProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[80] "
          onClose={() => {
            setIsOpen(false);
            setReview(undefined);
        }}
        >
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
            <div className="flex min-h-full items-center justify-center text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="transition-all w-full max-w-4xl xxs:max-w-3xl mt-20 mb-10 overflow-x-hidden  relative  p-8">
                  <button
                    className="w-10 h-10 absolute right-8 top-8 xxs:right-10 xxs:top-10 z-[51]"
                    onClick={() => setIsOpen(false)}
                  >
                    <XMarkIcon className="w-6 h-6 rounded-full border-2 border-black" />
                  </button>
                  <div className="bg-white rounded-lg  px-6 py-8 xxs:p-10">
                    {review?.likes}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default Review;
