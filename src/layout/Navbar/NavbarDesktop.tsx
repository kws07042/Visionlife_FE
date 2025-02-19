import React from 'react';
import Logo from '../../components/Logo.tsx';
import {NavigationT} from './index.tsx';
import NavbarMenu from './NavbarMenu.tsx';
import clsx from 'clsx';

interface DesktopNavbarProps {
  isDropdownVisible: boolean;
  setIsDropdownVisible: (isOpen: boolean) => void;
  navigation: NavigationT[];
}

const NavbarDesktop: React.FC<DesktopNavbarProps> = (props) => {
  const {isDropdownVisible, setIsDropdownVisible, navigation} = props;

  const subClasses = clsx(
    'absolute inset-x-0 top-full border-t bg-white border-gray-200 shadow-md transition-all duration-300 ease-in-out',
    isDropdownVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
  );

  return (
    <div className="relative hidden lg:block">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between py-4">
        <div className="ml-3">
          <Logo type="_desktop" />
        </div>
        <NavbarMenu
          type="_nav"
          items={navigation}
          onMouseEnter={() => setIsDropdownVisible(true)}
          onMouseLeave={() => setIsDropdownVisible(false)}
        />
      </div>

      <div className={subClasses}>
        <div className="mx-auto flex w-full max-w-7xl">
          <NavbarMenu
            type="_sub"
            items={navigation}
            onMouseEnter={() => setIsDropdownVisible(true)}
            onMouseLeave={() => setIsDropdownVisible(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default NavbarDesktop;
