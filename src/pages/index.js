"use client";

import Footer from "@/components/footer";
import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Wrapper from "@/layouts/Wrapper";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Refs for scroll-triggered animations
  const materialsRef = useRef(null);
  const processRef = useRef(null);
  const pvcRef = useRef(null);
  const aluminumRef = useRef(null);

  const materialsInView = useInView(materialsRef, {
    once: true,
    margin: "-100px",
  });
  const processInView = useInView(processRef, { once: true, margin: "-100px" });
  const pvcInView = useInView(pvcRef, { once: true, margin: "-100px" });
  const aluminumInView = useInView(aluminumRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <Wrapper className="bg-white">

      <main>
        {/* HERO SECTION - ANIMATED */}
        <section className="relative h-screen w-full overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.3) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBsY1B1sh4FN_usiAAqf-MFnRK_tC4onpd5BuyZh1tK3zd1As6s9NrVXUPzzPaMb7VnTQwW4JhhRXPy17el3Uc-A5We6l0pP3QJZ36Oe8FrwUoRzcQmSPN5ekxtVxZCyJQYmKXfF1D7KNo54AFU6EDR_zIDYknHtG8OPQCymFVjn3PSR4akZ00Or-4b7l3k8msgtL85shDh5r5mArHUy8NHFrrfX9or05r_mFfN7kSwiEsSp7PBeTWQY0MAEAdMUSzk0mFNYC5vwkw6")`,
              y: scrollY * 0.5,
            }}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />

          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6 max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 backdrop-blur-sm bg-white/5 rounded-full">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="text-white/90 text-xs tracking-[0.2em] uppercase font-light">
                  Премиум качества
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-white text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight mb-8 max-w-6xl leading-[1.05]"
            >
              Оконный Мастер —<br />
              <span className="block mt-2">мастер своего дела</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-white/70 text-lg md:text-xl font-light max-w-2xl mb-12 leading-relaxed"
            >
              Сервис премиального уровня для заказа окон и дверей в Ташкенте
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <button className="group relative overflow-hidden px-10 py-4 bg-white text-black text-sm tracking-[0.15em] uppercase font-medium transition-all duration-500 hover:scale-105">
                <span className="relative z-10 flex items-center gap-3">
                  Заказать бесплатный замер
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white text-sm tracking-[0.15em] uppercase font-medium flex items-center gap-3">
                    Заказать бесплатный замер
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </span>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex flex-col items-center gap-2"
              >
                <span className="text-white/50 text-xs tracking-[0.2em] uppercase font-light">
                  Scroll
                </span>
                <svg
                  className="w-6 h-6 text-white/50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
              className="absolute left-0 top-1/2 w-20 h-[1px] bg-white/30 hidden lg:block"
              style={{ transformOrigin: "left" }}
            />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
              className="absolute right-0 top-1/2 w-20 h-[1px] bg-white/30 hidden lg:block"
              style={{ transformOrigin: "right" }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-0 left-0 right-0 z-20"
          >
            <div className="max-w-[1400px] mx-auto px-6 pb-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {[
                  { value: "15+", label: "Лет опыта" },
                  { value: "2000+", label: "Проектов" },
                  { value: "100%", label: "Качество" },
                  { value: "5 лет", label: "Гарантия" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.4 + index * 0.1 }}
                    className="backdrop-blur-md bg-white/5 border border-white/10 p-6 text-center"
                  >
                    <div className="text-3xl lg:text-4xl font-extralight text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-xs tracking-[0.2em] uppercase text-white/60 font-light">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* MATERIALS SECTION - ANIMATED */}
        <section
          ref={materialsRef}
          className="relative w-full bg-neutral-50 overflow-hidden"
          id="materials"
        >
          <div className="max-w-[1600px] mx-auto px-6 lg:px-12 pt-32 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={materialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={materialsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xs tracking-[0.3em] uppercase text-neutral-400 font-light mb-4 block"
              >
                Материалы
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={materialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl lg:text-7xl tracking-tight text-black leading-[0.95] mb-8"
              >
                Точность в каждой детали
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={materialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-neutral-500 text-lg font-light leading-relaxed max-w-xl"
              >
                Мы работаем только с материалами высочайшего качества,
                проверенными временем и технологиями.
              </motion.p>
            </motion.div>
          </div>

          <div className="max-w-[1600px] mx-auto px-6 lg:px-12 pb-32">
            <div className="grid lg:grid-cols-2 gap-6">
              {[
                {
                  num: "01",
                  title: "Натуральное дерево",
                  desc: "Экологически чистый дуб и орех, обработанные для вечной службы и природного тепла вашего дома.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXwko1h3stHd5CFbPT_Ongx2ObEHYsd0ckqNBM_uqN1NlVudFqYCJb6uJTMSlCZyFLfUa-ULlSZjhB3xLJ_nrIX1neB7w2jHS58Dq1Friv8G1-mKvyDyoYFG7W6GEfCOuMjTuWv2Skad29rMvXpkXdmr5e6ACjj8IL93AefMxRDj0q32keyplXP2_KUzoUWAWLwnxxdhP7uCDjpdyNuySxyG7oYuqysoJDHTnGaeZu1tAcHSsu5-cDLP3tB_-09NzVj7v8-R4hmPfF",
                  link: "#wood",
                },
                {
                  num: "02",
                  title: "Современный металл",
                  desc: "Аэрокосмический алюминий с терморазрывом для безупречной прочности и минималистичного дизайна.",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjQyVTnEnYUIFPU3TJUEkTeZE7W3bT35-PzH9X9LCVfTWPFRQeWLa60Nxl6PGHGb3-JA4b0gK1vk1p4Ym1ZE5RjmEKIjRCXvtQttmQCAdOBBGQDpmG3xgywMxrQycG0OWNqY7XRGtaYFNBj87SkaA4EzQZb1rFp7pFlV9PMDaLut9Gc63jq9EJVSYy2AOVlLzsqAhyOTuvLjlHcx5w5zJdOC5BpAtmBVjKMVkGn8Uw3Xtt1nEDDpUZbmz0Wx9hi2f36SBIpfRhVtvj",
                  link: "#metal",
                },
              ].map((material, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  animate={materialsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 0.5 + index * 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative h-[600px] overflow-hidden bg-black"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url("${material.img}")`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-700" />
                  <div className="absolute inset-0 flex flex-col justify-end p-10 lg:p-16">
                    <div className="absolute top-10 right-10 lg:top-16 lg:right-16">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={
                          materialsInView ? { opacity: 1, scale: 1 } : {}
                        }
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                        className="w-16 h-16 border border-white/20 flex items-center justify-center"
                      >
                        <span className="text-white/40 text-sm font-light">
                          {material.num}
                        </span>
                      </motion.div>
                    </div>
                    <div className="mb-8">
                      <h3 className="text-white text-4xl lg:text-5xl font-extralight tracking-tight mb-4 leading-none">
                        {material.title.split(" ")[0]}
                        <br />
                        {material.title.split(" ").slice(1).join(" ")}
                      </h3>
                      <div className="w-16 h-[1px] bg-white/30 group-hover:w-32 transition-all duration-700" />
                    </div>
                    <p className="text-white/60 text-sm lg:text-base font-light leading-relaxed max-w-md mb-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                      {material.desc}
                    </p>
                    <a
                      href={material.link}
                      className="inline-flex items-center gap-3 text-white text-xs tracking-[0.2em] uppercase font-medium group-hover:gap-5 transition-all duration-500"
                    >
                      <span>Узнать больше</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS SECTION - ANIMATED */}
        <section
          ref={processRef}
          className="relative w-full bg-white overflow-hidden"
          id="process"
        >
          <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-32">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-20"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={processInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xs tracking-[0.3em] uppercase text-neutral-400 font-light mb-4 block"
              >
                Процесс
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl lg:text-7xl  tracking-tight text-black mb-6"
              >
                Как мы работаем
              </motion.h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
              {[
                {
                  num: "01",
                  title: "Заявка",
                  desc: "Профессиональная консультация и подбор решений под ваш интерьер",
                },
                {
                  num: "02",
                  title: "Замеры",
                  desc: "Бесплатный выезд мастера для точного измерения и оценки проемов",
                },
                {
                  num: "03",
                  title: "Производство",
                  desc: "Высокотехнологичное изготовление на современном оборудовании",
                },
                {
                  num: "04",
                  title: "Монтаж",
                  desc: "Чистая установка и финальная настройка фурнитуры нашими мастерами",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={processInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 0.4 + index * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative group"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={processInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: 0.6 + index * 0.15,
                    }}
                    className="text-[80px] font-extralight text-neutral-300 absolute -top-2 -left-2 group-hover:text-neutral-200 transition-colors"
                  >
                    {step.num}
                  </motion.div>
                  <div className="relative pt-16">
                    <h4 className="text-xl font-light text-black mb-3">
                      {step.title}
                    </h4>
                    <p className="text-sm text-neutral-500 font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PVC Windows Section */}
        <section
          className="relative w-full bg-neutral-50 overflow-hidden"
          id="pvc"
        >
          <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-32">
            <div className="mb-20">
              <div className="flex items-baseline gap-6 mb-4">
                <span className="text-xs tracking-[0.3em] uppercase text-neutral-400 font-light">
                  01 / Продукция
                </span>
                <div className="h-[1px] flex-1 bg-neutral-200" />
              </div>
              <h2 className="text-5xl lg:text-7xl  tracking-tight text-black mb-6">
                ПВХ окна
              </h2>
              <p className="text-neutral-500 text-lg font-light leading-relaxed max-w-2xl">
                Энергоэффективные решения премиум-класса для комфортного
                микроклимата вашего дома
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-20">
              {[
                {
                  brand: "Akfa Systems",
                  model: "Quattro 6000",
                  specs: [
                    { label: "Камеры", value: "4-камерная система" },
                    { label: "Глубина", value: "60 мм" },
                    { label: "Макс. габариты", value: "3000 × 2400 мм" },
                    { label: "Стекло", value: "4 – 32 мм" },
                  ],
                  performance: [
                    { label: "Теплосбережение", value: 85 },
                    { label: "Шумоизоляция", value: 70 },
                  ],
                },
                {
                  brand: "Engelberg",
                  model: "Trio 6000",
                  specs: [
                    { label: "Камеры", value: "3-камерная система" },
                    { label: "Глубина", value: "60 мм" },
                    { label: "Макс. габариты", value: "2800 × 2200 мм" },
                    { label: "Стекло", value: "4 – 24 мм" },
                  ],
                  performance: [
                    { label: "Теплосбережение", value: 75 },
                    { label: "Шумоизоляция", value: 65 },
                  ],
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className="group relative bg-white border border-neutral-200 overflow-hidden"
                >
                  <div className="p-10 lg:p-12">
                    <div className="flex items-start justify-between mb-12 pb-8 border-b border-neutral-200">
                      <div>
                        <div className="text-xs tracking-[0.2em] uppercase text-neutral-400 mb-2 font-light">
                          {product.brand}
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-extralight tracking-tight text-black">
                          {product.model}
                        </h3>
                      </div>
                      <div className="w-12 h-12 border border-neutral-200 flex items-center justify-center text-neutral-300">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <rect
                            x="3"
                            y="3"
                            width="18"
                            height="18"
                            rx="2"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M3 9h18M3 15h18M9 9v12M15 9v12"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-12">
                      {product.specs.map((spec, i) => (
                        <div key={i}>
                          <div className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-2 font-medium">
                            {spec.label}
                          </div>
                          <div className="text-base text-black font-light">
                            {spec.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-8 mb-12">
                      {product.performance.map((perf, i) => (
                        <div key={i}>
                          <div className="flex items-baseline justify-between mb-3">
                            <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-500 font-medium">
                              {perf.label}
                            </span>
                            <span className="text-2xl font-extralight text-black">
                              {perf.value}
                              <span className="text-sm">%</span>
                            </span>
                          </div>
                          <div className="h-[2px] bg-neutral-200 relative overflow-hidden">
                            <div
                              className="absolute inset-y-0 left-0 bg-black transition-all duration-1000 ease-out group-hover:bg-neutral-800"
                              style={{ width: `${perf.value}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <button className="w-full py-4 bg-black text-white text-xs tracking-[0.2em] uppercase font-medium hover:bg-neutral-800 transition-colors duration-300">
                      Заказать расчет
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-black text-white p-12 lg:p-20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent" />
              <div className="max-w-3xl relative">
                <h4 className="text-2xl lg:text-3xl font-extralight mb-6 tracking-tight">
                  Надежность и энергоэффективность
                </h4>
                <p className="text-white/60 font-light leading-relaxed mb-10 text-base">
                  Наши ПВХ системы объединяют в себе передовые технологии
                  теплосбережения и исключительную долговечность. Благодаря
                  многокамерной структуре и качественному уплотнению, окна
                  обеспечивают высокий коэффициент светопропускания при
                  минимальных теплопотерях.
                </p>
                <div className="flex flex-wrap gap-8 text-xs tracking-[0.2em] uppercase font-medium">
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-white rounded-full" />
                    40 лет гарантии
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-white rounded-full" />
                    Эко-материалы
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-white rounded-full" />
                    Сертифицировано
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Aluminum Windows Section */}
        <section className="relative w-full bg-white overflow-hidden" id="alu">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-32">
            <div className="mb-20">
              <div className="flex items-baseline gap-6 mb-4">
                <span className="text-xs tracking-[0.3em] uppercase text-neutral-400 font-light">
                  02 / Продукция
                </span>
                <div className="h-[1px] flex-1 bg-neutral-200" />
              </div>
              <h2 className="text-5xl lg:text-7xl  tracking-tight text-black mb-6">
                Алюминиевые окна
              </h2>
              <p className="text-neutral-500 text-lg font-light leading-relaxed max-w-2xl">
                Архитектурные решения для современного дизайна с панорамным
                остеклением
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-20">
              {[
                {
                  badge: "Premium",
                  badgeColor: "bg-black",
                  model: "TERMO 70",
                  specs: [
                    { label: "Глубина створки", value: "70 мм" },
                    { label: "Видимая ширина", value: "92 мм" },
                    { label: "Терморазрыв", value: "34 мм Polyamide" },
                    { label: "Толщина заполнения", value: "до 52 мм" },
                    { label: "Теплопотери (Uf)", value: "1.7 W/m²K" },
                  ],
                },
                {
                  badge: "Standard",
                  badgeColor: "bg-neutral-400",
                  model: "TERMO 65",
                  specs: [
                    { label: "Глубина створки", value: "65 мм" },
                    { label: "Видимая ширина", value: "85 мм" },
                    { label: "Терморазрыв", value: "24 мм Polyamide" },
                    { label: "Толщина заполнения", value: "до 44 мм" },
                    { label: "Теплопотери (Uf)", value: "2.1 W/m²K" },
                  ],
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className="bg-neutral-50 border border-neutral-200 overflow-hidden group"
                >
                  <div className="p-10 lg:p-12">
                    <div className="flex items-start justify-between mb-12">
                      <div>
                        <div
                          className={`inline-block px-3 py-1 ${product.badgeColor} text-white text-[9px] tracking-[0.2em] uppercase font-bold mb-4`}
                        >
                          {product.badge}
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-extralight tracking-tight text-black">
                          {product.model}
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-4 mb-12">
                      {product.specs.map((spec, i) => (
                        <div
                          key={i}
                          className="flex justify-between items-baseline py-3 border-b border-neutral-100"
                        >
                          <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 font-medium">
                            {spec.label}
                          </span>
                          <span className="text-base text-black font-light">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button className="w-full py-4 bg-black text-white text-xs tracking-[0.2em] uppercase font-medium hover:bg-neutral-800 transition-colors duration-300">
                      Заказать проект
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h4 className="text-3xl lg:text-4xl font-light tracking-tight text-black mb-8">
                  Преимущества алюминия
                </h4>
                <p className="text-neutral-500 font-light leading-relaxed mb-12 text-base">
                  Алюминиевые системы — это выбор для современной архитектуры.
                  Высокая прочность материала позволяет создавать конструкции
                  больших площадей с минимальной шириной профиля, обеспечивая
                  панорамный вид.
                </p>

                <div className="space-y-8">
                  {[
                    {
                      title: "Пожаробезопасность",
                      desc: "Материал не горит и не выделяет токсичных веществ при нагреве",
                    },
                    {
                      title: "Химическая стойкость",
                      desc: "Устойчивость к коррозии и воздействию агрессивной среды",
                    },
                    {
                      title: "Долговечность",
                      desc: "Срок службы более 50 лет без потери эксплуатационных свойств",
                    },
                  ].map((benefit, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 border border-neutral-200 flex items-center justify-center text-black">
                        <div className="w-2 h-2 bg-black rounded-full" />
                      </div>
                      <div>
                        <h5 className="text-sm tracking-[0.15em] uppercase text-black mb-2 font-medium">
                          {benefit.title}
                        </h5>
                        <p className="text-neutral-500 text-sm font-light leading-relaxed">
                          {benefit.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div
                  className="aspect-[4/5] bg-cover bg-center"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCIA4JpcYS1_aSrUKeZE31fRLLm8PGqnX5AQuKhmbHBiEpENZGyZ9ur0ExnxDliumtvHT_5zmpam4jBe_1_ncUEOYl7D26x67OkwyqqrOQH2UwhLWpjbvT_jHxjf08v5IAOtz82G7e0YxNbV1tvNBp3d3NkvBe0Q90sseZ3QiL0TXMGMuDWTWh4acbOGwbg1uj9BoX0pcWnY0paoL9naeQbyGyTjypnr-nec5jKOgsNwdWNzuWLSfTok5L6_J5rBK2CBWAZP3FHSwOC")`,
                  }}
                />
                <div className="absolute bottom-8 left-8 bg-white p-8 border border-neutral-200 shadow-xl">
                  <div className="text-5xl font-extralight text-black mb-2">
                    50+
                  </div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 font-medium">
                    Лет службы
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </Wrapper>
  );
}
