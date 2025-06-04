import Image from "next/image";
import { Metadata } from "next";
import { GameProps } from "@/utils/types/game";

import { Container } from "@/components/container";
import { redirect } from "next/navigation";

async function GetGameId(title: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&title=${title}`
    );

    return response.json() || [];
  } catch (error) {
    console.error(error);
  }
}

// Função para gerar metadata dinamicamente
export async function generateMetadata({
  params,
}: {
  params: { title: string };
}): Promise<Metadata> {
  const data: GameProps[] = await GetGameId(params.title);
  console.log(data[0]);
  return {
    title: data[0].title,
    description: `${data[0].description.slice(0, 100)}...`,
    openGraph: {
      title: data[0].title,
      images: [data[0].image_url],
    },
  };
}

export default async function Search({
  params,
}: {
  params: { title: string };
}) {
  const { title } = params;
  const data: GameProps[] = await GetGameId(title);

  if (!data) {
    redirect("/");
  }

  return (
    <main className="w-full">
      {data &&
        data.map((data) => (
          <Container key={data.id}>
            <h1 className="text-center text-3xl font-bold my-8">
              {data.title}
            </h1>
            <Image
              src={data.image_url}
              width={1000}
              height={1000}
              className="w-full mx-auto h-120  rounded-lg"
              quality={100}
              priority
              alt="Imagem game
          "
            />

            <h1 className="text-xl mt-10 mb-5">Detalhes</h1>
            <article className="w-full p-3 my-10 border-2 rounded-2xl border-gray-300 shadow-lg shadow-gray-500 bg-white">
              <div className="flex flex-col gap-3 text-lg text-black ">
                <p className="font-bold">
                  Nome:{" "}
                  <span className="font-normal italic"> {data.title} </span>
                </p>
                <p className="font-bold">
                  Descrição:
                  <span className="font-normal italic">
                    {" "}
                    {data.description}{" "}
                  </span>
                </p>
                <p className="font-bold">
                  Plataromas:{" "}
                  {data &&
                    data?.platforms.map((item, index) => (
                      <span key={index} className="font-normal italic">
                        {" "}
                        {item} /{" "}
                      </span>
                    ))}{" "}
                </p>
                <p className="font-bold">
                  Categoria:
                  {data &&
                    data?.categories.map((item, index) => (
                      <span key={index} className="font-normal italic">
                        {" "}
                        {item} /
                      </span>
                    ))}
                </p>
                <p className="font-bold">
                  Data-lançamento:
                  <span className="font-normal italic"> {data.release} </span>
                </p>
              </div>
            </article>
          </Container>
        ))}
    </main>
  );
}
