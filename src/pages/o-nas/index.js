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

const Index = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const features = [
    {
      icon: Users,
      title: "Профессиональная команда",
      description:
        "Нашими сотрудниками становятся люди готовые помогать, обучаться и обучать других, те, кто оставляет не только положительные эмоции, но и квалифицированную, качественную работу.",
    },
    {
      icon: Target,
      title: "Делаем сложные проекты",
      description:
        "Наша команда будет сопровождать вас на каждом этапе, от заказа до установки! Вы получите ответы на вопросы любой сложности. Опыт работы с проектами любой сложности позволяет нам решать любые задачи.",
    },
    {
      icon: Clock,
      title: "Соблюдение сроков",
      description:
        "Ваш заказ никуда не исчезнет! Он будет качественно выполнен, с соблюдением всех поставленных сроков. А сотрудника, обрабатывающего ваш заказ, всегда сможет заменить его профессиональный коллега.",
    },
    {
      icon: HeadphonesIcon,
      title: "Call-центр",
      description:
        "Ежедневно с 10:00 до 19:00 сотрудники нашего call-центра готовы ответить на любые ваши вопросы, проинформировать о ходе заказа, связать с менеджером отдела продаж.",
    },
    {
      icon: Shield,
      title: "Контроль качества",
      description:
        "Специальная служба по контролю сервиса отслеживает качество выполненной работы, компетентность сотрудников и уровень сервиса компании на каждом этапе.",
    },
    {
      icon: Truck,
      title: "Бережная доставка",
      description:
        "Вся наша продукция доставляется в специально оборудованных, брендированных, автомобилях закрытого типа. Продукция защищена специальной пленкой и картоном.",
    },
  ];

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
              О нас
            </h1>
            <div className="w-24 h-1.5 bg-gray-400 mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
              С 2019 года компания Оконный мастер стремительно развивается
              благодаря нашим заказчикам и самым честным отношениям с ними.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-16 border border-gray-200">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                Почему именно мы?
              </h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg md:text-xl leading-relaxed">
                  Более трех лет мы были официальными дилерами компаний Akfa,
                  Imzo и Engelberg, после чего было принято решение организовать
                  собственное производство.
                </p>
                <p className="text-lg md:text-xl leading-relaxed">
                  Самое главное в компании — коллектив! Нашими сотрудниками
                  становятся люди, готовые помогать, обучаться и обучать других,
                  те, кто оставляет не только положительные эмоции, но и
                  квалифицированную, качественную работу.
                </p>
                <p className="text-lg md:text-xl leading-relaxed">
                  Компания Оконный мастер прекрасно знает, какие бывают
                  сложности и опасения при выборе пластиковых или алюминиевых
                  окон. Наши консультанты создадут максимальный комфорт при
                  решении этих задач.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
              Наши преимущества
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
              Ответственные сотрудники и качественный сервис
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
              <p>
                Руководству нашей компании важно, чтобы наши заказчики не
                испытывали дискомфорта при работе с нашими специалистами. Именно
                поэтому нами создана специальная служба по контролю нашего
                сервиса. Она отслеживает качество выполненной работы,
                компетентность сотрудников и уровень сервиса сотрудников
                компании на каждом этапе.
              </p>
              <p>
                Качественный результат, который видят наши заказчики, это
                результат ответственной работы наших специалистов. Вся продукция
                подвергается тщательной проверке, от поступающих заготовок до
                готового продукта. Наши эксперты пристально следят за всеми
                процессами.
              </p>
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
                  Наша ответственность
                </h2>
                <div className="space-y-6 text-lg md:text-xl text-gray-300">
                  <p className="leading-relaxed">
                    Чтобы обеспечить высочайший уровень своей работы и выполнить
                    поставленную задачу на отлично, специалисты компании Оконный
                    мастер регулярно посещают тренинги, проходят обучение и
                    регулярно подтверждают свою квалификацию различными
                    сертификатами.
                  </p>
                  <p className="leading-relaxed">
                    Мы ориентированы на максимальное удобство и комфорт для
                    наших заказчиков, поэтому вам не придется ехать в офис нашей
                    компании для заключения договора. Все необходимые бумаги
                    могут оформить специалисты, выезжающие для замера на ваш
                    объект.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Section */}
        <section className="py-16 md:py-24 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 text-center">
              Бережная доставка продукции
            </h2>
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200">
              <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
                <p>
                  Вся наша продукция доставляется в специально оборудованных,
                  брендированных, автомобилях закрытого типа для обеспечения
                  безопасной доставки ваших окон. Сама продукция защищена
                  специальной пленкой и картоном, которые обеспечивают
                  дополнительную сохранность.
                </p>
                <p>
                  Доставка окон и дверей осуществляется до дома, офиса или
                  квартиры заказчика.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Готовы начать работу?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Call-центр работает ежедневно с 10:00 до 19:00. Мы готовы ответить
              на любые ваши вопросы.
            </p>
            <button
              onClick={() => setModalIsOpen(true)}
              className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-gray-950 text-white px-10 py-5 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Связаться с нами
            </button>
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

export default Index;
