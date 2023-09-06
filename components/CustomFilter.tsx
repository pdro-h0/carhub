interface props{
    title:"fuel" | "year"
}

export const CustomFilter = (props:props)=>{
    return(
        <>
            <h1 className="text-violet-700">{props.title}</h1>
        </>
    )
}