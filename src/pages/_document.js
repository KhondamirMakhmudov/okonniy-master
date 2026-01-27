import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        <title>
          Оконный Мастер - Установка окон, дверей и балконов в Ташкенте
        </title>
        <meta
          name="description"
          content="Оконный Мастер - профессиональная установка пластиковых окон, дверей и балконов в Ташкенте. Бесплатный замер, качественное производство, быстрая установка с уборкой. Лучшие мастера своего дела!"
        />

        <meta
          name="keywords"
          content="Оконный Мастер, установка окон Ташкент, пластиковые окна, окна ПВХ, балконы под ключ, остекление балконов, двери входные, межкомнатные двери, бесплатный замер окон, установка окон цена, окна Узбекистан"
        />

        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Оконный Мастер - Установка окон, дверей и балконов"
        />

        <meta
          property="og:description"
          content="Профессиональная установка пластиковых окон, дверей и балконов. Бесплатный замер, качественное производство, установка с уборкой. Оконный Мастер - лучший мастер своего дела!"
        />

        <meta property="og:type" content="website" />

        <meta name="author" content="Оконный Мастер" />

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
