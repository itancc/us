import Greet from "@/views/home/Greet";
import BoyIntro from "@/views/home/Introduce/BoyIntro";
import GirlIntro from "@/views/home/Introduce/GirlIntro";
import NewestVlog from "@/views/home/NewestVlog";

export default function Page() {
  return (
    <>
      {/* <Greet></Greet> */}
      <BoyIntro></BoyIntro>
      <GirlIntro></GirlIntro>
      <NewestVlog></NewestVlog>
    </>
  );
}
