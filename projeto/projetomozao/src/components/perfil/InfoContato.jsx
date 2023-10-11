import React from 'react';

function InfoContato(props) {
    return (
        <section>
            <ul className='text-white font-medium text-xl flex flex-col gap-4 py-2'>
                <li>Organization</li>
                <li>location</li>
                <li>email</li>
                <li>www.website.com</li>
                <li>@myTwitter</li>
            </ul>
        </section>
    );
}

export default InfoContato;