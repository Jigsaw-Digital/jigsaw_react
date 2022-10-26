import "../styles/app.css";
import { ThemeProvider } from "next-themes";
import { getMainMenu, getSlugs } from "../utils/wp";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  const menuItems = await getMainMenu();

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps({ menuItems, ...ctx });
  }

  return { pageProps: { ...pageProps, menuItems } };
};

export default MyApp;
