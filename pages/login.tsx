import Head from 'next/head';
import { useForm } from 'react-hook-form';
import Layout, { siteTitle } from '../components/layout';
import Input from '@/components/form/Input';
import ButtonSubmit from '@/components/form/ButtonSubmit';

type LoginForm = {
  email: string;
  password: string;
};
export default function Home(): JSX.Element {
  const { register, handleSubmit } = useForm<LoginForm>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const submit = (data) => {
    console.log(data);
  };

  return (
    <Layout>
      <Head>
        <title>Login - {siteTitle}</title>
      </Head>
      <section>
        <div className="m-auto bg-white w-full max-w-sm rounded overflow-hidden shadow-lg">
          <h2 className="text-2xl p-2 text-center">ログイン</h2>
          <form onSubmit={handleSubmit(submit)} className="w-full">
            <div className="flex flex-col">
              <div className="pb-5 px-5">
                <Input
                  type="email"
                  name="email"
                  label="Email"
                  placeholder="メールアドレスを入力"
                  register={register}
                />
              </div>
              <div className="pb-5 px-5">
                <Input
                  type="password"
                  name="password"
                  label="Password"
                  placeholder="パスワードを入力"
                  register={register}
                />
              </div>
              <div className="p-5">
                <ButtonSubmit type="submit" label="ログイン" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}
