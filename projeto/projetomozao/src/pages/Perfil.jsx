import React, { useEffect } from 'react';
import BtnVoltar from '../components/perfil/BtnVoltar';
import InfosPrincipais from '../components/perfil/InfosPrincipais';
import InfoFollows from '../components/perfil/InfoFollows';
import InfoContato from '../components/perfil/InfoContato';
import useFetchUser from '../hooks/useFetchUser';
import useFetchRepos from '../hooks/useFetchRepos';
import Repos from '../components/perfil/Repos';
import { useParams } from 'react-router-dom';



function Perfil(props) {


    const {user} = useParams();
    const userData = useFetchUser(user)
    const reposUser = useFetchRepos(user)
    console.log(reposUser)
    console.log(userData)


    return (
        <div className='w-screen flex '>
            <nav className=' bg-slate-700 w-96 h-screen p-5 flex flex-col fixed  gap-5'>

                <InfosPrincipais 
                  nomeDev={userData.login}
                  username={userData.name}
                />

                <InfoFollows 
                    followers={userData.followers}
                    following={userData.following}
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


            <main className='flex-1 h-full flex flex-col p-5 ml-96 '>
                <Repos />
                <Repos />
                <Repos />
                <Repos />
                <Repos />
                <Repos />
            
               
            </main>
        </div>
    );
}

export default Perfil;