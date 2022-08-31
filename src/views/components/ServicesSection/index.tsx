import { forwardRef } from 'react';
import {
  StyledServicesSection,
  StyledSectionTitle,
  StyledSectionDescription,
} from './ServicesSection.styles';
import InfoCard from '../InfoCard';
import buyersIcon from '../../../assets/icons/buyersIcon.svg';
import saleIcon from '../../../assets/icons/saleIcon.svg';

const ServicesSection = forwardRef<HTMLElement>((props, ref) => (
  <StyledServicesSection id={'home'} ref={ref} {...props}>
    <StyledSectionTitle>Who do we serve?</StyledSectionTitle>
    <StyledSectionDescription>
      Every buyer and seller of tech and services in the world.
    </StyledSectionDescription>
    <InfoCard
      icon={buyersIcon}
      color="secondary"
      title="Buyers"
      description="Torquem detraxit hosti et quidem se texit, ne ad eam."
      buttonLabel="Get Started"
    />
    <InfoCard
      icon={saleIcon}
      color="primary"
      title="Buyers"
      description="Torquem detraxit hosti et quidem se texit, ne ad eam."
      buttonLabel="Get Started"
    />
  </StyledServicesSection>
));

export default ServicesSection;
