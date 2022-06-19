import {React, useEffect, useState} from 'react'

function Card(props) {

    const [image, setImage] = useState()
    const [loading, setLoading] = useState(true)

    const getImage = async () => {
        const request = await fetch(`https://api.themoviedb.org/3/movie/${props.id}/images?api_key=api_key&include_image_language=es,null`);
        const {backdrops} = await request.json();
        setImage(backdrops[0].file_path)
        setLoading(false);
    }

    useEffect(() => {
        getImage();
    }, [])

    if (loading) {
        return (
            <h1>Fetching Films</h1>
        )
    }else {
        return (
            <div className="card-film">
                <img className='film' src={`https://image.tmdb.org/t/p/w220_and_h330_face${image}`} alt="img" />
                <p className='film-title'>{props.title}</p>
            </div>
        )
    }
}

export default Card;