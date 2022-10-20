// import { Head } from "$fresh/runtime.ts";
// import Counter from "../islands/Counter.tsx";

const Head = () => (
  <head>
      <title>LSD server</title>
  </head>
);

export default function Home() {
  return (
    <div class="flex justify-center items-center h-screen text-6xl">
      <Head/>
      <div>
        <h1>
          LSD Server
        </h1>
        <a href="https://discord.gg/3KntQcYy2z" class="text-purple-300 hover:text-purple-600 active:text-purple-800 visited:text-blue-600">here</a>
      </div>
    </div>
  );
}
