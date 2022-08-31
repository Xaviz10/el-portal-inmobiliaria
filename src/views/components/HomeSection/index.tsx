import { forwardRef } from 'react';
import {
  StyledHomeSection,
  StyledArticleInfo,
  StyledSectionTitle,
  StyledPhraseInfo,
  StyledHomeImage,
} from './HomeSection.styles';
import Button from '../Button';

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
      <Button color="secondary">Contactanos</Button>
    </StyledArticleInfo>
    <StyledHomeImage />
  </StyledHomeSection>
));

export default HomeSection;
