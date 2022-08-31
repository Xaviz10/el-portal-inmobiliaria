import { forwardRef } from 'react';
import {
  StyledFooter,
  StyledArticleInfo,
  StyledLogo,
  StyledPhraseInfo,
  StyledSocialList,
  StyledSocialIcon,
  StyledFooterSection,
  StyledSectionTitle,
  StyledSectionList,
  StyledListItem,
} from './Footer.styles';
import facebookIcon from '../../../assets/icons/facebookIcon.svg';
import instagramIcon from '../../../assets/icons/instagramIcon.svg';
import whatsappIcon from '../../../assets/icons/whatsappIcon.svg';
import elPortalLogoBlack from '../../../assets/images/elPortalLogoBlack.svg';

const Footer = forwardRef<HTMLElement>((props, ref) => (
  <StyledFooter ref={ref} {...props}>
    <StyledArticleInfo>
      <StyledLogo src={elPortalLogoBlack} />
      <StyledPhraseInfo>
        Quae fuerit causa, nollem me ab illo inventore veritatis et.
      </StyledPhraseInfo>
      <StyledSocialList>
        <li>
          <a href={'https://www.facebook.com/portalagencia'} target={'_blank'}>
            <StyledSocialIcon src={facebookIcon} />
          </a>
        </li>
        <li>
          <a
            href={'https://www.instagram.com/elportal_inmobiliaria/'}
            target={'_blank'}
          >
            <StyledSocialIcon src={instagramIcon} />
          </a>
        </li>
        <li>
          <a href={'https://wa.me/+573005621199'} target={'_blank'}>
            <StyledSocialIcon src={whatsappIcon} />
          </a>
        </li>
      </StyledSocialList>
    </StyledArticleInfo>

    <StyledFooterSection>
      <StyledSectionTitle>Privacidad</StyledSectionTitle>
      <StyledSectionList>
        <li>
          <StyledListItem href={'/home'}>Home</StyledListItem>
        </li>
        <li>
          <StyledListItem href={'/home'}>Nosotros</StyledListItem>
        </li>
        <li>
          <StyledListItem href={'/your-place'}>
            Encuentra tu lugar
          </StyledListItem>
        </li>
        <li>
          <StyledListItem href={'/contact-us'}>Contactanos</StyledListItem>
        </li>
      </StyledSectionList>
    </StyledFooterSection>

    <StyledFooterSection>
      <StyledSectionTitle>Legales</StyledSectionTitle>
      <StyledSectionList>
        <li>
          <StyledListItem href={'/home'}>Home</StyledListItem>
        </li>
        <li>
          <StyledListItem href={'/home'}>Nosotros</StyledListItem>
        </li>
        <li>
          <StyledListItem href={'/your-place'}>
            Encuentra tu lugar
          </StyledListItem>
        </li>
        <li>
          <StyledListItem href={'/contact-us'}>Contactanos</StyledListItem>
        </li>
      </StyledSectionList>
    </StyledFooterSection>

    <StyledFooterSection>
      <StyledSectionTitle>Contactanos</StyledSectionTitle>
      <StyledSectionList>
        <li>
          <StyledListItem href={'/home'}>Home</StyledListItem>
        </li>
        <li>
          <StyledListItem href={'/home'}>Nosotros</StyledListItem>
        </li>
        <li>
          <StyledListItem href={'/your-place'}>
            Encuentra tu lugar
          </StyledListItem>
        </li>
        <li>
          <StyledListItem href={'/contact-us'}>Contactanos</StyledListItem>
        </li>
      </StyledSectionList>
    </StyledFooterSection>
  </StyledFooter>
));

export default Footer;
