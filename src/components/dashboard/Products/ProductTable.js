import { ScrollArea } from '@mantine/core';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import moment from 'moment';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { blogServices } from '../../../services/blogServices';
import { toast } from 'react-toastify';

function ProductTable({ data }) {
    console.log({ data });
    const queryClient = useQueryClient();
    const mutation = useMutation(blogServices.deleteBlog, {
        onSuccess: () => {
            queryClient.invalidateQueries(['blogs'])
        }
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
                                            <button className="ps-3" onClick={() => handleDelete(post._id)}>Delete</button>
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