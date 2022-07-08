import Head from 'next/head'
import Base from '../components/base'
import Footer from '../components/footer';

export const getStaticProps = async () => {
  const res = await fetch("https://web3pediaorg.github.io/web3/api/news.json");
  const data = await res.json();
  
  return {
    props: {
      data,
    },
    
  };
};


const News = ( {data} ) => {
  return (
    <>
     <Head>
        <title>Web3pedia News</title>
        <meta name="description" content="Helping People With Web3" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
    <Base></Base>
    <div className='news-page-content'>
      <h1>Web3pedia News</h1>
      {data.map((news) => {
        return  (
        <a href={news.link} target="_blank" key={news.title} rel="noreferrer" className='news-content-block'>
          <span className='news-title'>{news.title}</span><br></br>
          <span className='news-publisher'>{news.publisher}</span>&nbsp;<span style={{"color":"#808080"}}>·</span>&nbsp;<span className='news-publisher'>{news.date}</span>
        </a>
        )
      })}
    </div>
    <br></br>
    <br></br>
    <br></br>
    <Footer></Footer>
    </>
  )
}

export default News
