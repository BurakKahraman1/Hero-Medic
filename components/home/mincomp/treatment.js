import Link from "next/link";
import Image from "next/image";

export default function Treatment({title,result,link,target,img}) {
    return (
        <div className="flex flex-col bg-hmfooterBg p-3 justify-center rounded mr-10 w-full">
            <Link href={link} target={target}>
                <a className="flex flex-col justify-center">
                    <div className="my-5 flex justify-center items-center">
                        <Image src={img} width="76" height="76" alt={title} />
                    </div>
                    <h2 className="font-bold text-hmDark text-px-20 text-center my-4">{title}</h2>
                </a>
            </Link>
            <span className="text-hmDark text-px-15 text-center">{result} Result</span>
        </div>
    )
}