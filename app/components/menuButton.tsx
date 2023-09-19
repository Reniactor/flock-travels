"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { HiMenuAlt3 } from "@react-icons/all-files/hi/HiMenuAlt3";
import { VscChromeClose } from "@react-icons/all-files/vsc/VscChromeClose";

export default function MenuButton() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const links = [
    { name: "About Us", route: "#aboutUs" },
    { name: "Reviews", route: "#reviews" },
    { name: "Blog", route: "/blog" },
    /* { name: "Jet Off!", route: "/reserve" }, */
  ];
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={`min-[1450px]:hidden`}>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {!open ? (
          <HiMenuAlt3 className={`text-2xl text-[#0B1618]`} />
        ) : (
          <VscChromeClose className={`text-2xl text-[#0B1618]`} />
        )}
      </Button>
      <Menu
        id=""
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          "& .MuiButtonBase-root": {
            height: 48,
          },
        }}
      >
        {links.map(({ name, route }, index) => {
          return (
            <MenuItem
              onClick={handleClose}
              key={index}
              className={`flex justify-center ${
                index != 0 ? "" : "mt-[-8px]"
              } hover:text-[#0B1618] duration-500`}
            >
              <Link href={route}>{name}</Link>
            </MenuItem>
          );
        })}
        <MenuItem
          onClick={handleClose}
          className="bg-[#F26430] text-white hover:text-[#0B1618] mt-[-8px] mb-[-8px] duration-500 flex justify-center"
        >
          <Link href="/reserve" className="text-center font-bold ">
            Jet Off
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
