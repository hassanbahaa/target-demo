import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Target, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import targetLogo from "@/assets/targetlogo.png";

const About = () => {
  const teamMembers = [
    {
      name: "أحمد محمد",
      nameEn: "Ahmed Mohammed",
      role: "المدير التنفيذي",
      roleEn: "Chief Executive Officer",
      image: "/placeholder.svg"
    },
    {
      name: "سارة أحمد",
      nameEn: "Sara Ahmed",
      role: "مدير التسويق",
      roleEn: "Marketing Director",
      image: "/placeholder.svg"
    },
    {
      name: "خالد علي",
      nameEn: "Khaled Ali",
      role: "مدير العمليات",
      roleEn: "Operations Manager",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">{/* Add padding to prevent header overlap */}
        {/* Hero Banner */}
        <section className="section-padding bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" dir="rtl">من نحن</h1>
            <p className="text-xl text-muted-foreground">About Us</p>
          </div>
        </section>

        {/* Company Story */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6" dir="rtl">قصتنا</h2>
                <p className="text-lg text-muted-foreground mb-4" dir="rtl">
                  تأسست تارجت للتسويق الفندقي بهدف تقديم حلول متكاملة لإدارة وتشغيل وتسويق الفنادق. نحن نؤمن بأن النجاح في صناعة الضيافة يتطلب مزيجاً من الخبرة التشغيلية والتسويق الرقمي المبتكر.
                </p>
                <p className="text-lg text-muted-foreground" dir="rtl">
                  نعمل مع مجموعة متنوعة من الفنادق والمنتجعات، ونقدم لهم استراتيجيات مخصصة تساعدهم على تحقيق أهدافهم التجارية وزيادة إيراداتهم.
                </p>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg flex items-center justify-center bg-gray-100">
                <img 
                  src={targetLogo} 
                  alt="Our Story"
                  className="max-w-full max-h-full object-contain object-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-muted/50">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="card-hover">
                <CardContent className="p-8">
                  <Target className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4" dir="rtl">رؤيتنا</h3>
                  <p className="text-muted-foreground" dir="rtl">
                    أن نكون الشريك الأول والموثوق في تطوير وتسويق الفنادق في المنطقة، من خلال تقديم حلول مبتكرة تحقق نتائج استثنائية.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    To be the leading trusted partner in hotel development and marketing in the region.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-8">
                  <Award className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4" dir="rtl">مهمتنا</h3>
                  <p className="text-muted-foreground" dir="rtl">
                    تمكين الفنادق من تحقيق أقصى إمكاناتها من خلال الجمع بين الخبرة التشغيلية والتسويق الرقمي المتطور، مع التركيز على تحقيق نتائج قابلة للقياس.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Empowering hotels to achieve their maximum potential through operational excellence and digital marketing.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
{/*         {/* Team Members 
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4" dir="rtl">فريق العمل</h2>
              <p className="text-xl text-muted-foreground">Our Team</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="card-hover text-center">
                  <CardContent className="p-6">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-primary/10">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2" dir="rtl">{member.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{member.nameEn}</p>
                    <p className="text-primary font-medium" dir="rtl">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.roleEn}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
         */}

      </main>
      <Footer />
    </div>
  );
};

export default About;
