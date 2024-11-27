import Image from 'next/image';
import Spotify from "./logos/SpotifyLogo.png";
import FitBit from "./logos/Fitbit_logo.png";
import Google from "./logos/Google_logo.png";
import Noom from "./logos/Noomlogo.png";

export default function Clients() {
  return (
    <div className='mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-between gap-y-6'>
      <h2 className='mb-6 text-center font-semibold tracking-wide text-gray-500 dark:text-white'>
        Connect Over 40+ Tools:
      </h2>

      <div className='mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl md:grid-cols-4 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none'>
        {
          [Spotify, FitBit, Google, Noom].map((logo, index) => (
            <div key={index} className='flex justify-center col-span-1 max-h-12 w-full object-contain dark:opacity-80'>
              <Image src={logo.src} alt="Client logo" className='max-h-12 w-full object-contain dark:opacity-80' />
            </div>
          ))
        }
      </div>
    </div>
  )
}