import { useContext } from 'react';
import * as S from '../style';
import styled from 'styled-components';
import { StateContext } from '../../../../context/useGlobalState';
import { AiOutlineClose, AiOutlineDownload, AiOutlineLeft } from 'react-icons/ai';
import Link from 'next/link';
import { SimpleButton } from '../../../ui/Button';

export function ModsMode() {

  const { setDropdownState, setDropdownActive } = useContext(StateContext);

  const DropdownHeader = styled(S.DropdownHeader)`
    height:70px;

    button: last-child {
      background-color: inherit;
      border-radius: 50%;
      border: 2px solid transparent;
      position:absolute;
      top:10px;
      right:10px;

      width:40px;
      height:40px;
      
      display:grid;
      place-items: center;
      
      svg {
        width: 20px;
        height: 20px;
        fill: #333;
      }
      :hover {
        background-color:rgba(0,0,0,.2);
      }
    }
   
`;

  return (
    <S.DropDownContainer>
      <DropdownHeader>
        <S.BackToMain onClick={() => setDropdownActive('main')}>
          <AiOutlineLeft />
          <p>Voltar</p>
        </S.BackToMain>
        <button onClick={() => setDropdownState(false)}>
          <AiOutlineClose />
        </button>
      </DropdownHeader>
      <S.DropdownUl>
        <S.SubTitle>Academia de moderadores</S.SubTitle>
        <Link href="/" passHref>
          <S.ItemLink>
            <span>Visão geral</span>
          </S.ItemLink>
        </Link>
        <S.SubTitle>Basics</S.SubTitle>

        <Link href="/" passHref>
          <S.ItemLink>
            <span>100: An Intro to the DMA</span>
          </S.ItemLink>
        </Link>

        <Link href="/" passHref>
          <S.ItemLink>
            <span>103: Basic Channel Setup</span>
          </S.ItemLink>
        </Link>

        <Link href="/" passHref>
          <S.ItemLink>
            <span>104: How to report Content to Discord</span>
          </S.ItemLink>
        </Link>

        <Link href="/" passHref>
          <S.ItemLink>
            <span>110: Moderator Etiquette</span>
          </S.ItemLink>
        </Link>

        <Link href="/" passHref>
          <S.ItemLink>
            <span>111: Your responsibilities as a Moderator</span>
          </S.ItemLink>
        </Link>

        <S.SubTitle>Setup and Function</S.SubTitle>
        <Link href="/" passHref>
          <S.ItemLink>
            <span>201: Permissions on Discord</span>
          </S.ItemLink>
        </Link>

        <Link href="/" passHref>
          <S.ItemLink>
            <span>202: Handling Difficult Scenarios</span>
          </S.ItemLink>
        </Link>

        <Link href="/" passHref>
          <S.ItemLink>
            <span>203: Developing Server Rules</span>
          </S.ItemLink>
        </Link>

        <Link href="/" passHref>
          <S.ItemLink>
            <span>204: Ban Appeals</span>
          </S.ItemLink>
        </Link>

        <Link href="/" passHref>
          <S.ItemLink>
            <span>205: Utilizing Role Colors</span>
          </S.ItemLink>
        </Link>

        <Link href="/" passHref>
          <S.ItemLink>
            <span>206: Best Practices for Reporting Tools</span>
          </S.ItemLink>
        </Link>

        <Link href="/" passHref>
          <S.ItemLink>
            <span>210: Moderator Recruitment</span>
          </S.ItemLink>
        </Link>

        <S.SubTitle>Advanced Community Management</S.SubTitle>

        <Link href="/" passHref>
          <S.ItemLink>
            <span>301: Implementing Verification Gates</span>
          </S.ItemLink>
        </Link>

        <Link href="/" passHref>
          <S.ItemLink>
            <span>302: Developing Moderator Guidelines</span>
          </S.ItemLink>
        </Link>

        <Link href="/" passHref>
          <S.ItemLink>
            <span>303: Facilitating Positive Environments</span>
          </S.ItemLink>
        </Link>

        <Link href="/" passHref>
          <S.ItemLink>
            <span>310: Managing Moderation Teams</span>
          </S.ItemLink>
        </Link>

        <Link href="/" passHref>
          <S.ItemLink>
            <span>311: Understading and Avoiding Moderator Burnout</span>
          </S.ItemLink>
        </Link>

        <Link href="/" passHref>
          <S.ItemLink>
            <span>312: Internal Conflict Resolution</span>
          </S.ItemLink>
        </Link>

        <Link href="/" passHref>
          <S.ItemLink>
            <span>313: How to moderate voice channels</span>
          </S.ItemLink>
        </Link>

        <Link href="/" passHref>
          <S.ItemLink>
            <span>314: Training and Onboarding new Moderators</span>
          </S.ItemLink>
        </Link>

        <Link href="/" passHref>
          <S.ItemLink>
            <span>321: Auto moderation in Discord</span>
          </S.ItemLink>
        </Link>

        <Link href="/" passHref>
          <S.ItemLink>
            <span>322: Usage and benefits of webhooks and Embeds</span>
          </S.ItemLink>
        </Link>

        <Link href="/" passHref>
          <S.ItemLink>
            <span>323: Usage of XP Systems</span>
          </S.ItemLink>
        </Link>

        <Link href="/" passHref>
          <S.ItemLink>
            <span>331: Community Engagement</span>
          </S.ItemLink>
        </Link>

        <Link href="/" passHref>
          <S.ItemLink>
            <span>332: Fostering healthy Communities</span>
          </S.ItemLink>
        </Link>

        <Link href="/" passHref>
          <S.ItemLink>
            <span>333: Plaining community Events</span>
          </S.ItemLink>
        </Link>

        <Link href="/" passHref>
          <S.ItemLink>
            <span>334: Community partbeships</span>
          </S.ItemLink>
        </Link>

        <S.SubTitle>Moderation Seminars</S.SubTitle>

        <Link href="/" passHref>
          <S.ItemLink>
            <span>401: Transparency in Moderation</span>
          </S.ItemLink>
        </Link>

        <Link href="/" passHref>
          <S.ItemLink>
            <span>403: Sensitive Topics</span>
          </S.ItemLink>
        </Link>

        <Link href="/" passHref>
          <S.ItemLink>
            <span>405: Practicalities of Moderating Adults Channels</span>
          </S.ItemLink>
        </Link>

        <Link href="/" passHref>
          <S.ItemLink>
            <span>407: Managing Exponential Membership Growth</span>
          </S.ItemLink>
        </Link>

        <Link href="/" passHref>
          <S.ItemLink>
            <span>432: Internationalization of a Community</span>
          </S.ItemLink>
        </Link>

        <Link href="/" passHref>
          <S.ItemLink>
            <span>441: Community governance Structures</span>
          </S.ItemLink>
        </Link>

        <Link href="/" passHref>
          <S.ItemLink>
            <span>442: Using insights to improve community Growth and Engagement</span>
          </S.ItemLink>
        </Link>

        <Link href="/" passHref>
          <S.ItemLink>
            <span>443: Ban Evasion and Advanced Harassment</span>
          </S.ItemLink>
        </Link>

        <Link href="/" passHref>
          <S.ItemLink>
            <span>451: Reddit x Discord</span>
          </S.ItemLink>
        </Link>

        <Link href="/" passHref>
          <S.ItemLink>
            <span>452: Twitch x Discord</span>
          </S.ItemLink>
        </Link>

        <Link href="/" passHref>
          <S.ItemLink>
            <span>453: Patreon x Discord</span>
          </S.ItemLink>
        </Link>

        <Link href="/" passHref>
          <S.ItemLink>
            <span>454: Bringing Other Communities to Discord</span>
          </S.ItemLink>
        </Link>

        <Link href="/" passHref>
          <S.ItemLink>
            <span>455: Schools x Discord</span>
          </S.ItemLink>
        </Link>

        <S.SubTitle>Graduate Courses</S.SubTitle>
        <Link href="/" passHref>
          <S.ItemLink>
            <span>531: Parasocial relationships</span>
          </S.ItemLink>
        </Link>

        <S.SubTitle>Author Credits</S.SubTitle>
        <Link href="/" passHref>
          <S.ItemLink>
            <span>Author Credits</span>
          </S.ItemLink>
        </Link>

      </S.DropdownUl>
      <S.DropdownFooter>
        <SimpleButton bg="var(--brand)" textColor="#fff">
          <AiOutlineDownload />
          <p>Baixar para windows</p>
        </SimpleButton>
      </S.DropdownFooter>
    </S.DropDownContainer >
  )
}
