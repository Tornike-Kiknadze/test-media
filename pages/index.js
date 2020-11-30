import NavBar from "../components/navbar";
import Links from "../components/links";
import Head from "next/head";
import Wrapper from "./wrapper";
import Content from "../components/content";
import Navbar from "../components/navbar";
import News from "../components/news";
import SliderContainer from "../components/slider";

const Main = () => (
  <div>
    <Head>
      <title>My page title</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
      />{" "}
      <link rel="stylesheet" href="fonts/style.css" />
      <link rel="stylesheet" href="index.css" />
    </Head>{" "}
    <Wrapper>
      <Links />
      <Content>
        <Navbar />
        <SliderContainer />
        <News />
      </Content>
    </Wrapper>
  </div>
);

export default Main;
