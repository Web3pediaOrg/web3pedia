import Head from 'next/head'
import Link from 'next/link'
import { auth } from '../../components/config/fireb'
import { updateProfile,sendEmailVerification } from 'firebase/auth'
import Base from '../../components/base'
import { useRouter } from 'next/router'
import { ref,set,get,child,push } from "firebase/database";
import { userdatabase } from '../../components/config/fireb-2'
import { useEffect,useState } from 'react';


export default function Account() {
  const [canRender, setCanRander] = useState(false)
  const router = useRouter();
  const user = auth.currentUser;

  useEffect(() => {
    if (user){
    setCanRander(true)
  }
  else {
    router.push('/signup')
  }
  },[user,router]);

  function setUserName(e) {
    e.preventDefault()
    const username = document.getElementById("username").value;

    const dbRef = ref(userdatabase);

    if (user.emailVerified != false) {
      get(child(dbRef, "/user")).then((snapshot) => {
        if (snapshot.exists()) {
          var data = snapshot.val();
          var keys = Object.keys(data)
          if (keys.includes(username.toLowerCase())) {
            alert("Username Already Exist.")
          }
          else {
            updateProfile(auth.currentUser, {
              displayName: username
            }).then(() => {
              router.push('/user/account')
            }).catch((error) => {
              alert("Unable to create profile. Try again later.")
            });   
          }
        }
    }).catch((error) => {
        console.error(error);
    });
  }
  else {
    alert("You need verified email to create profile")
  }

  }


  function updateUserProfile(e) {
    e.preventDefault()

    const display_name = document.getElementById("display-name").value;
    const username = user.displayName;
    const about = document.getElementById("about").value;
    const location = document.getElementById("location").value;
    const website = document.getElementById("website").value;
    const twitter_link = document.getElementById("twitter").value;
    const github_link = document.getElementById("github").value;


    set(ref(userdatabase, "/user/"+username.toLowerCase()+"/profile"), {
      display_name:display_name,
      username:username,
      about:about,
      location:location,
      website:website,
      twitter_link:twitter_link,
      github_link:github_link,
      uid:auth.currentUser.uid
    }).then (
      router.push("/user/"+username)   
    ).catch((error) => {
      alert("Error Updating Your Profile.")
    });

  }

  function sendVerificationEmail() {
    sendEmailVerification(auth.currentUser)
    .then(() => {
      alert("Email verfication link send to "+auth.currentUser.email)
    });
  }

// When the user clicks the button, open the modal 
function displayModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function hideModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function addWeb3Project(e) {
  e.preventDefault()

  const project_name = document.getElementById("project-name").value;
  const project_url = document.getElementById("project-url").value;

  push(ref(userdatabase, "/user/"+user.displayName.toLowerCase()+"/projects"), {
    name:project_name,
    url:project_url
  }).then (
    router.push("/user/"+user.displayName)   
  ).catch((error) => {
    alert("Error Updating Your Profile.")
  });
}

  if (canRender) {
    if (user.displayName != undefined) {
  return (
    <>
     <Head>
        <title>Settings | Web3pedia</title>
        <meta name="description" content="Helping People With Web3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Base></Base>
      <br></br>
      <div className='settings-main'>
      <br></br>
      <div className='settings-content'>
      <span style={{"fontSize":"35px","fontWeight":"500","color":"#22222F"}}>Profile Settings</span><br></br>
      <br></br>
      <table>
        <tr>
        <th><Link href="/user/account"><a style={{"fontWeight":"400"}} className="b-link">Profile Settings</a></Link></th>&nbsp;&nbsp;&nbsp;
          <th><Link href="/user/password_change"><a style={{"fontWeight":"400"}} className="b-link">Change Password </a></Link></th>
        </tr>
      </table>
      <br></br>
      <span style={{"fontWeight":"500","color":"#22222F"}}>Registered email</span><br></br>{user.email} 
      {/* &#x2717; */}
        <form style={{"marginTop":"15px"}} onSubmit={updateUserProfile} autoComplete="off">
          <label style={{"fontWeight":"500","color":"#22222F"}}>Display name</label><br></br> 
          <input type="text" className='account-input' id="display-name"></input><br></br>

          <label style={{"fontWeight":"500","color":"#22222F"}}>Username</label><br></br> 
          <input type="text" className='account-input' value={user.displayName} id="username" readOnly></input><br></br>

          <label style={{"fontWeight":"500","color":"#22222F"}}>About</label><br></br> 
          <textarea id='about' className='account-input' rows="5"></textarea><br></br>

          <label style={{"fontWeight":"500","color":"#22222F"}}>Location</label><br></br> 
          <input type="text" className='account-input' id='location'></input><br></br>

          <label style={{"fontWeight":"500","color":"#22222F"}}>Website</label><br></br> 
          <input type="text" className='account-input' id='website' placeholder='eg. web3pedia.vercel.app'></input><br></br>
          <br></br>
          <label style={{"fontSize":"20px","fontWeight":"500","color":"#22222F"}}>Social Links</label><br></br> 
          <br></br>
          <label style={{"fontWeight":"500","color":"#22222F"}}>Twitter</label><br></br>
          <input type="text" className='account-input' id='twitter' placeholder='Username'></input><br></br>
          <label style={{"fontWeight":"500","color":"#22222F"}}>Github</label><br></br>
          <input type="text" className='account-input' id='github' placeholder='Username'></input><br></br>
          <br></br>
          <button type='submit' className='auth-btn'>Save Changes</button>
        </form>
        <br></br>
        <br></br>
        <label style={{"fontSize":"20px","fontWeight":"500","color":"#22222F"}}>Web3 Projects</label><br></br> 
        <button className='auth-btn-2' id="myBtn" onClick={() => displayModal()} style={{"marginTop":"15px"}}>Add Project</button>
        <div id="myModal" className="modal">
          <div className="profile-modal-content">
            <span className="close" onClick={() => hideModal()}>&times;</span>
            <p style={{"fontSize":"25px","fontWeight":"500"}}>Add Web3 Project</p>

            <form onSubmit={addWeb3Project}>
              <label style={{"fontWeight":"500","color":"#22222F"}}>Name</label><br></br>
              <input type="text" className='account-input' id='project-name'></input><br></br>

              <label style={{"fontWeight":"500","color":"#22222F"}}>URL</label><br></br>
            <input type="link" className='account-input' id='project-url' placeholder='eg. web3pedia.vercel.app'></input><br></br>
            <br></br>
            <button className='auth-btn-2' type='submit'>Add Project</button>
          </form>
          </div>
        </div>
      </div>
      </div>
      <br></br>
      <br></br>
    </>
     
     
  )
  }
  else {
    return (
      <>
        <Head>
          <title>Settings | Web3pedia</title>
          <meta name="description" content="Helping People With Web3" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Base></Base>

        <br></br>
        <div className='settings-main'>
          <br></br>
          <div className='settings-content'>
          <span style={{"fontSize":"35px","fontWeight":"500","color":"#22222F"}}>Profile Settings</span><br></br>
          <br></br>

          <table>
            <tr>
            <th><Link href="/user/account"><a style={{"fontWeight":"400"}} className="b-link">Profile Settings</a></Link></th>&nbsp;&nbsp;&nbsp;
              <th><Link href="/user/password_change"><a style={{"fontWeight":"400"}} className="b-link">Change Password </a></Link></th>
            </tr>
          </table>
          <br></br>
          <span style={{"fontWeight":"500","color":"#22222F"}}>Registered email</span><br></br>{user.email} {user.emailVerified ? <><span style={{"color":"#248f24","cursor":"pointer"}} title="Email Verified">&#10004;</span></>:<><span style={{"color":"#cc0000","fontWeight":"600","cursor":"pointer"}} title="Email Not Verified"><i>X</i></span></>}
      <br></br>
      <br></br>
          <form onSubmit={setUserName}>
            <label style={{"fontWeight":"500","color":"#22222F"}}>Username</label><br></br> 
            <input type="text" className='account-input' id="username" required></input><br></br>
            <button className='auth-btn-2' type='submit'>Next 	&rarr;</button>
          </form>

          <br></br>
          <span style={{"color":"#b3b3b3"}}><b>Note: </b>You cannot change your username once set.</span><br></br>
          <br></br>
          
          {user.emailVerified ? <></>:
          <>
            <span style={{"color":"#808080"}}>You need verified email to create profile</span> <br></br>
            <button className="auth-btn-3" onClick={() => sendVerificationEmail()} style={{"marginTop":"10px"}}>Send Verification Email</button>
            
          </>}
          
          </div>
        </div>
      </>
    )
  }
}

}
