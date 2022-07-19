import Head from 'next/head'
import Link from 'next/link'
import Base from '../components/base'
import Footer from '../components/footer'
import { auth } from '../components/config/fireb'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'next/router'

export default function SignUp() {
  const router = useRouter();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      router.push('/')
    } else {

    }
  });
  
  function createUserAccount(e) {
    e.preventDefault()

    const email = document.getElementById("email").value;
    const re_email = document.getElementById("re-email").value;
    const password = document.getElementById("password").value;
    
    if (email == re_email){
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        router.push('/user/profile')
        // ...
      })
      .catch((error) => {
        alert("Error Creating Your Account.")
        // ..
      });
    } 
    else {
      alert("The two emails don't match")
    }
  
  }


  return (
    <>
     <Head>
        <title>Sign Up | Web3pedia</title>
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
        <div className='welcome-msg'>
          <span style={{"fontSize":"25px","fontWeight":"500"}}>Create Account</span><br></br>
        </div>
        <br></br>
        <div className='login-block'>
          <form onSubmit={createUserAccount} autoComplete="off">
            <label className='auth-label'>Email</label>
            <input type="email" id='email' required></input><br></br>

            <label className='auth-label'>Re-enter Email</label>
            <span style={{"display":"block","fontSize":"13px","marginBottom":"5px","color":"#606F7B"}}>We promise we won&apos;t spam</span>
            <input type="email" id='re-email' required></input><br></br>

            <label className='auth-label'>Password</label>
            <input type="password" id='password' minLength="8" required></input><br></br>

            <span>By registering you agree to the <Link href="/docs/terms"><a className='b-link'>Terms of Use</a></Link> and have read the <Link href="/docs/privacy"><a className='b-link'>Privacy Policy</a></Link>.</span><br></br>
            <br></br>
            
            <button className='auth-btn' type='submit'>Create Account 🚀</button><br></br>
          </form>

            <br></br>

            <span>Already Have Account? <Link href='/login'><a className='b-link'>Login</a></Link></span>
        </div>
      </div>
      <br></br>
      <br></br>
      <Footer></Footer>
    </>
     
     
  )
}
