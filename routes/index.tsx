import Auction from "../islands/Auction.tsx";
import Lsd from "../islands/Lsd.tsx"

const Head = () => (
  <head>
    <title>LSD server</title>
  </head>
);

export default function Home() {
  return (
    <>
      <Head />
      <Lsd />
      <Auction />
    </>
  );
}
