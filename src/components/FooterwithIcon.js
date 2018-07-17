import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

 class FooterwithIcon extends Component {
  onHomePress() {
    Actions.main();
  }

  onCreatePress() {
    Actions.diaryCreate();
  }

  render() {
    return (
      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button onPress={this.onHomePress.bind(this)}>
              <Icon name="home" />
            </Button>
            <Button>
              <Icon name="stats" />
            </Button>
            <Button onPress={this.onCreatePress.bind(this)}>
              <Icon active name="add-circle" />
            </Button>
            <Button >
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default FooterwithIcon;
