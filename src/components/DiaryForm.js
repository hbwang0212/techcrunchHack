import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Icon } from 'native-base';
import { connect } from 'react-redux';
import { diaryUpdate } from '../actions';
import { CardSection, Input } from './basecomponents';

class DiaryForm extends Component {


  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Title"
            placeholder="My thoughts for the day"
            value={this.props.title}
            onChangeText={value => this.props.diaryUpdate({ prop: 'title', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Text"
            placeholder="I went hiking!"
            value={this.props.text}
            onChangeText={value => this.props.diaryUpdate({ prop: 'text', value })}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
           <Button>
              <Icon active name="camera" />
            </Button>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  const { title, text, image } = state.diaryForm;

  return { title, text, image };
};

export default connect(mapStateToProps, { diaryUpdate })(DiaryForm);
