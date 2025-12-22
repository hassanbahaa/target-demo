import Header from "@/components/Header";
import Footer from "@/components/Footer";
import lavina from '../assets/Testimonials/lavina.jpg';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      textAr: "بكل الود نهنئكم و نهنئ انفسنا بنجاح اول تعاون بيننا و نبارك جهودكم المثمرة خلف ذلك و عملكم بروح الفريق الواحد مما كلل جهود الجميع للوصول إلى ما نحن عليه اذ نأمل مواصلة جهودكم الكريمة للاستمرار و للأفضل ان شاء الله.",
      textEn: "With all sincerity, we congratulate you — and ourselves — on the success of our first collaboration. We truly appreciate your fruitful efforts and your spirit of teamwork, which have led us all to this achievement. We look forward to your continued dedication and to achieving even greater success, God willing.",
      author: "عبدربه إبراهيم الشيخي",
      authorEn: "Abdur-Rabbuh Ibrahim Al-Sheikhi",
      hotel: "مؤسسة دار لافينا",
      rating: 5
    },
    {
      textAr: "من افضل المؤسسات التي عملت معها, احترافية عالية في العمل و كذلك سرعة الاستجابة و التعاون و كذلك يتميزون بتنوع تسويق المنشأة على برامج متعددة لكسب عدد اكبر من النزلاء.",
      textEn: "One of the best organizations I have worked with — highly professional, responsive, and cooperative. They also excel in diversifying the property's marketing across multiple platforms to attract a larger number of guests.",
      author: "سلطان بن سعيد آل عون",
      authorEn: "Sultan Bin Saeed Al-Aoun",
      hotel: "فندق كيان للاجنحة الفندقية ابها",
      rating: 5
    },
    {
      textAr: "شركة ممتازة و تقدم خدمات افضل, انصح بهم و بشدة اعمل معهم منذ 3 سنوات و الحمد لله.",
      textEn: "An excellent company that provides outstanding services. I highly recommend them — I've been working with them for three years, and thank God, the experience has been great.",
      author: "هاني عبد المحسن العمري",
      authorEn: "Hani Abdulmohsen Al-Omari",
      hotel: "فندق كيان للاجنحة الفندقية جدة",
      rating: 5
    },
    {
      textAr: "ادارة ناجحة و عمل جماعي على اعلى مستوى, كنتم اضافة قوية لنا في زيادة المبيعات و جلب عدد كبير من العملاء الجدد.",
      textEn: "Successful management and outstanding teamwork at the highest level.You were a strong addition to us in increasing sales and attracting a large number of new clients.",
      author: "احمد عبد الستار",
      authorEn: "Ahmed Abdul Sattar",
      hotel: "جراند خيال جدة",
      rating: 5
    },
    {
      textAr: "تعتبر من افضل الشركات في التسويق من خلال متابعتهم للعمل و حسن التعامل مع العملاء و لازلنا مستمرين بالتعاون معهم.",
      textEn: "One of the best marketing companies — distinguished by their follow-up, professionalism, and excellent customer relations.We are still continuing our collaboration with them.",
      author: "محمد محسن الوادعي",
      authorEn: "Mohammed Mohsen Al-Wad’i",
      hotel: "فندق قصر الممشى",
      rating: 5
    },
    {
      textAr: "لكم منا كل الاحترام و التقدير على الجهود المبذول في التسويق و تقدم سير العمل و حسن التعامل مع المنشأة و مع العملاء .",
      textEn: "You have our utmost respect and appreciation for your dedicated efforts in marketing, the progress of operations, and your excellent professionalism in dealing with both the establishment and the clients.",
      author: "المدير",
      authorEn: "Manager",
      hotel: "فندق أمواج الجبيل",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="section-padding bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" dir="rtl">آراء عملائنا</h1>
            <p className="text-xl text-muted-foreground">Client Testimonials</p>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto" dir="rtl">
              اكتشف ما يقوله عملاؤنا عن تجربتهم معنا
            </p>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4" dir="rtl">
                      "{testimonial.textAr}"
                    </p>
                    <p className="text-sm text-muted-foreground mb-4 italic">
                      "{testimonial.textEn}"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-bold" dir="rtl">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.authorEn}</p>
                      <p className="text-sm text-primary mt-1" dir="rtl">{testimonial.hotel}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Appreciation Letter Section */}
            <Card className="mt-12 card-hover">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4" dir="rtl">
                  خطابات شكر وتقدير رسمية
                </h3>
                <p className="text-muted-foreground mb-6" dir="rtl">
                  نحتفظ بمجموعة من خطابات الشكر والتقدير الرسمية من عملائنا، وهي متاحة للاطلاع عند الطلب.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Official letters of appreciation from our clients are available upon request.
                </p>
                <div className="mt-6 p-8 bg-muted/50 rounded-lg">
                  <img 
                    src={lavina}
                    alt="Sample Appreciation Letter"
                    className="max-w-md mx-auto rounded shadow-lg"
                  />
                  <p className="text-sm text-muted-foreground mt-4">
                    Sample appreciation letter from hotel partner
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;
