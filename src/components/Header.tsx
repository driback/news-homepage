import Logo from "./Logo";
import Navbar from "./Navbar";
import style from "../style/components/Header.module.scss";

const Headers: React.FC = () => {
  return (
    <header className={style.Header}>
      <Logo />
      <Navbar />
    </header>
  );
};

export default Headers;
