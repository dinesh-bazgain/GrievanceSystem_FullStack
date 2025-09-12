import "./globals.scss";
import { Providers } from "./providers";
import Headers from "@/components/Header/headers";

export const metadata = {
  title: "Gunaso Regestration",
  description: "Gunaso Regestration for citizens",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="cds-theme-zoning">
        <Headers />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
