'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/course', label: 'Course' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/60 backdrop-blur supports-[backdrop-filter]:bg-slate-950/40">
      <nav className="container-responsive flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Numaware" width={36} height={36} className="rounded" />
          <span className="text-white font-semibold tracking-wide">Numaware</span>
        </Link>
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={
                    'px-1.5 py-2 transition border-b-2 ' +
                    (isActive
                      ? 'text-cyan border-cyan'
                      : 'text-slate-300 hover:text-white border-transparent hover:border-cyan/50')
                  }
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="md:hidden">
          {/* Simple mobile menu placeholder */}
          <details className="relative">
            <summary className="list-none cursor-pointer px-3 py-2 rounded border border-slate-700 text-slate-200">
              Menu
            </summary>
            <ul className="absolute right-0 mt-2 w-48 card-surface p-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="block px-3 py-2 rounded hover:bg-slate-800">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </nav>
    </header>
  );
}
