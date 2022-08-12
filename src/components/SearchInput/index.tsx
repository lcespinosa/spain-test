import classNames from 'classnames';
import { ReactElement } from 'react';

import SearchIcon from '../../assets/images/search_icon.png';

interface SearchInputProps {
  className?: string;
  placeholder?: string;
}
function SearchInput( {className, placeholder}: SearchInputProps ): ReactElement {

  const inputClassNames = classNames( 'inline-flex items-center bg-white py-2 border-gray-300 rounded-[20px] px-[18px]', className );

  return (
    <div className={inputClassNames}>
      <label htmlFor="search_input" className="sr-only">
        Search
      </label>
      <img src={SearchIcon} alt="Search" />
      <input
        type="text"
        name="search_input"
        id="search_input"
        autoComplete="family-name"
        className="ml-[14px] text-[15px] leading-[16px] placeholder-text-[15px] placeholder-leading-[16px] placeholder-black focus:outline-none w-full"
        placeholder={placeholder}
      />
    </div>
  );
}

export default SearchInput;