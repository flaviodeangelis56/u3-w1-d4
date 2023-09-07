import { Component } from "react";
import { Button } from "react-bootstrap";
import SingleComment from "./SingleComment";

class CommentsList extends Component {
  render() {
    return (
      <ul>
        {this.props.comArr.map((comObj, i) => {
          return (
            <>
              {/* <li>{comObj.comment}</li>
              <li>{comObj.rate}</li> */}
              <SingleComment comment={comObj} />
              {/* <Button onClick={this.removeComment}>
                Remove
              </Button> */}
            </>
          );
        })}
      </ul>
    );
  }
}
export default CommentsList;
