import _ from 'lodash';
import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, TouchableWithoutFeedback, View, Alert } from 'react-native';
import FooterwithIcon from './FooterwithIcon';
import { Actions } from 'react-native-router-flux';
import { diaryFetch } from '../actions';
import DiarySimple from './DiarySimple';
import { CardSection } from './basecomponents';

class DiaryList extends Component {
   state = { diaries: [] };
  componentWillMount() {
    this.props.diaryFetch();
    this.setState({ diaries: this.props.diaries });
  }
  onDiaryPress() {
    Alert.alert('hello!');
  }

  renderDiaries() {
    return this.state.diaries.map(diary => (
      <TouchableWithoutFeedback onPress={this.onDiaryPress.bind(this)} key={diary.title}>
      <DiarySimple diary={diary} />
      </TouchableWithoutFeedback>
      )
    );
  }

 render() {    
    return (
      <View>
      <ScrollView horizontal={true}>
        {this.renderDiaries()}
      </ScrollView>
      <FooterwithIcon />
      </View>
    );
  }
}
const mapStateToProps = state => {
  const diaries = _.map(state.diaries, (val, uid) => {
    return { ...val, uid };
  });

  return { diaries };
};
export default connect(mapStateToProps, { diaryFetch })(DiaryList);
