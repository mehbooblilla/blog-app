import Link from 'next/link';

const Navbar = () => (
  <nav className="bg-gray-800 p-4">
    <div className="container mx-auto">
      <Link href="/">
        <span className="text-white text-lg mr-4">Home</span>
      </Link>
      <Link href="/about">
        <span className="text-white text-lg mr-4">About</span>
      </Link>
      <Link href="/contact">
        <span className="text-white text-lg mr-4">Contact</span>
      </Link>
      <Link href="/blog">
        <span className="text-white text-lg mr-4">Blogs</span>
      </Link>

    </div>
  </nav>
);

export default Navbar;