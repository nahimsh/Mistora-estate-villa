import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Villa from "@/components/Villa";
import Amenities from "@/components/Amenities";
import Experiences from "@/components/Experiences";
import WhyStay from "@/components/WhyStay";
import Gallery from "@/components/Gallery";
import Nearby from "@/components/Nearby";
import Testimonial from "@/components/Testimonial";
import Location from "@/components/Location";
import BookingCTA from "@/components/BookingCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Villa />
      <Amenities />
      <Experiences />
      <WhyStay />
      <Gallery />
      <Nearby />
      <Testimonial />
      <Location />
      <BookingCTA />
    </>
  );
}
