import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View } from 'react-native';
import FooterwithIcon from './FooterwithIcon';
import { diaryFetch } from '../actions';
import axios from 'axios';
import DiarySimple from './DiarySimple';
import { CardSection } from './basecomponents';

class DiaryList extends Component {
   state = { diaries: [] };
  componentWillMount() {
    this.props.diaryFetch();
    this.setState({ diaries: this.props.diaries });
  }

  renderDiaries() {
    return this.state.diaries.map(diary =>
      <DiarySimple key={diary.title} diary={diary} />
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
