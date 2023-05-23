import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Seo from '../components/seo'
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/components/Theme';
export default function App({ Component, pageProps }: AppProps) {

  return<><ThemeProvider theme={theme}><Seo pageTitle={"snap"} /> <Component {...pageProps} /></ThemeProvider></>
}
