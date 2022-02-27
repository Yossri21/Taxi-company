import Header from "../components/Header";
import Sections from "../components/Sections";
import SectionOneHomePage from "../components/Contents";
import SectionTwoHomePage from "../components/ContentTwo";
import SectionThereHomePage from "../components/ContentThere";

export default function Home() {
  return (
    <div>
      <Header />
      <Sections />
      <SectionOneHomePage />
      <SectionTwoHomePage />
      <SectionThereHomePage />
    </div>
  );
}
