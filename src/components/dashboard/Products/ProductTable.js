import { useState } from 'react';
import { createStyles, Table, Checkbox, ScrollArea, Group, Avatar, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import moment from 'moment';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { blogServices } from '../../../services/blogServices';
import { toast } from 'react-toastify';

const useStyles = createStyles((theme) => ({
    rowSelected: {
        backgroundColor:
            theme.colorScheme === 'dark'
                ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
                : theme.colors[theme.primaryColor][0],
    },
}));

function ProductTable({ data }) {
    console.log({ data });
    const queryClient = useQueryClient();
    const mutation = useMutation(blogServices.deleteBlog, {
        onSuccess: () => {
            queryClient.invalidateQueries(['blogs'])
        }
    });
    const { classes, cx } = useStyles();
    const [selection, setSelection] = useState(['1']);
    const toggleRow = (id) =>
        setSelection((current) =>
            current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
        );
    const toggleAll = () =>
        setSelection((current) => (current.length === data.length ? [] : data.map((item) => item.id)));

    const rows = data.map((item) => {
        const selected = selection.includes(item.id);
        return (
            <tr key={item._id} className={cx({ [classes.rowSelected]: selected })}>
                <td>
                    <Checkbox
                        checked={selection.includes(item._id)}
                        onChange={() => toggleRow(item._id)}
                        transitionDuration={0}
                    />
                </td>
                <td>
                    <Group spacing="sm">
                        <Avatar size={90} src={`http://localhost:8000/${item.coverImage}`} />
                        <Text size="sm" weight={500}>
                            {item.title}
                        </Text>
                    </Group>
                </td>
                <td>{item.description.slice(0, 90)}</td>
                <td>
                    {/* <Link to="/dashboard/blog/:id">View</Link> */}
                    <Link to={`/dashboard/blog/edit/${item._id}`} className='mx-3'>Edit</Link>
                    {/* <Button onClick={}>Delete</Button> */}
                </td>
            </tr>
        );
    });

    const handleDelete = (id) => {
        mutation.mutate(id, {
            onSuccess: () => {
                toast.success(`Successfully deleted`)
            }
        })
        console.log(id);
    }

    return (
        <ScrollArea>
            <Card>
                {
                    data?.length > 0 ?
                        data?.map((post) => (
                            <div className=''>
                                <Card.Body className='pb-0'>
                                    <div className='d-md-flex w-100 justify-content-between'>
                                        <div>
                                            <Link to={`/blog/${post._id}`}>
                                                <h4 className='text-primary fw-bold'>{post.title}</h4>
                                            </Link>
                                            <p className='small text-secondary'>Published : {moment(post.createdAt).format('YYYY-MM-DD')}</p>
                                        </div>
                                        <div>
                                            <Link to={`/dashboard/blog/edit/${post._id}`}>Edit</Link>
                                            <a className="ps-3" onClick={() => handleDelete(post._id)}>Delete</a>
                                        </div>

                                    </div>
                                </Card.Body>
                                <hr />
                            </div>
                        ))
                        :
                        <h6 className='text-center py-3'>No posts yet</h6>
                }
            </Card>
        </ScrollArea>
    );
}

export default ProductTable