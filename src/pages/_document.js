import { Html, Head, Main, NextScript } from "next/document";

export default function Document({ locale }) {
  const isUz = locale === "uz";

  const seoData = {
    ru: {
      title: "Asabiyya.uz — Оконный Мастер в Ташкенте",
      description:
        "Asabiyya.uz — Оконный Мастер: установка пластиковых окон, дверей и фасадов в Ташкенте. Бесплатный замер, производство, монтаж с гарантией.",
      keywords:
        "asabiyya.uz, Asabiyya, Оконный Мастер, установка окон Ташкент, пластиковые окна Ташкент, окна ПВХ, алюминиевые окна, фасадные системы, двери, балконы под ключ, остекление балконов, бесплатный замер, монтаж окон, окна Узбекистан",
      ogTitle: "Asabiyya.uz — Оконный Мастер в Ташкенте",
      ogDescription:
        "Установка пластиковых окон, дверей и фасадов в Ташкенте. Бесплатный замер, производство и монтаж с гарантией.",
      twitterTitle: "Asabiyya.uz — Оконный Мастер",
      twitterDescription:
        "Окна, двери и фасады в Ташкенте. Бесплатный замер, производство и монтаж с гарантией.",
      locale: "ru_RU",
      lang: "ru",
    },
    uz: {
      title: "Asabiyya.uz — Oyna Ustasi Toshkentda",
      description:
        "Asabiyya.uz — Oyna Ustasi: Toshkentda plastik oynalar, eshiklar va fasadlarni o'rnatish. Bepul o'lchov, ishlab chiqarish, o'rnatish kafolati bilan.",
      keywords:
        "asabiyya.uz, Asabiyya, Oyna Ustasi, Toshkentda oynalar o'rnatish, plastik oynalar Toshkent, PVH oynalar, alyuminiy oynalar, fasad tizimlari, eshiklar, balkon osteklenie, bepul o'lchov, oyna o'rnatish, Uzbekistondan oynalar",
      ogTitle: "Asabiyya.uz — Oyna Ustasi Toshkentda",
      ogDescription:
        "Toshkentda plastik oynalar, eshiklar va fasadlarni o'rnatish. Bepul o'lchov, ishlab chiqarish va o'rnatish kafolati bilan.",
      twitterTitle: "Asabiyya.uz — Oyna Ustasi",
      twitterDescription:
        "Oynalar, eshiklar va fasadlar Toshkentda. Bepul o'lchov, ishlab chiqarish va o'rnatish kafolati bilan.",
      locale: "uz_UZ",
      lang: "uz",
    },
  };

  const seo = seoData[isUz ? "uz" : "ru"];

  return (
    <Html lang={seo.lang}>
      <Head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17991310916"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17991310916');
            `,
          }}
        />

        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Asabiyya.uz" />
        <meta name="application-name" content="Asabiyya.uz" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#111121" />
        <link rel="canonical" href="https://asabiyya.uz/" />

        <meta property="og:title" content={seo.ogTitle} />
        <meta property="og:description" content={seo.ogDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Asabiyya.uz" />
        <meta property="og:locale" content={seo.locale} />
        <meta property="og:url" content="https://asabiyya.uz/" />
        <meta
          property="og:image"
          content="https://asabiyya.uz/images/engelberg5.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.twitterTitle} />
        <meta name="twitter:description" content={seo.twitterDescription} />
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

Document.getInitialProps = async (ctx) => {
  const initialProps = await ctx.defaultGetInitialProps(ctx);
  return {
    ...initialProps,
    locale: ctx.locale || "ru",
  };
};
