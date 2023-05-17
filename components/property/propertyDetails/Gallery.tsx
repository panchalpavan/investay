import React, { useState } from "react";
import GalleryModal from "../../Modal/Property/GalleryModal";
import { GrAdd } from "react-icons/gr";

const Gallery = ({ gallery }: any) => {
  const [open, setOpen] = useState(false);

  // console.log("----------------gallery: ", gallery);

  return (
    <>
      <GalleryModal
        isOpen={open}
        setIsOpen={setOpen}
        gallery={gallery ? gallery : []}
      />

      <div className="3xl:h-[65rem] lg:h-[40rem]   xs:h-[25rem] h-[15rem] grid xl:grid-cols-12 grid-cols-6 gap-2 xl:gap-x-2">
        <div className="col-span-6 h-full overflow-hidden">
          {gallery.length > 0 ? (
            <img
              src={`/uploads/${gallery[0]?.filename}`}
              className="w-full h-full"
              alt="gallery-image"
            />
          ) : (
            <div className="w-full h-full flex justify-center items-center bg-[#dcdcdc]">
              <img
                src="/assets/images/noImg1.svg"
                className="w-[9rem] h-[9rem] xs:w-[13rem] xs:h-[13rem] md:w-[16rem] md:h-[16rem] lg1:w-[20rem] lg1:h-[20rem] "
                alt="gallery-image"
              />
            </div>
          )}
        </div>
        <div className="col-span-6 h-full overflow-hidden flex xl:flex-col flex-row gap-2 justify-center items-center">
          {gallery.length > 0 ? (
            <>
              {gallery.length > 1 ? (
                <img
                  src={`/uploads/${gallery[1]?.filename}`}
                  className="xl:h-1/2 h-full w-full"
                  alt="gallery-image"
                />
              ) : (
                <div className="w-full xl:h-1/2 h-full flex justify-center items-center bg-[#dcdcdc]">
                  <img
                    src="/assets/images/noImg1.svg"
                    className="h-full w-[30%] "
                    alt="gallery-image"
                  />
                </div>
              )}
              {gallery.length > 2 ? (
                <div
                  className="xl:h-1/2 h-full w-full relative cursor-pointer"
                  onClick={() => setOpen(true)}
                >
                  <img
                    src={`/uploads/${gallery[2]?.filename}`}
                    className="h-full w-full"
                    alt="gallery-image"
                  />
                  <div className="absolute inset-0 h-[100%] w-[100%] flex justify-center items-center z-[10] bg-[#ffffff89]">
                    <GrAdd className="h-8 w-8" />
                  </div>
                </div>
              ) : (
                <div className="w-full xl:h-1/2 h-full flex justify-center items-center bg-[#dcdcdc]">
                  <img
                    src="/assets/images/noImg1.svg"
                    className="h-full w-[30%] "
                    alt="gallery-image"
                  />
                </div>
              )}
            </>
          ) : (
            <>
              <div className="w-full xl:h-1/2 h-full flex justify-center items-center bg-[#dcdcdc]">
                <img
                  src="/assets/images/noImg1.svg"
                  className="w-[8rem] h-[8rem] xs:w-[12rem] xs:h-[12rem] md:w-[15rem] md:h-[15rem] lg1:w-[19rem] lg1:h-[19rem] "
                  alt="gallery-image"
                />
              </div>
              <div className="w-full xl:h-1/2 h-full flex justify-center items-center bg-[#dcdcdc]">
                <img
                  src="/assets/images/noImg1.svg"
                  className="w-[8rem] h-[8rem] xs:w-[12rem] xs:h-[12rem] md:w-[15rem] md:h-[15rem] lg1:w-[19rem] lg1:h-[19rem] "
                  alt="gallery-image"
                />
              </div>
            </>
          )}
        </div>

        
      </div>
    </>
  );
};
export default Gallery;
