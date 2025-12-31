"use client";

import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  label: string;
  icon: IconDefinition;
  href: string;
  active?: boolean;
};

export const NavItem = ({ label, icon, href, active }: Props) => {
  const pathName = usePathname();
  const isMe = pathName === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-6 py-3 ${
        active || isMe ? "opacity-100" : "opacity-50"
      } `}
    >
      <FontAwesomeIcon icon={icon} size="lg" />
      <div className="text-lg">{label}</div>
    </Link>
  );
};
