import { Link, LinkInversion, AuthItem, AuthBox } from './AuthNav.styled';

export const AuthNav = ({ closeMenu = null }) => {
  return (
    <AuthBox>
      <AuthItem>
        <Link to="/login" onClick={closeMenu}>
          Login
        </Link>
      </AuthItem>
      <AuthItem>
        <LinkInversion to="/register" onClick={closeMenu}>
          Registrations
        </LinkInversion>
      </AuthItem>
    </AuthBox>
  );
};
