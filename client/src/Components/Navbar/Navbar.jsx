import React from 'react';
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';

function Navbar({ onCloseModal, onOpenModal }) {
  return (
    <div>
      <MainHeader />
      <NavLinks onOpenModal={onOpenModal} onCloseModal={onCloseModal} />
    </div>
  );
}

export default Navbar;
