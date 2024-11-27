"use client";
import { useState } from 'react';
import { HiBars3 } from 'react-icons/hi2';
import { FaArrowRight } from "react-icons/fa6";
import { AiFillCloseCircle } from 'react-icons/ai';
import { Dialog } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/CelesiaTransparent.png';

interface NavigationItem {
  name: string;
  href: string;
};

export default function Header({ navigation }: { navigation: NavigationItem[] }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const NavLogo = () => <Image src={logo} className='h-10 w-10' alt='' />;

  return (
    <header className='absolute inset-x-0 top-0 z-50 dark:bg-boxdark-2'>
      <nav className='flex items-center justify-between p-6 lg:px-8' aria-label='Global'>
        {/* Logo Section */}
        <div className='flex items-center lg:flex-1'>
          <Link
            href='/'
            className='flex items-center -m-1.5 p-1.5 text-gray-900 duration-300 ease-in-out hover:text-blue-900'
          >
            <NavLogo />
            <span className='ml-2 text-sm font-semibold leading-6 dark:text-white'>Celesia</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-white'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <HiBars3 className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>

        {/* Navigation Links and Get Started Button */}
        <div className='hidden lg:flex lg:items-center lg:gap-x-6'>
          {/* Navigation Links */}
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className='text-sm font-semibold leading-6 text-gray-900 duration-300 ease-in-out hover:text-blue-500 dark:text-white'
            >
              {item.name}
            </a>
          ))}
          
          {/* Get Started Button */}
          <Link href='https://app.celesia.io/'>
            <div className='flex items-center duration-300 ease-in-out font-semibold text-white bg-blue-400 hover:bg-blue-500 dark:text-white px-4 py-2 rounded-lg ml-4 transform hover:scale-105'>
              Get Started 
              <FaArrowRight size='1.1rem' className='ml-1 transition-transform duration-300 ease-in-out transform hover:translate-x-1' />
            </div>
          </Link>
        </div>
      </nav>
      <Dialog as='div' className='lg:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className='fixed inset-0 z-50' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-boxdark dark:text-white'>
          <div className='flex items-center justify-between'>
            <Link href='/' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Celesia</span>
              <NavLogo />
            </Link>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-50'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <AiFillCloseCircle className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-boxdark-2'
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className='py-6'>
                <Link href='/login'>
                  <div className='flex justify-end items-center duration-300 ease-in-out font-semibold text-white bg-blue-400 hover:bg-blue-500 dark:text-white px-4 py-2 rounded-lg w-fit'>
                      Get Started <FaArrowRight size='1.1rem' className='ml-1' />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}