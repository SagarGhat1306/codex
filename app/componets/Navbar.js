import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="py-4 mt-2">
      <ul className="flex justify-center space-x-20 text-gray-800 text-lg font-medium">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/blogs">Blogs</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}