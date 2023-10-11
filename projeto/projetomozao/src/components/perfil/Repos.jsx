import React from 'react';
import { Star } from 'lucide-react';
function Repos(props) {
    return (
        <div className='flex flex-col gap-2 border-b-2 py-6 mx-32  '>
            <h1 className='text-2xl font-semibold'>Repository Name</h1>
            <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis aut eligendi ducimus, atque cum dicta repellat dolores amet, doloremque quas optio. Veniam cumque, repudiandae eaque voluptas libero nemo fuga quam?</p>
            <div className='flex items-center gap-3 '>
                <p className='flex items-center gap-1'> <Star /> 100 stars</p>
                <p>Updated 30 days ago</p>
            </div>
        </div>
    );
}

export default Repos;