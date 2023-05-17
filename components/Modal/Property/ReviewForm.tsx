import { Dialog, Transition } from "@headlessui/react";
import { Star } from "../../SVGComponents/property/Star";
import { Fragment, useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { toast } from "react-toastify";
import { addReview } from "../../../action-creators/review/addReview";
import { useDispatch } from "react-redux";
import { setReviews } from "../../../redux/reviews/reviewReducer";
type TProps = {
  isOpen: boolean;
  setIsOpen: Function;
  property: any;
};

const initialFormData = {
  name: "",
  likes: "",
  dislikes: "",
  overall: 0,
  amenitiesAndFacilities: 0,
  constructionQuality: 0,
  greenSpaces: 0,
  connectivity: 0,
  rwa: 0,
};

const ReviewForm = ({ isOpen, setIsOpen, property }: TProps) => {
  const dispatch = useDispatch();
  const options = ["Seller", "Buyer", "Channel-Partner"];
  const [stars, setStars] = useState(Array(5).fill(0));
  const [val1, setVal1] = useState(undefined);
  const [val2, setVal2] = useState(undefined);
  const [val3, setVal3] = useState(undefined);
  const [val4, setVal4] = useState(undefined);
  const [val5, setVal5] = useState(undefined);
  const [val6, setVal6] = useState(undefined);

  const [role, setRole] = useState("seller");

  const [formData, setFormData] = useState(initialFormData);

  const onStarHover1 = (value: any) => {
    setVal1(value);
  };

  const onStarBlur1 = () => {
    setVal1(undefined);
  };

  const onStarHover2 = (value: any) => {
    setVal2(value);
  };

  const onStarBlur2 = () => {
    setVal2(undefined);
  };

  const onStarHover3 = (value: any) => {
    setVal3(value);
  };

  const onStarBlur3 = () => {
    setVal3(undefined);
  };

  const onStarHover4 = (value: any) => {
    setVal4(value);
  };

  const onStarBlur4 = () => {
    setVal4(undefined);
  };

  const onStarHover5 = (value: any) => {
    setVal5(value);
  };

  const onStarBlur5 = () => {
    setVal5(undefined);
  };

  const onStarHover6 = (value: any) => {
    setVal6(value);
  };

  const onStarBlur6 = () => {
    setVal6(undefined);
  };

  const onRateClick = (e: any, name: any, value: any) => {
    e.preventDefault();
    setFormData({ ...formData, [name]: value });
  };

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    // console.log("data: ", formData);
    const {
      name,
      likes,
      dislikes,
      overall,
      amenitiesAndFacilities,
      constructionQuality,
      greenSpaces,
      connectivity,
      rwa,
    } = formData;
    if (name.replace(/\s/, "").trim() === "") {
      toast.error("Name cannot be empty!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (likes.replace(/\s/, "").trim() === "") {
      toast.error("'What do you like about this property?' cannot be empty!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (dislikes.replace(/\s/, "").trim() === "") {
      toast.error(
        "'What do you dislike about this property?' cannot be empty!",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    } else if (!overall || overall < 1 || overall > 5) {
      toast.error("'Overall' rating must be between 1 to 5!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (
      !amenitiesAndFacilities ||
      amenitiesAndFacilities < 1 ||
      amenitiesAndFacilities > 5
    ) {
      toast.error("'Amenities & Facilities' rating must be between 1 to 5!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (
      !constructionQuality ||
      constructionQuality < 1 ||
      constructionQuality > 5
    ) {
      toast.error("'Construction Quality' rating must be between 1 to 5!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (!greenSpaces || greenSpaces < 1 || greenSpaces > 5) {
      toast.error("'Green Spaces' rating must be between 1 to 5!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (!connectivity || connectivity < 1 || connectivity > 5) {
      toast.error("'Connectivity and Commute' rating must be between 1 to 5!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (!rwa || rwa < 1 || rwa > 5) {
      toast.error(
        "'RWA & Society & Management' rating must be between 1 to 5!",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    } else {
      try {
        const response = await addReview({ ...formData, role, id: property?._id });
        if (response.success) {
          dispatch(setReviews(response.reviews));
          setFormData(initialFormData);
          setIsOpen(false);
        }
      } catch (error: any) {
        console.log("reviewForm error: ", error.response.data.error);
      }
    }
  };

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
                <Dialog.Panel className="transition-all bg-Review_bg px-4 py-6 sm:p-8   relative mt-20  w-full max-w-3xl">
                  <button
                    className="w-10 h-10 absolute right-6 top-8 xxs:right-10 xs:top-10 z-[51]"
                    onClick={() => setIsOpen(false)}
                  >
                    <XMarkIcon className="w-6 h-6 border-2  rounded-full border-black " />
                  </button>
                  <div className="bg-[#FEFEFEE8] py-6 px-4 xs:p-6 rounded-2xl shadow-formShadow">
                    <p className="font-bold mt-4 xxs:mt-0 text-lg xs:text-xl sm:text-2xl text-center ">
                      WRITE YOUR REVIEW
                    </p>
                    <form className="mt-8 space-y-8 ">
                      <div className="w-full sm:w-[95%] flex flex-col xs:flex-row justify-start items-start xs:items-center">
                        <label
                          htmlFor="role"
                          className="w-auto sm:min-w-[220px] text-start text-[#70707099]"
                        >
                          You are best described as
                        </label>
                        <div>
                          <Dropdown
                            options={options}
                            value={role}
                            onChange={(e) => setRole(e.value.toLowerCase())}
                            placeholder="Seller"
                            className="w-full xs:w-[200px] ml-0 xs:ml-4 text-sm text-[#00000080] shadow-formInputShadow"
                          />
                        </div>
                      </div>

                      <div className="w-full sm:w-[95%] flex flex-col sm:flex-row justify-start items-start sm:items-center">
                        <label
                          htmlFor="name"
                          className="w-auto sm:min-w-[220px] text-start text-[#70707099]"
                        >
                          Name :
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                          }}
                          className="outline-none focous:outline-none ml-0 sm:ml-4 py-[0.2rem] px-2 w-full bg-white shadow-formInputShadow"
                        />
                      </div>

                      <div className="w-full sm:w-[95%] flex flex-col sm:flex-row justify-start items-start sm:items-center">
                        <label
                          htmlFor="likes"
                          className="w-auto sm:min-w-[220px] text-start text-[#70707099]"
                        >
                          What do you like about this property?
                        </label>
                        <input
                          type="text"
                          name="likes"
                          id="likes"
                          className="outline-none focous:outline-none ml-0 sm:ml-4 py-[0.2rem] px-2 w-full bg-white shadow-formInputShadow"
                          onChange={(e) => {
                            setFormData({ ...formData, likes: e.target.value });
                          }}
                        />
                      </div>

                      <div className="w-full sm:w-[95%] flex flex-col sm:flex-row justify-start items-start sm:items-center">
                        <label
                          htmlFor="dislikes"
                          className="w-auto sm:min-w-[220px] text-start text-[#70707099]"
                        >
                          What did you dislike about this property?
                        </label>
                        <input
                          type="text"
                          name="dislikes"
                          id="dislikes"
                          className="outline-none focous:outline-none ml-0 sm:ml-4 py-[0.2rem] px-2 w-full bg-white shadow-formInputShadow"
                          onChange={(e) => {
                            setFormData({
                              ...formData,
                              dislikes: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </form>

                    <div className="grid md:grid-cols-12 grid-cols-6 mt-8 md:gap-5 text-start">
                      <div className="col-span-6 space-y-2">
                        <div className="flex items-center  justify-between">
                          <p className="text-sm xs:text-base">Overall</p>
                          <div className="flex gap-2">
                            {stars.map((_, index) => {
                              return (
                                <Star
                                  val={val1}
                                  key={index}
                                  index={index}
                                  width="1rem"
                                  height="1rem"
                                  onStarClick={(e: any) =>
                                    onRateClick(e, "overall", index + 1)
                                  }
                                  onStarHover={() => onStarHover1(index + 1)}
                                  onStarBlur={onStarBlur1}
                                  ratings={formData.overall}
                                />
                              );
                            })}
                          </div>
                        </div>
                        <div className="flex items-center justify-between ">
                          <p className="text-sm xs:text-base">
                            Construction Quality
                          </p>
                          <div className="flex gap-2">
                            {stars.map((_, index) => {
                              return (
                                <Star
                                  val={val2}
                                  key={index}
                                  index={index}
                                  width="1rem"
                                  height="1rem"
                                  onStarClick={(e: any) =>
                                    onRateClick(
                                      e,
                                      "constructionQuality",
                                      index + 1
                                    )
                                  }
                                  onStarHover={() => onStarHover2(index + 1)}
                                  onStarBlur={onStarBlur2}
                                  ratings={formData.constructionQuality}
                                />
                              );
                            })}
                          </div>
                        </div>
                        <div className="flex items-center justify-between ">
                          <p className="text-sm xs:text-base">
                            Connectivity and Commute
                          </p>
                          <div className="flex gap-2">
                            {stars.map((_, index) => {
                              return (
                                <Star
                                  val={val3}
                                  key={index}
                                  index={index}
                                  width="1rem"
                                  height="1rem"
                                  onStarClick={(e: any) =>
                                    onRateClick(e, "connectivity", index + 1)
                                  }
                                  onStarHover={() => onStarHover3(index + 1)}
                                  onStarBlur={onStarBlur3}
                                  ratings={formData.connectivity}
                                />
                              );
                            })}
                          </div>
                        </div>
                      </div>
                      <div className="col-span-6 space-y-2">
                        <div className="flex items-center  justify-between">
                          <p className="text-sm xs:text-base">
                            Amenties & Facilities
                          </p>
                          <div className="flex gap-2">
                            {stars.map((_, index) => {
                              return (
                                <Star
                                  val={val4}
                                  key={index}
                                  index={index}
                                  width="1rem"
                                  height="1rem"
                                  onStarClick={(e: any) =>
                                    onRateClick(
                                      e,
                                      "amenitiesAndFacilities",
                                      index + 1
                                    )
                                  }
                                  onStarHover={() => onStarHover4(index + 1)}
                                  onStarBlur={onStarBlur4}
                                  ratings={formData.amenitiesAndFacilities}
                                />
                              );
                            })}
                          </div>
                        </div>
                        <div className="flex items-center justify-between ">
                          <p className="text-sm xs:text-base">
                            Green Spaces & Parks
                          </p>
                          <div className="flex gap-2">
                            {stars.map((_, index) => {
                              return (
                                <Star
                                  val={val5}
                                  key={index}
                                  index={index}
                                  width="1rem"
                                  height="1rem"
                                  onStarClick={(e: any) =>
                                    onRateClick(e, "greenSpaces", index + 1)
                                  }
                                  onStarHover={() => onStarHover5(index + 1)}
                                  onStarBlur={onStarBlur5}
                                  ratings={formData.greenSpaces}
                                />
                              );
                            })}
                          </div>
                        </div>
                        <div className="flex items-center justify-between ">
                          <p className="text-sm xs:text-base">
                            RWA & Society & Management
                          </p>
                          <div className="flex gap-2">
                            {stars.map((_, index) => {
                              return (
                                <Star
                                  val={val6}
                                  key={index}
                                  index={index}
                                  width="1rem"
                                  height="1rem"
                                  onStarClick={(e: any) =>
                                    onRateClick(e, "rwa", index + 1)
                                  }
                                  onStarHover={() => onStarHover6(index + 1)}
                                  onStarBlur={onStarBlur6}
                                  ratings={formData.rwa}
                                />
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={onSubmitHandler}
                      className="mt-10 bg-black text-primaryColor rounded-md py-2 px-4  font-bold"
                    >
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
export default ReviewForm;
