import React, { Component } from 'react';
import { connect } from 'react-redux';
import { diaryUpdate, diaryCreate } from '../actions';
import { Card, CardSection, Button } from './basecomponents';
import DiaryForm from './DiaryForm';

class DiaryCreate extends Component {
  onButtonPress() {
    const { title, text, image } = this.props;

    this.props.diaryCreate({ title, text, image });
  }

  render() {
    return (
      <Card>
        <DiaryForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { title, text, image } = state.diaryForm;

  return { title, text, image };
};

export default connect(mapStateToProps, {
  diaryUpdate, diaryCreate
})(DiaryCreate);
