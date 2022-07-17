import Head from 'next/head'
import Link from 'next/link'
import Base from '../components/base'
import Footer from '../components/footer'
import { auth } from '../components/config/fireb'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'next/router'

export default function Login() {
  
  const router = useRouter();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      router.push('/')
    } else {

    }
  });

  function LoginUser(e) {
    e.preventDefault()
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      router.push("/")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode == "auth/wrong-password") {
        alert("Please enter password.");
      }
      else if (errorCode == "auth/user-not-found") {
        alert("Email Not Registered.");
        router.push('/signup')
      }
      else {
        alert("Cannot Sign In. Please try again later.")
      }
    });
  }


  return (
    <>
     <Head>
        <title>Login | Web3pedia</title>
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
        <h2>Login</h2>
        <div className='login-block'>
          <form onSubmit={LoginUser} autoComplete="off">
            <label className='auth-label'>Email</label>
            <input type="email" id='email'></input><br></br>

            <label className='auth-label'>Password</label>
            <input type="password" id="password" minLength="8"></input><br></br>
            <button className='auth-btn' type='submit'>Login 🚀</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link href='/password_reset'><a className='b-link'>Lost password?</a></Link><br></br>
          </form>
            <br></br>
            <span>New Here!? <Link href='/signup'><a className='b-link'>Sign Up</a></Link></span>
        </div>
      </div>
      <br></br>
      <br></br>
      <Footer></Footer>
    </>
     
     
  )
}
