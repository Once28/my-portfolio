import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Image src="/favicon.ico" alt="Logo" width={40} height={40} />
            <div>
              <h1 className="text-lg font-bold">Justin Zeng</h1>
              <p className="text-sm text-gray-600">MSDS @ Columbia University</p>
            </div>
          </div>
        </div>
        <div className="flex space-x-6 items-center">
          <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
          <a
                        href="https://drive.google.com/file/d/1ldlX-bLhX0BuzeZbHh6bkO91K8KJwmO3/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-gray-900"
                    >
                        Resume
                    </a>
          <Link href="/story" className="text-gray-700 hover:text-gray-900">My Story</Link>
          <Link href="/gallery" className="text-gray-700 hover:text-gray-900">Gallery</Link>
          {/* <Link href="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link> */}
          <a href="https://github.com/Once28" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6 text-gray-700 hover:text-gray-900" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.461-1.11-1.461-.907-.621.069-.608.069-.608 1.002.07 1.53 1.031 1.53 1.031.892 1.531 2.341 1.089 2.91.832.092-.647.35-1.089.635-1.34-2.22-.253-4.555-1.11-4.555-4.945 0-1.092.39-1.985 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.505.336 1.91-1.294 2.75-1.025 2.75-1.025.544 1.378.201 2.397.098 2.65.64.698 1.029 1.591 1.029 2.683 0 3.844-2.337 4.687-4.565 4.935.358.309.678.92.678 1.852 0 1.335-.012 2.415-.012 2.742 0 .267.179.577.688.478C19.135 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/justin-zeng" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6 text-gray-700 hover:text-gray-900" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.23 0H1.77C.792 0 0 .775 0 1.73v20.54C0 23.224.792 24 1.77 24h20.46c.978 0 1.77-.776 1.77-1.73V1.73C24 .775 23.208 0 22.23 0zM7.12 20.452H3.557V9.045H7.12v11.407zM5.34 7.582c-1.14 0-2.063-.927-2.063-2.065a2.065 2.065 0 112.064 2.065h-.001zm13.755 12.87h-3.564V14.99c0-1.303-.025-2.978-1.815-2.978-1.815 0-2.094 1.42-2.094 2.88v5.56h-3.566V9.045h3.42v1.556h.05c.477-.9 1.64-1.85 3.376-1.85 3.608 0 4.273 2.374 4.273 5.466v6.235h-.001z"/>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
