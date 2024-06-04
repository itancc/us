import { Link } from "@nextui-org/link";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/navbar";
import Logo from "@/components/Logo";
import Menu from "./Menu";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
  return (
    <Navbar
      isBordered
      maxWidth="full"
      position="sticky"
      height="3.5rem"
      className="backdrop-blur"
    >
      <NavbarContent className=" pr-3" justify="center">
        <NavbarBrand>
          <Link
            color="foreground"
            className="flex justify-start items-center gap-2"
            href="/"
          >
            <Logo />
            <p className="font-bold text-inherit ">ACME</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <Menu></Menu>
        <ThemeSwitch></ThemeSwitch>
      </NavbarContent>
    </Navbar>
  );
}
