import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText,
  CardDeck, CardSubtitle, CardBlock } from 'reactstrap';
import NavBar from './NavBar';


class Activity extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        {this.props.children}
        <div style={{paddingTop:"200px"}}>
          <CardDeck>
            <Card>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
              <CardBlock>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Something goes here.</CardText>
                <Button>Button</Button>
              </CardBlock>
            </Card>
            <Card>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
              <CardBlock>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Something goes here.</CardText>
                <Button>Button</Button>
                </CardBlock>
            </Card>
            <Card>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
              <CardBlock>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Something goes here.</CardText>
                <Button>Button</Button>
              </CardBlock>
            </Card>
          </CardDeck>
        </div>
      </div>
    );
  }
}
Activity.propTypes = {
  children: React.PropTypes.object
};

export default Activity;
