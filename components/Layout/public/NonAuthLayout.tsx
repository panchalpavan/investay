import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Footer from "../Footer";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
import { getCookie } from "cookies-next";
const Header = dynamic(()=> import("../Header"),{ssr: false});

type TProps = {
  buttonMode: boolean;
  shadow: boolean;
  children: React.ReactElement;
};

const NonAuthLayout = (props: TProps) => {
  const router = useRouter();
  const [buttonMode, setButtonMode] = useState(false);
  const [shadow, setShadow] = useState(false);
  const reduxData = useSelector((state: any) => {
    return state.getUserData;
  });

  const setNavShadow = () => {
    if (window.pageYOffset > 20) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  useEffect(() => {
    if (router.isReady) {
      if (reduxData?.token && reduxData?.userRole === "admin") {
        router.push("/admin/myprofile");
      }
      if (reduxData?.token && reduxData?.userRole === "user") {
        router.push("/profile/myprofile");
      }
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
  }, [reduxData, router.isReady]);

  return (
    <>
      <div className={`fixed w-full top-0 z-[100] `}>
        <Header buttonMode={buttonMode} shadow={shadow} />
      </div>

      <div className="mt-16 w-full bg-white">{props.children}</div>
      <Footer />
    </>
  );
};

export default NonAuthLayout;
