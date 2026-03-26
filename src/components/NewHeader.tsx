import { Logo } from "@/shared/icons/Logo";
import clsx from "clsx";
import { useState, useEffect } from "react";

const linkClass =
  "relative after:absolute after:-bottom-0.5 after:left-0 after:h-[1px] after:bg-black after:w-0 hover:after:w-full after:transition-all after:duration-300";

const navLinks = [
  { href: "https://prive-7.ru", label: "Главная" },
  { href: "https://prive-7.ru/about.html", label: "О нас" },
  { href: "https://prive-7.ru/services.html", label: "Услуги" },
  { href: "https://prive-7.ru/masters.html", label: "Мастера" },
  { href: "https://prive7.shop", label: "Цены", active: true },
  { href: "https://prive-7.ru/news.html", label: "Новости" },
  { href: "https://prive-7.ru/index.html#faq", label: "Вопросы" },
];

const NewHeader = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Блокируем скролл при открытом меню
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className={clsx("fixed z-50 w-full bg-[#EDEDED]", className)}>
      <div className="container">
        <nav className="flex h-[64px] items-center justify-between">
          <a href="https://prive-7.ru">
            <Logo className="w-[80px]" />
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-[28px] lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  className={
                    link.active
                      ? "relative after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-[1px] after:bg-black"
                      : linkClass
                  }
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block" />

          {/* Burger button */}
          <button
            className="relative z-50 flex h-[40px] w-[40px] items-center justify-center lg:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isOpen}
          >
            <div className="flex w-[22px] flex-col items-end gap-[6px]">
              <span
                className={clsx(
                  "block h-[2px] bg-black transition-all duration-300",
                  isOpen ? "w-[22px] translate-y-[8px] rotate-45" : "w-[22px]",
                )}
              />
              <span
                className={clsx(
                  "block h-[2px] bg-black transition-all duration-300",
                  isOpen ? "w-0 opacity-0" : "w-[16px] opacity-100",
                )}
              />
              <span
                className={clsx(
                  "block h-[2px] bg-black transition-all duration-300",
                  isOpen
                    ? "w-[22px] -translate-y-[8px] -rotate-45"
                    : "w-[22px]",
                )}
              />
            </div>
          </button>

          {/* Mobile overlay */}
          <div
            className={clsx(
              "fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden",
              isOpen
                ? "pointer-events-auto opacity-100"
                : "pointer-events-none opacity-0",
            )}
            onClick={() => setIsOpen(false)}
          />

          {/* Mobile menu */}
          <div
            className={clsx(
              "ease-[cubic-bezier(0.16,1,0.3,1)] fixed right-0 top-0 z-40 flex h-full w-[min(320px,85vw)] flex-col bg-[#EDEDED] pt-[80px] shadow-[-4px_0_24px_rgba(0,0,0,0.08)] transition-transform duration-300 lg:hidden",
              isOpen ? "translate-x-0" : "translate-x-full",
            )}
          >
            <ul className="flex flex-col gap-[4px] px-[24px]">
              {navLinks.map((link, i) => (
                <li
                  key={link.href}
                  className={clsx(
                    "transition-all duration-300",
                    isOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-[20px] opacity-0",
                  )}
                  style={{
                    transitionDelay: isOpen ? `${100 + i * 50}ms` : "0ms",
                  }}
                >
                  <a
                    className={clsx(
                      "block rounded-[8px] px-[12px] py-[12px] text-[18px] transition-colors duration-200 hover:bg-black/5",
                      link.active && "font-medium",
                    )}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export { NewHeader };
