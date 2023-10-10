import React from 'react';
import BtnVoltar from '../components/perfil/BtnVoltar';
function Perfil(props) {
    return (
        <body className='w-screen'>
            <nav className=' bg-slate-700 w-96 h-screen p-5 flex flex-col  gap-5'>
                <section className='flex flex-col gap-5'>
                    <img src="" className='h-72 rounded-full w-80' alt="" />
                    <div>
                        <h1 className='text-white text-2xl'>Developer Full name</h1>
                        <h3 className='text-xl text-white'>@username</h3>
                    </div>
                    <p className='text-slate-400 text-base font-medium'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam corporis aut eligendi! Voluptates itaque ad quod hic deserunt saepe cumque aliquam quis repellat earum tenetur quia, deleniti nisi alias magni!</p>
                </section>
                <section className='flex gap-2 justify-between'>
                    <p className='text-white'>200 followers</p>
                    <p className='text-white'>200 following</p>
                    <p className='text-white'>200 stars</p>
                </section>

                <section>
                    <ul className='text-white font-medium text-xl flex flex-col gap-4 py-2'>
                        <li>Organization</li>
                        <li>location</li>
                        <li>email</li>
                        <li>www.website.com</li>
                        <li>@myTwitter</li>
                    </ul>
                </section>


                <BtnVoltar />

            </nav>
            <main className='flex-1'></main>
        </body>
    );
}

export default Perfil;