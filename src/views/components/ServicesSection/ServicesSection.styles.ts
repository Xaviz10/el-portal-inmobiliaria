import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledServicesSection = styled.section`
  ${tw`relative  mx-auto pt-28 px-40 grid gap-x-12 justify-center content-center items-center text-center`}
  grid-template-columns: repeat(2,540px);
  grid-template-rows: 62px auto auto;
`;

export const StyledSectionTitle = styled.h1`
  ${tw`relative m-0 font-bold text-5xl leading-[5rem] text-primary col-span-3`}
`;

export const StyledSectionDescription = styled.p`
  ${tw`relative mt-2 mb-16 font-normal text-base leading-7 text-primary col-span-3`}
`;
