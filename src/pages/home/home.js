import "./home.css";

import Blob from "../../components/blob/blob";

export default function HomePage(props) {
  return (
    <section
      className="homePage page__section"
      style={{
        color: props.isDarkMode ? "red !important" : "blue !important",
      }}
    >
      <main className="homePage__section-text">
        <h1 className="homePage__section-text__title">
          Hi <span className="homePage__section-text__title-helloIcon">👋</span>
          , I am Surbhi
        </h1>
        <h2 className="homePage__section-text__subTitle">
          asdfasdf asddf asdfd asdf asdfd asdfd asdf asdfd asdf asdf asd dfas
          dfdfas dfdasdf asd fasdsfd asd f
        </h2>
      </main>
      <div className="homePage__section-blob">
        <Blob />
      </div>
    </section>
  );
}
