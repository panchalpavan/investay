import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Star } from "../SVGComponents/property/Star";

type TProps = {
  isOpen: boolean;
  setIsOpen: Function;
  open?: boolean;
  setOpen?: Function;
};

const ThankYou = ({ isOpen, setIsOpen, open, setOpen }: TProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[90]"
          onClose={() => {
            setIsOpen(false);
            if(open) {
              setOpen && setOpen(false);
            }
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
            <div className="fixed inset" />
          </Transition.Child>
          <div className="fixed inset-0 bg-black bg-opacity-25 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="transition-all w-full max-w-xl  xs:p-10  mt-20  overflow-x-hidden  relative ">
                  <div className="bg-white relative   rounded-xl">
                    <button
                      className="w-10 h-10 absolute right-0 top-2 xxs:right-2 xxs:top-2 md:right-5  md:top-5 "
                      onClick={() => {
                        setIsOpen(false);
                        if(open) {
                          setOpen && setOpen(false);
                        }
                      }}
                    >
                      <XMarkIcon className="w-6 h-6   rounded-full" />
                    </button>
                    <div className="flex flex-col items-end">
                      <div className="bg-star_bg bg-cover w-1/2 h-[8rem]   "></div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="mb-4">
                        <img
                          src="/assets/images/ThankYou.png"
                          alt="thank you"
                        />
                      </div>
                      <p className="text-xl">Thank you.</p>
                      <p className="text-xs">Submitted successfully</p>
                    </div>
                    <div className="flex flex-col items-start">
                      <div className="bg-star_bg bg-cover bg-right  w-full h-[8rem]   "></div>
                    </div>
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
export default ThankYou;
