import React from "react";
import HeaderTitle from "../components/Layout/HeaderTitle";

const Disclaimer = () => {
  return (
    <>
      <HeaderTitle pageName={"Disclaimer"} />
      <div className="w-full px-6 sm:px-12 base:px-16 mt-10">
        <p className="text-sm sm:text-base md:text-xl  font-semibold uppercase mb-1 text-secondaryLightColor">
          disclaimer
        </p>
        <p className="text-sm sm:text-base md:text-xl font-light mb-4 text-secondaryLightColor text-justify">
          The information and materials contained or referred to on this website
          are for reference only. Investay makes no representation or warranty
          of any kind, express, implied or statutory, regarding this website or
          the materials and information contained or referred to on each page
          associated with this website. The information and materials contained
          on this website are subject to change without notice, are provided for
          general information only and should not be used as a basis for making
          business decisions. Any advice or information received via this web
          site should not be relied upon without consulting primary or more
          accurate or more up-to-date sources of information or specific
          professional advice. You are recommended to obtain such professional
          advice where appropriate.
        </p>
        <p className="text-sm sm:text-base md:text-xl font-light mb-4 text-secondaryLightColor text-justify">
          Investay accepts no liability and will not be liable for any loss or
          damage arising directly or indirectly (including special, incidental
          or consequential loss or damage) from your use of this web site,
          howsoever arising, including any loss, damage or expense arising from,
          but not limited to, any defect, error, imperfection, fault, omission,
          mistake or inaccuracy with this website, its contents or associated
          services, or due to any unavailability of the web site or any part
          thereof or any contents or associated services. Investay further
          neither assumes nor accepts liability for any loss or damage.
        </p>
        <p className="text-sm sm:text-base md:text-xl font-light mb-4 text-secondaryLightColor text-justify">
          Arising directly or indirectly (including special, incidental or
          consequential loss or damage), howsoever caused, as a result of any
          computer viruses or worms, software bombs or the like arising from
          your use of this web site. |
        </p>
        <p className="text-sm sm:text-base md:text-xl font-light mb-4 text-secondaryLightColor text-justify">
          References in this website to any products, events or services do not
          necessarily constitute or imply Investay&rsquo;s endorsement or
          recommendation of them.
        </p>
        <p className="text-sm sm:text-base md:text-xl font-light mb-4 text-secondaryLightColor text-justify">
          Any "off-site" web pages or hypertext link from this web site exist
          for information purposes and are for your convenience only and
          Investay accepts no liability for any loss or damage arising directly
          or indirectly (including special, indirect or consequential loss or
          damage) from the accuracy or otherwise of materials or information
          contained on the pages of such sites. Investay&rsquo;s inclusion of
          hyperlinks or "off-site" web pages does not imply any endorsement of
          the materials on such sites.
        </p>
      </div>
    </>
  );
};

export default Disclaimer;
