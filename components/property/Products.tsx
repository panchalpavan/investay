import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ScrollToTop } from "../Utilities/ScrollToTop";
import Skeleton from "./Skeleton";
import Property from "./Property";

export const Products = ({ ...pageProps }) => {
  const router = useRouter();
  const [properties, setProperties] = useState(pageProps.properties);
  const loading = pageProps.loading;

  useEffect(() => {
    if (router.isReady) {
      setProperties(pageProps.properties);
    }
  }, [router.isReady, pageProps.properties]);

  // const handleBackWard = (card_id: any, images: any) => {
  //   const card = document.getElementById(card_id);
  //   if (card?.src && images.indexOf(card?.src) != 0) {
  //     if (typeof images[images.indexOf(card.src) - 1] == "object") {
  //       card.src = images[images.indexOf(card.src) - 2];
  //     } else {
  //       card.src = images[images.indexOf(card.src) - 1];
  //     }
  //   }
  // };
  // const handleForward = (card_id: any, images: any, property: any) => {
  //   const card = document.getElementById(card_id);
  //   if (card?.src && images.length - 1 != images.indexOf(card?.src)) {
  //     if (typeof images[images.indexOf(card.src) + 1] == "object") {
  //       card.src = images[images.indexOf(card.src) + 2];
  //     } else {
  //       card.src = images[images.indexOf(card.src) + 1];
  //     }
  //   }
  // };

  return (
    <>
      {/* <EnquiryForm isOpen={isOpen} setIsOpen={setIsOpen} /> */}
      <ScrollToTop scrollToTop={pageProps.scrollToTop} />
      <div className="grid 2xl:grid-cols-12 md:grid-cols-8 grid-cols-4 gap-4 2xl:gap-6 4xl:gap-16">
        {loading && <Skeleton />}

        {properties &&
          (properties.length === 0 ? (
            <h1 className="col-span-12">No Properties Available</h1>
          ) : (
            properties.map((property: any, key: string) => {
              return <Property key={property._id} property={property} />;
            })
          ))}
      </div>
    </>
  );
};
