import Link from 'next/link'
import logo from "../public/images/W_2.png"
import Image from 'next/image'

export default function Footer() {
  return (
    <>
      <footer className='footer'>
        <div className='container'>
          <div className='row'>
          <div className='footer-col'>
            <h4></h4>
            <Image src={logo} alt="Web3pedia Logo" width="100%" height="80%"></Image><br></br>
            <span style={{"fontSize":"24px","fontWeight":"500"}}>Web3pedia</span>
          </div>
            <div className='footer-col'>
              <h4>Learn</h4>
              <ul>
                <li><Link href='/docs'>Guide</Link></li>
                <li><Link href='/docs'>Docs</Link></li>
                <li><a href='https://github.com/Web3pedia' target="_blank" rel="noreferrer">Github</a></li>
              </ul>
            </div>
            <div className='footer-col'>
              <h4>Stay connected</h4>
              <ul>
                <li><a href='https://twitter.com/Web3pedia_' target="_blank" rel="noreferrer">Twitter</a></li>
                {/* <li><a href=''>Youtube</a></li> */}
                <li><a href=''>Blog <span style={{"color":"#6B7280","fontSize":"12px"}}>(coming soon!)</span></a></li>
              </ul>
            </div>
            <div className='footer-col'>
              <h4>General</h4>
              <ul>
                <li><Link href='/about'><a>About us</a></Link></li>
                <li><Link href='/support'><a>Support</a></Link></li>
                <li><Link href='/docs/updates'><a>What&apos;s new?</a></Link></li>
                
              </ul>
            </div>
            
          </div>
        </div>
      </footer>
      {/* <div className='b-footer'>
         <span style={{"fontSize":"13px"}}>Copyright © 2022 Web3pedia Inc. All rights reserved.</span>&nbsp;&nbsp;&nbsp;&nbsp; <a href='' style={{"fontSize":"15px"}}>Privacy Policy</a>&nbsp;&nbsp;<span style={{"color":"#b3b3b3"}}>|</span>&nbsp;&nbsp; <a href=''  style={{"fontSize":"15px"}}>Terms Of Use</a>&nbsp;&nbsp;<span style={{"color":"#b3b3b3"}}>|</span>&nbsp;&nbsp;<a href='' style={{"fontSize":"15px"}}>Sitemap</a>
        </div> */}
    </>
  )
}
