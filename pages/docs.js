import Link from 'next/link'
import Head from 'next/head'
import DocsBase from '../components/DocsBase'

export default function Docs() {
  return (
    <>
     <Head>
        <title>Web3pedia Documentation</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <DocsBase></DocsBase>
      <div className='docs-main'>
        <div className='docs-path'>
          <Link href="/docs"><a>Docs</a></Link> &gt; <Link href="/docs"><a>Get Started</a></Link>
        </div>
        <span className='docs-cat-head'>Welcome To Web3pedia</span><br></br>
        <br></br>
        <div className='docs-content'>
          {/* Welcome to Web3pedia!<br></br>
          <br></br> */}
          <span className='docs-cat-head-2' id="get-started">Get Started&nbsp;<Link href="/docs/#get-started"><a className='docs-cat-link'>#</a></Link></span><br></br>
          <div className='docs-cat-content'>
            New to Web3? We recommend you to read the article on <Link href="/explore/article/web3"><a className="b-link">Web3</a></Link>.<br></br>
            find more articles <Link href="/explore/articles"><a className="b-link">here</a></Link>.<br></br>
            <br></br>
            Happy hacking!
          </div>
          <br></br>
          <span className='docs-cat-head-2' id="setup-profile">Setup Web3pedia Profile&nbsp;<Link href="/docs/#setup-profile"><a className='docs-cat-link'>#</a></Link></span><br></br>
          <div className='docs-cat-content'>
            <p>To make <Link href="/signup"><a className="b-link">sign up</a></Link> easier &#39; faster we don&apos;t setup your profile right there.<br></br>
            <br></br>
            In order to setup your profile you need to head towards <Link href="/user/account"><a className="b-link">Profile Settings</a></Link> and fill up username and click on save changes to get the basic shareable link to your profile.
            The rest information depends on you if you want to share.<br></br>
            <br></br>
            Now you can view you profile on <span className='highlight-block'>/user/&#123;<i>username</i>&#125;</span>.<br></br>
            <br></br>
            <b>Note:-</b> 
            <ul>
              <li>you can&apos;t change your username once set.</li>
              <li>Enter Your Social Username Without &apos;@&apos;</li>
            </ul>
            <br></br>
            Getting Error? view <Link href="/support"><a className="b-link">Support</a></Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
