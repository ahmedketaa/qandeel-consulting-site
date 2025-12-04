"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Instagram,
  Linkedin,
  Phone,
  ChevronDown,
  Home,
} from "lucide-react";
import ContactModal from "../contact-modal/ContactModal";

// Simple colored circular icon for social buttons
function SocialCircle({ bg, children, size = 26 }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-full"
      style={{ width: size, height: size, backgroundColor: bg }}
    >
      {children}
    </span>
  );
}

function WhatsAppIcon({ size = 18 }) {
  return (
    <SocialCircle bg="#25D366" size={size + 8}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
        fill="none"
      >
        <path
          d="M12 3.5A8.5 8.5 0 0 0 4 16.3L3.2 20l3.8-.8A8.5 8.5 0 1 0 12 3.5Z"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.1 9.2c0 .3-.2.6-.3.8-.1.2-.2.3-.1.5.2.5.8 1.4 1.5 2 .7.7 1.6 1.3 2.1 1.5.2.1.3 0 .5-.1.2-.1.5-.3.8-.3.2 0 .4.1.6.3l.5.5c.2.2.3.4.3.6 0 .3-.2.6-.4.8-.4.3-1 .6-1.7.6-.5 0-1-.1-1.6-.3-.7-.2-1.4-.6-2.2-1.1a9.2 9.2 0 0 1-2.6-2.5c-.4-.6-.8-1.2-1-1.8-.2-.6-.3-1.1-.3-1.6 0-.7.3-1.3.6-1.7.2-.2.5-.4.8-.4.2 0 .4.1.6.3l.5.5c.2.2.3.4.3.6Z"
          fill="white"
        />
      </svg>
    </SocialCircle>
  );
}

function TikTokIcon({ size = 18 }) {
  return (
    <SocialCircle bg="#000000" size={size + 8}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
        fill="none"
      >
        <path
          d="M14 5.5v7.2a3.3 3.3 0 1 1-2.7-3.2"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 5.5c.4 1 1.4 2.6 3.5 2.8"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SocialCircle>
  );
}

function InstagramCircle({ size = 18 }) {
  return (
    <SocialCircle bg="#E4405F" size={size + 8}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
        fill="none"
      >
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="5"
          stroke="white"
          strokeWidth="1.6"
        />
        <circle cx="12" cy="12" r="3.2" stroke="white" strokeWidth="1.6" />
        <circle cx="17" cy="7" r="1" fill="white" />
      </svg>
    </SocialCircle>
  );
}

function LinkedinCircle({ size = 18 }) {
  return (
    <SocialCircle bg="#0077B5" size={size + 8}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
        fill="none"
      >
        <rect x="4" y="4" width="16" height="16" rx="2" fill="white" />
        <rect x="6.4" y="10" width="2.4" height="6.2" fill="#0077B5" />
        <circle cx="7.6" cy="8" r="1.2" fill="#0077B5" />
        <path
          d="M11 10h2.3l.1 1a2.4 2.4 0 0 1 2-1.1c1.6 0 2.6 1 2.6 2.9v3.4h-2.4v-3.1c0-.9-.4-1.4-1.2-1.4-.8 0-1.3.5-1.3 1.4v3.1H11V10Z"
          fill="#0077B5"
        />
      </svg>
    </SocialCircle>
  );
}

// ======================= NAV ITEMS =======================

const navItems = [
  {
    label: "الخدمات الحكومية",
    href: "/government-services",
    submenu: [
      {
        label: "دائرة التنمية الاقتصادية – ابوظبي",
        href: "/government-services/economic-development",
      },
      {
        label: "الهيئة الاتحادية للهوية والجنسية",
        href: "/government-services/identity-citizenship",
      },
      {
        label: "وزارة التوطين والموارد البشرية",
        href: "/government-services/human-resources",
      },
      {
        label: "خدمات كاتب العدل",
        href: "/government-services/notary-services",
      },
      {
        label: "دائرة البلديات والنقل",
        href: "/government-services/municipalities-transport",
      },
      {
        label: "المرور والترخيص",
        href: "/government-services/traffic-licensing",
      },
      {
        label: "وزارة الخارجية",
        href: "/government-services/foreign-affairs",
      },
      {
        label: "دائرة القضاء – ابوظبي",
        href: "/government-services/abu-dhabi-judicial-department",
      },
      {
        label: "غرفة تجارة وصناعة أبوظبي",
        href: "/government-services/abu-dhabi-chamber",
      },
      {
        label: "هيئة ابوظبي للدفاع المدني",
        href: "/government-services/civil-defense",
      },
    ],
  },
  {
    label: "الرخص التجارية",
    href: "/licenses",
    submenu: [
      { label: "رخصة تاجر أبوظبي", href: "/licenses/abu-dhabi-trader" },
      { label: "رخصة الأعمال الحرة", href: "/licenses/freelance" },
      { label: "رخصة تجارية", href: "/licenses/commercial" },
      { label: "رخصة مبدعة", href: "/licenses/creative" },
    ],
  },
  {
    label: "الدعاية والإعلان",
    href: "/marketing",
    submenu: [
      {
        label: "إدارة حسابات وسائل التواصل الاجتماعي",
        href: "#",
      },
      { label: "الدعاية والتسويق", href: "#" },
      { label: "التصميم الجرافيكي والهوية البصرية", href: "#" },
      { label: "إنشاء المحتوى", href: "#" },
    ],
  },
  {
    label: "خدمات الرواسي للطباعة",
    href: "/al-rawasi-services",
    submenu: [
      { label: "خدمات المحاكم – الإنجاز", href: "#" },
      { label: "كاتب العدل والتوثيق", href: "#" },
      { label: "خدمات شرطة أبوظبي", href: "#" },
      { label: "خدمات النيابة العامة", href: "#" },
    ],
  },
  {
    label: "الاستشارات القانونية",
    href: "/consulting",
    submenu: null,
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Toggle mobile main menu
  const toggleMenu = () => setOpen((prev) => !prev);

  // Toggle mobile dropdown item
  const handleMobileDropdown = (label) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <header className="sticky top-0 z-50 bg-light/90 backdrop-blur">
      {/* Top strip */}
      <div className="border-b border-secondary bg-light">
        <div
          className="container mx-auto px-4 py-2 flex items-center justify-between text-[13px] text-dark/80"
          dir="rtl"
        >
          {/* Right links */}
          <div className="flex items-center gap-4">
            <Link href="/about" className="hover:text-primary transition">
              من نحن
            </Link>
            <span className="text-secondary">|</span>
            <button
              onClick={openModal}
              className="hover:text-primary transition"
            >
              تواصل معنا
            </button>
            <span className="text-secondary">|</span>
          </div>

          {/* Phones + social icons */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+971500000000"
                className="flex items-center gap-1 hover:text-primary transition"
              >
                <Phone size={15} />
                <span>تواصل معنا: +00971556631971</span>
              </a>
              <a
                href="https://wa.me/00971556631971"
                className="flex items-center gap-1 hover:text-primary transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={15} />
                <span>على الواتساب: +00971556631971</span>
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              <a
                href="https://wa.me/00971556631971"
                className="hover:opacity-90 transition"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
              </a>
              <a
                href="#"
                className="hover:opacity-90 transition"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramCircle />
              </a>
              <a
                href="#"
                className="hover:opacity-90 transition"
                aria-label="TikTok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TikTokIcon />
              </a>
              <a
                href="#"
                className="hover:opacity-90 transition"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinCircle />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main dark strip */}
      <div className="bg-dark text-light">
        <nav
          className="container mx-auto px-4 py-2 flex items-center justify-between md:gap-6"
          dir="rtl"
        >
          {/* Right side: home icon */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-dark text-light border border-light/40 hover:bg-primary hover:text-white transition w-8 h-8"
              aria-label="الرئيسية"
            >
              <Home size={16} />
            </Link>
          </div>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center justify-center gap-4 lg:gap-6 text-[13px] md:text-[14px] font-semibold">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative group inline-flex flex-col"
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-1 py-1 hover:text-white transition"
                >
                  <span>{item.label}</span>
                  {item.submenu && (
                    <ChevronDown
                      size={14}
                      className="mt-[1px] transition-transform group-hover:-rotate-180"
                    />
                  )}
                </Link>

                {item.submenu && (
                  <div className="absolute top-full right-0 min-w-[230px] bg-light text-dark border border-secondary rounded-b-lg shadow-md opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity">
                    <ul className="py-2 text-[13px]">
                      {item.submenu.map((subItem) => (
                        <li key={subItem.label}>
                          <Link
                            href={subItem.href}
                            className="block px-4 py-1.5 hover:bg-secondary hover:text-dark transition"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex flex-1 justify-end items-center gap-3">
            <a
              href="https://wa.me/00971556631971"
              target="_blank"
              className="bg-primary text-white px-5 py-2 rounded-full text-xs md:text-sm font-semibold shadow-sm hover:bg-primary/90 transition"
            >
              احجز استشارة
            </a>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex-1 flex items-center justify-end gap-3">
            <a
              href="#contact"
              className="bg-primary text-white text-xs px-3 py-1.5 rounded-lg hover:bg-primary/90 transition"
            >
              احجز استشارة
            </a>
            <button
              className="text-light"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-light border-t border-secondary" dir="rtl">
          <div className="px-4 py-4 flex flex-col gap-4">
            <ul className="flex flex-col gap-3 text-dark font-medium text-sm">
              {navItems.map((item) => {
                const isActive = activeDropdown === item.label;
                const hasSubmenu = item.submenu && item.submenu.length > 0;

                return (
                  <li key={item.label}>
                    {hasSubmenu ? (
                      <button
                        type="button"
                        onClick={() => handleMobileDropdown(item.label)}
                        className="w-full flex items-center justify-between py-1"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          size={18}
                          className={`transition-transform ${
                            isActive ? "-rotate-180" : "rotate-0"
                          }`}
                        />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className="w-full flex items-center justify-between py-1"
                      >
                        <span>{item.label}</span>
                      </Link>
                    )}

                    {hasSubmenu && isActive && (
                      <ul className="mt-1 mr-3 border-r border-secondary/60 pr-3 flex flex-col gap-1 text-xs">
                        {item.submenu.map((subItem) => (
                          <li key={subItem.label}>
                            <Link
                              href={subItem.href}
                              className="block py-1 hover:text-primary transition"
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>

            <a
              href="#contact"
              className="block bg-primary text-white text-center py-2 rounded-lg font-semibold mt-1 text-sm hover:bg-primary/90 transition"
            >
              احجز استشارة
            </a>
          </div>
        </div>
      )}

      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </header>
  );
}
