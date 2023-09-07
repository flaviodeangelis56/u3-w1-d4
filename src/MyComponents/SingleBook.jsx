import { Component } from "react";
import { Card, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  selectABook = () => {
    if (this.state.selected === false) {
      this.setState({ selected: true });
      const card = document.getElementById(this.props.HorrorBook.asin);
      card.classList.add("borderRed");
    } else {
      this.setState({ selected: false });
      const card = document.getElementById(this.props.HorrorBook.asin);
      card.classList.remove("borderRed");
    }
  };

  render() {
    return (
      <Col xs={3} className="mb-5" key={`book-${this.props.HorrorBook.title}`}>
        <Card id={this.props.HorrorBook.asin} style={{ minHeight: "550px" }}>
          <Card.Img
            variant="top"
            src={this.props.HorrorBook.img}
            style={{ width: "objectfit", height: "400px" }}
            onClick={this.selectABook}
          />
          <Card.Body>
            <Card.Title>{this.props.HorrorBook.title}</Card.Title>
            {this.state.selected && <CommentArea asin={this.props.HorrorBook.asin} />}
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
