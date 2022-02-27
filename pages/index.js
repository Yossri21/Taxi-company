import Header from "../components/header";
import SectionService from "../components/sectionservice";
import SectionOneHomePage from "../components/Contents";
import SectionTwoHomePage from "../components/ContentTwo";
import SectionThereHomePage from "../components/ContentThere";

export default function Home() {
  return (
    <div>
      <Header />
      <SectionService />
      <SectionOneHomePage />
      <SectionTwoHomePage />
      <SectionThereHomePage />
    </div>
  );
}
