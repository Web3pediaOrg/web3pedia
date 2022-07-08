import Head from 'next/head'
import Link from 'next/link'
import Base from '../../components/base'
import { auth } from '../../components/config/fireb';
import { updatePassword } from "firebase/auth";
import { useRouter } from 'next/router'
import { useEffect,useState } from 'react';

export default function PasswordChangePage() {
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

  function changePassword(e) {
    e.preventDefault()

    const old_password = document.getElementById("old-password").value;
    const new_password = document.getElementById("new-password").value;
    const re_new_password = document.getElementById("re-new-password").value;

    if (new_password == re_new_password) {
      updatePassword(user, new_password).then(() => {
        alert("Password Changes!")
      }).catch((error) => {
        // An error ocurred
        alert("Cannot Change Password.")
        // ...
      });
    }
    else {
      alert("Passwords Don't Match")
    }

  }

  if (canRender) {
  return (
    <>
     <Head>
        <title>Settings | Web3pedia</title>
        <meta name="description" content="Helping People With Web3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Base></Base>
      <div className='settings-main'>
      <br></br>
      <br></br>
      <div className='settings-content'>
        <div className='reset-password' id='reset-password'>
          <span style={{"fontSize":"35px","fontWeight":"500","color":"#22222F"}}>Change Password</span>
          <br></br>

          <form style={{"marginTop":"10px"}} onSubmit={changePassword}>
            <label style={{"fontWeight":"500","color":"#22222F"}}>Old Password</label><br></br>
            <input type="password" className='account-input' id='old-password'></input><br></br>

            <label style={{"fontWeight":"500","color":"#22222F"}}>New Password</label>
            <ul>
                <li>Your password can’t be too similar to your other personal information.</li>
                <li>Your password must contain at least 8 characters.</li>
                <li>Your password can’t be entirely numeric.</li>
            </ul>
            <input type="password" className='account-input' id='new-password'></input><br></br>
            
            <label style={{"fontWeight":"500","color":"#22222F"}}>New password confirmation</label><br></br>
            <input type="password" className='account-input' id='re-new-password'></input><br></br>
            <br></br>
            <button className='auth-btn' type='submit'>Save New Password</button>&nbsp;&nbsp; <Link href="/"><a className="b-link">Cancel Password Change</a></Link>
          </form>

        </div>
      </div>
      <br></br>
      <Link href="/user/account"><a className="b-link" style={{"float":"right"}}>&larr; Go Back</a></Link>
      </div>
      <br></br>
    </>
     
     
  )
  }
}
