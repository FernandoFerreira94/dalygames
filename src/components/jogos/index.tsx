"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Jogos() {
  useEffect(() => {
    async function getJogos() {
      try {
        const response = await axios.get(
          `${process.env.NEXT_API_URL}/next-api/?api=games`
        );
        console.log("Dados recebidos da API:", response.data); // Apenas exibe os dados
      } catch (error) {
        console.error("Erro ao buscar os jogos:", error);
      }
    }
    getJogos();
  }, []);

  return (
   
  );
}
