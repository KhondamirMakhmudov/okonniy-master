import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <title>Asabiyya.uz — Оконный Мастер в Ташкенте</title>
        <meta
          name="description"
          content="Asabiyya.uz — Оконный Мастер: установка пластиковых окон, дверей и фасадов в Ташкенте. Бесплатный замер, производство, монтаж с гарантией."
        />
        <meta
          name="keywords"
          content="asabiyya.uz, Asabiyya, Оконный Мастер, установка окон Ташкент, пластиковые окна Ташкент, окна ПВХ, алюминиевые окна, фасадные системы, двери, балконы под ключ, остекление балконов, бесплатный замер, монтаж окон, окна Узбекистан"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Asabiyya.uz" />
        <meta name="application-name" content="Asabiyya.uz" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#111121" />
        <link rel="canonical" href="https://asabiyya.uz/" />

        <meta
          property="og:title"
          content="Asabiyya.uz — Оконный Мастер в Ташкенте"
        />
        <meta
          property="og:description"
          content="Установка пластиковых окон, дверей и фасадов в Ташкенте. Бесплатный замер, производство и монтаж с гарантией."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Asabiyya.uz" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:url" content="https://asabiyya.uz/" />
        <meta
          property="og:image"
          content="https://asabiyya.uz/images/engelberg5.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Asabiyya.uz — Оконный Мастер" />
        <meta
          name="twitter:description"
          content="Окна, двери и фасады в Ташкенте. Бесплатный замер, производство и монтаж с гарантией."
        />
        <meta
          name="twitter:image"
          content="https://asabiyya.uz/images/engelberg5.png"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
