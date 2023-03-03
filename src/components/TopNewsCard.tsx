import style from "../style/components/TopNewsCard.module.scss";

interface CardProps {
  source: string;
  alt: string;
  no: number;
  title: string;
  content: string;
}

const TopNewsCard: React.FC<CardProps> = ({
  source,
  alt,
  no,
  title,
  content,
}) => {
  return (
    <div className={style.Card}>
      <img src={source} alt={alt} className={style.Card__Image} />
      <div className={style.Card__Content}>
        <span>{no}</span>
        <span>{title}</span>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default TopNewsCard;
