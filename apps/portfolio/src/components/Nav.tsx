import { Bounded } from '@saisaynoomleng_dev/ui';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NAV_LINKS = [
  { name: '~/home', href: '/' },
  { name: '~/about', href: '#about' },
  { name: '~/skills', href: '#skills' },
  { name: '~/projects', href: '#projects' },
  { name: '~/experiences', href: '#experiences' },
  { name: '~/blogs', href: 'https://blogs.snooleng.com' },
];

export const Nav = (): React.JSX.Element => {
  const logo =
    'https://cdn.sanity.io/images/keonpyg1/production/b5d485cd49f9b085d8062826666aaba234855b39-594x447.png';

  return (
    <Bounded
      as="header"
      className="flex justify-between items-center"
      size="full"
      isCentered={false}
    >
      <div>
        <Link href="/">
          <Image src={logo} alt="my-logo" width={50} height={50} />
        </Link>
      </div>

      <nav className="flex items-center gap-x-2 md:gap-x-4">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.name} className="hover:text-primary">
            {link.name}
          </Link>
        ))}
      </nav>
    </Bounded>
  );
};
