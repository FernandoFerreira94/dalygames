import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return <div className="container mx-auto p-3 ">{children}</div>;
}
