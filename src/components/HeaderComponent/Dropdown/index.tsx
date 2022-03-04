import { SimpleButton } from '../../ui/Button';
import { CSSTransition } from 'react-transition-group';
import DropdownHome from './Home';
import * as S from './style';
import { BsDownload } from 'react-icons/bs';
import { useContext } from 'react';
import { StateContext } from '../../../context/useGlobalState';
function DropDown() {

  const { dropdownActive, dropdownState } = useContext(StateContext);
  return (
    <S.DropDownContainer>
      <CSSTransition 
        in={dropdownActive === 'main' && dropdownState === true}
        unmountOnExit
        timeout={500}
        >
        <DropdownHome />
      </CSSTransition>

      <CSSTransition 
        in={dropdownActive === 'security'  && dropdownState === true}
        unmountOnExit
        timeout={500}
        classNames="dropdown">
        <DropdownHome />
      </CSSTransition>

      <CSSTransition 
        in={dropdownActive === 'mods'  && dropdownState === true}
        unmountOnExit
        timeout={500}
        classNames="dropdown">
        <DropdownHome />
      </CSSTransition>

      <S.DropdownFooter>
        <SimpleButton bg={"var(--brand)"}>
          <BsDownload />
          <p>Baixar para windows</p>
        </SimpleButton>
      </S.DropdownFooter>
    </S.DropDownContainer>);
}
export default DropDown;
