import Head from 'next/head'
import Link from 'next/link'
import { auth } from '../components/config/fireb'
import {useRouter} from 'next/router'
import { signOut } from 'firebase/auth'

export async function getStaticProps(){
  const res = await fetch("https://web3pedia-api.vercel.app/api/explore/search");
  const data = await res.json();
  return {
    props: {
      data,
    },
    revalidate: 3600,
    
  };
}

const Explore = ({data}) => {
  const user = auth.currentUser;
  const router = useRouter();

  function signOutUser() {
    signOut(auth).then(() => {
        router.push("/explore")
      }).catch((error) => {
        
      });
  }

  function autocomplete(inp, arr,arr_2) {

    var currentFocus;

    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;

        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;

        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");

        this.parentNode.appendChild(a);

        for (i = 0; i < arr.length; i++) {

          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {

            b = document.createElement("DIV");
            // b.innerHTML += ""

            b.innerHTML = "<i class='fa fa-search' style={{'color':'#6B7280'}}></i>&nbsp;&nbsp;<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);

            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";

            b.addEventListener("click", function(e) {

                const push_path = arr_2[arr.indexOf(this.getElementsByTagName("input")[0].value)]
                router.push(push_path)
                inp.value = this.getElementsByTagName("input")[0].value;

                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });

    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          currentFocus++;

          addActive(x);
        } else if (e.keyCode == 38) { //up

          currentFocus--;

          addActive(x);
        } else if (e.keyCode == 13) {

          e.preventDefault();
          if (currentFocus > -1) {

            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      
      if (!x) return false;
      
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
     
    }
    // function removeActive(x) {
    //   /*a function to remove the "active" class from all autocomplete items:*/
    //   for (var i = 0; i < x.length; i++) {
    //     // x[i].classList.remove("autocomplete-active");
    //   }
    // }
    function closeAllLists(elmnt) {
      
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }

  var countries = data.pages
  var page_links = data.page_links


  return (
    <>
     <Head>
        <title>Web3pedia Explore</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>
      <div className="explore-topnav" id='myTopnav'>
          <Link href="/" replace><a className="explore-nav-logo"><span style={{"fontFamily":"Raleway"}}>W</span>eb3pedia</a></Link>
          <div className="explore-topnav-right">
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
            <Link href="/login"><a className="explore-sign-in">Sign in</a></Link></>}
          </div>
      </div>
      <br></br>
      <div className='explore-home-main'>
        <div className='main-header-2'>
          <span className='header-2'><span style={{"fontFamily":"Raleway"}}>W</span>eb3pedia Explore<sup style={{"fontSize":"14px","fontWeight":"200"}}>Beta</sup></span><br></br>
        </div>
        <br></br>
        <div className='autocomplete'>
          <div className='explore-search'>
            <i className="fa fa-search"></i>&nbsp;
            <input type="text" id="myInput" autoComplete='off' onChange={() => autocomplete(document.getElementById("myInput"), countries,page_links)} placeholder="Search Explore"></input>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className='explore-home-categories' style={{"textAlign":"center"}}>
          <span>Categories:</span>&nbsp;&nbsp;&nbsp;
          <Link href="/explore/articles"><a className="b-link">Articles</a></Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link href="/explore/courses"><a className="b-link">Courses</a></Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link href="/explore/events"><a className="b-link">Events</a></Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link href="/explore/hackathons"><a className="b-link">Hackathons</a></Link>&nbsp;&nbsp;&nbsp;&nbsp;
          <Link href="/news"><a className="b-link">News</a></Link>&nbsp;&nbsp;&nbsp;
        </div>
      </div>
      <br></br>
      <div className='explore-home-footer'>
      &nbsp;&nbsp;&nbsp;&nbsp;<Link href="/about"><a>About</a></Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link href="/docs"><a>Docs</a></Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link href="/support"><a>Support</a></Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link href="/docs/explore"><a>Help</a></Link>&nbsp;&nbsp;&nbsp;&nbsp;
        {/* <Link href="/explore"><a>Settings</a></Link>&nbsp;&nbsp;&nbsp;&nbsp; */}
        <br></br>
        <br></br>
        <div style={{"borderTop":"1px solid hsl(0, 0%, 87%)","padding":"3px"}}>
         <span style={{"fontSize":"13px"}}>&nbsp;&nbsp;&nbsp;Copyright © 2022 Web3pedia</span>
        </div>
      </div>
      </>
  )
}

export default Explore

