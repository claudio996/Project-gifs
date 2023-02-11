import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {
    const [Images, setImages] = useState([]);
    const [isLoading, setIsloading] = useState(true);

    const getImage = async () => {
        const newImage = await getGifs(category);
        setImages(newImage);
        setIsloading(false);
    };

    useEffect(() => {
        getImage();
    }, []);

    return {
        Images,
        isLoading
    }
}
