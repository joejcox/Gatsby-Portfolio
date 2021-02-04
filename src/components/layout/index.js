import React from "react"
import { Helmet } from "react-helmet"
import Header from "components/header/index"
import Footer from "components/footer/index"
import "../../assets/styles/global.scss"
import "./styles.scss"

const Layout = ({ children, title, description }) => {
  return (
    <div className="wrapper">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          property="og:title"
          content="UK Website Development with content writing"
        />
        <meta
          property="og:description"
          content="Fully bespoke websites including content writing. Delivering fast, optimised eCommerce and brochure websites"
        />
        <meta
          property="og:image"
          content="/src/assets/images/share-image.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="UK Website Development with content"
        />
        <meta
          property="twitter:description"
          content="Fully bespoke websites including content writing. Delivering fast, optimised eCommerce and brochure websites"
        />
        <meta
          property="twitter:image"
          content="/src/assets/images/share-image.jpg"
        />
        <meta
          property="twitter:image:alt"
          content="A web developer's laptop with code on the screen"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <style>
          {`
          @font-face {
            font-family: 'Lato';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/lato/v17/S6uyw4BMUTPHjxAwXjeu.woff2) format('woff2');
            unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
          }
          
          @font-face {
            font-family: 'Lato';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/lato/v17/S6uyw4BMUTPHjx4wXg.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          
          @font-face {
            font-family: 'Patua One';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/patuaone/v11/ZXuke1cDvLCKLDcimxB44_lu.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }`}
        </style>
      </Helmet>
      <div className="wrapper-top">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
