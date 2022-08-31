import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledHomeSection = styled.section`
  ${tw`relative h-[720px] mx-auto pt-28 px-40 grid gap-x-12 content-center items-center`}
  grid-template-columns: 1fr 1fr;
  max-width: calc(1440px - 10rem);
`;

export const StyledArticleInfo = styled.article`
  ${tw`relative flex flex-col gap-x-3 items-start`}
`;

export const StyledSectionTitle = styled.h1`
  ${tw`relative m-0 font-bold text-5xl leading-[5rem] text-primary`}
`;

export const StyledPhraseInfo = styled.p`
  ${tw`relative font-normal text-base leading-7 text-primary`}
`;

export const StyledHomeImage = styled.img`
  ${tw`relative h-[640px] w-full  bg-blue-500 rounded-t-[2.5rem] rounded-r-[2.5rem]`}
`;
