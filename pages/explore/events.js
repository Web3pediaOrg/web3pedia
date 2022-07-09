import Head from 'next/head'
import Link from 'next/link'
import ExploreBase from '../../components/ExploreBase'


export const getStaticProps = async () => {
  const res = await fetch("https://web3pedia-api.vercel.app/api/explore/events");
  const data = await res.json();
  
  return {
    props: {
      data,
    },
    revalidate: 600,
    
  };
};


const ExploreEvents = ({data}) => {
  return (
    <>
     <Head>
        <title>Events | Web3pedia Explore</title>
        <meta name="description" content="Helping People With Web3" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
    <ExploreBase search_value='category: Events'></ExploreBase>
    <div className='explore-content'>
        <span className='explore-head'>Events</span>&nbsp;&nbsp;
        <Link href='/explore/add/event'><a className='b-link'>Add</a></Link><br></br>
        <br></br>
        {data.length != 0 ? 
        <>
          {data.map((event) =>{
          return (
            <div className='hackathon-block' key={event.title}>
            <div className='hackathon-title'>{event.title}</div>
            <div className='hackathon-host'><b>Host:</b> {event.host} &nbsp;&nbsp;&nbsp;<b>Mode:</b> {event.mode} </div>
            <div className='hackathon-duration'><b>Date:</b> {event.date} &nbsp;&nbsp;&nbsp;<b>Time:</b> {event.time} </div>
            <a href={event.link} className='hackathon-link'>Visit</a>
          </div>   
          )
        } )}
        </>:<><span style={{"fontSize":"13px","color":"#999999"}}><i>No Events available. <Link href="/explore/add/event"><a className="b-link">register events?</a></Link></i></span></>}
        
        {/* <div className='hackathon-block'>
          <div className='hackathon-title'>Web3pedia</div>
          <div className='hackathon-host'><b>Host:</b> Soham Saoji &nbsp;&nbsp;&nbsp;<b>Mode:</b> Online </div>
          <div className='hackathon-duration'><b>Date:</b> 22-03-2023 &nbsp;&nbsp;&nbsp;<b>Time:</b> 12:00PM IST</div>
          <div className='hackathon-by'><b>by:</b> Soham Saoji</div>
          <a href='/' className='hackathon-link'>Visit</a>
        </div> */}
      </div>
    </>
     
     
  )
}
export default ExploreEvents
