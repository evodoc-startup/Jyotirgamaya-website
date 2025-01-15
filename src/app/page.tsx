import Main from "./components/Main";
import SecondSection from "./components/SecondSection";
import KnowMore from "./components/KnowMore";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Footer from "@/Components/Footer";

export default async function Home() {

  return (
    <>
      <Main />
      <SecondSection />
      <KnowMore />
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
}
