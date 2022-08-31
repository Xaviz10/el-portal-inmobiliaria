import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledFooter = styled.footer`
  ${tw`relative h-80 px-40 grid content-center`}
  grid-template-columns: 2fr repeat(3, 1fr);
`;

export const StyledArticleInfo = styled.article`
  ${tw`relative h-44 w-80 flex flex-col gap-x-3 items-start`}
`;

export const StyledLogo = styled.img`
  ${tw`relative h-11`}
`;

export const StyledPhraseInfo = styled.p`
  ${tw`relative font-normal text-base leading-7 text-primary`}
`;

export const StyledSocialList = styled.ul`
  ${tw`relative h-5 p-0 flex gap-x-8 list-none `}
`;

export const StyledSocialIcon = styled.img`
  ${tw`relative h-5`}
`;

export const StyledFooterSection = styled.section`
  ${tw`relative`}
`;

export const StyledSectionList = styled.ul`
  ${tw`relative p-0 flex flex-col gap-y-3 list-none `}
`;

export const StyledSectionTitle = styled.h3`
  ${tw`relative font-bold text-xl leading-8 text-primary`}
`;

export const StyledListItem = styled.a`
  ${tw`relative no-underline font-normal text-sm leading-7 text-primary hover:text-secondary`}
`;
