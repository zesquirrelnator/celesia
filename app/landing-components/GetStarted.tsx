"use client";
import { posthogClient } from '@/lib/posthog'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

export default function GetStarted() {
  return (
    <Link
        href="https://app.celesia.io/"
        onClick={() => posthogClient.capture('cta_clicked', { location: 'Hero' })}
        className='flex items-center duration-300 ease-in-out font-semibold text-white bg-blue-400 hover:bg-blue-500 dark:text-white px-4 py-2 rounded-lg transform hover:scale-105'
    >
        Get Started <FaArrowRight size='1.1rem' className='ml-1' />
    </Link>
  )
}

