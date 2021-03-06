import React, { Component } from "react";
import Share from "./Share";
import FullScreenLoader from "../../components/FullScreenLoader";
import { Query } from "react-apollo";
import { ALL_TAGS_QUERY } from "../../apollo/queries";

class ShareContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Query query={ALL_TAGS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <FullScreenLoader />;
          if (error) return `Error: ${error}`;
          if (data) {
            return <Share tags={data.tags} />;
          }
        }}
      </Query>
    );
  }
}

export default ShareContainer;
