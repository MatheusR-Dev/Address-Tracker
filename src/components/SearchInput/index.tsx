import React, {InputHTMLAttributes} from 'react';  
import { Icon, SearchCamp, SearchIcon } from './styles';

const SearchInput: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({...rest}) => {

  return(
    <>
    <SearchCamp {...rest} />
    <Icon>
        <SearchIcon/>
    </Icon>
    </>
  )
}

export default SearchInput;

