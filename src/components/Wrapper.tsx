import style from "../style/components/Wrapper.module.scss";

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={style.Wrapper}>{children}</div>;
};

export default Wrapper;
