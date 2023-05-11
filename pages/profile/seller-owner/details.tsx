import React from "react";
import Details from "../../../components/profile/Details";
const details = () => {
  return (
    <div>
      <Details />
    </div>
  );
};

export default details;
details.profile = (page: React.ReactElement) => {
  return { page };
};
