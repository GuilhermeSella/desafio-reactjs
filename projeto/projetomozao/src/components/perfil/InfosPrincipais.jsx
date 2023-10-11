import React from 'react';

function InfosPrincipais({nomeDev,username, bio }) {
    return (
        <section className='flex flex-col gap-5'>
            <img src="" className='h-72 rounded-full w-80' alt="" />
            <div>
                <h1 className='text-white text-2xl'>{nomeDev}</h1>
                <h3 className='text-xl text-white'>{username}</h3>
            </div>
            <p className='text-slate-400 text-base font-medium'>{bio}</p>
        </section>
    );
}

export default InfosPrincipais;