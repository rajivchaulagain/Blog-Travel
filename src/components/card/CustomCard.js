// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { Link } from 'react-router-dom';

// function CustomCard({item}) {
//     return (
//         <Link to={`/blog/${item._id}`}>
//         <Card>
//             <Card.Img variant="top" src={`http://localhost:8000/${item.coverImage}`} style={{height : '300px' , objectFit : 'cover'}} />
//             <Card.Body className="px-5">
//                 <Card.Title>
//                     {item.title}
//                 </Card.Title>
//                 <Card.Text>
//                     {item.description.slice(0 , 200)}
//                 </Card.Text>
//                 <Button variant="primary">Go somewhere</Button>
//             </Card.Body>
//         </Card>
//         </Link>
//     );
// }

// export default CustomCard;


import { createStyles, Card, Image, ActionIcon, Group, Text, Badge } from '@mantine/core';
import { IconHeart, IconBookmark, IconShare } from '@tabler/icons';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  footer: {
    padding: `${theme.spacing.xs}px ${theme.spacing.lg}px`,
    marginTop: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
}));

function CustomCard({item}) {
  const { classes, theme } = useStyles();

  return (
    <Link to={`/blog/${item._id}`}>
    <Card withBorder p="lg" radius="md" className={classes.card}>
      <Card.Section mb="sm">
        <Image src={`http://localhost:8000/${item.coverImage}`} alt={item.title} height={300} />
      </Card.Section>

      <Badge>{item.category}</Badge>

      <Text weight={700} className={classes.title} mt="xs">
        {item?.title}
      </Text>

      <Group mt="lg">
        {/* <Avatar src={item?.author.image} radius="sm" /> */}
        <div>
          {/* <Text weight={500}>{item?.author.name}</Text> */}
          <Text size="xs" color="dimmed">
            {item?.description.slice(0 , 120)}
          </Text>
        </div>
      </Group>

      <Card.Section className={classes.footer}>
        <Group position="apart">
          <Text size="xs" color="dimmed">
            {item?.footer}
          </Text>
          <Group spacing={0}>
            <ActionIcon>
              <IconHeart size={18} color={theme.colors.red[6]} stroke={1.5} />
            </ActionIcon>
            <ActionIcon>
              <IconBookmark size={18} color={theme.colors.yellow[6]} stroke={1.5} />
            </ActionIcon>
            <ActionIcon>
              <IconShare size={16} color={theme.colors.blue[6]} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Group>
      </Card.Section>
    </Card>
    </Link>
  );
}

export default CustomCard