import Head from 'next/head'
import Link from 'next/link'
import Base from '../components/base'
import { auth } from '../components/config/fireb';
import { sendPasswordResetEmail } from "firebase/auth";
import { useRouter } from 'next/router'


export default function PasswordResetLink() {
  
  const router = useRouter();

  function sendPassEmail(e) {
    e.preventDefault()

    const email = document.getElementById("email").value;

    sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("Password reset email sent!")
    })
    .catch((error) => {
      alert("Error Sending Password Reset Email.")
      
    });

  }

  return (
    <>
     <Head>
        <title>Password reset | Web3pedia</title>
        <meta name="description" content="Helping People With Web3" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Base></Base>
      <br></br>
      <div className='main-header-2'>
        <span className='header-2'>Web3pedia</span><br></br>
        <span className='subheading-2'>Helping People With Web3</span>
      </div>
      <br></br>
      <div className='auth-div'>
        <h2>Password Reset</h2>
        <div className='login-block'>
          <form onSubmit={sendPassEmail}>
            <label className='auth-label'>Email</label>
            <input type="email" id='email' required></input><br></br>
            <button className='auth-btn' type='submit'>Email Reset Link</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link href='/login'><a className='b-link'>Go Back to login</a></Link><br></br>
          </form>
        </div>
      </div>
    </>
     
     
  )
}
