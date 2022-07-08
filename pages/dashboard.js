import Head from 'next/head'
import Link from 'next/link'
import { auth } from '../components/config/fireb'
import Base from '../components/base'
import { useRouter } from 'next/router';
import { useEffect,useState } from 'react';

export default function Dashboard() {
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
          <title>Dashboard | Web3pedia</title>
          <meta name="description" content="Helping People With Web3" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Base></Base>
        <br></br>
        <div className='dash-main'>
        <br></br>
        <span style={{"fontSize":"29px","fontWeight":"600"}}>Dashboard</span><br></br>
        <br></br>
        {user.displayName != undefined ? <><Link href={"/user/"+user.displayName}><a className='b-link'>View Profile</a></Link><br></br></>:<><Link href="/user/account"><a className='b-link'>Create Profile</a></Link><br></br></>}
        <br></br>
        <div className='data-added'>
              <span style={{"fontSize":"19px","fontWeight":"500"}}>Recomended</span>
              <div className='data-added-content'>
                <span style={{"fontSize":"17px","fontWeight":"400"}}>Articles:</span><br></br>
                <Link href="/explore/articles/web3"><a className='b-link'>What is Web3</a></Link><br></br>
                <Link href="/explore/articles/dao"><a className='b-link'>DAO (Decentralized Autonomous Organization)</a></Link><br></br>
                <Link href="/explore/articles/nft"><a className='b-link'>NFT (Non-Fungible Token)</a></Link>
              </div>
          </div>
          
        </div>
      </>
      
      
    )
  }

  
}
