import Image from "next/image";
import Link from "next/link";
import { MdGames } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { LiaGamepadSolid } from "react-icons/lia";
export default function Header() {
  return (
    <header className="w-full h-28 bg-slate-100 text-black">
      <nav className="container   mx-auto flex h-full items-center justify-center sm:justify-between">
        <div className="flex items-center h-full  gap-10 px-3">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={170}
              height={50}
              quality={100}
              priority
            />
          </Link>

          <Link
            href="/
          "
            className="flex gap-1 text-xl items-center"
          >
            <span> Games </span>
            <MdGames size={24} color="black" />
          </Link>
        </div>
        <Link
          href="/profile"
          className="hidden sm:flex gap-1 text-xl items-center"
        >
          <LiaGamepadSolid size={50} color="black" />
        </Link>
      </nav>
    </header>
  );
}
