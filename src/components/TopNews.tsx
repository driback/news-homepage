import RetroPCs from "../assets/images/image-retro-pcs.jpg";
import Laptops from "../assets/images/image-top-laptops.jpg";
import Gaming from "../assets/images/image-gaming-growth.jpg";
import TopNewsCard from "./TopNewsCard";
import style from "../style/components/TopNews.module.scss";

const TopNews: React.FC = () => {
  interface NewsProps {
    no: number;
    title: string;
    content: string;
    image: string;
  }

  interface NewsItem extends Array<NewsProps> {}

  const news: NewsItem = [
    {
      no: 1,
      title: "Reviving Retro PCs",
      content: "What happens when old PCs are given modern upgrades?",
      image: RetroPCs,
    },
    {
      no: 2,
      title: "Top 10 Laptops of 2022",
      content: "Our best picks for various needs and budgets.",
      image: Laptops,
    },

    {
      no: 3,
      title: "The Growth of Gaming",
      content: "How the pandemic has sparked fresh opportunities.",
      image: Gaming,
    },
  ];
  return (
    <section className={style.News}>
      {news.map((item, index) => (
        <TopNewsCard
          key={index}
          no={item.no}
          title={item.title}
          content={item.content}
          source={item.image}
          alt={item.title}
        />
      ))}
    </section>
  );
};

export default TopNews;
