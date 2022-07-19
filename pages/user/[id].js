import Head from "next/head";
import Link from "next/link";
import Base from "../../components/base";
import { useRouter } from "next/router";
import { auth } from "../../components/config/fireb";

export async function getStaticPaths() { 
return { 
      paths: [],
      fallback: true
    }
  }
  
  

export async function getStaticProps({ params }){
    
    try {
      const res = await fetch("http://web3pedia-api.vercel.app/api/user/"+params.id);
      const data = await res.json();
      const data_status = true
      return {
        props: {
          data,
          data_status,
        },
        revalidate: 900,
        
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

const UserProfile = ({data, data_status} ) => {
  const router = useRouter();
  const user = auth.currentUser;
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
                <title>{data.profile.display_name} | Web3pedia Profiles</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Base></Base>
            <br></br>
            <br></br>
            <div className="user-profile-main">
            <div className="user-profile">
                <span className="user-display-name">{data.profile.display_name}</span><br></br>
                <span className="user-username">@{data.profile.username}</span><br></br>
                <br></br>
                <div className="profile-content" style={{"whiteSpace":"pre-line"}}>{data.profile.about}</div>
                
                <div className="profile-meta-data">
                  <span style={{"color":"#6B7280"}}><i className="fa fa-map-marker" style={{"fontSize":"17px","color":"#6B7280"}}></i> {data.profile.location}</span>
                  <span><i className="fa fa-link" style={{"fontSize":"17px","color":"#6B7280"}}></i> <a href={"https://"+ data.profile.website} target="_blank" rel="noreferrer" className="b-link">{data.profile.website}</a></span>
                  <span style={{"color":"#6B7280"}}><i className="fa fa-calendar" style={{"fontSize":"17px"}}></i>&nbsp; joined  {data.profile.joined_date}</span>
                </div>
                
                <div className="profile-cat">Social Links:</div>
                <div className="profile-social-links">
                    <a href={"https://www.twitter.com/"+data.profile.twitter_link} title="twitter" target="_blank" rel="noreferrer"><i className="fa fa-twitter" style={{"fontSize":"18px","color":"#6B7280"}}></i> @{data.profile.twitter_link}</a>
                    <a href={"https://www.github.com/"+data.profile.github_link} target="_blank" title="github" rel="noreferrer"><i className="fa fa-github" style={{"fontSize":"18px","color":"#6B7280"}}></i> @{data.profile.github_link}</a>
                </div>

                <div className="profile-cat">Web3 Projects:</div>

                {data.projects.length != 0 ? 
                <>
                  <div className="user-web3-projects">
                  {data.projects.map((project) => {
                  return (
                    <>
                          <a href={"https://"+project.url} target="_blank" rel="noreferrer">{project.name}<br></br><span>{project.url}</span></a>
                    </>
                  
                  )
                  })}
                  </div>
                </>:
                <>
                  <span style={{"fontSize":"12px","color":"#8c8c8c"}}><i>No Projects</i></span>
                </>
                }

            </div>
            </div>
            <div className="profile-footer">
              {user ? <></>:
              <>
                <div className="alert" id='alert'>
                  <strong><Link href="/signup">Sign Up</Link></strong> to create your Web3pedia profile.
                </div>
                <br></br>
              </>}
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
        <br></br>
        <br></br>
        <div className="user-profile-main">
          <div className="user-profile">
            <span style={{"fontSize":"24px","fontWeight":"500"}}>This account doesn&apos;t exist</span><br></br>
            <span style={{"fontSize":"15px","color":"#999999"}}>Try searching for another.</span>
          </div>
        </div>
      </>
    )
  }
}
}

export default UserProfile

