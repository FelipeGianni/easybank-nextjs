import React from "react";
import Head from "next/head";
import { Benefits, Hero, LatestArticles } from "./_compose";

export default function Home() {
  return (
    <>
      <Head>
        <title>Easybank</title>
        <meta
          name="description"
          content="Easybank - Challenge by Frontend Mentor"
        />
        <link
          rel="canonical"
          href="https://www.frontendmentor.io?ref=challenge"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt-BR" />
        <meta
          property="og:url"
          content="https://www.frontendmentor.io?ref=challenge"
        />
        <meta property="og:title" content="Easybank" />
        <meta property="og:site_name" content="Easybank" />
        <meta
          property="og:description"
          content="Easybank - Challenge by Frontend Mentor"
        />
        <meta property="og:image" content="/assets/logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Hero />

      <Benefits />

      <LatestArticles />
    </>
  );
}
