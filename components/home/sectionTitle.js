
export default function SectionTitle({title,desc=null}) {
    return (
        <div className="container mx-auto items-center text-center w-full md:w-2/3 px-0 md:px-5">
            <h2 className="text-hmGray text-px-35 font-bold">{title}</h2>
            {desc != null && <p className="text-hmDark text-px-20">{desc}</p> }
        </div>
    )
}