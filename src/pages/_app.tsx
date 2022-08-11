import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { useTheme } from '../../domain/model/theme'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  )
}

const ThemeProvider = (props: React.PropsWithChildren) => {
  const [theme] = useTheme()
  return <div data-theme={theme}>{props.children}</div>
}
