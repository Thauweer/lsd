import Lsd from "../islands/Lsd.tsx"
const Head = () => (
  <head>
    <title>LSD server</title>
  </head>
);

export default function Home() {
  return (
    <div class="flex justify-center items-center h-screen bg-gradient-to-t from-red-700 via-blue-700 to-white-700">
      <Head />      
      <Lsd/>
    </div>
  );
}
