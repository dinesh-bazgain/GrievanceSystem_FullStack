"use client";

import Headers from "../components/Header/headers";
import { Content } from "carbon-components-react";

export function Providers({ children }) {
  return (
    <div>
      <Headers />
      <Content>{children}</Content>
    </div>
  );
}
