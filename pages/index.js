import Head from "next/head";
import classes from "../styles/Home.module.css";
import HomePage from "../components/Home/HomePage";
import Products from "../components/Products/Products";
import About from "../components/About/About";
import Slider from "../components/Slider/Slider";
import BigSlider from "../components/BigSlider/BigSlider";
import Advantages from "../components/Advantages/Advantages";

export default function Home() {
  return (
    <div className={classes.home}>
      <Head>
        <title>Hägglunds Kiropraktik & Rehab</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Rockfield Redovisning, Ponnyvägen 6, 857 50 Sundsvall"
        />
      </Head>
      <main>
        <HomePage />
        <About />
        <BigSlider />
        <Products />
        <Slider />
        <Advantages />
      </main>
    </div>
  );
}
