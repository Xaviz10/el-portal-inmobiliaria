import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledHeader = styled.header`
  ${tw`fixed bg-white h-28 top-0 px-40 flex items-center justify-between z-10`}
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  width: calc(100% - 20rem);
`;

export const StyledLogo = styled.img`
  ${tw`relative h-11`}
`;

export const StyledNavbar = styled.nav`
  ${tw`relative`}
`;

export const StyledList = styled.ul`
  ${tw`relative grid gap-x-10 list-none text-center`}
  grid-template-columns: 52px 72px 140px 92px;
`;

export const StyledListItem = styled.a`
  ${tw`relative no-underline text-center font-normal text-base leading-6 text-primary hover:font-bold hover:text-secondary`}
  &:hover {
    ${tw`font-bold text-secondary`}
  }
`;
