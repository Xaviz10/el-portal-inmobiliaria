import React, { forwardRef, MouseEventHandler } from 'react';
import {
  StyledInfoCard,
  StyledInfoCardImage,
  StyledInfoCardTitle,
  StyledInfoCardDescription,
} from './InfoCard.styles';
import Button from '../Button';

interface InfoCardProps {
  color: 'primary' | 'secondary';
  icon: any;
  title: string;
  description: string;
  buttonLabel: string;
  callToAction?: MouseEventHandler<HTMLButtonElement>;
}

const InfoCard = forwardRef<HTMLInputElement, InfoCardProps>((props, ref) => {
  const {
    color,
    icon,
    title,
    description,
    buttonLabel,
    callToAction,
    ...infoCardProps
  } = props;

  return (
    <StyledInfoCard ref={ref} color={color} {...infoCardProps}>
      <StyledInfoCardImage src={icon} />
      <StyledInfoCardTitle color={color}>{title}</StyledInfoCardTitle>
      <StyledInfoCardDescription color={color}>
        {description}
      </StyledInfoCardDescription>
      <Button
        onClick={callToAction}
        color={color === 'secondary' ? 'white' : color}
      >
        {buttonLabel}
      </Button>
    </StyledInfoCard>
  );
});

export default InfoCard;
