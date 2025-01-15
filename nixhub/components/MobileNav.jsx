'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';
import { ScrollArea } from '@radix-ui/react-scroll-area';

const links = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'minha visão',
    path: '/services',
  },
  {
    name: 'currículo',
    path: '/resume',
  },
  {
    name: 'projetos',
    path: '/work',
  },
  {
    name: 'contato',
    path: '/contact',
  },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32]px text-accent"></CiMenuFries>
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Nix<span className="text-accent">&bull;</span>Hub
            </h1>
          </Link>
        </div>

        <nav className="flex flex-col justify-normal items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname &&
                  'text-accent border-b-2 border-accent'
                } text-xl capitalize hover:text-accent transition-all over`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
