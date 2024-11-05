import Piece from "@/components/Piece";
import DemoScene from "@/views/scene/DemoScene";

export default function ScenePage() {
  return (
    <Piece className="grid grid-cols-4">
      <DemoScene></DemoScene>

      <div className="col-span-1 h-full"></div>
    </Piece>
  );
}
