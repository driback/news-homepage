import style from "../style/components/UpdatedNews.module.scss";

const UpdatedNews: React.FC = () => {
  return (
    <section className={style.News}>
      <h2 className={style.News__Title}>New</h2>
      <div className={style.News__Content}>
        <span>Hydrogen VS Electric Cars</span>
        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
      </div>
      <div className={style.News__Content}>
        <span>The Downsides of AI Artistry</span>
        <p>
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
      </div>
      <div className={style.News__Content}>
        <span>Is VC Funding Drying Up?</span>
        <p>
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </section>
  );
};

export default UpdatedNews;
