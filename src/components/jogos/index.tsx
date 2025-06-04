import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDropright } from "react-icons/io";
import { GameProps } from "@/utils/types/game";

export default function GameCard({ game }: { game: GameProps }) {
  return (
    <section className="rounded-lg w-full bg-slate-200 ">
      <Link href={`/game/${game.title}`} rel="nooperner noreferrer">
        <div className="relative w-full max-h-70 h-70 rounded-lg">
          <Image
            src={game.image_url}
            alt="Imagem do jogo"
            fill={true}
            priority={true}
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
            className=" h-70 rounded-t-lg "
          />
        </div>

        <div
          className="flex gap-5 items-center justify-between mx-3 py-2
         transition duration-300 hover:text-blue-600"
        >
          <span
            className="font-bold text-md truncate 
          transition duration-300 hover:text-blue-600 
          "
          >
            {game.title}
          </span>
          <IoIosArrowDropright size={28} color="black" />
        </div>
      </Link>
    </section>
  );
}
