import Piece from "@/components/Piece";
import GreetScene from "./GreetScene";
import { SITE_NAME } from "@/configs/info";

export default function Welcome() {
  return (
    <Piece id="greet" className="relative">
      <GreetScene className="h-full w-full focus:outline-none"></GreetScene>
      {/* 居中 */}
      <div className="mix-blend-difference absolute-center text-4xl font-bold">
        WELCOME TO OUR SPACE - <span className="logo-clip">{SITE_NAME}</span>.
      </div>
    </Piece>
  );
}
