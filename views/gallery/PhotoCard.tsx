import Image from "next/image";

export default function PhotoCard() {
  const photoRandom = Math.floor(Math.random() * 10 + 4);
  return (
    <div className="flex flex-col gap-3">
      <Image
        src={`https://picsum.photos/300/200.webp?random=${photoRandom}`}
        alt={""}
        width={380}
        height={200}
      ></Image>

      <div className="text-xl">Lorem ipsum</div>

      <div className="text-default-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quidem
        consequatur repellendus accusantium possimus nihil excepturi error rerum
        suscipit quis consectetur cupiditate velit voluptatum dolorum molestiae
        magni, optio sint harum.
      </div>
    </div>
  );
}
