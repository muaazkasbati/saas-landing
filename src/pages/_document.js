import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap" />
      </Head>
      <body className="antialiased bg-[#010101]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
