import React from "react";
import Details from "../../components/profile/Details";
const addProperty = () => {
  return (
    <div>
      <Details />
    </div>
  );
};

export default addProperty;

addProperty.admin = (page: React.ReactElement) => {
  return { page };
};
