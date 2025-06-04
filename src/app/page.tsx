import Image from "next/image";
import Link from "next/link";
import { BsArrowRightSquare } from "react-icons/bs";

import { GameProps } from "@/utils/types/game";
import { InputSerch } from "@/components/input";
import { Container } from "@/components/container";
import Title from "@/components/title";
import GameCard from "@/components/jogos";

async function getDalyGame() {
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
      { next: { revalidate: 320 } }
    );
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

async function getGameSerch(title: string): Promise<GameProps[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}//next-api/?api=game&title=${title}`
    );

    const data = await response.json();

    return data || [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function Home({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  const dalyGame: GameProps = await getDalyGame();

  const searchQuery = searchParams?.query || "";
  const serch: GameProps[] = await getGameSerch(searchQuery);

  console.log(serch.length);
  return (
    <main className="w-full">
      <Container>
        <Title>Separamos um jogo para voçe</Title>

        <Link href={`/game/${dalyGame.title}`}>
          <section className="w-full bg-black rounded-lg">
            <div
              className="w-full h-120 max-h-120 relative rounded-lg mt-10
             max-sm:h-100 
             "
            >
              <Image
                src={dalyGame.image_url}
                alt="Imagem do jogo"
                fill={true}
                priority={true}
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
                className="max-h-120 rounded-lg opacity-50
                 transition duration-500 hover:opacity-100"
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

        {serch && serch.length !== 0 ? (
          <div
            className="grid grid-cols-4 gap-6 my-8 
    max-sm:grid-cols-1 max-sm:gap-8
    max-lg:grid-cols-2"
          >
            {serch?.map((item) => <GameCard key={item.id} game={item} />)}
          </div>
        ) : (
          <p className="text-center text-xl font-semibold text-red-500">
            Ops não conseguimos achar esse jogo :(
          </p>
        )}
      </Container>
    </main>
  );
}
//

/*
{
  data.map((item) => <GameCard key={item.id} game={item} />);
}

*/
