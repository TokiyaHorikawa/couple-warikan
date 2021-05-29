import { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export const siteTitle = 'Couple Warikan';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props): JSX.Element {
  return (
    <div className="w-full bg-gray-50 h-screen">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="カップル割勘は複数人の割勘を簡単に行うためのwebサービスです"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="w-full max-w-screen-lg flex flex-row p-3 m-auto">
        <Link href="/">
          <button className="text-4xl">
            {siteTitle}
            <span role="img" aria-label="unicorn">
              🦄
            </span>
          </button>
        </Link>
        <div className="ml-auto flex flex-row">
          <Link href="/login">
            <button>ログイン</button>
          </Link>
        </div>
      </header>
      <main className="w-full h-full">{children}</main>
    </div>
  );
}
