import Link from 'next/link'
import Head from 'next/head'
import { auth } from './config/fireb'
import { signOut } from 'firebase/auth'
import { useRouter } from 'next/router'

export default function Base() {
  const user = auth.currentUser;
  const router = useRouter();

  function signOutUser() {
    signOut(auth).then(() => {
        router.push("/")
      }).catch((error) => {
        // An error happened.
      });
  }

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return (
    <>
     <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
      <div className="topnav" id='myTopnav'>
          <Link href="/" replace><a className="nav-logo"><span style={{"fontFamily":"Raleway"}}>W</span>eb3pedia</a></Link>
          <div className="topnav-right">
            <div className="dropdown">
              <button className="dropbtn">Products&nbsp; 
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <Link href="/explore" replace><a className="drop-content-2">Explore</a></Link>
                {/* <Link href="/build" replace><a className="drop-content-2">Build</a></Link> */}
              </div>
            </div>
            <Link href="/docs"><a>Docs</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/support"><a>Support</a></Link> 
            {user ?<>
              <div className="dropdown">
                {user.displayName != undefined ? 
              <>
                <button className="dropbtn" style={{"fontSize":"17px"}}>{user.displayName}&nbsp;
                  <i className="fa fa-caret-down"></i>
                </button>
              </> :
              <>
               <button className="dropbtn" style={{"fontSize":"17px"}}>{user.email.split("@")[0]}&nbsp;
                 <i className="fa fa-caret-down"></i>
               </button>
              </>}
              <div className="dropdown-content">
                <Link href="/dashboard"><a style={{"fontSize":"15px"}}>Dashboard</a></Link>
                <div className='drop-subsection'>
                  <Link href="/user/account"><a><i className="fa fa-gear" style={{"fontSize":"14px"}}></i>&nbsp; Settings</a></Link>
                  <button onClick={() => signOutUser()}><i className="fa fa-power-off" style={{"fontSize":"13px"}}></i>&nbsp; Logout</button>
                </div>
              </div>
            </div>
            </> :<>
            <Link href="/login"><a>Login</a></Link>
              <Link href="/signup"><a>Get Started</a></Link></>}
          </div>
          <a href="javascript:void(0);" className="icon" onClick={() => myFunction()}>
                <i className="fa fa-bars"></i>
          </a>
      </div>
    </>
  )
}
