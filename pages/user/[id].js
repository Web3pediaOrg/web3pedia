import Head from "next/head";
import Link from "next/link";
import Base from "../../components/base";
import { useRouter } from "next/router";

export async function getStaticPaths() { 
return { 
      paths: [],
      fallback: true
    }
  }
  
  

export async function getStaticProps({ params }){
    
    try {
      const res = await fetch("https://web3pedia-api.vercel.app/api/user/"+params.id);
      const data = await res.json();
      const data_status = true
      return {
        props: {
          data,
          data_status,
        },
        
      };
    }
    catch(err) {
      const data_status = false
      const data = {}
      return {
        props: {
          data,
          data_status,
        },
        
      };
    }
  };


const UserProfile = ( {data, data_status} ) => {
  const router = useRouter()
  if (router.isFallback)  return (
    <>  
            <Head>
                <title>Web3pedia Profiles</title>
            </Head>
            <Base></Base>
            <br></br>
            <br></br>
            <div className="user-profile-main">
              <div className="user-profile">
                <center>
                  <div className="profile-loader"></div>
                </center>
              </div>
            </div>
        </>
  )
  else {
    if (data_status) {
    return (
        <>  
            <Head>
                <title>{data.display_name} | Web3pedia Profiles</title>
            </Head>
            <Base></Base>
            <br></br>
            <br></br>
            <div className="user-profile-main">
            <div className="user-profile">
                <span className="user-display-name">{data.display_name}</span><br></br>
                <span className="user-username">@{data.username}</span><br></br>
                <br></br>
                <div className="profile-content">{data.about}</div>
                
                <span><i className="fa fa-map-marker" style={{"fontSize":"17px","color":"#6B7280"}}></i> {data.location}</span>&nbsp;&nbsp;&nbsp;
                <span><i className="fa fa-link" style={{"fontSize":"17px","color":"#6B7280"}}></i> <a href={"https://"+ data.website} target="_blank" rel="noreferrer" className="b-link">{data.website}</a></span>
                
                <div className="profile-cat">Social Links:</div>
                <div className="profile-social-links">
                    <a href={"https://www.twitter.com/"+data.twitter_link} target="_blank" rel="noreferrer"><i className="fa fa-twitter" style={{"fontSize":"18px","color":"#6B7280"}}></i> @{data.twitter_link}</a>
                    <a href={"https://www.github.com/"+data.github_link} target="_blank" rel="noreferrer"><i className="fa fa-github" style={{"fontSize":"18px","color":"#6B7280"}}></i> @{data.github_link}</a>
                </div>

                <div className="profile-cat">Web3 Projects:</div>
                <span style={{"fontSize":"12px","color":"#8c8c8c"}}><i>No Projects</i></span>
                {/* <div className="user-web3-projects">
                    <a href="/" target="blank">Web3pedia<br></br><span>web3pedia.info</span></a>
                </div> */}
            </div>
            </div>
            <div className="profile-footer">
                <div className="profile-footer-links">
                  <Link href="/"><a>Web3pedia</a></Link>
                </div>
            </div>
        </>
    )
  }
  else {
    return (
      <>
        <Head>
          <title>Web3pedia Profiles</title>
        </Head>
        <Base></Base>
        <div className="user-profile-main">
          <div className="user-profile">
            <h1>This account doesn’t exist</h1>
          </div>
        </div>
      </>
    )
  }
}
}

export default UserProfile
