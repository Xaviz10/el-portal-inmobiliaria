import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledHomeSection = styled.section`
  ${tw`relative h-[720px] pt-28 gap-x-4 px-40 grid content-center items-center`}
  grid-template-columns: 1fr 1fr;
`;

export const StyledArticleInfo = styled.article`
  ${tw`relative flex flex-col gap-x-3 items-start`}
`;

export const StyledSectionTitle = styled.h3`
  ${tw`relative m-0 font-bold text-5xl leading-[5rem] text-primary`}
`;

export const StyledPhraseInfo = styled.p`
  ${tw`relative font-normal text-base leading-7 text-primary`}
`;

export const StyledHomeImage = styled.img`
  ${tw`relative h-[640px] w-full bg-blue-500 rounded-t-[2.5rem] rounded-r-[2.5rem]`}
`;
