import { useState } from "react";
import Brand from "../brand";
import ContactUsModal from "../modal";

// Navigation data - easily maintainable
const navigationItems = [
  { id: 1, label: "Главная", href: "/" },

  { id: 2, label: "Окна", href: "/windows" },
  { id: 3, label: "Фасад", href: "/fasad" },
  { id: 4, label: "Двери", href: "/dveri" },
  { id: 5, label: "Другое", href: "/drugoe" },
  { id: 6, label: "О нас", href: "/o-nas" },
];

const Header = ({ isModalOpen, setIsModalOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("/");

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-black/5">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-20">
            {/* Brand */}
            <div className="shrink-0">
              <Brand title="Оконный Мастер" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setActiveItem(item.href)}
                  className="group relative"
                >
                  <span
                    className={`
                    text-[13px] font-medium tracking-[0.02em] transition-colors duration-200
                    ${
                      activeItem === item.href
                        ? "text-black"
                        : "text-black/50 group-hover:text-black"
                    }
                  `}
                  >
                    {item.label}
                  </span>
                  <span
                    className={`
                    absolute -bottom-6 left-0 h-[1px] bg-black transition-all duration-300
                    ${
                      activeItem === item.href
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                  />
                </a>
              ))}
            </nav>

            {/* Contact CTA */}
            <div className="hidden lg:flex items-center gap-5">
              <a
                href="tel:+998979733333"
                className="text-[13px] font-medium text-black/60 hover:text-black transition-colors"
              >
                +998 97 973 33 33
              </a>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-2.5 bg-black text-white text-[12px] font-medium tracking-wide hover:bg-black/90 transition-all"
              >
                Консультация
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center"
              aria-label="Menu"
            >
              <div className="w-5 h-3 flex flex-col justify-between">
                <span
                  className={`w-full h-[1px] bg-black transition-all duration-300 origin-center ${
                    isMenuOpen ? "rotate-45 translate-y-[5px]" : ""
                  }`}
                />
                <span
                  className={`w-full h-[1px] bg-black transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-full h-[1px] bg-black transition-all duration-300 origin-center ${
                    isMenuOpen ? "-rotate-45 -translate-y-[5px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`
          fixed inset-0 bg-white z-40 lg:hidden transition-all duration-300 ease-in-out
          ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        style={{ top: "80px" }}
      >
        <nav className="h-[calc(100vh-80px)] flex flex-col px-6 pt-8 pb-8 overflow-y-auto">
          <div className="flex-1">
            {navigationItems.map((item, index) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => {
                  setActiveItem(item.href);
                  setIsMenuOpen(false);
                }}
                className={`
                  block py-4 text-2xl font-light border-b border-black/5
                  transition-all duration-300
                  ${activeItem === item.href ? "text-black" : "text-black/40"}
                `}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 40}ms` : "0ms",
                  transform: isMenuOpen ? "translateX(0)" : "translateX(-10px)",
                  opacity: isMenuOpen ? 1 : 0,
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div
            className="pt-6 space-y-4 border-t border-black/5"
            style={{
              transitionDelay: isMenuOpen ? "280ms" : "0ms",
              transform: isMenuOpen ? "translateY(0)" : "translateY(10px)",
              opacity: isMenuOpen ? 1 : 0,
              transition: "all 300ms ease-in-out",
            }}
          >
            <a href="tel:+998901234567" className="block text-lg text-black/60">
              +998 90 123 45 67
            </a>
            <button className="w-full py-3.5 bg-black text-white text-[13px] font-medium tracking-wide">
              Консультация
            </button>
          </div>
        </nav>
      </div>

      {/* Spacer */}
      <div className="h-20" />
    </>
  );
};

export default Header;
