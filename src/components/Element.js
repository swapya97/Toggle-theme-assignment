
const Element=(props)=>{
    return(
        <div className="element">
         <h2 className="title">{props.heading}</h2>
         <p className='info'><em>{props.time}</em></p>
         <p className='info'>{props.information}</p>
        </div>
    )
}

export default Element;
