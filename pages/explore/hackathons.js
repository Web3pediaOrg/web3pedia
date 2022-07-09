import Head from 'next/head'
import Link from 'next/link'
import ExploreBase from '../../components/ExploreBase'


export const getStaticProps = async () => {
  const res = await fetch("https://web3pedia-api.vercel.app/api/explore/hackathons");
  const data = await res.json();
  return {
    props: {
      data,
    },
    revalidate: 600,
    
  };
};


const ExploreHackathons = ( {data} ) => {

  return (
    <>
     <Head>
        <title>Hackathons | Web3pedia Explore</title>
        <meta name="description" content="Helping People With Web3" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
    <ExploreBase search_value='category: Hackathons'></ExploreBase>
    <div className='explore-content'>
        <span className='explore-head'>Hackathons</span>&nbsp;&nbsp;
        <Link  href='/explore/add/hackathon'><a className='b-link'>Add</a></Link><br></br>
        <br></br>
        {data.length != 0 ? <>
        {data.map((hackathon) =>{
          return (
            <div className='hackathon-block' key={hackathon.title}>
              <div className='hackathon-title'>{hackathon.title}</div>
              <div className='hackathon-host'><b>Host:</b> {hackathon.host}</div>
              <div className='hackathon-duration'><b>Start:</b> {hackathon.start} &nbsp;&nbsp;&nbsp;<b>End:</b> {hackathon.end}</div>
              <a href={hackathon.link} className='hackathon-link'>Visit</a>
            </div>    
          )
        } )}</>
      :<><span style={{"fontSize":"13px","color":"#999999"}}><i>No hackathons available. <Link href="/explore/add/hackathon"><a className="b-link">register hackathon?</a></Link></i></span></>}

        {/* <div className='hackathon-block'>
          <div className='hackathon-title'>Web3pedia</div>
          <div className='hackathon-host'><b>Host:</b> Web3pedia</div>
          <div className='hackathon-duration'><b>Start:</b> 22-03-2023 &nbsp;&nbsp;&nbsp;<b>End:</b> 30-03-2022</div>
          <div className='hackathon-by'><b>by:</b> Soham Saoji</div>
          <a href='/' className='hackathon-link'>Visit</a>
        </div> */}
      </div>
    </>
     
     
  )
}

export default ExploreHackathons