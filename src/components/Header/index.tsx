"use client";

import React from "react";
import Image from "next/image";
import styles from "./header.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NAV_SECTIONS = [
  {
    id: "about",
    label: "Sobre nosotros",
    linkTo: "/nosotros",
  },
  {
    id: "products",
    label: "Nuestros Productos",
    linkTo: "/productos",
  },
  {
    id: "dealers",
    label: "Distribuidores",
    linkTo: "/distribuidores",
  },
  {
    id: "blogs",
    label: "Blogs",
    linkTo: "/blog",
  },
  {
    id: "advisors",
    label: "Miembros",
    linkTo: "/asesores",
  },
];

const getActivePathName = (pathName: string, currentPathname: string) =>
  pathName === currentPathname;

const Header = () => {
  const currentPathname = usePathname();

  return (
    <nav className={styles.navBar}>
      <Link className="" href={"/"}>
        <Image
          alt="poliescolHeader.png"
          height={42}
          src="/poliescolHeader.png"
          width={112}
        />
      </Link>
      <ul>
        {NAV_SECTIONS.map(({ id, label, linkTo }) => {
          return (
            <Link href={linkTo} key={id}>
              <li
                className={clsx({
                  [styles.active]: getActivePathName(linkTo, currentPathname),
                })}
              >
                {label}
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Header;
