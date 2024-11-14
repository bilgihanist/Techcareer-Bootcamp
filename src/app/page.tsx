import CustomAddsSlider from "./components/adds";
import MainCard from "./components/mainCard";
import SectionFour from "./components/sectionFour";
import SectionOne from "./components/sectionOne";
import SectionThree from "./components/sectionThree";
import SectionTwo from "./components/sectionTwo";
import CustomSeekerSlider from "./components/seeker";
import NextJsCarousel from "./components/slide";

export default function Home() {

  return (
    <div className="">
      <NextJsCarousel />
      <CustomAddsSlider />
      <MainCard />
      <SectionOne />
      <SectionTwo />
      <CustomSeekerSlider />
      <SectionThree />
      <SectionFour />
    </div>
  );
}
