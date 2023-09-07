import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComments from "./AddComment";

class CommentArea extends Component {
  state = {
    commentsArr: [],
    elementId: this.props.asin,
  };
  commentFetch = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.state.elementId, {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTYwMWMwMzRmZjAwMTQwM2Y0ZTEiLCJpYXQiOjE2OTQwODczNzcsImV4cCI6MTY5NTI5Njk3N30.WMnxbDPf73sbHhHCp1dOoBMilWMGacQLwO3MfwIN82o",
        },
      });
      if (resp.ok) {
        const commentsArr = await resp.json();
        console.log(commentsArr);

        this.setState({ commentsArr });
      }
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount = async () => {
    console.log("did mount");
    this.commentFetch();
  };
  render() {
    return (
      <>
        <CommentsList comArr={this.state.commentsArr} />
        <AddComments />
      </>
    );
  }
}
export default CommentArea;
