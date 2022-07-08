import Head from 'next/head'
import Link from 'next/link'
import Base from '../../../components/base'
import { useEffect,useState } from 'react';
import { ref,push } from "firebase/database";
import { auth,database } from '../../../components/config/fireb'

import { useRouter } from 'next/router'

export default function AddHackathonPage() {
  const [canRender, setCanRander] = useState(false)
  const router = useRouter();
  const user= auth.currentUser;

  useEffect(() => {
    if (user){
    setCanRander(true)
  }
  else {
    router.push('/signup')
  }
  },[user,router]);

  function AddHackathon(e) {
    e.preventDefault()

    const title = document.getElementById("title").value;
    const host = document.getElementById("host").value;
    const start = document.getElementById("start").value;
    const end = document.getElementById("end").value;
    const link = document.getElementById("link").value;

    push(ref(database, 'hackathons'), {
      title:title,
      host:host,
      start:start,
      end:end,
      link:link,
      added:auth.currentUser.uid
    }).then (
      alert("Hackathon Added!"),
      router.push("/explore/hackathons")
    );

  }

  if (canRender) {
  return (
    <>
     <Head>
        <title>Add Hackathon | Web3pedia Explore</title>
        <meta name="description" content="Helping People With Web3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Base></Base>
      <br></br>
      <div className='main-2'>
      <Link href='/explore'><a className='b-link'>Web3pedia Explore &gt;</a></Link>&nbsp;&nbsp;<Link href='/explore/hackathons'><a className='b-link'>Hackathons &gt;</a></Link>
       <h2>Add Hackathon</h2>
        <div className='add-form'>
          <div className='add-hackathon' id='add-hackathon'>
            <h2 style={{"color":"#595959"}}>Hackathon</h2>
            <form onSubmit={AddHackathon}>
              <label>Title</label><br></br>
              <input type="text" id="title"></input><br></br>

              <label>Start</label>&nbsp;&nbsp;
              <input type="date" id="start"></input>
              
              <label>End</label>&nbsp;&nbsp;
              <input type="date" id='end'></input><br></br>
              
              <label>Hosts</label><br></br>
              <input type="text" id='host'></input><br></br>
              
              <label>Link</label><br></br>
              <input type="text" id='link'></input>
              <br></br>
              <button className='submit-add-event' type='submit'>Add Hackathon! 🚀</button>
            </form>
          </div>

        </div>
        <br></br>
        <Link href="/explore/add/course"><a className="b-link">Add Course</a></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link href="/explore/add/event"><a className="b-link">Add Event</a></Link>
      </div>
    </>
     
     
  )
}
}
