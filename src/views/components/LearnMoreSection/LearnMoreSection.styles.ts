import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledLearnMoreSection = styled.section`
  ${tw`relative h-[34rem] mx-auto pt-28 px-40 flex gap-x-12 justify-center items-center`}
  max-width: calc(1440px - 10rem);
`;

export const StyledArticleInfo = styled.article`
  ${tw`relative w-[24rem] flex flex-col gap-x-3 items-start`}
`;

export const StyledSectionTitle = styled.h2`
  ${tw`relative m-0 font-bold text-4xl leading-[3rem] text-primary`}
`;

export const StyledPhraseInfo = styled.p`
  ${tw`relative font-normal text-base leading-7 text-primary`}
`;

export const StyledHomeImage = styled.img`
  ${tw`relative h-[30rem] w-[17rem] bg-blue-500 rounded-t-[2.5rem] rounded-l-[2.5rem]`}
`;
