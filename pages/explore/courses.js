import Head from 'next/head'
import Link from 'next/link'
import ExploreBase from '../../components/ExploreBase'

export const getStaticProps = async () => {
  const res = await fetch("https://web3pedia-api.vercel.app/api/explore/courses");
  const data = await res.json();
  
  return {
    props: {
      data,
    },
    revalidate: 600,
    
  };
};

const ExploreCourses = ( {data} ) => {

  return (
    <>
     <Head>
        <title>Courses | Web3pedia Explore</title>
        <meta name="description" content="Helping People With Web3" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
    <ExploreBase></ExploreBase>
    <div className='explore-main'>
        <span className='explore-head'>Courses</span>&nbsp;&nbsp;<Link href='/explore/add/course'><a className='b-link'>Add</a></Link><br></br><br></br>
        <br></br>
        {data.length != 0 ? 
        <>
          {data.map((course) =>{
          return (
            <div className='hackathon-block' key={course.title}>
              <div className='hackathon-title'>{course.title}</div>
              <div className='hackathon-host'><b>Level:</b> {course.level}&nbsp;&nbsp;&nbsp; <b>Type:</b> {course.type}</div>
              <div className='hackathon-duration'><b>Cost:</b> {course.cost}</div>
              <a href={course.link} className='hackathon-link'>Visit</a>
            </div>   
          )
        } )}
        </>:<><span style={{"fontSize":"13px","color":"#999999"}}><i>No Courses available. <Link href="/explore/add/courses"><a className="b-link">register course?</a></Link></i></span></>}
      </div>
      <br></br>
      <br></br>
    </>
     
     
  )
}

export default ExploreCourses