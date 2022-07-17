import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router';
import Base from '../../components/base';
import { auth } from '../../components/config/fireb'
import { useEffect,useState } from 'react';

export default function Account() {
  const [canRender, setCanRander] = useState(false)
  const user = auth.currentUser;
  const router = useRouter();

  useEffect(() => {
    if (user){
    setCanRander(true)
  }
  else {
    router.push('/signup')
  }
  },[user,router]);

  if (canRender) {
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
        <span style={{"fontSize":"35px","fontWeight":"500","color":"#22222F"}}>Accounts</span><br></br>
      <br></br>
      <table>
        <tr>
          <th><Link href="/user/accounts"><a style={{"fontWeight":"400"}} className="b-link">Accounts</a></Link></th>&nbsp;&nbsp;&nbsp;
          <th><Link href="/user/profile"><a style={{"fontWeight":"400"}} className="b-link">Profile Settings</a></Link></th>&nbsp;&nbsp;&nbsp;
          <th><Link href="/user/password_change"><a style={{"fontWeight":"400"}} className="b-link">Change Password </a></Link></th>
        </tr>
      </table>
      <br></br>
      <span style={{"fontWeight":"500","color":"#22222F"}}>Registered email</span><br></br>{user.email} 
        </div>
      </div>
      </>
    )
  }
}
