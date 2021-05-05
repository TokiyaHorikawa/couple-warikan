import Head from 'next/head';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { signUpCreateUser } from '@/api/users';
import Layout, { siteTitle } from '@/components/layout';
import Input from '@/components/form/Input';
import ButtonSubmit from '@/components/form/ButtonSubmit';

type LoginForm = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
};
export default function SignUp(): JSX.Element {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<LoginForm>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirm_password: '',
    },
  });

  const submit = async ({ name, email, password }: LoginForm) => {
    // 新規アカウント作成
    const isSuccess = await signUpCreateUser({ name, email, password });
    isSuccess && alert('サインアップ成功');
    // TODO: サインアップ後の遷移先
  };

  return (
    <Layout>
      <Head>
        <title>Sign Up - {siteTitle}</title>
      </Head>
      <section>
        <div className="m-auto bg-white w-full max-w-sm rounded overflow-hidden shadow-lg">
          <h2 className="text-2xl p-2 text-center">新規登録</h2>
          <form onSubmit={handleSubmit(submit)} className="w-full">
            <div className="flex flex-col">
              <div className="pb-5 px-5">
                <Input
                  type="text"
                  name="name"
                  label="ユーザー名"
                  placeholder="ユーザー名を入力"
                  errors={errors}
                  options={{ required: 'ユーザー名は必須です' }}
                  register={register}
                />
              </div>
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
                  options={{ required: 'パスワードは必須です' }}
                  register={register}
                />
              </div>
              <div className="pb-5 px-5">
                <Input
                  type="password"
                  name="confirm_password"
                  label="パスワードの確認"
                  placeholder="パスワードの確認を行います"
                  errors={errors}
                  options={{
                    required: 'パスワード確認は必須です',
                    validate: {
                      message: (v) =>
                        v !== getValues('password')
                          ? '上で入力したパスワードと値が異なります'
                          : null,
                    },
                  }}
                  register={register}
                />
              </div>
              <div className="p-5">
                <ButtonSubmit type="submit" label="新規登録" />
              </div>
            </div>
          </form>
          <Link href="/login">
            <p className="text-center mb-2 text-gray-500 hover:underline cursor-pointer">
              -- 既存のアカウントでログインする --
            </p>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
