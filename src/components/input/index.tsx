"use client";

import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/navigation";

export function InputSerch() {
  const [input, setInput] = useState("");
  const router = useRouter();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setInput(value);
    router.push(`/?query=${value}`); // Atualiza a URL a cada digitação
  }

  return (
    <form className="w-full bg-slate-200 flex items-center my-5  mx rounded-lg gap-2 border-2 border-gray-200 justify-between transition duration-300 hover:border-blue-500">
      <input
        type="text"
        placeholder="Digite nome do jogo"
        className=" w-full text-lg py-2 px-4 outline-none"
        onChange={handleChange}
        value={input}
        required
      />
      <button
        type="submit"
        className="mr-5 cursor-pointer transition duration-700 hover:scale-120"
      >
        <FiSearch size={25} color="#ea580c" />
      </button>
    </form>
  );
}
