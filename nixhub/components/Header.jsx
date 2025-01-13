import Link from 'next/link';
import { Button } from './ui/button';

// Components
import Nav from './Nav';
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className='text-4xl font-semibold'>
            Nix<span className='text-accent'>&bull;</span>Hub
        </h1>
        </Link>


        {/* Desktop Nav and Hire me Button */}
        <div className="hidden xl:flex items-center gap-8">
            <Nav/>
            <Link href="/contact">
                <Button>Hire me</Button>
            </Link>
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden">
          <MobileNav/>
        </div>
      </div>
    </header>
  );
};

export default Header;
