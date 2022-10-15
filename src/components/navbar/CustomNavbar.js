import { createStyles, Header, Autocomplete, Group, Burger, Button, Menu } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons';
import { MantineLogo } from '@mantine/ds';
import useAuth from '../../hooks/useAuth'
import { Link } from 'react-router-dom';
import { UserButton } from '../../utils/UserButton';
import logo from '../../assets/images/logo.png'
import Logo from '../Logo/Logo';

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
  },

  inner: {
    height: 56,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  search: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },
}));

function CustomNavbar() {
  const links = [
    {
      label: "Home",
      link: '/'
    },
    {
      label: "Contact us",
      link: '/contact-us'
    }
  ]
  const { token } = useAuth()
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  const items = links?.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={56} className={classes.header}>
      <div className="container">
        <div className={classes.inner}>
          <Group>
            <Burger opened={opened} onClick={toggle} size="sm" />
            <Link to="/">
              <img src={logo} />
            </Link>
          </Group>
          <Group>
            <Group ml={50} spacing={5} className={classes.links}>
              {items}
            </Group>
            {
              token ? (
                <Group className={classes.links}>
                  <Link
                    to="/dashboard"
                    className={classes.link}
                  >
                    Dashboard
                  </Link>
                  <Button>
                    <Link to="/user/sign-out" className='text-light'>
                      Log out
                    </Link>
                  </Button>
                </Group>
              ) : <Button>
                <Link to="/user/login" className='text-light'>
                  Login
                </Link>
              </Button>
            }
            <Autocomplete
              className={classes.search}
              placeholder="Search"
              icon={<IconSearch size={16} stroke={1.5} />}
              data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
            />
          </Group>
        </div>
      </div>
    </Header>
  );
}

export default CustomNavbar