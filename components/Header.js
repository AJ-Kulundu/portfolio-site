import Head from "next/head";
import React from "react";

function Header() {
  return (
    <Head>
      <title>AJ Kulundu | Software Developer</title>
      <meta name="description" content="My personal part of the Internet" />
      <meta property="og:type" content="website" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Head>
  );
}

export default Header;
