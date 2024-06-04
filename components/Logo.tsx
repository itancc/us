import { DiscordLogoIcon } from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import { RefAttributes } from "react";

export default function Logo(props: IconProps & RefAttributes<SVGSVGElement>) {
  return <DiscordLogoIcon width={24} height={24} {...props}></DiscordLogoIcon>;
}
