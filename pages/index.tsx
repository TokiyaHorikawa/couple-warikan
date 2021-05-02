import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import DemoWarikan from '@/components/DemoWarikan';

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Home - {siteTitle}</title>
      </Head>
      <section>
        <p>カップル割勘の使い方</p>
      </section>
      <section className="grid justify-items-center p-3 bg-purple-200">
        <h2 className="text-3xl">Demo</h2>
        <DemoWarikan />
      </section>
    </Layout>
  );
}
