import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
type TProps = {
  buttonMode: boolean;
  shadow: boolean;
  children: React.ReactElement;
};

const AuthLayout = (props: TProps) => {
  const router = useRouter();
  const reduxData = useSelector((state: any) => {
    return state.getUserData;
  });
  // useEffect(() => {
  //   if (router.isReady) {
  //     if (reduxData?.token && reduxData?.userRole === "admin") {
  //       router.push("/admin/myprofile");
  //     }
  //     if (reduxData?.token && reduxData?.userRole === "user") {
  //       router.push("/profile/myprofile");
  //     }
  //   }
  // },[router.isReady,reduxData])
  
  return <>{props.children}</>;
};

export default AuthLayout;
