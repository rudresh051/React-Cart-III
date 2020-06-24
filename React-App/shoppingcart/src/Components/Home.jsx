import React from "react"
import data from "./data.json"

function Home(){
    return(
    <div>
        <h1>This is home component</h1>
        {data.map( item => {
            return (
                <>
                    <div>{item.name}</div>
                    <div>{item.id}</div>
                    <div>{item.price}</div>
                    <img src={item.image} />
                    <button>Add</button>
                 </>   
                )
})}
    </div>
    )
}

export default Home