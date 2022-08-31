import { forwardRef } from 'react';
import {
  StyledHeader,
  StyledLogo,
  StyledNavbar,
  StyledList,
  StyledListItem,
} from './Header.styles';
import elPortalLogoBlack from '../../../assets/images/elPortalLogoBlack.svg';

const Header = forwardRef<HTMLElement>((props, ref) => (
  <StyledHeader ref={ref} {...props}>
    <StyledLogo src={elPortalLogoBlack} />
    <StyledNavbar>
      <StyledList>
        <li>
          <StyledListItem href={'#home'}>Home</StyledListItem>
        </li>
        <li>
          <StyledListItem href={'#home'}>Nosotros</StyledListItem>
        </li>
        <li>
          <StyledListItem href={'#your-place'}>
            Encuentra tu lugar
          </StyledListItem>
        </li>
        <li>
          <StyledListItem href={'#contact-us'}>Contactanos</StyledListItem>
        </li>
      </StyledList>
    </StyledNavbar>
  </StyledHeader>
));

export default Header;
