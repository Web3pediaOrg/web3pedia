import Link from 'next/link'
import Head from 'next/head'
import { signOut } from 'firebase/auth';
import { auth } from './config/fireb';
import { useRouter } from 'next/router';


export default function ExploreBase( {search_value} ) {
    const user = auth.currentUser;
    const router = useRouter();

    function signOutUser() {
      signOut(auth).then(() => {
          router.push("/explore")
        }).catch((error) => {
          // An error happened.
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
  
              b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
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
      /*execute a function presses a key on the keyboard:*/
      inp.addEventListener("keydown", function(e) {
          var x = document.getElementById(this.id + "autocomplete-list");
          if (x) x = x.getElementsByTagName("div");
          if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
          } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
          } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
              /*and simulate a click on the "active" item:*/
              if (x) x[currentFocus].click();
            }
          }
      });
      function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        // removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        // x[currentFocus].classList.add("autocomplete-active");
      }
      // function removeActive(x) {
      //   /*a function to remove the "active" class from all autocomplete items:*/
      //   for (var i = 0; i < x.length; i++) {
      //     // x[i].classList.remove("autocomplete-active");
      //   }
      // }
      function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
          if (elmnt != x[i] && elmnt != inp) {
            x[i].parentNode.removeChild(x[i]);
          }
        }
      }
      /*execute a function when someone clicks in the document:*/
      document.addEventListener("click", function (e) {
          closeAllLists(e.target);
      });
    }
  
    var countries = ['Articles','Hackathons','Events','Courses','News','Web3 - Article','DAO (Decentralized Autonomous Organization) - Article','NFT (Non-Fungible Token) - Article','DeFi Theory - Article','Proof Of Work - Article','Proof Of Stake - Article','category: Articles','category: Hackathons','category: Events','category: Courses',]
    var page_links = ['/explore/articles','/explore/hackathons','/explore/events','/explore/courses','/new','/explore/article/web3','/explore/article/dao','/explore/article/nft','/explore/article/defi-theory','/explore/article/proof-of-work','/explore/article/proof-of-stake','/explore/articles','/explore/hackathons','/explore/events','/explore/courses']
  

  return (
    <>
     <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="./public/favicon.png" />
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
      <br></br>
      <div className='explore-base-search'>
        <Link href="/explore"><a style={{"fontSize":"22px","fontWeight":"500"}}>Explore</a></Link>&nbsp;&nbsp;&nbsp;
        <div className='autocomplete'>
        <div className='explore-base-searchbar'>
          <i className="fa fa-search" style={{"color":"#6B7280"}}></i>&nbsp;
          <input type="text" placeholder="Search Explore" defaultValue={search_value} onChange={() => autocomplete(document.getElementById("myInput"), countries,page_links)} id='myInput'></input>
        </div>
      </div>
      </div>
      <br></br>
      <br></br>
    </>
  )
}
