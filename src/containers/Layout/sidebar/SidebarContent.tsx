import { colorBorder, colorBackground, colorHover } from '@/styles/palette';
import { left } from '@/styles/directions';
import styled from 'styled-components';
import SidebarLink, { SidebarLinkTitle, SidebarNavLink } from './SidebarLink';
import SidebarCategory from './SidebarCategory';
import { THEME } from '@/shared/constants/storage';
import { useUserContext } from '@/hooks/userHooks';

type SidebarContentProps = {
  onClick: () => void;
  $collapse?: boolean;
};

const SidebarContent = ({ onClick, $collapse }: SidebarContentProps) => {
  const { store, setStore } = useUserContext();

  const changeTheme = (color: string) =>{
    setStore({
      ...store,
      themeColor: color
    });
    localStorage.setItem(THEME, color);
  }

  return (
  <SidebarContentWrap $collapse={$collapse}>
    <SidebarBlock $collapse={$collapse}>
      <SidebarLink
        title="Dashboard"
        icon="home"
        route="/dashboard"
        onClick={onClick}
      />
    </SidebarBlock>
    <SidebarBlock $collapse={$collapse}>
    <SidebarCategory title="Theme" icon="diamond" $collapse={$collapse}>
      {/* @ts-ignore - Ignoring because of complex union types that are not correctly inferred */}
        <SidebarNavLink as="button" type="button" onClick={()=>changeTheme("light")}>
          <SidebarLinkTitle>Light Theme</SidebarLinkTitle>
        </SidebarNavLink>
      {/* @ts-ignore - Ignoring because of complex union types that are not correctly inferred */}
        <SidebarNavLink as="button" type="button" onClick={()=>changeTheme("dark")}>
          <SidebarLinkTitle>Dark Theme</SidebarLinkTitle>
        </SidebarNavLink>
      </SidebarCategory>
      <SidebarCategory title="Account" icon="user" $collapse={$collapse}>
        <SidebarLink
          title="Profile"
          route="/account/profile"
          onClick={onClick}
        />
        <SidebarLink
          title="Exchange Management"
          route="/exchange"
          onClick={onClick}
        />
      </SidebarCategory>
    </SidebarBlock>
  </SidebarContentWrap>
)};

export default SidebarContent;

// region STYLES

const SidebarContentWrap = styled.div<{ $collapse?: boolean }>`
  height: 100%;
  overflow: auto;
  padding-top: 0;

  & > div:last-child {
    width: 4px !important;

    div {
      transition: height 0.3s;
      opacity: 0.52;
    }
  }

  @media screen and (min-width: 576px) {
    padding-top: 15px;

    ${(props) =>
      props.$collapse &&
      `
      width: 55px;
      overflow: visible !important;
      transition: width 0.3s;
    `}
  }
`;

const SidebarBlock = styled.ul<{ $collapse?: boolean }>`
  padding: 15px 0;
  border-bottom: 1px solid ${colorBorder};
  list-style-type: none;

  &:last-child {
    border: none;
  }

  @media screen and (min-width: 576px) {
    ${(props) =>
      props.$collapse &&
      `
      & > li > a,
      & > li > button {
        overflow: hidden;
        width: 55px;
        background: ${colorBackground(props)};
        
        span:last-of-type {
          opacity: 0;
          transition: 0.3s;
        }
  
        ${SidebarLinkTitle} {
          position: absolute;
          width: 160px;
          ${left(props)}: 70px;
        }
  
        &:hover {
          background: ${colorHover(props)};
        }
      }
      
      & > li:hover > a,
      & > li:hover > button {
        width: 275px;
        
        span {
          opacity: 1;
        }
      }
    `}
  }
`;

// endregion
