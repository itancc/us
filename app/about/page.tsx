import Piece from "@/components/Piece";
import AboutCard from "./card";

export default function AboutPage() {
  return (
    <Piece>
      <div className="w-full h-full p-8 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold">ABOUT US</h2>
        <div className="flex p-8 items-center gap-12">
          {/* about me  */}
          <AboutCard name="Mr.Itancc"></AboutCard>

          {/* about my wife */}
          <AboutCard name="Mrs.Yao"></AboutCard>
        </div>
      </div>
    </Piece>
  );
}
