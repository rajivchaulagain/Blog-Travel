// import React from 'react'
// import { Container, Row, Col } from 'react-bootstrap'

// import LatestPosts from '../latestPosts/LatestPosts'
// import Tags from '../tags/Tags'

// const Footer = () => {
//     return (
//         <>
//             <section className='footer py-5'>
//                 <Container>
//                     <Row>
//                         <Col md={4}>
//                             <h1>Blog</h1>
//                             <p className='pt-4'>

//                                 Pellentesque placerat tincidunt urna,
//                                 vitae feugiat magna vestibulum non. Mauris ut sagittis est.
//                                 Pellentesque a felis est. Duis in risus metus. Cras felis ante, sodales eget pretium eu, hendrerit at metus. Maecenas aliquam dictum sapien id ornare.
//                             </p>
//                         </Col>
//                         <Col md={4}>
//                             <Container>
//                                 <LatestPosts />
//                             </Container>
//                         </Col>
//                         <Col md={3}>
//                             <h4 className='fw-bold'>Tags</h4>
//                             <Tags />
//                         </Col>
//                     </Row>
//                 </Container>
//             </section>
//             <div className='bottom-footer py-4'>
//                 <h4 className='text-center text-white'>
//                     A blog theme by Rajiv
//                 </h4>
//             </div>
//         </>
//     )
// }

// export default Footer

import { createStyles, Text, Container, ActionIcon, Group } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons';
import moment from 'moment';
import Logo from '../Logo/Logo';

const useStyles = createStyles((theme) => ({
    footer: {
        marginTop: 120,
        paddingTop: theme.spacing.xl * 2,
        paddingBottom: theme.spacing.xl * 2,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
            }`,
    },

    logo: {
        maxWidth: 200,

        [theme.fn.smallerThan('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
    },

    description: {
        marginTop: 5,

        [theme.fn.smallerThan('sm')]: {
            marginTop: theme.spacing.xs,
            textAlign: 'center',
        },
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',

        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },
    },

    groups: {
        display: 'flex',
        flexWrap: 'wrap',

        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    wrapper: {
        width: 160,
    },

    link: {
        display: 'block',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
        fontSize: theme.fontSizes.sm,
        paddingTop: 3,
        paddingBottom: 3,

        '&:hover': {
            textDecoration: 'underline',
        },
    },

    title: {
        fontSize: theme.fontSizes.lg,
        fontWeight: 700,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        marginBottom: theme.spacing.xs / 2,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },

    afterFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: theme.spacing.xl,
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
        borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
            }`,

        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
        },
    },

    social: {
        [theme.fn.smallerThan('sm')]: {
            marginTop: theme.spacing.xs,
        },
    },
}));

// interface FooterLinksProps {
//   data: {
//     title: string;
//     links: { label: string; link: string }[];
//   }[];
// }

function Footer() {
    const data = [
        {
            "title": "About",
            "links": [
                { "label": "Features", "link": "#" },
                { "label": "Pricing", "link": "#" },
                { "label": "Support", "link": "#" },
                { "label": "Forums", "link": "#" }
            ]
        },
        {
            "title": "Project",
            "links": [
                { "label": "Contribute", "link": "#" },
                { "label": "Media assets", "link": "#" },
                { "label": "Changelog", "link": "#" },
                { "label": "Releases", "link": "#" }
            ]
        },
        {
            "title": "Community",
            "links": [
                { "label": "Join Discord", "link": "#" },
                { "label": "Follow on Twitter", "link": "#" },
                { "label": "Email newsletter", "link": "#" },
                { "label": "GitHub discussions", "link": "#" }
            ]
        }
    ]

    const { classes } = useStyles();

    const groups = data?.map((group) => {
        const links = group.links.map((link, index) => (
            <Text
                key={index}
                className={classes.link}
                component="a"
                href={link.link}
                onClick={(event) => event.preventDefault()}
            >
                {link.label}
            </Text>
        ));

        return (
            <div className={classes.wrapper} key={group.title}>
                <Text className={classes.title}>{group.title}</Text>
                {links}
            </div>
        );
    });

    return (
        <footer className={classes.footer}>
            <Container className={classes.inner}>
                <div className={classes.logo}>
                    <Logo />
                    <Text size="xs" color="dimmed" className={classes.description}>
                        Learn and Build fully functional codes for  web applications faster than ever.
                    </Text>
                </div>
                <div className={classes.groups}>{groups}</div>
            </Container>
            <Container className={classes.afterFooter}>
                <Text color="dimmed" size="sm">
                    © {moment(new Date()).format('YYYY')} copyright connector
                </Text>

                <Group spacing={0} className={classes.social} position="right" noWrap>
                    <ActionIcon size="lg">
                        <IconBrandTwitter size={18} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg">
                        <IconBrandYoutube size={18} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg">
                        <IconBrandInstagram size={18} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Container>
        </footer>
    );
}

export default Footer