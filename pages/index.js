import Header from "../components/Header";
import Sectionservice from "../components/Sectionservice";
import SectionOneHomePage from "../components/Contents";
import SectionTwoHomePage from "../components/ContentTwo";
import SectionThereHomePage from "../components/ContentThere";

export default function Home() {
  return (
    <div>
      <Header />
      <Sectionservice />
      <SectionOneHomePage />
      <SectionTwoHomePage />
      <SectionThereHomePage />
    </div>
  );
}
