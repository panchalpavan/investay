import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PersonalInfo from "../../../components/admin/ProfileInfo";
import HeaderTitle from "../../../components/Layout/HeaderTitle";

const myprofile = () => {
  const [user,setUser] = useState([])
  const userFromStore = useSelector((state: any) => {
    return state.getUserData;
  });
  
  useEffect(()=>{
    setUser(userFromStore?.user)
  },[user])
 
  return (
    <>
      <HeaderTitle pageName={"Admin Profile"} />
      {
      user!==null &&  user?.length!==0 && (
          <PersonalInfo user={user} />
        )
      }
    </>
  );
};

export default myprofile;

myprofile.admin = (page: React.ReactElement) => {
  return { page };
};