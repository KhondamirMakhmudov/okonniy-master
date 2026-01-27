const Footer = () => {
  return (
    <footer
      className="relative w-full bg-white border-t border-neutral-200"
      id="footer"
    >
      <div className="container mx-auto ">
        {/* Main Footer Content */}
        <div className="py-20 lg:py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <svg
                className="w-8 h-8 text-black"
                fill="none"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  height="24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  width="32"
                  x="4"
                  y="8"
                />
                <path
                  d="M4 32V16L20 28L36 16V32"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
                <path d="M20 8V28" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <h4 className="text-sm tracking-[0.1em] uppercase font-medium text-black">
                Оконный Мастер
              </h4>
            </div>

            {/* Description */}
            <p className="text-neutral-500 text-base font-light leading-relaxed mb-8 max-w-md">
              Ваш надежный партнер в мире светопрозрачных конструкций. Качество,
              проверенное временем и тысячами довольных клиентов в Ташкенте.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-black hover:border-black transition-all duration-300"
                aria-label="Telegram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.53 3.67-.52.36-.99.54-1.39.53-.46-.01-1.34-.26-2-.49-.81-.28-1.45-.43-1.39-.91.03-.25.38-.51 1.03-.78 4.03-1.76 6.72-2.92 8.08-3.49 3.85-1.61 4.65-1.89 5.17-1.9.11 0 .37.03.54.17.14.11.18.26.2.37.01.06.03.24.01.38z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-black hover:border-black transition-all duration-300"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    ry="5"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="17.5"
                    y1="6.5"
                    x2="17.51"
                    y2="6.5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-black hover:border-black transition-all duration-300"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h5 className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 font-medium mb-6">
              Контакты
            </h5>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-neutral-600 font-light leading-relaxed">
                  г. Ташкент, Юнусабадский р-н
                  <br />
                  ул. Амира Темура, 107Б
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="tel:+998712000000"
                  className="text-base text-black font-light hover:opacity-60 transition-opacity inline-block"
                >
                  +998 (97) 973-33-33
                </a>
              </div>
              <div>
                <a
                  href="mailto:info@okonmaster.uz"
                  className="text-sm text-neutral-600 font-light hover:text-black transition-colors inline-block"
                >
                  info@okonmaster.uz
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2">
            <h5 className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 font-medium mb-6">
              Навигация
            </h5>
            <nav className="flex flex-col gap-3">
              <a
                href="#pvc"
                className="text-sm text-neutral-600 font-light hover:text-black transition-colors"
              >
                ПВХ окна
              </a>
              <a
                href="#alu"
                className="text-sm text-neutral-600 font-light hover:text-black transition-colors"
              >
                Алюминиевые окна
              </a>
              <a
                href="#materials"
                className="text-sm text-neutral-600 font-light hover:text-black transition-colors"
              >
                Материалы
              </a>
              <a
                href="#contact-section"
                className="text-sm text-neutral-600 font-light hover:text-black transition-colors"
              >
                Контакты
              </a>
            </nav>
          </div>

          {/* Working Hours Column */}
          <div className="lg:col-span-2">
            <h5 className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 font-medium mb-6">
              Режим работы
            </h5>
            <div className="space-y-3 text-sm text-neutral-600 font-light">
              <p>Пн - Пт: 9:00 - 18:00</p>
              <p>Суббота: 10:00 - 16:00</p>
              <p>Воскресенье: Выходной</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-neutral-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Copyright */}
            <div className="text-xs text-neutral-400 font-light">
              © 2026 Оконный Мастер. Все права защищены.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-6 text-xs text-neutral-400 font-light">
              <a href="#privacy" className="hover:text-black transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#terms" className="hover:text-black transition-colors">
                Условия использования
              </a>
              <a href="#docs" className="hover:text-black transition-colors">
                Документация
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
