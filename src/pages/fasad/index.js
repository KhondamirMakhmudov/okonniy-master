import { useState } from "react";
import Image from "next/image";
import Wrapper from "@/layouts/Wrapper";
import { Layers, ShieldCheck, Ruler, Sparkles, Building2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Index = () => {
  const { t, isLoaded } = useLanguage();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const systems = [
    {
      icon: Layers,
      title: t("positionRigel"),
      description: t("positionRigelDesc"),
    },
    {
      icon: Building2,
      title: t("structuralGlazing"),
      description: t("structuralGlazingDesc"),
    },
    {
      icon: Sparkles,
      title: t("semiStructured"),
      description: t("semiStructuredDesc"),
    },
  ];

  const qualities = [
    {
      icon: ShieldCheck,
      title: t("rightHermetic"),
      description: t("rightHermeticDesc"),
    },
    {
      icon: Ruler,
      title: t("rightGeometry"),
      description: t("rightGeometryDesc"),
    },
  ];

  if (!isLoaded) return null;

  return (
    <Wrapper modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}>
      <div className="min-h-screen bg-gradient-to-b from-white via-neutral-50 to-white">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
          <div className="absolute inset-0 opacity-15">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_55%)]"></div>
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28">
            <p className="text-sm uppercase tracking-[0.3em] text-white/70 mb-4">
              {t("facadesTitle")}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t("facadesDescription")}
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed">
              {t("facadesContent")}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => setModalIsOpen(true)}
                className="px-8 py-3 bg-white text-gray-900 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-white/90 transition"
              >
                {t("getConsultation")}
              </button>
              <div className="px-6 py-3 border border-white/30 text-white/80 text-xs tracking-[0.2em] uppercase">
                {t("ownProduction")}
              </div>
            </div>
          </div>
        </section>

        {/* Systems */}
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              {t("facadesTypes")}
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
                {t("technology")}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {t("technologyDesc")}
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
                alt={t("facadesTitle")}
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
                {t("facadesWhere")}
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                {t("facadesWhereDesc")}
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-sm uppercase tracking-[0.2em]">
                <div className="bg-white/10 rounded-xl p-5">
                  {t("businessCenters")}
                </div>
                <div className="bg-white/10 rounded-xl p-5">
                  {t("commercialBuildings")}
                </div>
                <div className="bg-white/10 rounded-xl p-5">
                  {t("residentialObjects")}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("calculateFacade")}
            </h2>
            <p className="text-lg text-gray-600 mb-8">{t("calculateDesc")}</p>
            <button
              onClick={() => setModalIsOpen(true)}
              className="px-10 py-4 bg-gray-900 text-white text-xs tracking-[0.25em] uppercase font-semibold hover:bg-gray-800 transition"
            >
              {t("orderCalculation")}
            </button>
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

export default Index;
