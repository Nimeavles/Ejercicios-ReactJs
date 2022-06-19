import React from 'react'
import { useEffect, useState } from 'react'
import Card from './card';
import SpinnerLoading from './spinnerLoading';

function Titles() {

  const [Films, setFilms] = useState([]);
  const [Loading, setLoading] = useState(true);

  const fetchData = async () => {
    const request = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=api_key&language=en-US&page=1&region=ES&language=es-ES")
    const { results } = await request.json();

    setFilms(results);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [])

  if (Loading === true) {
    return <SpinnerLoading />
  } else {
    return (
      <section className="titles">
        <div className="title-main">
          <h1>Títulos más vistos</h1>
        </div>
        <article className='films'>
          {
            Films.map((film, index) => {
              return <Card key={index} id={film.id} title={film.title}/>
            })
          }
        </article>
      </section>
    )
  }
}
export default Titles;