import { SimpleButton } from '../../ui/Button';
import DropdownHome from './Home';
import * as S from './style';
import { BsDownload } from 'react-icons/bs'
function DropDown() {
  return (
    <S.DropDownContainer>
      <DropdownHome />
      <span />
      <S.DropdownFooter>
        <SimpleButton bg={"var(--brand)"}>
          <BsDownload />
          <p>Baixar para windows</p>
        </SimpleButton>
      </S.DropdownFooter>
    </S.DropDownContainer>);
}
export default DropDown;
