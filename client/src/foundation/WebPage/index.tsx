import type { NextPage } from "next";
import Head from "next/head";

export interface WebPageProps {
  title: string;
}

export const WebPage: NextPage<WebPageProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}
    </>
  );
};
