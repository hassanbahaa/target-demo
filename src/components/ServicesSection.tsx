import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Building2, BarChart3, Search } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "التسويق الرقمي",
    titleEn: "Digital Marketing",
    description: "استراتيجيات تسويقية متكاملة لزيادة الحجوزات وتعزيز حضور فندقك الرقمي",
    descriptionEn: "Comprehensive marketing strategies to boost bookings and enhance your hotel's digital presence"
  },
  {
    icon: Building2,
    title: "إدارة الفنادق",
    titleEn: "Hotel Management",
    description: "حلول تشغيلية احترافية لضمان أعلى معايير الجودة والكفاءة",
    descriptionEn: "Professional operational solutions ensuring highest quality and efficiency standards"
  },
  {
    icon: BarChart3,
    title: "تحليل الأداء",
    titleEn: "Performance Analytics",
    description: "تقارير وتحليلات دقيقة لقياس الأداء واتخاذ قرارات مستنيرة",
    descriptionEn: "Precise reports and analytics for performance measurement and informed decision-making"
  },
  {
    icon: Search,
    title: "تحسين محركات البحث",
    titleEn: "SEO Optimization",
    description: "تحسين ظهور فندقك في نتائج البحث وزيادة الوصول العضوي",
    descriptionEn: "Improve your hotel's search visibility and increase organic reach"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" dir="rtl">
            خدماتنا
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our Services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="card-hover border-none bg-background group cursor-pointer"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2" dir="rtl">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {service.titleEn}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3" dir="rtl">
                    {service.description}
                  </p>
                  <div className="h-1 w-0 bg-primary rounded-full group-hover:w-full transition-all duration-300"></div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
