import Greet from "@/views/home/Greet";
import BoyIntro from "@/views/home/Introduce/BoyIntro";
import GirlIntro from "@/views/home/Introduce/GirlIntro";

export default function Home() {
  return (
    <>
      <Greet></Greet>
      <BoyIntro></BoyIntro>
      <GirlIntro></GirlIntro>
    </>
  );
}
