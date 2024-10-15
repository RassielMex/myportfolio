import "../app/ui/global.css";
import Sidebar from "./ui/shared/Sidebar";

export const metadata = {
  title: "React App",
  description: "Web site created with Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-cyan-50">
        <div className="container mx-auto flex">
          <Sidebar />
          <div id="root" className="w-3/4">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
