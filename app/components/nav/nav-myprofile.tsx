import { user } from "@/app/data/user";
import Image from "next/image";
import Link from "next/link";

export const NavMyProfile = () => {
  return (
    <div className="flex items-center">
      <div className="size-10 mr-2 rounded-full overflow-hidden">
        <Link href={`/${user.slug}`}>
          <Image
            unoptimized
            src={user.avatar}
            alt={user.name}
            width={100}
            height={100}
          />
        </Link>
      </div>

      <div className="flex-1 overflow-hidden">
        <Link href={`/${user.slug}`} className="block truncate">
          {user.name}
        </Link>
        <div className="text-sm text-gray-400 truncate">@{user.slug}</div>
      </div>
    </div>
  );
};
