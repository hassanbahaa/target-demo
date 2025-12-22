import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

const clients = [
  { name: "Golden Palm Hotel", logo: "/placeholder.svg" },
  { name: "Blue Sea Resort", logo: "/placeholder.svg" },
  { name: "Royal Crown Hotel", logo: "/placeholder.svg" },
  { name: "Diamond Suite Hotel", logo: "/placeholder.svg" },
  { name: "Pearl Beach Resort", logo: "/placeholder.svg" },
  { name: "Oasis Grand Hotel", logo: "/placeholder.svg" },
];

const ClientsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" dir="rtl">
            عملاؤنا
          </h2>
          <p className="text-xl text-muted-foreground">Our Clients</p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            AutoScroll({
              playOnInit: true,
              speed: 0.8,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {[...clients, ...clients].map((client, index) => (
              <CarouselItem
                key={`${client.name}-${index}`}
                className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5"
              >
                <div className="flex items-center justify-center p-4">
                  <div className="client-card group overflow-hidden">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ClientsSection;
