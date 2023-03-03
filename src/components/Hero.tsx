import WebImage from "../assets/images/image-web-3-desktop.jpg";
import MobileWeb from "../assets/images/image-web-3-mobile.jpg";
import style from "../style/components/Hero.module.scss";

const Hero: React.FC = () => {
  return (
    <section className={style.Hero}>
      <picture className={style.Hero__Picture}>
        <source media="(max-width:375px )" srcSet={MobileWeb} />
        <img src={WebImage} alt="web3" />
      </picture>
      <h1 className={style.Hero__Title}>The Bright Future of Web 3.0?</h1>
      <div className={style.Hero__Content}>
        <p>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button>Read more</button>
      </div>
    </section>
  );
};

export default Hero;
