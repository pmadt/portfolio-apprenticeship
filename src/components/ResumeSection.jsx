export default function ResumeSection({title, content}) {
    return (
        <>
            <div className={"w-80 lg:w-fit h-fit rounded-sm p-2 border border-neutral-600 border-dashed "} >
                <h2 className={"font-bold"}>{title}</h2>
                <p>{content}</p>
            </div>
        </>
    )
}