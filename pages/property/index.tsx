import React, { useEffect } from "react";
import { Home } from "../../components/property/Home";
import Image from "next/legacy/image";
import { useState } from "react";
import { Faq } from "../../components/property/Faq";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import HeaderTitle from "../../components/Layout/HeaderTitle";
import Router from "next/router";
import { useRouter } from "next/router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAllproperties } from "../../action-creators/properties/property";
import { setLocations, set_getProperties } from "../../redux/property/propertyReducer";
import ThankYou from "../../components/Modal/ThankYou";

const initialFilter = {
  propertyLocation: null,
  configuration: [],
  preferredTenants: [],
  tenancyStatus: [],
  furnishingStatus: [],
  parking: [],
  directionFacing: [],
  propertyType: [],
  constructionStatus: [],
};

const Property = ({ ...pageProps }) => {
  const [isRental, setIsRental] = useState(false);
  const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState(null);
  const [myproperties, setMyProperties] = useState(null);
  const [filter, setFilter] = useState(initialFilter);
  const router = useRouter();
  const dispatch = useDispatch();

  const reduxProperties = useSelector((state: any) => {
    return state.getPropertiesData;
  });
  const reduxData = useSelector((state: any) => {
    return state.getUserData;
  });

  if (router.query.Faq === "true") {
    const faq = document.getElementById("faq");
    faq?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  }

  const filterProperties = (mydata: any) => {
    let data = mydata || myproperties;
    // console.log("first: ", data);
    if (properties) {
      const {
        propertyLocation,
        configuration,
        preferredTenants,
        tenancyStatus,
        furnishingStatus,
        parking,
        directionFacing,
        propertyType,
        constructionStatus,
      } = filter;
      if (configuration.length > 0) {
        data = data.filter((item: any) => {
          let isPresent: boolean = false;
          for (let c of configuration) {
            if (c === item.configuration) {
              isPresent = true;
              break;
            } else {
              isPresent = false;
            }
          }
          if (isPresent) {
            return item;
          }
          return null;
        });
      }
      if (preferredTenants.length > 0) {
        data = data.filter((item: any) => {
          let isPresent: boolean = false;
          for (let c of preferredTenants) {
            if (c === item.preferredTenants) {
              isPresent = true;
              break;
            } else {
              isPresent = false;
            }
          }
          if (isPresent) {
            return item;
          }
          return null;
        });
      }
      if (tenancyStatus.length > 0) {
        data = data.filter((item: any) => {
          let isPresent: boolean = false;
          for (let c of tenancyStatus) {
            if (c === item.tenancyStatus) {
              isPresent = true;
              break;
            } else {
              isPresent = false;
            }
            filter.parking;
          }
          if (isPresent) {
            return item;
          }
          return null;
        });
      }
      if (furnishingStatus.length > 0) {
        data = data.filter((item: any) => {
          let isPresent: boolean = false;
          for (let c of furnishingStatus) {
            if(c === "none" && [null,"none"].indexOf(item.furnishingType) !== -1) {
              isPresent = true;
              break;
            }
            else {
              if (c === item.furnishingType) {
                isPresent = true;
                break;
              } else {
                isPresent = false;
              }
            }
          }
          if (isPresent) {
            return item;
          }
          return null;
        });
      }
      if (parking.length > 0) {
        data = data.filter((item: any) => {
          let isPresent: boolean = false;
          for (let c of parking) {
            if (c === item.parking || item.parking === "both") {
              isPresent = true;
              break;
            } else {
              isPresent = false;
            }
          }
          if (isPresent) {
            return item;
          }
          return null;
        });
      }
      if (directionFacing.length > 0) {
        data = data.filter((item: any) => {
          let isPresent: boolean = false;
          for (let c of directionFacing) {
            if (c === item.directionFacing) {
              isPresent = true;
              break;
            } else {
              isPresent = false;
            }
          }
          if (isPresent) {
            return item;
          }
          return null;
        });
      }
      if (propertyType.length > 0) {
        data = data.filter((item: any) => {
          let isPresent: boolean = false;
          for (let c of propertyType) {
            if (c === item.propertyType) {
              isPresent = true;
              break;
            } else {
              isPresent = false;
            }
          }
          if (isPresent) {
            return item;
          }
          return null;
        });
      }
      if (constructionStatus.length > 0) {
        data = data.filter((item: any) => {
          let isPresent: boolean = false;
          for (let c of constructionStatus) {
            if (c === item.constructionStatus) {
              isPresent = true;
              break;
            } else {
              isPresent = false;
            }
          }
          if (isPresent) {
            return item;
          }
          return null;
        });
      }
      if (propertyLocation) {
        if (propertyLocation === "All") {
          data = data;
        } else {
          data = data.filter((item: any) => {
            if (item.propertyLocation === propertyLocation) {
              return item;
            }
            return null;
          });
        }
      }
      setProperties(data);
      // console.log("two: ", data);
      if (
        configuration.length === 0 &&
        tenancyStatus.length === 0 &&
        furnishingStatus.length === 0 &&
        parking.length === 0 &&
        directionFacing.length === 0 &&
        propertyType.length === 0 &&
        constructionStatus.length === 0 &&
        !propertyLocation
      ) {
        if (!router.query.Rental || router.query.Rental === "true") {
          const rentalData = reduxProperties.properties.filter((data: any) => {
            return data.category === "rental";
          });
          setProperties(rentalData);
        } else {
          const resaleData = reduxProperties.properties.filter((data: any) => {
            return data.category === "resale";
          });
          setProperties(resaleData);
        }
      }
    }
  };

  useEffect(() => {
    if (router.isReady) {
      router.query.Rental
        ? router.query.Rental === "true"
          ? setIsRental(true)
          : setIsRental(false)
        : setIsRental(true);

      if (!reduxProperties.properties) {
        getAllProperties();
      } else {
        if (!router.query.Rental || router.query.Rental === "true") {
          const rentalData = reduxProperties?.properties?.filter((data: any) => {
            return data.category === "rental";
          });
          setProperties(rentalData);
          setMyProperties(rentalData);
          filterProperties(rentalData);
        } else {
          const resaleData = reduxProperties?.properties?.filter((data: any) => {
            return data.category === "resale";
          });
          setProperties(resaleData);
          setMyProperties(resaleData);
          filterProperties(resaleData);
        }
      }
    }
  }, [router.isReady, router.query.Rental, reduxData?.token]);

  const getAllProperties = async () => {
    setLoading(true);
    await getAllproperties()
      .then((response) => {
        if (response.properties) {
          // console.log("index_properties: ",response.properties);
          dispatch(set_getProperties(response.properties));
          if (!router.query.Rental || router.query.Rental === "true") {
            const rentalData = response.properties.filter((data: any) => {
              return data.category === "rental";
            });
            setProperties(rentalData);
            setMyProperties(rentalData);
            let mydata = ["All"];
            for (let location of response.locations) {
              mydata.push(location.name);
            }
            dispatch(setLocations([...new Set(mydata)]));
          } else {
            const resaleData = response.properties.filter((data: any) => {
              return data.category === "resale";
            });
            setProperties(resaleData);
            setMyProperties(resaleData);
            let mydata = ["All"];
            for (let location of response.locations) {
              mydata.push(location.name);
            }
            dispatch(setLocations([...new Set(mydata)]));
          }
          setLoading(false);
        }
      })
      .catch((err) => {
        // console.log(err);
        dispatch(set_getProperties([]));
      });
  };

  return (
    <>
      <HeaderTitle pageName={"Property"} />
      <div className="relative h-[13rem] xs:h-[18rem] md:h-[20rem] md_link:h-[23rem] max-h-[28rem] w-full  mt-4 ">
        <div className="w-full h-full absolute ">
          <Image
            alt="star_image"
            src="/assets/images/StarDesign.svg"
            priority
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="absolute  w-full h-full  flex flex-col items-center justify-between">
          <div className="mt-10 xs:mt-14 md:mt-16">
            <p className="text-black font-medium text-xl xxs:text-2xl xs:text-3xl md:text-4xl md_link:text-5xl  tracking-wide">
              Real Estate Returns
            </p>
            <p className="text-black text-center font-semibold  text-xl xxs:text-2xl xs:text-3xl md:text-4xl md_link:text-5xl italic ">
              Maximised
            </p>
          </div>
          <div>
            <button
              onClick={() => {
                setIsRental(true);
                router.push("/property?Rental=true");
              }}
              className={`px-4 md:px-8 py-2 md:py-3 bg-primaryColor text-black sm:text-xl text-sm rounded-t-lg ${
                isRental ? "font-bold shadow-resale_shadow " : "font-normal"
              }`}
            >
              Rental
            </button>
            <button
              onClick={() => {
                setIsRental(false);
                router.push("/property?Rental=false");
              }}
              className={`px-4 md:px-8 py-2 md:py-3 bg-primaryColor text-black sm:text-xl text-sm ml-5 rounded-t-lg   ${
                isRental ? "font-normal  " : "font-bold shadow-resale_shadow"
              }`}
            >
              Resale
            </button>
          </div>
        </div>

        <button
          onClick={() => Router.back()}
          className="absolute ml-2 md_link:ml-[4.2rem] cursor-pointer"
        >
          <ArrowLeftIcon className="h-8 w-8 text-black" />
        </button>
      </div>
      <Home
        {...pageProps}
        properties={properties}
        setProperties={setProperties}
        loading={loading}
        myproperties={myproperties}
        filter={filter}
        setFilter={setFilter}
        filterProperties={filterProperties}
      />
      <div className="mt-32 xxs:mt-40 sm:mt-44 md:mt-52 mx-2 sm:mx-6 md_link:mx-24">
        <Faq isRental={isRental} setIsRental={setIsRental} />
      </div>
    </>
  );
};

export default Property;
Property.public1 = (page: React.ReactElement) => {
  return { page };
};
