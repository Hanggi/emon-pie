'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { siteConfig } from '@/config/site';

import Brand from './brand';
import { Icons } from './icons';
import Motion from './motion';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger } from './ui/select';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Motion
      initial={{ y: '-90%' }}
      animate={{ y: 0 }}
      className="bg-background sticky inset-x-0 top-0 z-40 border-b-2 border-black/10"
    >
      <nav className="container flex items-center justify-between px-5 py-4 text-xl">
        <div className="flex items-center gap-3">
          {!isMenuOpen ? (
            <Icons.menu
              onClick={() => setIsMenuOpen(true)}
              size={36}
              className="text-primary cursor-pointer lg:hidden"
            />
          ) : (
            <Icons.x
              onClick={() => setIsMenuOpen(false)}
              size={36}
              className="text-primary cursor-pointer lg:hidden"
            />
          )}
          <div className="flex items-center gap-4">
            <Brand />
          </div>
        </div>
        <NavContent />
        <div className="flex items-center justify-between">
          <Button>购买</Button>
          <Select
            onValueChange={(v) => changeLanguage(v)}
            defaultValue={i18n.language}
          >
            <SelectTrigger>
              <Button variant="default/ghost" className="max-md:hidden">
                English/中文
              </Button>
            </SelectTrigger>
            <SelectContent className="text-lg" align="end">
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="zh-CN">中文</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </nav>
      <AnimatePresence mode="wait">
        {isMenuOpen && <NavContentMob setIsMenuOpen={setIsMenuOpen} />}
      </AnimatePresence>
    </Motion>
  );
}

const NavContent = () => {
  const { t } = useTranslation(['common']);
  const path = usePathname();

  return (
    <>
      <ul className="ml-20 flex items-center gap-6 max-lg:hidden ">
        {siteConfig.nav.map((item) => (
          <li
            key={item.title}
            className="text-primary relative hover:text-white"
          >
            <h3 className="capitalize">
              <Link href={item.href}>{t(`common:${item.key}`)}</Link>
            </h3>
          </li>
        ))}
      </ul>
    </>
  );
};

const NavContentMob = ({ setIsMenuOpen }: { setIsMenuOpen: Function }) => {
  return (
    <>
      <Motion
        key="mobile-nav"
        as="div"
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ duration: 0.3 }}
        className="fixed inset-y-0 left-0 z-50 flex min-h-screen w-4/5 flex-col gap-6 bg-[#A45AFFF2]/95 pt-6 text-white md:w-3/5"
      >
        {/* Close Button */}
        <div className="flex items-center justify-between border-b border-white/20 pb-6">
          <Brand className="pl-6" />
          <div className="pr-6">
            <Icons.x
              onClick={() => setIsMenuOpen(false)}
              size={36}
              className="cursor-pointer text-white"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col gap-6 px-6">
          {siteConfig.nav.map((_) => (
            <li key={_.title}>
              <h3 className="border-b border-white/20 pb-3 text-2xl capitalize">
                <Link
                  href={_.href}
                  className="border-white pb-4 hover:border-b-[3px]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {_.title}
                </Link>
              </h3>
            </li>
          ))}
        </ul>
      </Motion>

      {/* Semi-Transparent Background */}
      <Motion
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 min-h-screen bg-black/40"
        onClick={() => setIsMenuOpen(false)}
      />
    </>
  );
};
