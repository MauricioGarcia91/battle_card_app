import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const links = [
  {
    href: '/',
    label: 'home'
  },
  {
    href: '/cards',
    label: 'Cards'
  }
];

export default function Navbar() {
  return (
    <AppBar position='static'>
      <Toolbar>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}>
            <Button color='inherit'>{link.label}</Button>
          </Link>
        ))}
      </Toolbar>
    </AppBar>
  );
}
