import Footer from "../../components/footer";
import HeaderTop from "../../components/header-top";
import ProfileMenu from "../../components/profile/profileMenu";
import AppointmentCard from "../../components/profile/appointment-card"

export default function OnlineAppointment() {
  return (
    <div>
        <header>
            <HeaderTop/>
            <div className="bg-[#f5f6f9] py-10">
                <div className="container mx-auto flex justify-center lg:justify-start">
                    <span className="text-xl text-center lg:text-start lg:text-3xl font-semibold text-hmDark">Online <span className="text-hmGreen">Appointment</span></span>
                </div>
            </div>
        </header>
        <section className="container mx-auto mt-10">
            <div className="flex flex-col lg:flex-row mx-2 lg:mx-0 ">
                <ProfileMenu/>
                <div className="w-full lg:w-3/4 xl:w-[60%] mt-5 md:mt-6 flex flex-col">
                    <AppointmentCard/>
                    <AppointmentCard/>
                    <AppointmentCard/>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
  )
}
