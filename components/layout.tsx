import { ReactNode } from 'react';
import Head from 'next/head';

export const siteTitle = 'Couple Warikan';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props): JSX.Element {
  return (
    <div className="w-full grid justify-items-center">
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
      <header className="w-full max-w-screen-lg flex flex-row p-3">
        <p className="text-4xl">
          {siteTitle}
          <span role="img" aria-label="unicorn">
            🦄
          </span>
        </p>
        <div className="ml-auto flex flex-row">
          <p className="mr-3">マイページ</p>
          <p>ログイン</p>
        </div>
      </header>
      <main className="w-full">{children}</main>
    </div>
  );
}
