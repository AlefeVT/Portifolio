'use client';

import { usePathname } from 'next/navigation';
import { cn } from '@/app/lib/utils';
import Link from 'next/link';

type NavItemProps = {
  label: string;
  href: string;
  target?: string;
  rel?: string;
};

export const NavItem = ({ label, href, target, rel }: NavItemProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'text-gray-400 flex items-center gap-2 font-medium font-mono',
        isActive && 'text-gray-50',
      )}
      target={target}
      rel={rel}
    >
      <span className="text-emerald-400">#</span>
      {label}
    </Link>
  );
};
