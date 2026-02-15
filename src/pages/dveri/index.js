import { useState } from "react";
import Image from "next/image";
import Wrapper from "@/layouts/Wrapper";
import {
  DoorClosed,
  ShieldCheck,
  Gauge,
  Sparkles,
  Wrench,
} from "lucide-react";

const Index = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const types = [
    {
      icon: DoorClosed,
      title: "Входные двери",
      description:
        "Прочные конструкции с усиленным профилем и надежными замками для максимальной безопасности.",
    },
    {
      icon: Sparkles,
      title: "Панорамные двери",
      description:
        "Больше света, больше пространства: идеальное решение для террас и выходов в сад.",
    },
    {
      icon: Gauge,
      title: "Раздвижные системы",
      description:
        "Плавный ход, надежная фурнитура и экономия пространства в современных интерьерах.",
    },
  ];

  const advantages = [
    {
      icon: ShieldCheck,
      title: "Безопасность",
      description:
        "Противовзломные элементы и усиленные петли обеспечивают уверенность каждый день.",
    },
    {
      icon: Wrench,
      title: "Качественная фурнитура",
      description:
        "Надежные механизмы рассчитаны на интенсивную эксплуатацию и сохраняют плавный ход.",
    },
  ];

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
              Дверные решения
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Двери высокого качества от Оконный Мастер
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed">
              Производим надежные двери для квартир, домов и коммерческих
              объектов. Точная геометрия, отличная шумоизоляция и современный
              дизайн — все, что нужно для уверенности и комфорта.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => setModalIsOpen(true)}
                className="px-8 py-3 bg-white text-gray-900 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-white/90 transition"
              >
                Запросить цену
              </button>
              <div className="px-6 py-3 border border-white/30 text-white/80 text-xs tracking-[0.2em] uppercase">
                Гарантия 5 лет
              </div>
            </div>
          </div>
        </section>

        {/* Types */}
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Виды дверей
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {types.map((item, index) => (
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
                Комфорт и надежность в каждом элементе
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Мы подбираем профиль, уплотнения и стеклопакеты с учетом ваших
                задач. Двери сохраняют тепло, защищают от шума и служат долгие
                годы без перекосов и скрипов.
              </p>
              <div className="space-y-5">
                {advantages.map((item, index) => (
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
                src="/images/engelberg6.png"
                alt="Двери Оконный Мастер"
                fill
                className="object-contain bg-white"
              />
            </div>
          </div>
        </section>

        {/* Service */}
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Полный цикл от замера до монтажа
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Наши специалисты выезжают на объект, выполняют точный замер,
                подбирают комплектацию и устанавливают двери с гарантией на
                работу и материалы.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-sm uppercase tracking-[0.2em]">
                <div className="bg-white/10 rounded-xl p-5">Замер и проект</div>
                <div className="bg-white/10 rounded-xl p-5">Производство</div>
                <div className="bg-white/10 rounded-xl p-5">Монтаж</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Подберем идеальные двери под ваш проект
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Оставьте заявку — мы свяжемся с вами и предложим лучший вариант.
            </p>
            <button
              onClick={() => setModalIsOpen(true)}
              className="px-10 py-4 bg-gray-900 text-white text-xs tracking-[0.25em] uppercase font-semibold hover:bg-gray-800 transition"
            >
              Оставить заявку
            </button>
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

export default Index;
