import Head from 'next/head'
import Link from 'next/link'
import ExploreBase from '../../components/ExploreBase'


export const getStaticProps = async () => {
  const res = await fetch("https://web3pediaorg.github.io/web3/api/explore/articles.json");
  const data = await res.json();
  return {
    props: {
      data,
    },
    revalidate: 86400,
    
  };
};


const ExploreArticles = ( {data} ) => {
  return (
    <>
     <Head>
        <title>Articles | Web3pedia Explore</title>
        <meta name="description" content="Helping People With Web3" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
    <ExploreBase></ExploreBase>
      <div className='explore-main'>
        <br></br>
        <span className='explore-head'>Articles</span>&nbsp;&nbsp;<a href='https://forms.gle/NrNGBusMu93Lf9r59' target="_blank" rel="noreferrer" className='b-link'>Suggest / Add</a><br></br><br></br>
        {/* <br></br> */}
        {/* <span className='explore-subhead'>Latests</span><br></br>
        <br></br>
        {data.latest.map((article) => {
          return (
            <>
            <Link href={"/explore/article/"+article.id} key={article.id}><a className="article-link">{article.topic}</a></Link><br></br><br></br>
            </>
          )
        })} */}
        {/* <br></br>
        <br></br>
        <span className='explore-subhead'>All Articles</span><br></br>
        <br></br> */}
        <Link href="/explore/article/web3"><a className="article-link">What is Web3?</a></Link>
        {data.articles.map((article) => {
          return (
            <>
            <Link href={"/explore/article/"+article.id} key={article.id}><a className="article-link">{article.topic}</a></Link>
            </>
          )
        })}
        </div>
        <br></br>
        <br></br>
    </>
     
     
  )
}

export default ExploreArticles