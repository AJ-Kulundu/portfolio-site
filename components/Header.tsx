import Head from "next/head";
import React from "react";

const Header = () => {
  return (
    <>
    <Head>
      <title>AJ Kulundu | Software Developer</title>
      <meta key="description" name="description" content="My personal part of the Internet" />
      <meta key="website" property="og:type" content="website" />
      <meta key="robots" name="robots" content="index, follow" />
      <meta key="viewport" cname="viewport" content="width=device-width, initial-scale=1.0"/>
    </Head>
    </>
  );
}

export default Header;
