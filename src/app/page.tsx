import Image from "next/image";
import Link from "next/link";
import axios from "axios";

import { GameProps } from "@/utils/types/game";
import { BsArrowRightSquare } from "react-icons/bs";
import { IoIosArrowDropright } from "react-icons/io";

import { InputSerch } from "@/components/input";
import { Container } from "@/components/container";
import Title from "@/components/title";

async function getDalyGame() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
      { next: { revalidade: 320 } }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getGamesData() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_API_URL}/next-api/?api=games`,
      { next: { revalidade: 320 } }
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {
  const dalyGame: GameProps = await getDalyGame();
  const data: GameProps[] = await getGamesData();

  return (
    <main className="w-full">
      <Container>
        <Title>Separamos um jogo para voçe</Title>

        <Link href={`/game/${dalyGame.id}`}>
          <section className="w-full bg-black rounded-lg">
            <div className="w-full  h-120 max-h-120 relative rounded-lg mt-10">
              <Image
                src={dalyGame.image_url}
                alt="Imagem do jogo"
                fill={true}
                priority={true}
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
                className="max-h-120  rounded-lg opacity-50 transition duration-500 hover:opacity-100"
              />
              <div className="absolute z-20 bottom-5 left-10 flex gap-5 justify-center items-center">
                <p className="text-white  text-xl font-bold">
                  {dalyGame.title}
                </p>
                <BsArrowRightSquare size={24} color="white" />{" "}
              </div>
            </div>
          </section>
        </Link>
        <InputSerch />
        <h1 className="text-xl font-bold py-5">Jogos</h1>
        <div className="grid grid-cols-4 gap-10 ">
          {data.map((item) => (
            <section
              key={item.id}
              className="rounded-lg w-full bg-slate-200 my-10"
            >
              <div className="relative w-full max-h-80 h-80 rounded-lg">
                <Image
                  src={item.image_url}
                  alt="Imagem do jogo"
                  fill={true}
                  priority={true}
                  quality={100}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
                  className=" h-80 rounded-lg "
                />
              </div>

              <Link
                href="/"
                className="flex justify-between items-center my-3 mx-2"
              >
                <span className="font-bold text-md">{item.title}</span>
                <IoIosArrowDropright size={28} color="black" />
              </Link>
            </section>
          ))}
        </div>
      </Container>
    </main>
  );
}
//
