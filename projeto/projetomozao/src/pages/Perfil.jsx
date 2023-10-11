import React, { useEffect } from 'react';
import BtnVoltar from '../components/perfil/BtnVoltar';
import InfosPrincipais from '../components/perfil/InfosPrincipais';
import InfoFollows from '../components/perfil/InfoFollows';
import InfoContato from '../components/perfil/InfoContato';
import useFetchUser from '../hooks/useFetchUser';
import { useParams } from 'react-router-dom';



function Perfil(props) {


    const {user} = useParams();
    const userData = useFetchUser(user)



    return (
        <div className='w-screen'>
            <nav className=' bg-slate-700 w-96 h-screen p-5 flex flex-col  gap-5'>

                <InfosPrincipais 
                  nomeDev={userData.login}
                />

                <InfoFollows 
                    followers=''
                    following=''
                    stars=''
                />

                <InfoContato 
                    organization=''
                    location=''
                    email=''
                    twitter=''
                    website=''
                />


                <BtnVoltar />

            </nav>


            <main className='flex-1'></main>
        </div>
    );
}

export default Perfil;