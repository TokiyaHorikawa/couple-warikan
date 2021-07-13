import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import DemoWarikan from '@/components/DemoWarikan';

export default function Home(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Home - {siteTitle}</title>
      </Head>
      <section className="grid justify-items-center p-3 bg-purple-100">
        <h2 className="text-3xl">Demo</h2>
        <DemoWarikan />
      </section>
    </Layout>
  );
}
