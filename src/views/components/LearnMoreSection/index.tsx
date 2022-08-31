import { forwardRef } from 'react';
import {
  StyledLearnMoreSection,
  StyledArticleInfo,
  StyledSectionTitle,
  StyledPhraseInfo,
  StyledHomeImage,
} from './LearnMoreSection.styles';
import Button from '../Button';

const LearnMoreSection = forwardRef<HTMLElement>((props, ref) => (
  <StyledLearnMoreSection id={'home'} ref={ref} {...props}>
    <StyledHomeImage />
    <StyledHomeImage />
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
  </StyledLearnMoreSection>
));

export default LearnMoreSection;
