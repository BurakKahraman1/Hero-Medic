import Footer from "../../components/footer";
import HeaderTop from "../../components/header-top";
import ProfileMenu from "../../components/profile/profileMenu";
import Image from "next/image";
import styles from "../../styles/headerTop.module.scss";

export default function MyTreatments() {
  return (
    <div>
      <header>
        <HeaderTop />
        <div className="bg-[#f5f6f9] py-10">
          <div className="container mx-auto flex justify-center lg:justify-start">
            <span className="text-xl text-center lg:text-start lg:text-3xl font-semibold text-hmDark">
              Profile <span className="text-hmGreen">information</span>
            </span>
          </div>
        </div>
      </header>
      <section className="container mx-auto mt-10">
        <div className="flex flex-col lg:flex-row mx-2 lg:mx-0">
          <ProfileMenu />
          <div className="w-full lg:w-3/4 mt-5 lg:mt-0 flex flex-col">
            <div className="flex basis-auto shrink-0 grow-0">
              <div className="mt-8 px-2 lg:pl-10">
                <div className="flex flex-col lg:flex-row flex-wrap">
                  <div className="lg:w-[58%] flex basis-auto shrink-0 grow-0 mb-8 lg:mb-0">
                    <div className="flex flex-wrap md:ml-4 lg:ml-0">
                      <div className="w-full basis-auto shrink-0 grow-0 flex">
                        <Image
                          className=" rounded-[96px]"
                          src="/img/profile/profile-01.png"
                          height="96px"
                          width="96px"
                        />
                        <form className="ml-10 flex h-full items-center">
                          <label
                            htmlFor="formFile"
                            className="h-10 leading-10 text-center rounded-[7px] border-[0.5px] border-[#2b2d40] text-[#2b2d42] text-xs lg:text-[15px] font-bold px-[25px] cursor-pointer"
                          >
                            Change Photo
                          </label>
                          <input className="hidden" type="file" id="formFile" />
                        </form>
                      </div>

                      <div className="w-full flex basis-auto shrink-0 grow-0">
                        <ul className=" mx-1 float-left w-full mt-10 list-none">
                          <li className="my-4 float-left w-full flex text-xs text-[#242424]">
                            <span className="float-left min-w-[130px] lg:min-w-[150px] h-full">
                              User ID
                            </span>
                            <p className="w-auto float-left">325456521</p>
                          </li>
                          <li className="my-4 float-left w-full flex text-xs text-[#242424]">
                            <span className="float-left min-w-[130px] lg:min-w-[150px] h-full">
                              Name
                            </span>
                            <p className="w-auto float-left">Burak</p>
                          </li>
                          <li className="my-4 float-left w-full flex text-xs text-[#242424]">
                            <span className="float-left min-w-[130px] lg:min-w-[150px] h-full">
                              Surname
                            </span>
                            <p className="w-auto float-left">Kahraman</p>
                          </li>
                          <li className="my-4 float-left w-full flex text-xs text-[#242424]">
                            <span className="float-left min-w-[130px] lg:min-w-[150px] h-full">
                              Email
                            </span>
                            <p className="w-auto float-left">
                              <b>burak.kahramann16@gmail.com</b>
                              <span className="block lg:inline-block lg:pl-2 text-xs text-[#21b37e]">
                                Verified
                              </span>
                            
                              <span className="block text-gray-500 w-full">
                                Changing Email Requires Email Verification
                              </span>
                            </p>
                          </li>
                          <li className="my-4 float-left w-full flex text-xs text-[#242424]">
                            <span className="float-left min-w-[130px] lg:min-w-[150px] h-full">
                              Phone
                            </span>
                            <p className="w-auto float-left">+90-5324948612</p>
                          </li>
                          <li className="my-4 float-left w-full flex text-xs text-[#242424]">
                            <span className="float-left min-w-[130px] lg:min-w-[150px] h-full">
                              Date of Birth
                            </span>
                            <p className="w-auto float-left">23.03.2000</p>
                          </li>
                          <li className="my-4 float-left w-full flex text-xs text-[#242424]">
                            <span className="float-left min-w-[130px] lg:min-w-[150px] h-full">
                              Gender
                            </span>
                            <p className="w-auto float-left">Men</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className=" lg:w-[42%] flex basis-auto shrink-0 grow-0">
                    <div className="border-[0.4px] border-[#707070] rounded-[10px] p-[30px] flex flex-wrap">
                      <h4 className="text-[15px] font-bold text-[#2b2d42] float-left w-full mb-3">
                        Change My Password
                      </h4>

                      <form className="mt-5 float-left w-full">
                        <div className="flex flex-wrap my-1">
                          <div className=" mb-5 w-full basis-auto shrink-0 grow-0">
                            <label htmlFor="currentPass" className="w-full">
                              Current Password
                            </label>
                            <input
                              type="text"
                              className="mt-2 outline-0 shadow-none rounded-[5px] h-10 border-[0.5px] border-[#6c727f] text-[#2b2d42] px-5 leading-[50px] block w-full font-normal bg-[#fff] bg-clip-padding appearance-none"
                              id="currentPass"
                            />
                          </div>
                        </div>
                        <div className="flex flex-wrap my-1">
                          <div className=" mb-5 w-full basis-auto shrink-0 grow-0">
                            <label htmlFor="currentPass" className="w-full">
                              New Password
                            </label>
                            <input
                              type="password"
                              className="mt-2 outline-0 shadow-none rounded-[5px] h-10 border-[0.5px] border-[#6c727f] text-[#2b2d42] px-5 leading-[50px] block w-full font-normal bg-[#fff] bg-clip-padding appearance-none"
                              id="currentPass"
                            />
                          </div>
                        </div>
                        <div className="flex flex-wrap my-1">
                          <div className=" mb-5 w-full basis-auto shrink-0 grow-0">
                            <label htmlFor="currentPass" className="w-full">
                              Again New Password
                            </label>
                            <input
                              type="password"
                              className="mt-2 outline-0 shadow-none rounded-[5px] h-10 border-[0.5px] border-[#6c727f] text-[#2b2d42] px-5 leading-[50px] block w-full font-normal bg-[#fff] bg-clip-padding appearance-none"
                              id="currentPass"
                            />
                          </div>
                          <div
                            className={
                              styles.rightcheck + " flex flex-row items-center"
                            }
                          >
                            <input
                              type="checkbox"
                              className="btncheck"
                              name="modalnofity"
                              id="modalnofityemail"
                              autoComplete="off"
                            />
                            <label htmlFor="modalnofityemail">
                              <span className="ml-3 cursor-pointer">
                                I’m not a robot
                              </span>
                            </label>
                          </div>
                          <div className="w-full flex-shrink-0 flex-grow-0 basis-auto mt-10">
                            <button type="button" className="bg-[#2b2d42] text-white font-bold w-full rounded-[10px] text-lg h-[55px] shadow-none cursor-pointer">
                              Change Password
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
