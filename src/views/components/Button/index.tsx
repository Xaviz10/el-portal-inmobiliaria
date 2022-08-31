import tw from 'twin.macro';
import styled from '@emotion/styled';

interface ButtonProps {
  color?: 'primary' | 'secondary' | 'white';
  variant?: 'contained' | 'outlined';
}

const Button = styled.button<ButtonProps>`
  ${tw`px-5 py-3 cursor-pointer rounded-full border-0`}
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
  &:hover {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  ${({ color }) => {
    switch (color) {
      case 'secondary':
        return tw`
                bg-secondary
                font-bold
                text-base
                leading-6
                text-white
                `;
      case 'white':
        return tw`
                bg-white
                font-bold
                text-base
                leading-6
                text-secondary
                `;
      default:
        return tw`bg-white
                font-bold
                text-base
                leading-6
                text-primary`;
    }
  }}
  ${({ variant }) =>
    variant === 'outlined' && tw`bg-white border-2 border-primary`}
  ${({ variant, color }) =>
    variant === 'outlined' &&
    color === 'secondary' &&
    tw`bg-white border-2 border-secondary`}
`;

export default Button;
