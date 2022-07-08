import Head from 'next/head'
import Base from '../../components/base'

export default function TermsDocs() {
  return (
    <>
     <Head>
        <title>Terms Of Use | Web3pedia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="./public/favicon.png" />
      </Head>
      <Base></Base>
      <br></br>
      <br></br>
      <div style={{"margin":"auto","width":"55%","border":"1px solid black","borderRadius":"5px","padding":"15px"}}>
        <span className='docs-cat-head'>Terms of Service</span><br></br>
        <span style={{"fontSize":"15px","color":"#606F7B"}}>Last updated -</span><br></br>
        <br></br>
      </div>
    </>
  )
}
