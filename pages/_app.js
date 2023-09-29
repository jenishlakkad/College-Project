import "../styles/globals.css";
import "../styles/index.css";
import "../styles/Homepage.css";
import '../styles/product.css'
import '../styles/addCart.css'
import '../styles/authentication.css'
import '../styles/comWish.css'
import '../styles/error.css'
import '../styles/responsive.css'
import '../styles/checkout.css'
import Script from "next/script";
import Head from "next/head";
import { createContext, useState } from "react";
import ScrollToTop from "react-scroll-to-top";
export const CartContext = createContext();
function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([]);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
          <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css" />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      <Script
        src="https://kit.fontawesome.com/b0fc5c0ae8.js"
        crossOrigin="anonymous"
      ></Script>
    <CartContext.Provider value={{ cart, setCart }}>
    <ScrollToTop smooth />
        <Component {...pageProps} />
     </CartContext.Provider>
    </>
  );
}

export default MyApp;
