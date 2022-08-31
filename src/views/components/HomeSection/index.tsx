import { forwardRef } from 'react';
import {
  StyledHomeSection,
  StyledArticleInfo,
  StyledSectionTitle,
  StyledPhraseInfo,
  StyledHomeImage,
} from './HomeSection.styles';
import facebookIcon from '../../../assets/icons/facebookIcon.svg';
import instagramIcon from '../../../assets/icons/instagramIcon.svg';
import whatsappIcon from '../../../assets/icons/whatsappIcon.svg';
import elPortalLogoBlack from '../../../assets/images/elPortalLogoBlack.svg';

const HomeSection = forwardRef<HTMLElement>((props, ref) => (
  <StyledHomeSection id={'home'} ref={ref} {...props}>
    <StyledArticleInfo>
      <StyledSectionTitle>
        Find your custom matched commercial real estate space.
      </StyledSectionTitle>

      <StyledPhraseInfo>
        In oculis quidem exercitus quid ex ea consequatur? autem vel eum fugiat,
        quo pertineant ero tibique
      </StyledPhraseInfo>
    </StyledArticleInfo>
    <StyledHomeImage />
  </StyledHomeSection>
));

export default HomeSection;
