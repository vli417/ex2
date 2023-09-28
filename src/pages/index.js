
import Data from "../app/components/data";
import ArticleCard from "../app/components/ArticleCard";

/*import Article from "./article";*/

export default function Home() {
  const projectName = "Exercise Two: Article"

  return (

    <main>
      <h1>{projectName}</h1>
      {Data.map((article) => (
        <ArticleCard
        id={article.id}
        key={article.id}
        title={article.title}
        date={new Date(article.publishedDate).toDateString()}
        description={article.blurb}
        link='Learn More'
        imageSrc={article.image.url}
        imgAlt={article.image.alt}/>
       
    
    
       ))}

    </main>
  )
}
