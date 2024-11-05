import Piece from "@/components/Piece";

export default function VlogPage() {
  return (
    <Piece className="relative">
      <div
        className="absolute left-0 top-0 w-full h-full"
        style={{
          backgroundImage: "url(https://picsum.photos/600/400.webp?random=30)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="absolute w-full h-full bg-black bg-opacity-80 flex-center">
        <div className="foursquare p-4">
          <video
            className="w-full h-full"
            controls
            poster="https://picsum.photos/600/400.webp?random=30"
          ></video>
        </div>
      </div>
    </Piece>
  );
}
