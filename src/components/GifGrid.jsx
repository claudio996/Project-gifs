
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { Images, isLoading } = useFetchGifs(category);
 

    return (
        <>
            <br />
            <div className="container">
                 {
                    isLoading && (<h2>Cargando ....</h2>) 
                    
                 }   
                <div className="card-grid">
                    {
                        Images.map((image) => (

                            <GifItem
                                key={image.id}
                                {...image}
                            />
                        ))
                    }


                </div>

            </div>

        </>
    );
};
