import Head from 'next/head'
import Link from 'next/link'
import Base from '../../../components/base'
import { useEffect,useState } from 'react';
import { auth,database } from '../../../components/config/fireb';
import { push,ref } from 'firebase/database';

import { useRouter } from 'next/router'

export default function AddCourses() {
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

  function AddCourse(e) {
    e.preventDefault()

    const title = document.getElementById("title").value;
    const cost = document.getElementById("cost").value;
    const level = document.getElementById("level").value;
    const type = document.getElementById("course-type").value;
    const link = document.getElementById("link").value;

    push(ref(database, 'courses'), {
      title:title,
      cost:cost,
      level:level,
      type:type,
      link:link,
      added:user.uid
    }).then (
      alert("Course Added!"),
      router.push("/explore/courses")
    );

  }

  if (canRender) {
  return (
    <>
     <Head>
        <title>Add Courses | Web3pedia Explore</title>
        <meta name="description" content="Helping People With Web3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Base></Base>
      <br></br>
      <div className='main-2'>
      <Link href='/explore'><a className='b-link'>Web3pedia Explore &gt;</a></Link>&nbsp;&nbsp;<Link href='/explore/events'><a className='b-link'>Events &gt;</a></Link>
       <h2>Add Course</h2>
        <div className='add-form'>
          <div className='add-event' id='event'>
            <h2 style={{"color":"#595959"}}>Courses</h2>

            <form onSubmit={AddCourse}>
              <label>Title</label><br></br>
              <input type="text" id='title'></input><br></br>

              <label>Cost</label>&nbsp;&nbsp;
              <select name="category" id="cost" className='select-category'>
                <option value="Free">Free</option>
                <option value="Paid">Paid</option>
              </select>&nbsp;&nbsp;&nbsp;&nbsp;

              <label>Level</label>&nbsp;&nbsp;
              <select name="category" id="level" className='select-category'>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select><br></br>

              <label>Course Type</label>&nbsp;&nbsp;
              <select name="category" id="course-type" className='select-category'>
                <option value="Theory">Theory</option>
                <option value="Practical">Pracitcal</option>
                <option value="Theory & Practical">Both</option>
              </select><br></br>

              <label>Link</label><br></br>
              <input type="text" id='link'></input>
              <br></br>

              <button className='submit-add-event' type='submit'>Add Course</button>
            </form>
          </div>

        </div>
        <br></br>
        <Link href="/explore/add/hackathon"><a className="b-link">Add Hackathon</a></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link href="/explore/add/event"><a className="b-link">Add Event</a></Link>
      </div>
    </>
     
     
  )
}

}
