// components/Footer.js
import Link from "next/link";


export default function Footer(){
    return(
        <div className="bg-white-900 flex justify-center flex-col items-center space-y-5">
            <div className=" pt-5 text-lg font-semibold">
            <Link href="#">About |</Link>
                <Link href="#">Services |</Link>
                <Link href="#">Contact |</Link>
                <Link href="#">Blogs </Link>
            </div>
            
            <p className="pb-5">@ 2024 Blah-Blah, All Right Reserved | Designed by Maryum Shaikh</p>
        </div>
    )
}