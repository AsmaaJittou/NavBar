import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ArticlePage } from "./ArticlePage";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

class Article extends Component {
  render() {
    return (
      <div>
        {this.props.data.map(item => (
          <Card>
            <CardImg top width="10%" height="10%" src={item.picture} />
            <CardBody>
              <CardTitle>{item.titre}</CardTitle>
              <CardText>{item.description}</CardText>
              <Button Onclick={() => {}}>Show More</Button>
            </CardBody>
          </Card>
        ))}
      </div>
    );
  }
}
export default Article;
