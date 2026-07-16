import React from 'react'
import { MapPin } from 'lucide-react';

const LocationButton = () => {
    return (
        <button className='w-50 text-sm font-bold  text-white py-1 md:px-15 lg:px-15 bg-blue-950 rounded flex justify-center items-center gap-2 active:scale-99
            hover:scale-105 duration-500
        '>
            <MapPin className='h-4'/>Location
        </button>
    )
}
export default LocationButton