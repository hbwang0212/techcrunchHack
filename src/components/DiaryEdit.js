import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { diaryUpdate, diarySave, diaryDelete } from '../actions';
import { Card, CardSection, Button } from './basecomponents';
import DiaryForm from './DiaryForm';

class DiaryEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    _.each(this.props.diary, (value, prop) => {
      this.props.diaryUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { title, text, image } = this.props;

    this.props.diarySave({ title, text, image, uid: this.props.diary.uid });
  }


  onAccept() {
    const { uid } = this.props.diary;

    this.props.diaryDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <DiaryForm />

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
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
  diaryUpdate, diarySave, diaryDelete
})(DiaryEdit);
