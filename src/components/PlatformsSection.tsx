import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useLanguage } from "@/contexts/LanguageContext";

import bookingLogo from '../assets/websites/booking.png';
import agodaLogo from '../assets/websites/agoda.png';
import expediaLogo from '../assets/websites/expedia.png';
import airbnbLogo from '../assets/websites/airbnb.png';
import gathernLogo from '../assets/websites/gathern.png';
import almosaferLogo from '../assets/websites/almosafer.png';
import tripadvisorLogo from '../assets/websites/tripadvisor.png';
import hotelsLogo from '../assets/websites/hotels.png';
import vrboLogo from '../assets/websites/vrbo.png';

import AutoScroll from "embla-carousel-auto-scroll";

const platforms = [
  { name: "Booking.com", logo:bookingLogo },
  { name: "Expedia", logo: expediaLogo },
  { name: "Agoda", logo: agodaLogo },
  { name: "TripAdvisor", logo: tripadvisorLogo },
  { name: "Airbnb", logo: airbnbLogo },
  { name: "Almosafer", logo: almosaferLogo },
  { name: "Gathern", logo: gathernLogo },
  { name: "Hotels", logo: hotelsLogo },
  { name: "Vrbo", logo: vrboLogo },
];

const PlatformsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-muted/30" dir="ltr">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('platforms.title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('platforms.subtitle')}
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
