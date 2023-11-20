'use client';
import MaxWidthWrapper from './MaxWidthWrapper';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const navigationItems = [
  {
    name: 'Adopt',
    href: '/adopt',
  },
  {
    name: 'Foster',
    href: '/foster',
  },
  {
    name: 'Volunteer',
    href: '/volunteer',
  },
  {
    name: 'About',
    href: 'about',
  },
  {
    name: 'Events',
    href: 'events',
  },
  {
    name: 'Make a Recurring Gift',
    href: 'recurring',
  },
];

export default function NavBar() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <MaxWidthWrapper>
            <div className="w-full h-16 flex justify-between">
              <div className="flex flex-shrink-0 items-center">
                <Link href="/">
                  <img
                    className="h-8 w-auto"
                    src="/logo.png"
                    alt="For The Love of Labs Logo"
                  />
                </Link>
              </div>
              <div className="hidden lg:ml-6 lg:flex lg:space-x-8 lg:items-center">
                {navigationItems.map((item, index) => (
                  <Link
                    href={item.href}
                    className="inline-flex items-center px-1 pt-1 text-md font-normal text-gray-900"
                    key={index}
                  >
                    {item.name}
                  </Link>
                ))}
                <button className="bg-blue-700 text-white py-2 px-4">
                  Donate
                </button>
              </div>

              <div className="-mr-2 flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </MaxWidthWrapper>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigationItems.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  className="block py-2 pl-3 pr-4 text-base font-medium text-center hover:bg-gray-500 cursor:pointer"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
