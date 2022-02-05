import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
export default function Home() {
  return (
    <div>
      <Nav />
      <NavBar />
      <Header />
      <p className="py-24">sdksds</p>
    </div>
  );
}
