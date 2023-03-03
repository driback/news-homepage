import { useState } from "react";
import MenuOpen from "../assets/images/icon-menu.svg";
import CloseOpen from "../assets/images/icon-menu-close.svg";
import style from "../style/components/Navbar.module.scss";
import classNames from "classnames";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const links: string[] = ["Home", "New", "Popular", "Trending", "Categories"];
  return (
    <div
      className={style.Navigation}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className={style.Navigation__Button}>
        <img src={isOpen ? CloseOpen : MenuOpen} alt="Menu Button" />
      </div>
      <nav
        className={classNames(style.Navigation__Items, {
          [style.Navigation__Items__Active]: isOpen,
        })}
      >
        {links.map((link, index) => (
          <a key={index} className={style.Navigation__Item}>
            {link}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
