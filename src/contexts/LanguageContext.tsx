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
    // meta services data
    "services.meta.description":
      "نقدم خدمات متكاملة في إدارة وتشغيل وتسويق الفنادق، مع حلول احترافية لزيادة الأداء وتحقيق أفضل النتائج.",
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
    "services.p":
      "نقدم مجموعة شاملة ومتخصصة من خدمات إدارة الفنادق وتشغيل الفنادق وتسويق الفنادق الاحترافي، لمساعدتك في زيادة الإشغال والإيرادات وتحقيق أهدافك التجارية بنجاح.",
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
    // Services Fuetures
    "services.staffManagement.title": "إدارة الموظفين والتدريب",
    "services.staffManagement.description":
      "تدريب وإدارة فريق العمل بكفاءة عالية لضمان خدمة متميزة",
    "services.guestExperience.title": "تحسين تجربة النزلاء",
    "services.guestExperience.description":
      "استراتيجيات مبتكرة لرفع رضا النزلاء وزيادة التقييمات الإيجابية",
    "services.inventoryManagement.title": "إدارة المخزون والمشتريات",
    "services.inventoryManagement.description":
      "تحسين إدارة المخزون وتقليل التكاليف من خلال عمليات مشتريات ذكية",
    "services.qualityAssurance.title": "ضمان الجودة والمعايير",
    "services.qualityAssurance.description":
      "التأكد من الالتزام بأعلى معايير الجودة والسلامة في جميع العمليات",
    //seo
    "services.seo.title": "تحسين محركات البحث (SEO)",
    "services.seo.description":
      "نحسن ظهور موقعك الإلكتروني في نتائج البحث لجذب المزيد من الزوار المستهدفين وزيادة الحجوزات العضوية.",
    "services.seo.features.keywordResearch": "تحسين الكلمات المفتاحية",
    "services.seo.features.contentOptimization": "تحسين المحتوى",
    "services.seo.features.linkBuilding": "بناء الروابط الخارجية",
    "services.seo.features.performanceOptimization": "تحسين السرعة والأداء",
    // Analyzis
    "services.analytics.title": "التحليل والتقارير",
    "services.analytics.description":
      "نوفر تقارير تحليلية شاملة تساعدك على فهم أداء فندقك واتخاذ قرارات مبنية على البيانات لتحسين النتائج.",

    "services.analytics.features.kpis": "تتبع مؤشرات الأداء الرئيسية (KPIs)",
    "services.analytics.features.customerBehavior": "تحليل سلوك العملاء",
    "services.analytics.features.revenueReports": "تقارير الإيرادات",
    "services.analytics.features.improvementRecommendations": "توصيات للتحسين",
    // marketing
    "services.marketing.features.socialMedia": "إدارة وسائل التواصل الاجتماعي",
    "services.marketing.features.paidAds":
      "الإعلانات المدفوعة (Google Ads, Facebook Ads)",
    "services.marketing.features.emailMarketing":
      "التسويق عبر البريد الإلكتروني",
    "services.marketing.features.contentMarketing": "تسويق المحتوى",
    // ==================================== //
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
    // meta data
    "services.meta.description":
      "We provide comprehensive hotel management, operations, and marketing services with professional solutions designed to boost performance, increase revenue, and maximize occupancy rates.",

    // About Section
    "about.title": "About Us",
    "about.description1":
      "Target Hotel Marketing specializes in comprehensive solutions for hotel management, operation, and marketing, combining operational expertise with advanced digital marketing.",
    "about.readMore": "Read More",

    // Services Section
    "services.title": "Our Services",
    "services.subtitle": "Our Services",
    "services.p":
      "We provide a comprehensive suite of specialized hotel management services, including expert hotel operations and strategic hotel marketing, designed to help you maximize revenue and achieve your business objectives.",
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
    // Services Fuetures
    "services.staffManagement.title": "Staff Management and Training",
    "services.staffManagement.description":
      "Professional staff management and comprehensive training programs to ensure exceptional service quality",
    "services.guestExperience.title": "Enhancing Guest Experience",
    "services.guestExperience.description":
      "Innovative strategies to boost guest satisfaction, increase positive reviews, and build loyalty",
    "services.inventoryManagement.title": "Inventory and Purchasing Management",
    "services.inventoryManagement.description":
      "Optimized inventory control and smart procurement processes to reduce costs and improve efficiency",
    "services.qualityAssurance.title":
      "Quality Assurance and Standards Compliance",
    "services.qualityAssurance.description":
      "Ensuring full compliance with the highest international quality and safety standards across all operations",
    //seo
    "services.seo.title": "Hotel SEO Optimization",
    "services.seo.description":
      "We enhance your hotel website's search engine visibility to attract more targeted traffic, boost organic rankings, and increase direct bookings.",

    "services.seo.features.keywordResearch": "Keyword Research & Optimization",
    "services.seo.features.contentOptimization": "On-Page Content Optimization",
    "services.seo.features.linkBuilding": "Strategic Link Building",
    "services.seo.features.performanceOptimization":
      "Site Speed & Technical Performance Improvements",
    // Analyzis
    "services.analytics.title": "Hotel Performance Analytics & Reporting",
    "services.analytics.description":
      "We deliver comprehensive analytics and detailed reports to give you deep insights into your hotel's performance, enabling data-driven decisions that boost occupancy, revenue, and profitability.",

    "services.analytics.features.kpis":
      "Tracking Key Performance Indicators (KPIs)",
    "services.analytics.features.customerBehavior":
      "Guest Behavior & Segmentation Analysis",
    "services.analytics.features.revenueReports":
      "Detailed Revenue & Financial Reports",
    "services.analytics.features.improvementRecommendations":
      "Actionable Recommendations for Optimization",

    // marketing
    "services.marketing.features.socialMedia": "Social Media Management",
    "services.marketing.features.paidAds":
      "Paid Advertising (Google Ads & Meta Ads)",
    "services.marketing.features.emailMarketing": "Email Marketing Campaigns",
    "services.marketing.features.contentMarketing":
      "Content Marketing & Blog Strategy",
    // ==================================== //
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
