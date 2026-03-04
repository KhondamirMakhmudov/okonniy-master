import Wrapper from "@/layouts/Wrapper";
import {
  Award,
  Clock,
  Shield,
  Users,
  Truck,
  CheckCircle,
  Target,
  HeadphonesIcon,
} from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const Index = () => {
  const { t, isLoaded } = useLanguage();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const features = [
    {
      icon: Users,
      title: t("professionalTeam"),
      description: t("professionalTeamDesc"),
    },
    {
      icon: Target,
      title: t("complexProjects"),
      description: t("complexProjectsDesc"),
    },
    {
      icon: Clock,
      title: t("deadlineCompliance"),
      description: t("deadlineComplianceDesc"),
    },
    {
      icon: HeadphonesIcon,
      title: t("callCenter"),
      description: t("callCenterDesc"),
    },
    {
      icon: Shield,
      title: t("qualityControl"),
      description: t("qualityControlDesc"),
    },
    {
      icon: Truck,
      title: t("carefulDelivery"),
      description: t("carefulDeliveryDesc"),
    },
  ];

  if (!isLoaded) return null;

  return (
    <Wrapper modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20 md:py-32 px-6">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_35px,rgba(255,255,255,.05)_35px,rgba(255,255,255,.05)_70px)]"></div>
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              {t("aboutHeroTitle")}
            </h1>
            <div className="w-24 h-1.5 bg-gray-400 mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
              {t("aboutHeroDescription")}
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-16 border border-gray-200">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                {t("whyUsTitle")}
              </h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg md:text-xl leading-relaxed">
                  {t("whyUsPara1")}
                </p>
                <p className="text-lg md:text-xl leading-relaxed">
                  {t("whyUsPara2")}
                </p>
                <p className="text-lg md:text-xl leading-relaxed">
                  {t("whyUsPara3")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
              {t("ourAdvantagesTitle")}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Service Section */}
        <section className="py-16 md:py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 text-center">
              {t("qualityServiceTitle")}
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
              <p>{t("qualityServicePara1")}</p>
              <p>{t("qualityServicePara2")}</p>
            </div>
          </div>
        </section>

        {/* Responsibility Section */}
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 md:p-16 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gray-600 rounded-full blur-3xl opacity-20 -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-700 rounded-full blur-3xl opacity-20 -ml-32 -mb-32"></div>

              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  {t("responsibilityTitle")}
                </h2>
                <div className="space-y-6 text-lg md:text-xl text-gray-300">
                  <p className="leading-relaxed">{t("responsibilityPara1")}</p>
                  <p className="leading-relaxed">{t("responsibilityPara2")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Section */}
        <section className="py-16 md:py-24 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 text-center">
              {t("deliveryTitle")}
            </h2>
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200">
              <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
                <p>{t("deliveryPara1")}</p>
                <p>{t("deliveryPara2")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {t("readyToStart")}
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              {t("callCenterHours")}
            </p>
            <button
              onClick={() => setModalIsOpen(true)}
              className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-gray-950 text-white px-10 py-5 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
            >
              {t("contactUs")}
            </button>
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

export default Index;
