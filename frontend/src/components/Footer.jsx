import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            { /** Left Section */}
            <img className='mb-5 w-40' src={assets.logo} alt=''/>
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>

        <div>
            { /** Center Section */}
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            { /** Right Section */}
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='text-xl font-medium mb-5'>
                <li>+355675565954</li>
                <li>klajdileskaj@gmail.com</li>
            </ul>
        </div>
        {/** CopyRight text */}
        <div>
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright {new Date().getFullYear()}@ Prescripto - All Right Reserved </p>
        </div>
     </div>
      
    </div>
  )
}

export default Footer
