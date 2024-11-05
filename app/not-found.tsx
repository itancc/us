import Piece from "@/components/Piece";
import Link from "next/link";

export default function NotFound() {
  return (
    <Piece className="flex flex-col items-center justify-center gap-3">
      <h2 className="text-3xl">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="underline text-blue-500">
        Return Home
      </Link>
    </Piece>
  );
}
