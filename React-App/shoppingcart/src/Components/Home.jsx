import React from "react"
import data from "./data.json"
import ProductDashBoard from "./ProductDashBoard"

function Home(props){

    const {app} = props
    const handleClick = (id)=>{
        let item = data.find(item=>item.id===id)
        app.addTocart(item)
    }

    return(
    <div>
        {data.map( item => <ProductDashBoard key={item.id} {...item} handleClick={handleClick}/> )}
    </div>
    )
}

export default Home