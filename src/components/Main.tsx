import Hero from "./Hero";
import TopNews from "./TopNews";
import UpdatedNews from "./UpdatedNews";
import style from "../style/components/Main.module.scss";

const Main: React.FC = () => {
  return (
    <main className={style.Main}>
      <Hero />
      <UpdatedNews />
      <TopNews />
    </main>
  );
};

export default Main;
