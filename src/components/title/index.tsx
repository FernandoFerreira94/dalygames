import { ReactNode } from "react";

export default function Title({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-2xl font-bold text-center mt-8 mb-3">{children}</h1>
  );
}
