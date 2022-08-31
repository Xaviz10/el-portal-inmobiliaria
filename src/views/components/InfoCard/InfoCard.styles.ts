import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledInfoCard = styled.article`
  ${tw`relative max-w-[540px] p-8 rounded-3xl flex flex-col gap-y-8 items-center text-center`}
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4));
  min-height: 360px;
  ${({ color }) => {
    switch (color) {
      case 'secondary':
        return tw`bg-secondary`;
      default:
        return tw`bg-white`;
    }
  }}
`;

export const StyledInfoCardImage = styled.img`
  ${tw`relative h-[70px]`}
`;

export const StyledInfoCardTitle = styled.h3`
  ${tw`relative m-0 max-w-xs font-bold text-5xl leading-[3.5rem] text-primary`}
  ${({ color }) => {
    switch (color) {
      case 'secondary':
        return tw`text-white`;
      default:
        return tw`text-primary`;
    }
  }}
`;

export const StyledInfoCardDescription = styled.p`
  ${tw`relative m-0 max-w-xs font-normal text-base leading-7 text-primary`}
  ${({ color }) => {
    switch (color) {
      case 'secondary':
        return tw`text-white`;
      default:
        return tw`text-primary`;
    }
  }}
`;
