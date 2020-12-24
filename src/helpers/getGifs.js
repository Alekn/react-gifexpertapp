const getGifs = async( category ) => {

    const api_key = 'lQUaEm9LbOJzJ1iy8HYDQK1HBkW01fVC';

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=${ api_key }`;

    const response = await fetch( url );
    const { data } = await response.json();

    const gifs = data.map( (img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    } )

    return  gifs;
}

export default getGifs;