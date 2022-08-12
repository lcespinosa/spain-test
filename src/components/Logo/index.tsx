import { ReactElement } from 'react';

function Logo(): ReactElement {
  return (
    <a href="#" className='p-4 px-16 bg-dark-09'>
      <span className="sr-only">Logo</span>
      <span className="uppercase text-center text-[13px] leading-[16px] font-normal text-dark-06">
        Logo
      </span>
    </a>
  );
}

export default Logo;