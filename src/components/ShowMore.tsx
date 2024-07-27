'use client';
import { useRouter } from 'next/navigation';
import React from 'react'

const ShowMore = ({pageNumber, isNext} : {pageNumber: number, isNext: boolean}) => {
    const router = useRouter();

    const handleNavigation = () => {
        console.log('object');
    }
  return (
    <div>ShowMore</div>
  )
}

export default ShowMore