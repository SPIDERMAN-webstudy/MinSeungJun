import Head from "next/head";
export default function Seo({ title }) {
  return (
    <Head>
      <title>{title} | 암바홍게시판</title>
    </Head>
  );
}
