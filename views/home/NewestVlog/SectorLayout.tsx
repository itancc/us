import { PropsWithChildren } from "react";

export default function SectorLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="flex flex-row justify-center items-center gap-12">
      {children}
    </div>
  );
}
