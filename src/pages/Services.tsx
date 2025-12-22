import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { Hotel, TrendingUp, Search, BarChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Hotel,
      titleAr: "إدارة وتشغيل الفنادق",
      titleEn: "Hotel Operation Management",
      descriptionAr: "نقدم خدمات إدارة وتشغيل شاملة تغطي جميع جوانب العمل الفندقي، من إدارة الموظفين إلى تحسين تجربة النزلاء وزيادة الكفاءة التشغيلية.",
      descriptionEn: "We provide comprehensive hotel management and operation services covering all aspects of hotel operations, from staff management to enhancing guest experience and improving operational efficiency.",
      features: [
        "إدارة الموظفين والتدريب",
        "تحسين تجربة النزلاء",
        "إدارة المخزون والمشتريات",
        "ضمان الجودة والمعايير"
      ]
    },
    {
      icon: TrendingUp,
      titleAr: "التسويق الرقمي",
      titleEn: "Digital Marketing Campaigns",
      descriptionAr: "نطور استراتيجيات تسويق رقمي مخصصة تستهدف جمهورك المثالي وتزيد من حجوزاتك المباشرة عبر منصات متعددة.",
      descriptionEn: "We develop customized digital marketing strategies that target your ideal audience and increase your direct bookings across multiple platforms.",
      features: [
        "إدارة وسائل التواصل الاجتماعي",
        "الإعلانات المدفوعة (Google Ads, Facebook Ads)",
        "التسويق عبر البريد الإلكتروني",
        "تسويق المحتوى"
      ]
    },
    {
      icon: Search,
      titleAr: "تحسين محركات البحث (SEO)",
      titleEn: "SEO Optimization",
      descriptionAr: "نحسن ظهور موقعك الإلكتروني في نتائج البحث لجذب المزيد من الزوار المستهدفين وزيادة الحجوزات العضوية.",
      descriptionEn: "We optimize your website's visibility in search results to attract more targeted visitors and increase organic bookings.",
      features: [
        "تحسين الكلمات المفتاحية",
        "تحسين المحتوى",
        "بناء الروابط الخارجية",
        "تحسين السرعة والأداء"
      ]
    },
    {
      icon: BarChart,
      titleAr: "التحليل والتقارير",
      titleEn: "Performance Analytics",
      descriptionAr: "نوفر تقارير تحليلية شاملة تساعدك على فهم أداء فندقك واتخاذ قرارات مبنية على البيانات لتحسين النتائج.",
      descriptionEn: "We provide comprehensive analytical reports that help you understand your hotel's performance and make data-driven decisions to improve results.",
      features: [
        "تتبع مؤشرات الأداء الرئيسية (KPIs)",
        "تحليل سلوك العملاء",
        "تقارير الإيرادات",
        "توصيات للتحسين"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="section-padding bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" dir="rtl">خدماتنا</h1>
            <p className="text-xl text-muted-foreground">Our Services</p>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto" dir="rtl">
              نقدم مجموعة شاملة من الخدمات المتخصصة في إدارة وتشغيل وتسويق الفنادق لمساعدتك على تحقيق أهدافك التجارية
            </p>
          </div>
        </section>

        {/* Detailed Services */}
        <section className="section-padding">
          <div className="container-custom space-y-12">
            {services.map((service, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2" dir="rtl">
                        {service.titleAr}
                      </CardTitle>
                      <p className="text-lg text-muted-foreground">
                        {service.titleEn}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4" dir="rtl">
                    {service.descriptionAr}
                  </p>
                  <p className="text-muted-foreground mb-6">
                    {service.descriptionEn}
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-sm" dir="rtl">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
