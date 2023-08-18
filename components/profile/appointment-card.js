import Image from "next/image"

const AppointmentCard=()=>{

return(
<div className="w-full flex-grow-0 flex-shrink-0 basis-auto">
<div className="mx-4 md:mx-0 py-[10px] px-[15px] border-[0.4px] rounded-xl mb-5 items-center border-[#707070] flex flex-col md:flex-row">
    <Image src="/img/profile/doctor-appointment-01.png" width="100" height="93" className="rounded-xl" />
    <div className="text-center md:text-left md:ml-[30px] py-3 md:py-0">
        <h3 className=" font-bold text-xs mb-[5px] text-[#242424]">Doc. Dr Ahmet Güleryüz</h3>
        <span className=" float-left mb-[5px] text-xs w-full text-[#242424]">General Surgery</span>
        <span className=" float-left text-xs w-full text-[#242424]">
        <i className=" md:pr-5 not-italic md:inline-block flex md:justify-start justify-center">Languages</i>
         English, Turkish, Arabic
        </span>
    </div>
    <div className="flex flex-col md:flex-row md:items-center text-xs text-[#242424] py-3 md:py-0 ">
        <span className="float-left ">Date <b className="float-left w-full">24. Jan 2022</b></span>
        <span className="float-left ">Time <b className="float-left w-full">10:00 - 12:00</b></span>
    </div>
    <div className="flex py-3 md:py-0 md:mx-2">
        <a href="#" className="h-10 text-center leading-10 float-right w-20 bg-[#21b37e] text-[15px] rounded-[7px] text-[#ffffff] font-bold mr-5">Start</a>
        
        <a href="#" className="h-10 text-center leading-10 float-right mr-5 pt-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="19.16" height="22.775" viewBox="0 0 19.16 22.775">
                            <g id="write" transform="translate(0 0)">
                                <path id="Path_50478" data-name="Path 50478" d="M10.18,19.152a1.618,1.618,0,0,0,.478-.068l4.1-.82a2.636,2.636,0,0,0,1.207-.66l9.927-9.927a4.084,4.084,0,0,0,0-5.67l-.842-.888a4.112,4.112,0,0,0-5.692,0l-9.927,9.95a2.735,2.735,0,0,0-.66,1.207L7.9,16.42a2.318,2.318,0,0,0,2.277,2.732Zm.774-6.444,9.927-9.95a1.831,1.831,0,0,1,2.5,0l.865.865a1.766,1.766,0,0,1,0,2.618l-9.9,9.95-4.212.706Z" transform="translate(-7.875 0.025)" fill="#2b2d42"></path>
                                <path id="Path_50479" data-name="Path 50479" d="M25.9,90.4H9.093A1.028,1.028,0,0,0,8,91.493a1.092,1.092,0,0,0,1.093,1.093H25.805A1.1,1.1,0,1,0,25.9,90.4Z" transform="translate(-7.971 -69.811)" fill="#2b2d42"></path>
                            </g>
                        </svg>
        </a>
        
        <a href="#" className="h-10 text-center leading-10 float-right pt-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="22.775" height="22.775" viewBox="0 0 22.775 22.775">
                            <g id="close_1_" data-name="close (1)" transform="translate(0 0)">
                                <g id="_x33_" transform="translate(0 0)">
                                    <path id="Path_25611" data-name="Path 25611" d="M17.081,1.9a3.8,3.8,0,0,1,3.8,3.8V17.081a3.8,3.8,0,0,1-3.8,3.8H5.694a3.8,3.8,0,0,1-3.8-3.8V5.694a3.8,3.8,0,0,1,3.8-3.8Zm0-1.9H5.694A5.693,5.693,0,0,0,0,5.694V17.081a5.693,5.693,0,0,0,5.694,5.694H17.081a5.693,5.693,0,0,0,5.694-5.694V5.694A5.693,5.693,0,0,0,17.081,0Z" fill="#2b2d42"></path>
                                </g>
                                <path id="Path_25612" data-name="Path 25612" d="M13.11,11.768l2.684-2.684a.949.949,0,1,0-1.342-1.342l-2.684,2.684L9.084,7.742A.949.949,0,0,0,7.742,9.084l2.685,2.685L7.743,14.452a.949.949,0,1,0,1.342,1.342l2.684-2.684,2.684,2.684a.949.949,0,1,0,1.342-1.342Z" transform="translate(-0.381 -0.381)" fill="#2b2d42"></path>
                            </g>
                        </svg>
        </a>
    </div>

</div>
</div>
)
}

export default AppointmentCard;