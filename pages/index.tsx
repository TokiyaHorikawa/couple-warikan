import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Home - {siteTitle}</title>
      </Head>
      <section>
        <p>カップル割勘の使い方</p>
      </section>
      <section>
        <h2>デモ</h2>
        <div>ここにログインせずに使えるカップル割勘</div>
      </section>
    </Layout>
  );
}
