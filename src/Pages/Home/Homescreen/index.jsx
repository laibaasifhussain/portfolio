import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import Section from "../Section";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Customer from "../Customer";

export default function Home() {
  return (
    <>
      <Section />
      <MySkills />
      <AboutMe />
      <MyPortfolio />
      <Customer />
      <ContactMe />
      <Footer />
    </>
  );
}
