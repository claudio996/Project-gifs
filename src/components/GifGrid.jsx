import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
 const [Images, setImages] = useState([]);


    useEffect(() => {
        getGifs(category)
    }, [])

    return (
        <>

            <h3>{category}</h3>
           <ol>
            <li>title0</li>
           </ol>
        </>
    )
}
