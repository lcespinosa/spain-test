import React, { ReactElement } from 'react';
import Logo from '../../../Logo';
import SearchInput from '../../../SearchInput';

import AccountIcon from '../../../../assets/images/account.png'; 
import ShoppingBagIcon from '../../../../assets/images/shopping-bag.png'; 
import classNames from 'classnames';

interface NavigationProps {
  id: number;
  href: string;
  title: string;
}
const navigation: NavigationProps[] = [
  {
    id: 1,
    href: '#',
    title: 'All products',
  },
  {
    id: 2,
    href: '#',
    title: 'Packaging',
  },
  {
    id: 3,
    href: '#',
    title: 'Drinkware',
  },
  {
    id: 4,
    href: '#',
    title: 'Apparel',
  },
  {
    id: 5,
    href: '#',
    title: 'Backpacks',
  },
  {
    id: 6,
    href: '#',
    title: 'Notebooks',
  },
];

function Header(): ReactElement {

  return (
    <header>
      <div className="bg-dark-01">
        <nav className="max-w-[90rem] mx-auto px-3 py-5" aria-label="Top">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center w-full max-w-3xl">
              <Logo />
              <SearchInput className="ml-[63px] w-full" placeholder="Search products" />            
            </div>
            <div className="ml-10 space-x-4 inline-flex items-center">
              <a
                href="#"
                className="inline-flex items-center text-[15px] leading-[16px] font-normal text-white"
              >
                <img src={AccountIcon} alt="Account" />
                <span className="ml-3 whitespace-nowrap">Sign in</span>
              </a>
              <a
                href="#"
                className="inline-flex items-center text-[15px] leading-[16px] font-normal text-white"
              >
                <img src={ShoppingBagIcon} alt="Cart" />
                <span className="ml-3">Cart</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div className="bg-dark-10">
        <nav className="max-w-[90rem] mx-auto px-3 py-5" aria-label="Below">
          <ul className='inline-flex gap-x-6 text-[15px] leading-[16px] font-normal text-dark-04'>
            {navigation.map( ( item: NavigationProps ) => ( 
              <li key={item.id}>
                <a href={item.href}>
                  {item.title}
                </a>
              </li>
            ) )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;