import React from 'react'

const Cards = () => {
    return (
        <div className='container mx-auto mt-4'>
            {/* card */}
            <div className="bg-black shadow-lg rounded w-64 h-64 group overflow-hidden">
               <div className='relative'>
                   <img className='group-hover:opacity-50' src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg" alt="" />
                   <div className='absolute left-0 bottom-[-100px] text-white p-4  group-hover:bottom-[0] group-hover:transition duration-300 ease'>
                       <h1>Obame</h1>
                   </div>
               </div>
            </div>
        </div>
    )
}

export default Cards