import React    from 'react';
import Poster   from './Poster';
import Trailer  from './Trailer';

import image1   from '../assets/images/poster1.jpg';
import image2   from '../assets/images/poster2.jpg';
import image3   from '../assets/images/poster3.jpg';
import image4   from '../assets/images/poster4.jpg';
import image5   from '../assets/images/poster5.jpg';
import image6   from '../assets/images/poster6.jpg';

const Peliculas = [
    { titulo: 'Back to the Future',     link: 'https://www.imdb.com/title/tt0088763/', poster: image1, trailerUrl: 'qvsgGtivCgs' },
    { titulo: 'Top Gun',                link: 'https://www.imdb.com/title/tt0092099/', poster: image2, trailerUrl: 'xa_z57UatDY' },
    { titulo: 'Star Wars',              link: 'https://www.imdb.com/title/tt3748528/', poster: image3, trailerUrl: 'frdj1zb9sMY' },
    { titulo: 'Revenge of the nerds',   link: 'https://www.imdb.com/title/tt0088000/', poster: image4, trailerUrl: 'Hw6zrInbtQE' },
    { titulo: 'Locademia de policía',   link: 'https://www.imdb.com/title/tt0087928/', poster: image5, trailerUrl: 'ohkQSnXj74A' },
    { titulo: 'Avatar',                 link: 'https://www.imdb.com/title/tt1630029/', poster: image6, trailerUrl: 'AZS_d_hS2dM' },
];

const PeliAzar = () => {
    const randomIndex = Math.floor(Math.random() * Peliculas.length);
    const peliculaAzar = Peliculas[randomIndex];

    return (
        <div>
            <h2>{peliculaAzar.titulo}</h2>
            <a href={peliculaAzar.link} target="_blank">Ver en IMDB</a>
            <Poster src={peliculaAzar.poster} alt={peliculaAzar.titulo} />
            <Trailer embedId={peliculaAzar.trailerUrl} />
        </div>
    );
};

export default PeliAzar;
