import { Component } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

class AddComments extends Component {
  AddAComWhitFetch = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.state.elementId, {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTYwMWMwMzRmZjAwMTQwM2Y0ZTEiLCJpYXQiOjE2OTQwODczNzcsImV4cCI6MTY5NTI5Njk3N30.WMnxbDPf73sbHhHCp1dOoBMilWMGacQLwO3MfwIN82o",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <InputGroup className="mb-1">
        <Form onSubmit={this.filterBookList}>
          <Form.Group className="mb-1">
            <Form.Control type="text" id="addComment" placeholder="add a comment" />
          </Form.Group>
          <Button type="submit">Add</Button>
        </Form>
      </InputGroup>
    );
  }
}

export default AddComments;
