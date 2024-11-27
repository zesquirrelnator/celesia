import { FaArrowRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import Image from 'next/image';

export default function Hero() {
  return (
    <div className='relative pt-14 w-full'>
      <TopGradient />
      <BottomGradient />
      <div className='py-24 sm:py-32'>
        <div className='mx-auto max-w-8xl px-6 lg:px-8'>
          <div className='lg:mb-18 mx-auto max-w-3xl text-center'>
            <h1 className='relative text-4xl font-bold text-gray-900 sm:text-6xl dark:text-white'>
              The{" "}
              <span className='relative inline-block'>
                <span className='italic bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent'>
                  Life
                </span>
                <svg
                  className='absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-full max-w-[120px] h-6'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 100 20'
                  fill='none'
                  stroke='rgba(125, 196, 255, 0.7)' /* Blue color */
                  strokeWidth='3.5'
                  strokeLinecap='round'
                >
                  <path d='M2,10 Q50,5 98,10' />
                </svg>
              </span>{" "}
              Analytics Platform
            </h1>
            <p className='mt-6 mx-auto max-w-2xl text-lg leading-8 text-gray-600 dark:text-white'>
              Don&apos;t just guess. Find the cause of your problems with Celesia.
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <a
                href="https://app.celesia.io/"
                className='flex items-center duration-300 ease-in-out font-semibold text-white bg-blue-400 hover:bg-blue-500 dark:text-white px-4 py-2 rounded-lg ml-4 transform hover:scale-105'
              >
                Get Started <FaArrowRight size='1.1rem' className='ml-1' />
              </a>
            </div>

            {/* Members Section */}
            <div className='mt-14 flex items-center justify-center space-x-2'>
              <div className='flex -space-x-4'>
                <Image src='https://shipfa.st/_next/static/media/lennard.a8caddd5.jpeg' alt='Member 1' className='w-10 h-10 rounded-full border-2 border-white dark:border-white' />
                <Image src='https://shipfa.st/_next/static/media/wahab.c0419676.jpeg' alt='Member 2' className='w-10 h-10 rounded-full border-2 border-white dark:border-white' />
                <Image src='https://shipfa.st/_next/static/media/naveen.311d3eb1.jpeg' alt='Member 3' className='w-10 h-10 rounded-full border-2 border-white dark:border-white' />
                <Image src='https://shipfa.st/_next/static/media/artificery.ba1049ef.jpeg' alt='Member 4' className='w-10 h-10 rounded-full border-2 border-white dark:border-white' />
                <Image src='https://shipfa.st/_next/static/media/dunsin.c7d35d82.jpeg' alt='Member 5' className='w-10 h-10 rounded-full border-2 border-white dark:border-white' />
              </div>
              <div>
                <div className='flex items-center text-gray-900 dark:text-white space-x-1 ml-3'>
                  <FaStar className='text-yellow-500' />
                  <FaStar className='text-yellow-500' />
                  <FaStar className='text-yellow-500' />
                  <FaStar className='text-yellow-500' />
                  <FaStar className='text-yellow-500' />
                </div>
                <p className='ml-3 text-lg font-regular text-gray-500'>
                  9.2/10 Stars
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TopGradient() {
  return (
    <div
      className='absolute top-0 right-0 -z-10 transform-gpu overflow-hidden w-full blur-3xl sm:top-0'
    aria-hidden='true'
  >
    <div
      className='aspect-[1020/880] w-[55rem] flex-none sm:right-1/4 sm:translate-x-1/2 dark:hidden bg-gradient-to-tr from-blue-400 to-purple-300 opacity-40'
      style={{
        clipPath: 'polygon(80% 20%, 90% 55%, 20% 100%, 70% 30%, 20% 50%, 10% 0)',
      }}
      />
    </div>
  );
}

export function BottomGradient() {
  return (
    <div
      className='absolute inset-x-0 top-[calc(100%-40rem)] sm:top-[calc(100%-65rem)] -z-10 transform-gpu overflow-hidden blur-3xl'
    aria-hidden='true'
  >
    <div
      className='relative aspect-[1020/880] sm:-left-3/4 sm:translate-x-1/4 dark:hidden bg-gradient-to-br from-blue-400 to-purple-300  opacity-50 w-[72.1875rem]'
      style={{
        clipPath: 'ellipse(80% 30% at 80% 50%)',
      }}
    />
    </div>
  );
}