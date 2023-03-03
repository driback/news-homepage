import logo from "../assets/images/logo.svg";
import style from "../style/components/Logo.module.scss";

const Logo: React.FC = () => {
  return <img src={logo} alt="logo" className={style.Logo} />;
};

export default Logo;
