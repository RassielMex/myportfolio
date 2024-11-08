import "../app/ui/global.css";
import Sidebar from "./ui/shared/Sidebar";
import { inter } from "./ui/fonts";

export const metadata = {
  title: "My Portfolio",
  description: "Web site created with Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-black text-cyan-50`}>
        <div className="container mx-auto flex flex-col md:flex-row">
          <Sidebar />
          <div id="root" className="w-full md:w-3/4">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
