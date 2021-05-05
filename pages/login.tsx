import Head from 'next/head';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { login } from '@/api/auth';
import Layout, { siteTitle } from '@/components/layout';
import Input from '@/components/form/Input';
import ButtonSubmit from '@/components/form/ButtonSubmit';

type LoginForm = {
  email: string;
  password: string;
};
export default function Login(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const submit = async ({ email, password }: LoginForm) => {
    // メールアドレスでログイン
    const isSuccess = await login(email, password);
    isSuccess && alert('ログイン成功');
    // TODO: ログイン後の遷移
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
                  errors={errors}
                  options={{ required: 'メールアドレスは必須です' }}
                  register={register}
                />
              </div>
              <div className="pb-5 px-5">
                <Input
                  type="password"
                  name="password"
                  label="Password"
                  placeholder="パスワードを入力"
                  errors={errors}
                  options={{ required: 'パスワード確認は必須です' }}
                  register={register}
                />
              </div>
              <div className="p-5">
                <ButtonSubmit type="submit" label="ログイン" />
              </div>
            </div>
          </form>
          <Link href="/signup">
            <p className="text-center mb-2 text-gray-500 hover:underline cursor-pointer">
              -- 新しくアカウントを作る --
            </p>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
