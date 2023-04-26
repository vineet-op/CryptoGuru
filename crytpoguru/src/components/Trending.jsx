import React from 'react'
import Axios from '../Hooks/Axios'

const Trending = () => {


    const { response } = Axios('search/trending')
    console.log(response);


    return (
        <div className='mt-8'>
            <h1 className='text-2xl mb-2'> Trending </h1>
        </div>
    )
}

export default Trending
