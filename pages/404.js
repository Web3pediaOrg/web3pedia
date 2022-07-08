import Head from "next/head"
import Link from "next/link"
import robot from "../public/images/errorRobot.jpg"
import Image from "next/image"


export default function error404() {
    return (
        <>
        <Head>
            <title>Error 404 (Not Found)!!</title>
        </Head>

        <div style={{"margin":"auto","width":"40%","marginTop":"6%"}}>
            <div style={{"float":"left"}}>
                <Link href="/"><a style={{"fontSize":"29px","fontWeight":"600"}}>Web3pedia</a></Link><br></br>
                <br></br>
                <span><b>404.</b> <span style={{"color":"#777777"}}>That&apos;s an error.</span></span><br></br>
                <br></br>
                <span>We couldn&apos;t find the page you are looking for.</span><br></br>
                <span style={{"color":"#777777"}}>That&apos;s all we know.</span><br></br>
                <br></br>
                <Link href="/support"><a className="b-link">Report Any Website Issue</a></Link>
            </div>
            <div style={{"float":"right"}}>
                <Image src={robot} alt="Picture of the author" width={200} height={200} />
            </div>
        </div>
        </>
    )
}