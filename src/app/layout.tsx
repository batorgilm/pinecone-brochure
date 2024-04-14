import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pinecone',
  description: 'Pinecone curriculum intro',
};

export default function RootLayout({
  intro,
  jobs,
  learning,
  environment,
}: Readonly<{
  children: React.ReactNode;
  intro: React.ReactNode;
  jobs: React.ReactNode;
  learning: React.ReactNode;
  environment: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {intro}
        <div className="max-w-[600px] mx-auto p-3">
          {jobs}
          {learning}
          {environment}
          <div className="flex flex-col gap-4 mt-20">
            <h2 className="text-[24px] font-semibold text-white">
              Сургалтын хөтөлбөрийг татах
            </h2>
            <p className="text-[#ffffff80]">
              Дэлгэрэнгүй задаргаа сурах зүйлсийн талаар мэдээллийг та татаж
              авсанаар харах боломжтой.
            </p>
            <Link
              href="https://45561888.fs1.hubspotusercontent-na1.net/hubfs/45561888/Pinecone-Leap-Programm.pdf"
              download
              target="_blank"
            >
              <button className="bg-[#1890ff] px-4 py-2 rounded-3xl flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18 15V18H6V15H4V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V15H18ZM17 11L15.59 9.59L13 12.17V4H11V12.17L8.41 9.59L7 11L12 16L17 11Z"
                    fill="white"
                  />
                </svg>
                <p>Татаж авах</p>
              </button>
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
