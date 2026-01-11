import "./globals.css";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "Excelerate | Websites that ship fast",
  description: "Excelerate builds clean, fast websites for small businesses and professionals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black">
        <Navbar />
        {children}
        <footer className="mt-24 border-t">
          <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-gray-600">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p>© {new Date().getFullYear()} Excelerate. All rights reserved.</p>
              <p>
                Built with Next.js •{" "}
                <a className="underline" href="mailto:you@example.com">
                  you@example.com
                </a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
