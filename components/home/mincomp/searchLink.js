
export default function SearchLink({title,link,target,click,result}) {
    return (
        <a href={link} target={target} className="flex flex-row border rounded items-center text-px-15 text-hmDark mb-3 hover:shadow-hmDefault transition ease-in">
            <span className="p-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="15.5" height="15.5" viewBox="0 0 15.5 15.5">
                    <path id="Path_2" data-name="Path 2" d="M1.937,6.781A4.8,4.8,0,0,1,6.781,1.938a4.8,4.8,0,0,1,4.844,4.844,4.8,4.8,0,0,1-4.844,4.844A4.8,4.8,0,0,1,1.937,6.781Zm11.916,8.428a.959.959,0,0,0,1.356-1.356l-3-3a6.633,6.633,0,0,0,1.356-4.069A6.74,6.74,0,0,0,6.781,0,6.74,6.74,0,0,0,0,6.781a6.74,6.74,0,0,0,6.781,6.781,6.633,6.633,0,0,0,4.069-1.356Z" transform="translate(0 0)" fill="#767986"></path>
                </svg>
            </span>
            <div className="pr-4">
                <span className="flex font-medium mb-2">{title}</span>
                <div className="flex flex-row">
                    <span className="text-px-12 mr-4">{click} click</span>
                    <span className="text-px-12">{result} result</span>
                </div>
            </div>
        </a>
    )
}