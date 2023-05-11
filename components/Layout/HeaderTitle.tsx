import React from "react";
import Head from "next/head";
import ConfigDefaults from "../../Config/ConfigDefaults";

interface TProps {
  pageName: String;
}

const HeaderTitle: React.FC<TProps> = (props) => {
  return (
    <>
      <Head>
        <title>
          {/* {ConfigDefaults.name.slugName} | {props.pageName} */}
          {`${ConfigDefaults.name.slugName} | ${props.pageName}`}
        </title>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />

        <link
          rel="apple-touch-icon"
          href={"/assets/images/favIcon.svg"}
          key="apple"
        />
        <link rel="icon" href={"/assets/images/favIcon.svg"} key="favicon" />
      </Head>
    </>
  );
};

export default HeaderTitle;
