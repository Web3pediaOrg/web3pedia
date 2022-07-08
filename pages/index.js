import Head from 'next/head'
import Link from 'next/link'
import Base from '../components/base'
import Footer from '../components/footer'
import { auth } from '../components/config/fireb'

export const getStaticProps = async () => {
  const res = await fetch("https://web3pediaorg.github.io/web3/api/quick.json");
  const data = await res.json();
  
  return {
    props: {
      data,
    },
    
  };
};


const Home = ( {data} ) => {
  const user = auth.currentUser;
  return (
    <>
     <Head>
        <title>Web3pedia</title>
        <meta name="description" content="Helping People With Web3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Base></Base>
      <br></br>
      <div className='main-header-2'>
        <span className='header-2'>Web3pedia</span><br></br>
        {/* <span className='subheading-2'>Helping People With Web3</span> */}
        <span className='subheading-2'>Everything you need, in one place.</span>
        
      </div>
      <br></br>
      <div className='main-2'>
        <div className='cat-block'>
          <div className='cat-1'>
            <span className='cat-head'>Confused With Jargons?</span>
          </div>
          <div className='content-block'>
          <p>&nbsp;Here&apos;s <b>Web3pedia</b> to help you!</p>
          <p>Web3pedia, built-in 2022, is a one-stop-shop for all queries related to <Link href="/explore/articles/web3"><a className="b-link">Web3</a></Link>.
          Our mission is to make Web3 more easier by providing people everything in one place.&nbsp;<Link href="/about"><a className='b-link'>Read More</a></Link>
          </p>     
          <div className='get-started-btn'>
            {user ?<><Link href='/dashboard'><a>Go to Dashboard 🚀</a></Link></>:<><Link href='/signup'><a>Get Started 🚀</a></Link></>}
            
          </div>
          <br></br>
          <a href='https://twitter.com/Web3pedia_' target="_blank" title="twitter" rel="noreferrer"><i className="fa fa-twitter" style={{"fontSize":"24px","color":"#6B7280"}}></i></a>&nbsp;&nbsp;&nbsp;
          <a href='https://github.com/Web3pedia' target="_blank" title="Github" rel="noreferrer"><i className="fa fa-github" style={{"fontSize":"24px","color":"#6B7280"}}></i></a>&nbsp;&nbsp;&nbsp;
          {/* <a href='/saoji' title="Youtube"><i className="fa fa-linkedin" style={{"fontSize":"24px","color":"#6B7280"}}></i></a> */}
          </div>
        </div>
        <br></br>
        <div className='cat-block' id='whats-happening'>
          <div className='cat-1'>
            <span className='cat-head'>What&apos;s happening?!</span><br></br>
            <span className='subheading-2'>Here&apos;s a quick overview</span>
          </div>
          <br></br>
          <div className='quick-content'>
            <div className='news-block'>
              <span className='quick-head'>News</span>
              <ul>
              {data.news.map((newss) => {
                return  (
                  <li key={newss.title}><a href={newss.link} className='news-li' target="_blank" rel="noreferrer">{newss.title}</a></li>  
                )})}
                
              </ul>
              <Link href='/news'><a className='b-link'>View More</a></Link>
            </div>

            <div className='event-block'>
              <span className='quick-head'>Events</span>
              <ul>
              {data.events.map((event) => {
                return  (
                  <li key={event.title}><a href={event.url} target="_blank" rel="noreferrer">{event.title} <span className='quick-event-details'>({event.time})</span></a></li>  
                )})}
              </ul>
              <Link href='/explore/events'><a className='b-link'>View More</a></Link>
            </div>

            <div className='featured-block'>
              <span className='quick-head'>Featured</span>
              <h3>Coming Soon!</h3>
            </div>
            <div className='latest-block'>
              <span className='quick-head'>Latest Articles</span>
              <ul>
              {data.latest.map((article) => {
                return  (
                  <li key={article.topic}><a href={article.url}>{article.topic}</a></li>  
                )})}
              </ul>
              <Link href='/explore/articles'><a className='b-link'>View More</a></Link>
            </div>
            <div className='updates-block'>
              <span className='quick-head'>Updates</span><br></br>
              <br></br>
              <Link href='/docs/updates'><a className='b-link'>View More</a></Link>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <Footer></Footer>
    </>
     
     
  )
}

export default Home