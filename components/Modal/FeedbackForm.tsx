import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Star } from "../SVGComponents/property/Star";

type TProps = {
  isOpen: boolean;
  setIsOpen: Function;
};

const FeedbackForm = ({ isOpen, setIsOpen }: TProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[80] "
          onClose={() => setIsOpen(false)}
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
                <Dialog.Panel className="transition-all w-full max-w-3xl p-6 xs:p-10  mt-20  overflow-x-hidden  relative  bg-FeedbackForm_bg bg-cover">
                  <div className="bg-[#FEFEFEE8] relative p-4 md:p-6 lg:p-8 rounded-xl">
                    <button
                      className="w-10 h-10 absolute right-0 top-2 xxs:right-2 xxs:top-2 md:right-5  md:top-5 "
                      onClick={() => setIsOpen(false)}
                    >
                      <XMarkIcon className="w-6 h-6 border-2  rounded-full border-black " />
                    </button>
                    <p className="w-[90%] font-[600] sm:font-bold text-base sm:text-xl text-start ">
                      &#8220;Provide your feedback rating based on your
                      experience with us so far.&#8221;
                    </p>
                    <form className="mt-6 sm:mt-8">
                      <div className="w-[95%] sm:w-[90%] mb-4 flex justify-between items-start sm:flex-row flex-col ">
                        <p className="w-full sm:w-[70%] text-[14px] sm:text-base text-start">
                          How satisfied were you with the process and
                          documentation?
                        </p>
                        <div className="w-auto py-[0.2rem] flex gap-2">
                          <Star width="1rem" height="1rem" color="#FDB813" />
                          <Star width="1rem" height="1rem" color="#FDB813" />
                          <Star width="1rem" height="1rem" color="#FDB813" />
                          <Star width="1rem" height="1rem" color="#FDB813" />
                          <Star width="1rem" height="1rem" color="#D9D9D9" />
                        </div>
                      </div>
                      <div className="w-[95%] sm:w-[90%] mb-4 text-[14px] sm:text-base flex justify-between items-start sm:flex-row flex-col">
                        <p className="w-full sm:w-[70%] text-[14px] sm:text-base text-start">
                          How satisfied were you with response time and
                          courteousness of the sales team?
                        </p>
                        <div className="w-auto py-[0.2rem] flex gap-2">
                          <Star width="1rem" height="1rem" color="#FDB813" />
                          <Star width="1rem" height="1rem" color="#FDB813" />
                          <Star width="1rem" height="1rem" color="#FDB813" />
                          <Star width="1rem" height="1rem" color="#FDB813" />
                          <Star width="1rem" height="1rem" color="#D9D9D9" />
                        </div>
                      </div>
                      <div className="w-[95%] sm:w-[90%] mb-4 text-[14px] sm:text-base flex justify-between items-start sm:flex-row flex-col">
                        <p className="w-full sm:w-[70%] text-[14px] sm:text-base text-start">
                          Did you find your sales support member to be
                          knowledgeable on the product & services.
                        </p>
                        <div className="w-auto py-[0.2rem] flex gap-2">
                          <Star width="1rem" height="1rem" color="#FDB813" />
                          <Star width="1rem" height="1rem" color="#FDB813" />
                          <Star width="1rem" height="1rem" color="#FDB813" />
                          <Star width="1rem" height="1rem" color="#FDB813" />
                          <Star width="1rem" height="1rem" color="#D9D9D9" />
                        </div>
                      </div>
                      <div className="w-[95%] sm:w-[90%] mb-6 sm:mb-10 text-[14px] sm:text-base flex justify-between items-start sm:flex-row flex-col">
                        <p className="w-full sm:w-[70%] text-[14px] sm:text-base text-start">
                          How would you rate your overall experience in dealing
                          with us?
                        </p>
                        <div className="w-auto py-[0.2rem] flex gap-2">
                          <Star width="1rem" height="1rem" color="#FDB813" />
                          <Star width="1rem" height="1rem" color="#FDB813" />
                          <Star width="1rem" height="1rem" color="#FDB813" />
                          <Star width="1rem" height="1rem" color="#FDB813" />
                          <Star width="1rem" height="1rem" color="#D9D9D9" />
                        </div>
                      </div>

                      <input
                        type="text"
                        placeholder="Any additional comments or suggestions you have for us?"
                        className="w-[95%] sm:w-[90%] text-[14px] sm:text-base flex justify-start items-center bg-transparent text-[#00000080] border-b border-black outline-none focus:outline-none  "
                      />
                    </form>
                    <div className="w-full mt-6 sm:mt-8 flex flex-col xxs:items-center justify-start">
                      <p className="w-[95%] sm:w-full mb-3 sm:mb-2 text-[14px] sm:text-base text-[#00000080]">
                        Would you recommend Investay services to others?
                      </p>
                      <div className="flex flex-col justify-between items-start">
                        <div className="w-full mb-2 text-[13px] xxs:text-[14px] sm:text-base flex gap-[0.3rem] xxs:gap-2 justify-between items-center">
                          <p className="h-[1.5rem] w-[1.5rem] xxs:w-7 xxs:h-7 sm:h-[2rem] sm:w-[2rem] flex justify-center items-center text-black bg-[#C5C5C5]">
                            1
                          </p>
                          <p className="h-[1.5rem] w-[1.5rem] xxs:w-7 xxs:h-7 sm:h-[2rem] sm:w-[2rem] flex justify-center items-center text-black bg-[#CECECE]">
                            2
                          </p>
                          <p className="h-[1.5rem] w-[1.5rem] xxs:w-7 xxs:h-7 sm:h-[2rem] sm:w-[2rem] flex justify-center items-center text-black bg-[#E4E3E3]">
                            3
                          </p>
                          <p className="h-[1.5rem] w-[1.5rem] xxs:w-7 xxs:h-7 sm:h-[2rem] sm:w-[2rem] flex justify-center items-center text-black bg-[#BFBFBF33]">
                            4
                          </p>
                          <p className="h-[1.5rem] w-[1.5rem] xxs:w-7 xxs:h-7 sm:h-[2rem] sm:w-[2rem] flex justify-center items-center text-black bg-[#FDB8134D]">
                            5
                          </p>
                          <p className="h-[1.5rem] w-[1.5rem] xxs:w-7 xxs:h-7 sm:h-[2rem] sm:w-[2rem] flex justify-center items-center text-black bg-[#FDB81366]">
                            6
                          </p>
                          <p className="h-[1.5rem] w-[1.5rem] xxs:w-7 xxs:h-7 sm:h-[2rem] sm:w-[2rem] flex justify-center items-center text-black bg-[#FDB81380]">
                            7
                          </p>
                          <p className="h-[1.5rem] w-[1.5rem] xxs:w-7 xxs:h-7 sm:h-[2rem] sm:w-[2rem] flex justify-center items-center text-black bg-[#FDB81399]">
                            8
                          </p>
                          <p className="h-[1.5rem] w-[1.5rem] xxs:w-7 xxs:h-7 sm:h-[2rem] sm:w-[2rem] flex justify-center items-center text-black bg-[#FDB813]">
                            9
                          </p>
                          <p className="h-[1.5rem] w-[1.5rem] xxs:w-7 xxs:h-7 sm:h-[2rem] sm:w-[2rem] flex justify-center items-center text-black bg-[#FDB813]">
                            10
                          </p>
                        </div>

                        <div className="w-full text-[13px] xxs:text-[14px] sm:text-base flex justify-between items-center">
                          <p>Not at all Likely</p>
                          <p>Most Likely</p>
                        </div>
                      </div>
                    </div>

                    <button className="mt-6 text-[14px] sm:text-base bg-black text-primaryColor rounded-md py-2 px-4 font-bold">
                      SUBMIT
                    </button>
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
export default FeedbackForm;
