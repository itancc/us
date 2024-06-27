import Piece from "@/components/Piece";
import Image from "next/image";

export default function BoyIntro() {
  return (
    <Piece
      id="boy"
      className="flex-center py-10 gap-36  max-w-[1200px] ml-auto mr-auto"
    >
      <article>
        <h1 className="text-4xl">
          Itancc: Independent Developer & GIS Engineer
        </h1>
        <p className="mt-6 text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim dicta
          minus nulla corporis ullam ipsam quisquam assumenda non sequi
          reiciendis, dolores deserunt quibusdam, quos eum eveniet ad suscipit,
          iure omnis?
        </p>
      </article>
      <Image
        src="https://picsum.photos/600/600.webp?random=1"
        alt="Picture of the author"
        width={400}
        height={400}
      ></Image>
    </Piece>
  );
}
