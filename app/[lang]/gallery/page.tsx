import Piece from "@/components/Piece";
import MenuList from "@/views/gallery/MenuList";
import Image from "next/image";

export default function GallyeryPage() {
  return (
    <Piece className="flex flex-row">
      <MenuList></MenuList>
      <div className="flex-1">
        <Image
          src={`https://picsum.photos/400/300.webp?random=6`}
          alt={""}
          width={400}
          height={300}
          className="w-full h-full"
          objectFit="fill"
        ></Image>
      </div>
    </Piece>
  );
}
