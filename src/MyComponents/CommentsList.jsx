import { Component } from "react";

class CommentsList extends Component {
  render() {
    return (
      <ul>
        {this.props.comArr.map((comObj, i) => {
          return (
            <>
              <li>{comObj.comment}</li>
              <li>{comObj.rate}</li>
            </>
          );
        })}
      </ul>
    );
  }
}
export default CommentsList;
