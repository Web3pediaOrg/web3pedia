import Head from 'next/head'
import Link from 'next/link'
import Base from '../../../components/base'
import { useRouter } from 'next/router'

export async function getStaticPaths() {
  const res = await fetch('https://web3pediaorg.github.io/web3/api/explore/articles.json')
  const posts = await res.json()

  const paths = posts.articles.map((post) => {
    return {
      params: { topic: post.id.toString() }
    }
  })

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await fetch("https://web3pediaorg.github.io/web3/api/explore/articles/"+params.topic+".json");

  try {
    const data = await res.json();
    return {
      props: {
        data,
      },
      revalidate: 2630000,
      
    };
  } catch(err) {
    
  }
  
};

const  ArticlesContent = ( {data} ) => {
  const router = useRouter()
  if (router.isFallback)  return (
    <>
    <Head>
          <title>Articles | Web3pedia </title>
          <meta name="description" content="Helping People With Web3" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Allerta&display=swap" rel="stylesheet" />
        </Head>
      <Base></Base>
      <br></br>
      <div className='articles-content'>
        <div className="profile-loader"></div>
      </div>
    </>
  );
  else {
    return (
      <>
      <Head>
          <title>{data.title} | Web3pedia Articles</title>
          <meta name="description" content="Helping People With Web3" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        </Head>
      <Base></Base>
      <br></br>
      <div className='articles-content'>
        <Link href='/explore'><a className='b-link'>Web3pedia Explore &gt;</a></Link>&nbsp;&nbsp;<Link href='/explore/articles'><a className='b-link'>Articles &gt;</a></Link>
        <h2>{data.title}</h2>
        <div style={{"whiteSpace":"pre-line"}} dangerouslySetInnerHTML={{__html:data.content}}></div>
        <br></br>
        <a href='https://forms.gle/NrNGBusMu93Lf9r59' className='b-link' target="_blank" rel="noreferrer">Suggest Edits</a>
        <br></br>
      <br></br>
      <nav className="paginav">
      <Link href={"/explore/article/"+data.next_art.id}><a className="prev">
        <span className="title">« Prev Page</span>
        <br></br>
        <span className='ar-title'>{data.next_art.topic}</span>
      </a>
      </Link>
      <Link href={"/explore/article/"+data.prev_art.id}><a className="next">
        <span className="title">Next Page »</span>
        <br></br>
        <span className='ar-title'>{data.prev_art.topic}</span>
      </a>
      </Link>
    </nav>
      </div>
      
      <br></br>
      <br></br>
      </>
      
      
    )
  }
}

export default ArticlesContent

// https://www.pluralsight.com/guides/return-html-elements-in-json