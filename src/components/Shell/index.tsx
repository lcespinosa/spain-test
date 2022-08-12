import React, { ReactElement, ReactNode } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

interface ShellProps {
  children?: ReactNode;
}

function Shell( {...props}: ShellProps ): ReactElement {
  return (
    <> 
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

export default Shell;