"use client";

import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Key } from "react";

export default function ThemeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const onAction = (key: Key) => {
    setTheme(key as string);
  };
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly variant="light">
          {currentTheme === "light" ? <SunIcon /> : <MoonIcon />}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        variant="faded"
        aria-label="Theme Switch"
        onAction={onAction}
      >
        <DropdownItem key="light">亮色</DropdownItem>
        <DropdownItem key="dark">暗色</DropdownItem>
        <DropdownItem key="system">跟随系统</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
