import React from "react";
import { useState, useEffect } from "react";
const Header = dynamic(() => import("./Header"), { ssr: false });
import Footer from "./Footer";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

type TProps = {
  children: React.ReactElement;
};
const CommonLayout = ({ children }: TProps) => {
  const router = useRouter();
  const [buttonMode, setButtonMode] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      //TODO: for real time window resize
      window.addEventListener("resize", function (event) {
        if (window.innerWidth < 640) {
          setButtonMode(true);
        } else {
          setButtonMode(false);
        }
      });
      //TODO: for the first time when window is rendered
      if (window.innerWidth < 640) {
        setButtonMode(true);
      } else {
        setButtonMode(false);
      }

      document.addEventListener("scroll", (e) => {
        setNavShadow();
      });
      setNavShadow();
    }
  }, [router.isReady]);

  const setNavShadow = () => {
    if (window.pageYOffset > 20) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  return (
    <>
      <div className="h-screen w-full flex flex-col">
        <div className={`fixed w-full top-0 z-[100] `}>
          <Header buttonMode={buttonMode} shadow={shadow} />
        </div>

        <div className="mt-16 w-full bg-white">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default CommonLayout;
