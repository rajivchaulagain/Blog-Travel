import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from '../../assets/images/Blog_title_image.jpg'

function CustomCard() {
    return (
        <Card>
            <Card.Img variant="top" src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/11/2016/11/1-1024x777.jpg" />
            <Card.Body className="px-5">
                <Card.Title>
                    Trip that you'll never ever forget
                </Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default CustomCard;