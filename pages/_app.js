import '../styles/globals.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { AuthProvider } from "../auth/context"
import NProgress from "nprogress"
import Router from "next/router"
import Head from "next/head"

Router.events.on("routeChangeStart", () => {
  NProgress.start();
})

Router.events.on("routeChangeComplete", () => {
  NProgress.done();
})

Router.events.on("routeChangeError", () => {
  NProgress.done();
})

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="/assets/nprogress.css" />
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  )
}

export default MyApp
