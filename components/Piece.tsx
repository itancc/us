import { merge } from "@/utils/clsx";
import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";

export default function Piece(
  props: PropsWithChildren<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
  >
) {
  const { children, className = "", ...rest } = props;
  const _className = merge("main-h", className);
  return (
    <section className={_className} {...rest}>
      {children}
    </section>
  );
}
