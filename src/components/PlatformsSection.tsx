import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useLanguage } from "@/contexts/LanguageContext";

import bookingLogo from "../assets/websites/booking.webp";
import agodaLogo from "../assets/websites/agoda.webp";
import expediaLogo from "../assets/websites/expedia.webp";
import airbnbLogo from "../assets/websites/airbnb.webp";
import gathernLogo from "../assets/websites/gathern.webp";
import almosaferLogo from "../assets/websites/almosafer.webp";
import tripadvisorLogo from "../assets/websites/tripadvisor.webp";
import hotelsLogo from "../assets/websites/hotels.webp";
import vrboLogo from "../assets/websites/vrbo.webp";
import rehlatLogo from "../assets/websites/rehlat.webp";

import AutoScroll from "embla-carousel-auto-scroll";

const platforms = [
  { name: "Booking.com", logo: bookingLogo },
  { name: "Expedia", logo: expediaLogo },
  { name: "Agoda", logo: agodaLogo },
  { name: "TripAdvisor", logo: tripadvisorLogo },
  { name: "Airbnb", logo: airbnbLogo },
  { name: "Almosafer", logo: almosaferLogo },
  { name: "Gathern", logo: gathernLogo },
  { name: "Hotels", logo: hotelsLogo },
  { name: "Vrbo", logo: vrboLogo },
  { name: "Rehlat", logo: rehlatLogo },
];

const PlatformsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-muted/30" dir="ltr">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("platforms.title")}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t("platforms.subtitle")}
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            AutoScroll({
              playOnInit: true,
              speed: 1,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {[...platforms, ...platforms].map((platform, index) => (
              <CarouselItem
                key={`${platform.name}-${index}`}
                className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5"
              >
                <div className="flex items-center justify-center p-4">
                  <div className="platform-circle group overflow-hidden">
                    <img
                      src={platform.logo}
                      alt={platform.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg";
                      }}
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

export default PlatformsSection;
