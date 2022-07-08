import Head from 'next/head'
import Link from 'next/link'
import Base from '../../../components/base'
import { useEffect,useState } from 'react';
import { auth,database } from '../../../components/config/fireb'
import { push,ref } from 'firebase/database';
import { useRouter } from 'next/router'

export default function AddEvent() {
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

  function AddEvent(e) {
    e.preventDefault()

    const title = document.getElementById("title").value;
    const host = document.getElementById("host").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const mode = document.getElementById("mode").value;
    const timezone = document.getElementById("timezone").value;
    const link = document.getElementById("link").value;

    push(ref(database, 'events'), {
      title:title,
      host:host,
      date:date,
      time:time +" "+timezone,
      mode:mode,
      link:link,
      added:auth.currentUser.uid
    }).then (
      alert("Event Added!"),
      router.push("/explore/events")
    );

  }
  if (canRender) {
  return (
    <>
     <Head>
        <title>Add Events | Web3pedia Explore</title>
        <meta name="description" content="Helping People With Web3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Base></Base>
      <br></br>
      <div className='main-2'>
      <Link href='/explore'><a className='b-link'>Web3pedia Explore &gt;</a></Link>&nbsp;&nbsp;<Link href='/explore/events'><a className='b-link'>Events &gt;</a></Link>
       <h2>Add Events</h2>
        <div className='add-form'>
          <div className='add-event' id='event'>
            <h2 style={{"color":"#595959"}}>Event</h2>

            <form onSubmit={AddEvent}>
              <label>Title</label><br></br>
              <input type="text" id='title'></input><br></br>

              <label>Date</label>&nbsp;&nbsp;
              <input type="date" id='date'></input>

              <label>Mode</label>&nbsp;&nbsp;
              <select name="category" id="mode" className='select-category'>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </select><br></br>

              <label>Time</label>&nbsp;&nbsp;
              <input type="time" id='time'></input> &nbsp;&nbsp;

              <select name="category" id="timezone" className='select-category'>
                <option value="IST">IST</option>
                <option value="PST">PST</option>
              </select><br></br>

              <label>Hosts</label><br></br>
              <input type="text" id='host'></input><br></br>

              <label>Link</label><br></br>
              <input type="text" id='link'></input>
              <br></br>
              <button className='submit-add-event' type='submit'>Add Event! 🚀</button>
              </form>

          </div>

        </div>
        <br></br>
        <Link href="/explore/add/hackathon"><a className="b-link">Add Hackathon</a></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link href="/explore/add/course"><a className="b-link">Add course</a></Link>
      </div>
    </>
     
     
  )
}

}
