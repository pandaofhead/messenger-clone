'use client';

import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl my-3 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={60}
                height={60}
              />
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link 
              href="/auth"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;