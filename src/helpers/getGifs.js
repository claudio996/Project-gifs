export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=zLKRxkfLtzYHQwV4l3jUX0g5RXw2EJlW&q=${category}&limit=20`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(gif => (
        {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }
    ))

    return gifs;
}

