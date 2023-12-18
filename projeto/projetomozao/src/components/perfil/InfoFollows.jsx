import React from 'react';

function InfoFollows({followers, following, stars}) {
    return (
        <section className='flex gap-2 justify-between'>
            <p className='text-white'>{followers} followers</p>
            <p className='text-white'>{following} following</p>
            <p className='text-white'>200 stars</p>
        </section>
    );
}

export default InfoFollows;
