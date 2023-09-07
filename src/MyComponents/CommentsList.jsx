import { Component } from "react";
import { Button } from "react-bootstrap";

class CommentsList extends Component {
  removeComment = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "DELETE",
        body: JSON.stringify(this.state.commentObj),
        headers: {
          "Content-Type": "application/json",
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
      <ul>
        {this.props.comArr.map((comObj, i) => {
          return (
            <>
              <li>{comObj.comment}</li>
              <li>{comObj.rate}</li>
              <Button onClick={this.removeComment}>Remove</Button>
            </>
          );
        })}
      </ul>
    );
  }
}
export default CommentsList;
