import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type Language = "ar" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  ar: {
    // Header
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.services": "خدماتنا",
    "nav.testimonials": "آراء العملاء",
    "nav.contact": "اتصل بنا",
    "nav.cta": "احجز استشارة",

    // Hero Section
    "hero.title": "حلول متكاملة لتسويق فندقك",
    "hero.subtitle":
      "نساعدك في زيادة الحجوزات وتحسين الأداء من خلال استراتيجيات تسويقية مبتكرة",
    "hero.cta": "ابدأ الآن",

    // About Section
    "about.title": "من نحن",
    "about.description1":
      "تارجت للتسويق الفندقي هي شركة متخصصة في تقديم حلول متكاملة لإدارة وتشغيل وتسويق الفنادق. نجمع بين الخبرة التشغيلية والتسويق الرقمي المتطور لمساعدة الفنادق على تحقيق أهدافها.",
    "about.readMore": "اقرأ المزيد",

    // Services Section
    "services.title": "خدماتنا",
    "services.subtitle": "Our Services",
    "services.management.title": "إدارة وتشغيل الفنادق",
    "services.management.description":
      "نقدم خدمات إدارة وتشغيل شاملة لجميع جوانب العمل الفندقي",
    "services.marketing.title": "التسويق الرقمي",
    "services.marketing.description":
      "استراتيجيات تسويق رقمي متطورة لزيادة حجوزاتك",
    "services.performance.title": "تحسين الأداء",
    "services.performance.description":
      "تحليلات متقدمة وتقارير شاملة لتحسين الأداء",
    "services.viewAll": "عرض جميع الخدمات",

    // Platforms Section
    "platforms.title": "منصات الحجز الرئيسية",
    "platforms.subtitle": "Major Booking Platforms",
    "platforms.description":
      "نساعدك في إدارة حضورك عبر جميع منصات الحجز الرئيسية",

    // Clients Section
    "clients.title": "عملاؤنا",
    "clients.subtitle": "Our Clients",

    // Testimonials Section
    "testimonials.title": "آراء عملائنا",
    "testimonials.subtitle": "Client Testimonials",
    "testimonials.discover": "اكتشف ما يقوله عملاؤنا عن تجربتهم معنا",
    "testimonials.viewAll": "عرض جميع الآراء",
    "testimonials.letterTitle": "خطابات شكر وتقدير رسمية",
    "testimonials.letterDescription":
      "نحتفظ بمجموعة من خطابات الشكر والتقدير الرسمية من عملائنا، وهي متاحة للاطلاع عند الطلب.",
    "testimonials.sampleLetter":
      "Sample appreciation letter from hotel partner",

    // CTA Section
    "cta.title": "ابدأ شراكتك معنا اليوم",
    "cta.button": "تواصل الآن",

    // Footer
    "footer.description":
      "شريكك الموثوق في التسويق الفندقي والإدارة الاحترافية",
    "footer.quickLinks": "روابط سريعة",
    "footer.contact": "اتصل بنا",
    "footer.rights": "© 2024 تارجت للتسويق الفندقي. جميع الحقوق محفوظة.",
    "footer.followUs": "تابعنا",

    // Contact Page
    "contact.title": "تواصل معنا",
    "contact.subtitle": "Contact Us",
    "contact.description": "نحن هنا لمساعدتك. تواصل معنا اليوم",
    "contact.form.name": "الاسم",
    "contact.form.email": "البريد الإلكتروني",
    "contact.form.phone": "رقم الهاتف",
    "contact.form.message": "الرسالة",
    "contact.form.send": "إرسال الرسالة",

    // WhatsApp
    "whatsapp.tooltip": "تواصل معنا عبر واتساب",
  },
  en: {
    // Header
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.testimonials": "Testimonials",
    "nav.contact": "Contact",
    "nav.cta": "Book Consultation",

    // Hero Section
    "hero.title": "Comprehensive Solutions for Hotel Marketing",
    "hero.subtitle":
      "We help you increase bookings and improve performance through innovative marketing strategies",
    "hero.cta": "Get Started",

    // About Section
    "about.title": "About Us",
    "about.description1":
      "Target Hotel Marketing specializes in comprehensive solutions for hotel management, operation, and marketing, combining operational expertise with advanced digital marketing.",
    "about.readMore": "Read More",

    // Services Section
    "services.title": "Our Services",
    "services.subtitle": "Our Services",
    "services.management.title": "Hotel Management & Operations",
    "services.management.description":
      "Comprehensive hotel management and operation services",
    "services.marketing.title": "Digital Marketing",
    "services.marketing.description":
      "Advanced digital marketing strategies to increase bookings",
    "services.performance.title": "Performance Optimization",
    "services.performance.description":
      "Advanced analytics and comprehensive reports",
    "services.viewAll": "View All Services",

    // Platforms Section
    "platforms.title": "Major Booking Platforms",
    "platforms.subtitle": "Major Booking Platforms",
    "platforms.description":
      "We help you manage your presence across all major booking platforms",

    // Clients Section
    "clients.title": "Our Clients",
    "clients.subtitle": "Our Clients",

    // Testimonials Section
    "testimonials.title": "Client Testimonials",
    "testimonials.subtitle": "Client Testimonials",
    "testimonials.discover":
      "Discover what our clients say about their experience with us",
    "testimonials.viewAll": "View All Testimonials",
    "testimonials.letterTitle": "Official Letters of Appreciation",
    "testimonials.letterDescription":
      "Official letters of appreciation from our clients are available upon request.",
    "testimonials.sampleLetter":
      "Sample appreciation letter from hotel partner",

    // CTA Section
    "cta.title": "Start Your Partnership With Us Today",
    "cta.button": "Contact Now",

    // Footer
    "footer.description":
      "Your trusted partner in hotel marketing and professional management",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact Us",
    "footer.rights": "© 2024 Target Hotel Marketing. All rights reserved.",
    "footer.followUs": "Follow Us",

    // Contact Page
    "contact.title": "Contact Us",
    "contact.subtitle": "Contact Us",
    "contact.description": "We're here to help. Contact us today",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.phone": "Phone Number",
    "contact.form.message": "Message",
    "contact.form.send": "Send Message",

    // WhatsApp
    "whatsapp.tooltip": "Chat with us on WhatsApp",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "ar";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ar" ? "en" : "ar"));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.ar] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
