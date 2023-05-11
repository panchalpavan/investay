import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { reportsPaths } from "../../../utilities/AdminNavLinks";

type TProps = {
  paths: any;
};

const SelectDropDown = ({ paths }: TProps) => {
  const router = useRouter();

  const handleClick = (selectedPath: any) => {
    if (
      router.route.includes("/admin/property-overview") ||
      router.route.includes("/admin/booking-and-pricing-info")
    ) {
      router.push("/admin/" + selectedPath + "/" + router?.query?._id);
    }
    if (router.route === "/admin/reports") {
      reportsPaths.map((reportTab: any) => {
        const hiddenTabs: any = document.getElementById(reportTab?.path);
        hiddenTabs.hidden = true;
        const showTab: any = document.getElementById(selectedPath);
        showTab.hidden = false;
      });
    }
  };

  return (
    <div className="mb-5 z-10">
      <select
        onChange={(e) => handleClick(e.target.value)}
        className="p-2 cursor-pointer "
      >
        {router.route.includes("/admin/property-overview") && (
          <option value={paths[0].path_name} selected disabled>
            {paths[0].path_name}
          </option>
        )}
        {router.route.includes("/admin/booking-and-pricing-info") && (
          <option value={paths[1].path_name} selected disabled>
            {paths[1].path_name}
          </option>
        )}
        {paths.map((elem: any, key: any) => (
          <option key={key} value={elem.path} className="p-2 cursor-pointer ">
            {elem.path_name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectDropDown;
