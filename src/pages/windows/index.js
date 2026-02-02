import { useState } from "react";
import Image from "next/image";
import Sidebar from "@/components/sidebar";
import Wrapper from "@/layouts/Wrapper";

const brandData = {
  1: {
    id: 1,
    name: "Akfa",
    slug: "akfa",
    tagline: "AKFA - ведущий производитель строительных материалов",
    hero: {
      title: "Качество, проверенное временем",
      description: "Современные решения для вашего комфорта",
      image: "/images/akfa-hero.jpg",
    },
    features: [
      {
        title: "Весь мир на ладони",
        description:
          "Окно или стена? С AKFA не нужно выбирать между защищенным и светлым помещением. Сделайте окно во всю стену, добавьте прозрачную дверь высотой во всё помещение, наслаждайтесь прекрасным видом и атмосферой легкости.",
        icon: "shield",
        image: "/images/akfa1.png",
      },
      {
        title: "Герметичность и надежность",
        description:
          "Вся фурнитура, опорные и направляющие ролики, задвижки и запоры, изготавливаются из высококачественной нержавеющей стали. А благодаря системе уплотнения и уникальной конструкции профильной системы, AKFA является герметичной на 100% и гарантировано прослужат долгие годы.",
        icon: "bolt",
        image: "/images/akfa2.png",
      },
    ],
    products: [
      {
        id: 1,
        name: "Окна ПВХ",
        price: "от 50 000 сум",
        image: "/images/akfa-1.jpg",
      },
      {
        id: 2,
        name: "Двери",
        price: "от 150 000 сум",
        image: "/images/akfa-2.jpg",
      },
    ],
  },
  2: {
    id: 2,
    name: "Engelberg",
    slug: "engelberg",
    tagline: "Европейское качество для климата Центральной Азии",
    hero: {
      title: "Engelberg",
      subtitle: "Совершенство конструкции",
      description:
        "Профиль адаптирован под климат Центральной Азии и интенсивное использование",
    },
    features: [
      {
        title: "Совершенство конструкции",
        description:
          "Пять камер и стальной усилитель надежно держат форму, не деформируются, сохраняют тепло и защищают от шума с улицы.",
        highlight:
          "Серия профилей Engelberg 70 станет отличным дополнением гостиной, рабочего кабинета, библиотеки и спальни.",
        icon: "architecture",
        image: "/images/engelberg.png",
      },
      {
        title: "Летняя прохлада",
        description:
          "Модель Engelberg разработана специально для климатических условий Средней Азии — они обеспечивают высокий уровень энергосбережения, что особенно важно жарким летом.",
        highlight:
          "Даже в самую знойную погоду окна Engelberg 70 помогут создать в доме комфортную температуру.",
        icon: "ac_unit",
        image: "/images/engelberg2.png",
      },
      {
        title: "И теплая зима",
        description:
          "В зимний период аргонное наполнение активно препятствует теплообмену между улицей и домом, а специальное покрытие i-стекла отражает тепловые волны обратно в дом.",
        icon: "local_fire_department",
        image: "/images/engelberg4.png",
      },
    ],
    comfort: {
      title: "Для тех, кто выбирает максимальный комфорт",
      description:
        "Профиль Engelberg 70 адаптирован под климат Центральной Азии и интенсивное использование. Он выдерживает высокие перепады температуры, длительное воздействие солнечных лучей и серьёзную нагрузку. Герметичная конструкция защищает от теплопотерь, обеспечивает шумо- и влагоизоляцию. А специальное стекло пропускает больше света, чтобы в помещении было уютно в любую погоду.",
      image: "/images/engelberg3.png",
    },
    specifications: {
      title: "Характеристики",
      specs: [
        { label: "Тип профиля", value: "ПВХ" },
        { label: "Серия профиля", value: "Теплая" },
        { label: "Количество камер", value: "5" },
        { label: "Толщина стенки профиля", value: "2,8 мм" },
        { label: "Монтажная плоскость", value: "70 мм" },
        { label: "Максимальная высота створки", value: "2300 мм" },
        { label: "Максимальная ширина створки", value: "1000 мм" },
        { label: "Толщина стеклопакета", value: "24-30 мм" },
      ],
    },
  },
};

const Index = () => {
  const [selectedBrand, setSelectedBrand] = useState(brandData[1]); // Default to Engelberg
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleCompanySelect = (company) => {
    setSelectedBrand(brandData[company.id]);
  };

  return (
    <Wrapper modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}>
      <div className="flex">
        <Sidebar onCompanySelect={handleCompanySelect} />

        <div className="flex-1 bg-white">
          {/* Hero Section */}
          <div className="relative h-100 bg-linear-to-r from-gray-900 to-gray-700">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
              <p className="text-white/90 text-sm font-medium mb-2 uppercase tracking-wide">
                {selectedBrand.tagline}
              </p>
              <h1 className="text-5xl font-bold text-white mb-4">
                {selectedBrand.hero.title}
              </h1>
              {selectedBrand.hero.subtitle && (
                <h2 className="text-3xl font-semibold text-white/90 mb-4">
                  {selectedBrand.hero.subtitle}
                </h2>
              )}
              <p className="text-white/80 text-lg max-w-2xl">
                {selectedBrand.hero.description}
              </p>
            </div>
          </div>

          <div className="container mx-auto px-6 py-12">
            {/* Features Section */}
            {selectedBrand.features && (
              <div className="space-y-16 mb-16">
                {selectedBrand.features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex flex-col lg:flex-row items-center gap-8 ${
                      index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Image */}
                    <div className="w-full lg:w-1/2">
                      <div className="relative h-125 rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-1/2 space-y-4">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="material-symbols-outlined text-gray-900 text-4xl">
                          {feature.icon}
                        </span>
                        <h2 className="text-3xl font-bold text-gray-900">
                          {feature.title}
                        </h2>
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {feature.description}
                      </p>
                      {feature.highlight && (
                        <div className="bg-gray-100 border-l-4 border-gray-900 p-4 rounded">
                          <p className="text-gray-800 font-medium">
                            {feature.highlight}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Comfort Section */}
            {selectedBrand.comfort && (
              <div className="mb-16 bg-gradient-to-br from-gray-50 to-neutral-100 rounded-2xl p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="w-full lg:w-1/2 space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900">
                      {selectedBrand.comfort.title}
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {selectedBrand.comfort.description}
                    </p>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src={selectedBrand.comfort.image}
                        alt={selectedBrand.comfort.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Specifications Section */}
            {selectedBrand.specifications && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  {selectedBrand.specifications.title}
                </h2>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {selectedBrand.specifications.specs.map((spec, index) => (
                      <div
                        key={index}
                        className={`p-6 border-b border-r border-gray-200 ${
                          index % 3 === 2 ? "lg:border-r-0" : ""
                        } ${
                          index >= selectedBrand.specifications.specs.length - 3
                            ? "border-b-0"
                            : ""
                        }`}
                      >
                        <p className="text-sm text-gray-500 mb-1">
                          {spec.label}
                        </p>
                        <p className="text-lg font-semibold text-gray-900">
                          {spec.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* CTA Section */}
            <div className="bg-gray-900 rounded-2xl p-8 lg:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Готовы заказать {selectedBrand.name}?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Свяжитесь с нами для консультации и расчета стоимости
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => setModalIsOpen(true)}
                  className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  Заказать звонок
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Index;
