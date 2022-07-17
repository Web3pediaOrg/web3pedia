import Head from "next/head";
import Link from "next/link";
import Base from "../components/base";
import { auth } from "../components/config/fireb";
import { ref,push,child,set } from "firebase/database";
import { useEffect,useState } from 'react';
import { feeddatabase } from "../components/config/feeds";
import { useRouter } from "next/router";

export const getStaticProps = async () => {
    
    const [dataRes,data_usersRes] = await Promise.all([
        fetch("https://web3pedia-api.vercel.app/api/feeds"),
        fetch("https://web3pedia-api.vercel.app/api/users")
    ])

    const [data,data_users] = await Promise.all([
        dataRes.json(),
        data_usersRes.json()
    ])

    return {
        props: {
            data,
            data_users,
        },
        revalidate: 600,
    }
    
    }

const Feeds = ({data,data_users}) => {
    const [canRender, setCanRander] = useState(false)
    const [canPost, setCanPost] = useState(false)
    const user = auth.currentUser;
    const router = useRouter()
    const d = new Date();
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

    useEffect(() => {
        if (user){
        setCanRander(true)
        if (user.displayName != undefined) {
            setCanPost(true)
        }
        else {
            setCanPost(false)
        }
      }
      else {
        setCanRander(false)
      }
      },[user]);

    function displayModal() {
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
      }
      

    function hideModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
    }

      function postFeed(e) {
        e.preventDefault()

        const post_content = document.getElementById("postarea").value;
        const newPostKey = push(child(ref(feeddatabase), 'posts')).key;

        set(ref(feeddatabase, "/posts/"+newPostKey+"/metadata"), {
            username:user.displayName,
            post_content : post_content,
            uid:user.uid,
            type:"post_feed",
            "time": d.getDate()+" "+months[d.getMonth()] +" "+d.getFullYear()+" at "+d.getHours()+":"+d.getMinutes()
          }).then (
            alert("Posted!"),
            document.getElementById("postarea").value = "",
            hideModal()    
          ).catch((error) => {
            alert("Error Updating Your Profile.")
          })

      }

    function refreshFeeds() {
        router.push("/feeds");
    }

    function displayMobileSearch() {
        document.getElementById("feed-mobile-search-div").style.display = "block";
    }

    function hideMobileSearch() {
        document.getElementById("feed-mobile-search-div").style.display = "none";
    }

    function autocomplete(inp, arr) {

        var currentFocus;
    
        inp.addEventListener("input", function(e) {
            var a, b, i, val = this.value;
    
            closeAllLists();
            if (!val) { return false;}
            currentFocus = -1;
    
            a = document.createElement("DIV");
            a.setAttribute("id", this.id + "autocomplete-list-2");
            a.setAttribute("class", "autocomplete-items-2");
    
            this.parentNode.appendChild(a);
    
            for (i = 0; i < arr.length; i++) {
    
              if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
    
                b = document.createElement("DIV");
    
                b.innerHTML = "<i class='fa fa-search' style={{'color':'#6B7280'}}></i>&nbsp;&nbsp;<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
    
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
    
                b.addEventListener("click", function(e) {
    
                    // const push_path = arr_2[arr.indexOf(this.getElementsByTagName("input")[0].value)]
                    router.push("/user/"+this.getElementsByTagName("input")[0].value)
                    inp.value = this.getElementsByTagName("input")[0].value;
    
                    closeAllLists();
                });
                a.appendChild(b);
              }
            }
        });
    
        inp.addEventListener("keydown", function(e) {
            var x = document.getElementById(this.id + "autocomplete-list-2");
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
          
          var x = document.getElementsByClassName("autocomplete-items-2");
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
    
      var countries = data_users

    return (
        <>
            <Head>
                <title>Web3pedia Feeds</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            </Head>
            <Base></Base>
            <div className="feeds-main">
            <br></br>
            <div className="main-2">
                <br></br>
                <div className="feeds-header">
                    <span style={{"fontSize":"35px","fontWeight":"500"}}><span style={{"fontFamily":"Raleway"}}>W</span>eb3pedia Feeds</span>
                    <span className="feed-desktop-search-div">
                        <input type="text" className="feed-desktop-search" id="myInput" onChange={() => autocomplete(document.getElementById("myInput"), countries)} placeholder="Search User"></input><br></br>
                    </span>

                    <button className="mobile-search-btn" onClick={() => displayMobileSearch()}><i className="fa fa-search"></i></button> 
                    <div className="feed-mobile-search-div" id="feed-mobile-search-div">
                        <input type="text" className="feed-mobile-search" id="myInput" onChange={() => autocomplete(document.getElementById("myInput"), countries)} placeholder="Search User"></input>  
                        <button onClick={() => hideMobileSearch()}>&#10006;</button>    
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className="feeds-section">
                    <div className="feed-post">
                        <div className="post-feed-div" id="post-feed" onClick={() => displayModal()}>What&apos;s new in web3?</div>
                        <br></br>
                <span onClick={() => refreshFeeds()} className="b-link" style={{"cursor":"pointer"}}>Refresh feeds</span>
                
                    </div>
                <div id="myModal" className="feeds-modal">
                    {canRender ? <>
                        {canPost ? <>
                            <div className="feed-modal-content">
                            <span className="close" onClick={() => hideModal()}>&times;</span>
                            <center>
                                <span style={{"fontSize":"25px","fontWeight":"600"}}>Create Post</span>
                            </center>
                            <hr></hr>
                            <Link href={"/user/"+user.displayName}><a className="post-username">{user.displayName}</a></Link>
                            <form onSubmit={postFeed}>
                                <textarea className="post-textarea" id="postarea" style={{"whiteSpace":"pre-line"}} rows="7" placeholder="What's new in web3?" maxLength="150" required></textarea>
                                <span style={{"fontSize":"15px","color":"#b3b3b3","float":"right"}}>Max: 150</span>
                                <button type="submit" className="post-btn">Post</button>
                            </form>
                        </div>
                        </>:
                        <>
                            <div className="feed-modal-content">
                                <Link href="/user/account"><a>Create Web3pedia Profile</a></Link> to post.
                            </div>
                        </>}
                    </>:
                    <>
                     <div className="feed-modal-content">
                        <span className="close" onClick={() => hideModal()}>&times;</span>
                        <center>
                            <span style={{"fontSize":"25px","fontWeight":"600"}}>Create Post</span>
                        </center>
                        <hr></hr>
                        <br></br>
                        <center>
                            <Link href="/login"><a className="b-link"><b></b>Sign in</a></Link> to post.
                        </center>
                     </div>
                    </>}
                </div>
                    <div className="feeds">
                        {data.map((post) => {
                            if (post.metadata.type == "post_feed") {
                                return (
                                    <>
                                        <div className="feed-post" key={post.id}>
                                            <Link href={"/user/"+post.metadata.username}><a className="post-uname">{post.metadata.username}</a></Link>
                                            <div className="post-time">{post.metadata.time}</div>
                                            <div className="post-content" style={{"whiteSpace":"pre-line"}}>{post.metadata.post_content}</div>
                                        </div>
                                    </>
                                )
                            }
                            if (post.metadata.type == "profile_project") {
                                return (
                                    <>
                                        <div className="feed-post" key={post.id}>
                                            <Link href={"/user/"+post.metadata.username}><a className="post-uname">{post.metadata.username}</a></Link>
                                            <div className="post-time">{post.metadata.time}</div>
                                            <span style={{"fontSize":"12px","color":"#808080"}}><i className="fa">&#xf05a;</i>&nbsp; <i>Added web3 project to profile</i></span>
                                            <div className="user-web3-projects">
                                                <a href={"https://"+post.metadata.url} target="_blank" rel="noreferrer">{post.metadata.name}<br></br><span>{post.metadata.url}</span></a>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Feeds

