import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Messenger</h3>
            <p className="text-gray-400">
              A modern real-time messaging platform built with Next.js and
              TypeScript.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/auth"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/pandaofhead/messenger-clone"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  GitHub Repository
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/pandaofhead"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <BsGithub className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/hongjin-quan-564737271/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <BsLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} Messenger. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
