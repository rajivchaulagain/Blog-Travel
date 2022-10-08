import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function CustomCard({item}) {
    return (
        <Link to={`/blog/${item._id}`}>
        <Card>
            <Card.Img variant="top" src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/11/2016/11/1-1024x777.jpg" />
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