import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import Wrapper from "@/layouts/Wrapper";
import { Layers, ShieldCheck, Ruler, Sparkles, Building2 } from "lucide-react";

const Index = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const systems = [
    {
      icon: Layers,
      title: "Стоечно-ригельные системы",
      description:
        "Классическое решение для витражей и фасадов с точной геометрией и стабильной жесткостью конструкций.",
    },
    {
      icon: Building2,
      title: "Структурное остекление",
      description:
        "Эффект цельного стеклянного полотна с минимальными видимыми стыками для современных зданий.",
    },
    {
      icon: Sparkles,
      title: "Полуструктурные фасады",
      description:
        "Баланс между эстетикой и технологичностью для коммерческих и жилых объектов.",
    },
  ];

  const qualities = [
    {
      icon: ShieldCheck,
      title: "Надежная герметичность",
      description:
        "Многоконтурные уплотнения защищают от ветра, влаги и пыли в любое время года.",
    },
    {
      icon: Ruler,
      title: "Точная геометрия",
      description:
        "Стабильные размеры и жесткость профиля обеспечивают идеальную посадку стеклопакетов.",
    },
  ];

  return (
    <>
      <Head>
        <title>Фасадные системы в Ташкенте — Asabiyya.uz</title>
        <meta
          name="description"
          content="Фасадные системы Asabiyya.uz: стоечно-ригельные, структурные и полуструктурные решения. Проектирование, производство и монтаж в Ташкенте."
        />
        <link rel="canonical" href="https://asabiyya.uz/fasad" />
        <meta
          property="og:title"
          content="Фасадные системы в Ташкенте — Asabiyya.uz"
        />
        <meta
          property="og:description"
          content="Архитектурные фасады премиум-уровня: проектирование, производство и монтаж."
        />
        <meta property="og:url" content="https://asabiyya.uz/fasad" />
        <meta
          property="og:image"
          content="https://asabiyya.uz/images/engelberg5.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Wrapper modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}>
        <div className="min-h-screen bg-gradient-to-b from-white via-neutral-50 to-white">
          {/* Hero */}
          <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
            <div className="absolute inset-0 opacity-15">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_55%)]"></div>
            </div>
            <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28">
              <p className="text-sm uppercase tracking-[0.3em] text-white/70 mb-4">
                Фасадные системы
              </p>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Архитектурные фасады премиум-уровня
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed">
                Оконный Мастер проектирует и производит фасадные конструкции для
                жилых и коммерческих зданий. Мы обеспечиваем точную геометрию,
                устойчивость к климату и безупречный внешний вид на долгие годы.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => setModalIsOpen(true)}
                  className="px-8 py-3 bg-white text-gray-900 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-white/90 transition"
                >
                  Получить консультацию
                </button>
                <div className="px-6 py-3 border border-white/30 text-white/80 text-xs tracking-[0.2em] uppercase">
                  Собственное производство
                </div>
              </div>
            </div>
          </section>

          {/* Systems */}
          <section className="py-16 md:py-24 px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                Типы фасадных решений
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {systems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
                  >
                    <item.icon className="w-10 h-10 text-gray-900 mb-6" />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Quality */}
          <section className="py-16 md:py-24 px-6 bg-white">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Технологичность и контроль качества
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Мы используем усиленные профили, надежную фурнитуру и
                  энергоэффективные стеклопакеты. Каждая партия проходит
                  проверку на герметичность, геометрию и соответствие проекту.
                </p>
                <div className="space-y-5">
                  {qualities.map((item, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <item.icon className="w-6 h-6 text-gray-900 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/images/engelberg5.png"
                  alt="Фасадные системы Оконный Мастер"
                  fill
                  className="object-contain bg-white"
                />
              </div>
            </div>
          </section>

          {/* Application */}
          <section className="py-16 md:py-24 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Где применяются наши фасады
                </h2>
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  Фасадные конструкции Оконный Мастер подходят для офисных
                  центров, торговых комплексов, жилых новостроек, общественных
                  пространств и частных домов.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-sm uppercase tracking-[0.2em]">
                  <div className="bg-white/10 rounded-xl p-5">
                    Бизнес-центры
                  </div>
                  <div className="bg-white/10 rounded-xl p-5">
                    Торговые здания
                  </div>
                  <div className="bg-white/10 rounded-xl p-5">
                    Жилые объекты
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 md:py-24 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Хотите рассчитать фасад?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Оставьте заявку, и мы подготовим предложение под ваш проект.
              </p>
              <button
                onClick={() => setModalIsOpen(true)}
                className="px-10 py-4 bg-gray-900 text-white text-xs tracking-[0.25em] uppercase font-semibold hover:bg-gray-800 transition"
              >
                Заказать расчет
              </button>
            </div>
          </section>
        </div>
      </Wrapper>
    </>
  );
};

export default Index;
