import 'tailwindcss/tailwind.css';
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }): JSX.Element {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
