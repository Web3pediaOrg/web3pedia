import Head from 'next/head'
import Link from 'next/link'
import Base from '../components/base'
import { auth,database } from '../components/config/fireb'
import { ref,push } from "firebase/database";

export default function Support() {
  const user = auth.currentUser;

  function sendContactMessage(e) {
    e.preventDefault()

    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    
    push(ref(database, "/contact"), {
      subject:subject,
      message:message,
      email:user.email
    }).then (
      alert("Message Send! We will contact you soon.")
    );

  }
  
  return (
    <>
     <Head>
        <title>Contact | Web3pedia Support</title>
        <meta name="description" content="Helping People With Web3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Base></Base>
      <br></br>
      <br></br>
      <div className='main-2'>
        <div className='page-path'>
            <Link href="/support">Support&nbsp; &gt;</Link>
        </div><br></br>
        <span className='support-header'>Contact Us</span><br></br>
        <br></br>
        <span style={{"color":"#606F7B"}}>Send a message to the Web3pedia support team.</span><br></br>
        <br></br>
        {user ? 
        <>
          <div style={{"border":"1px solid black","borderRadius":"5px","padding":"15px","width":"70%"}}>

            <form onSubmit={sendContactMessage}>
              <label style={{"fontWeight":"600","color":"#22222F"}}>Subject</label><br></br> 
              <input type="text" className='contact-input' id="subject"></input><br></br>
              <br></br>
              <label style={{"fontWeight":"600","color":"#22222F"}}>Message</label><br></br> 
              <textarea className='contact-input' id='message' rows="11"></textarea>
              <br></br>
              <br></br>
              <button className='auth-btn' type='submit'>Submit Message</button>
            </form>

            <br></br>
          </div>
        </>:
        <>
          <div className='support-content'>
            You must <Link href="/login"><a className="b-link">sign in</a></Link> to access this page.
          </div>
        </>}
        
      </div>
      
    </>
     
     
  )
}
