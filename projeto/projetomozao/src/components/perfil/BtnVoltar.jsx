import React from 'react';
import { Link } from 'react-router-dom';

function BtnVoltar(props) {
    return (
        <div className='flex  justify-center'>
                    <Link to="/" className='p-3 text-center w-32 bg-slate-100 rounded'>Voltar</Link> 
        </div>
    );
}

export default BtnVoltar;