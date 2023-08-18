import Image from "next/image";
import Link from "next/link";

export default function Blogcard({title,img,link,target,desc,like,tag}) {
    return (
        <div className="flex flex-col py-10">
            <Link href={link}>
                <a className="flex"><Image src={img} width="370" height="220" alt={title}/></a>
            </Link>
            <div className="p-5 shadow rounded-bl-lg rounded-br-lg border-l border-r">
                <Link href="/">
                    <a><h4 className="text-sm text-hmDark hover:text-hmGreen transition ease-in mb-2">Category</h4></a>
                </Link>
                <Link href={link}>
                    <a><h3 className="min-h-[100px] mb-5 text-px-20 font-bold text-hmDark">{title}</h3></a>
                </Link>
                <p className="text-px-15 text-hmDark">{desc}</p>

                <div className="grid grid-cols-3 justify-items-stretch mt-5">
                    <span className="flex flex-row mr-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20.137" height="17.771" viewBox="0 0 20.137 17.771">
                            <path id="Heart" d="M18.553,1.635a5.411,5.411,0,0,0-7.7,0l-.758.758-.758-.758a5.446,5.446,0,0,0-7.7,7.7L10.094,17.8l8.459-8.459a5.411,5.411,0,0,0,0-7.7" transform="translate(-0.025 -0.025)" fill="#767986" fillRule="evenodd"></path>
                        </svg>
                        <span className="ml-3 text-px-15 text-hmsearchBorderColor">{like}</span>
                    </span>
                    <span>#{tag}</span>
                    <span className="justify-self-end">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19.002" height="20.269" viewBox="0 0 19.002 20.269">
                            <g id="share" transform="translate(-16)">
                                <g id="Group_7253" data-name="Group 7253" transform="translate(16)">
                                    <path id="Path_28230" data-name="Path 28230" d="M31.439,13.143A3.55,3.55,0,0,0,28.582,14.6l-5.615-2.875a3.361,3.361,0,0,0-.1-2.326L28.739,5.86a3.543,3.543,0,1,0-.862-2.3,3.53,3.53,0,0,0,.248,1.281L22.23,8.39a3.557,3.557,0,1,0,.224,4.4l5.6,2.866a3.514,3.514,0,0,0-.175,1.046,3.563,3.563,0,1,0,3.563-3.563Z" transform="translate(-16)" fill="#767986"></path>
                                </g>
                            </g>
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    )
}