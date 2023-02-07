import { useEffect, useState } from "react"
import "./menu.css"
import MenuCard  from "./MenuCard";

export function Menu(){
    const [coffees, setCoffees] = useState();
    const [temperature, setTemperature] = useState("hot");
    useEffect(()=>{
        console.log({temperature})
        fetch(`https://api.sampleapis.com/coffee/${temperature}`)
        .then(res =>res.json())
        .then(setCoffees)
        .catch (alert)

    },[temperature])



    return(
        <article>
            <div>
                <button onClick={()=>setTemperature("hot")}>Hot Coffees</button>
                <button onClick={()=>setTemperature("cold")}>Cold Coffees </button>
            </div>
        {!coffees
        ?<h2>Wecome to Deja Brew</h2>
        :<section className="coffee-container">
            {coffees.map(coffee=>
                (< MenuCard key={coffee.id} coffee={coffee}/>
                ))}

        </section>

    }



        </article>

    )
}