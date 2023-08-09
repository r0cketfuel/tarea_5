import React from 'react';

const Poster = ({ src, alt }) => {

    return (
        <div className='poster-image'>
            <img src={src} alt={alt} />
        </div>
    );
};

export default Poster;
