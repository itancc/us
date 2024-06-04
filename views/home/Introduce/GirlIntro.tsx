import Piece from "@/components/Piece";
import Image from "next/image";

export default function GirlIntro() {
  return (
    <Piece id="boy" className="flex-center py-10 gap-36 px-36">
      <article>
        <h1 className="text-4xl">Yao: Designer & Impasto Fan</h1>
        <p className="mt-6 text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim dicta
          minus nulla corporis ullam ipsam quisquam assumenda non sequi
          reiciendis, dolores deserunt quibusdam, quos eum eveniet ad suscipit,
          iure omnis?
        </p>
      </article>
      <Image
        src="https://picsum.photos/600/600.webp?random=2"
        alt="Picture of the author"
        width={400}
        height={600}
      ></Image>
    </Piece>
  );
}
