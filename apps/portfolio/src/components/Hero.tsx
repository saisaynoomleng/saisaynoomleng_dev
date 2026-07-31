import { Bounded, Button } from '@saisaynoomleng_dev/ui';
import Link from 'next/link';
import React from 'react';
import { FaArrowDown } from 'react-icons/fa';

const BOOTLINES = [
  'Initializing core systems...',
  'Loading kernel modules................... [OK]',
  'Mounting filesystems..................... [OK]',
  'Starting network interface............... [OK]',
  'Establishing secure connection........... [OK]',
  'Resolving user identity.................. [OK]',
  ' ',
];

export const Hero = (): React.JSX.Element => {
  return (
    <Bounded
      size="full"
      padding="none"
      className="flex flex-col gap-y-6 md:gap-y-10 lg:gap-y-12 min-h-dvh justify-center"
    >
      <div className="flex flex-col gap-y-3">
        {BOOTLINES.map((line, i) => (
          <p key={i} className="flex gap-x-4">
            <span className="text-primary">[{(i * 0.12345).toFixed(3)}]</span>
            <span>{line}</span>
          </p>
        ))}
      </div>

      <p className="text-primary">
        saisaynoomleng_dev@portfolio:~${' '}
        <span className="text-brand-white-50">whoami</span>
      </p>
      <h1 className="text-fs-900">Sai Say Noom Leng</h1>
      <p>
        Full-Stack Engineer<span className="animate-ping text-primary">|</span>
      </p>

      <div className="flex gap-x-4">
        <Button asChild>
          <Link href="#projects">./view_projects.sh</Link>
        </Button>

        <Button asChild variant="secondary">
          <Link href="#contacts">ping --contact</Link>
        </Button>
      </div>

      <div className="flex flex-col gap-y-1 justify-center items-center text-brand-white-600 ">
        <p>Scroll to continue</p>
        <p className="animate-bounce">
          <FaArrowDown />
        </p>
      </div>
    </Bounded>
  );
};
