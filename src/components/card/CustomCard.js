import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function CustomCard({item}) {
    return (
        <Link to={`/blog/${item._id}`}>
        <Card>
            <Card.Img variant="top" src={`http://localhost:8000/${item.coverImage}`} style={{height : '300px' , objectFit : 'cover'}} />
            <Card.Body className="px-5">
                <Card.Title>
                    {item.title}
                </Card.Title>
                <Card.Text>
                    {item.description.slice(0 , 200)}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        </Link>
    );
}

export default CustomCard;