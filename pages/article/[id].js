import { useEffect } from "react";

const Article = (props) => {
  return (
    <>
      <Head>
        <title>{props.post.article.title}</title>
        <meta property="og:title" content={props.post.article.title} />
        <meta
          property="og:description"
          content={props.post.article.description}
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={props.post.article.image} />
      </Head>

      <main>
        <section className="title-box container">
          <div>
            <h1>{props.post.article.title}</h1>
            <small>By FikraSpace</small>
          </div>
          <span>June 19, 2020</span>
        </section>
      </main>
    </>
  );
};

export default Article;
