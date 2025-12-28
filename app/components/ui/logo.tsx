import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";

type Props = {
  size: number;
};

export const Logo = ({ size }: Props) => {
  return (
    <Link href="/">
      <Image src={logo} alt="A" width={size} height={size} quality={100} />
    </Link>
  );
};
