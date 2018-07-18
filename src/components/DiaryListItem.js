import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './basecomponents';

class ListItem extends Component {
  onRowPress() {
    Actions.diaryEdit({ diary: this.props.diary });
  }

  render() {
    const { title, text } = this.props.diary.item;
    const {
      headerContentStyle,
      headerTextStyle,
      imageStyle,
    } = styles;
    return (
      <View>
        <CardSection>
           <Image
            style={imageStyle}
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ44494gKZPQXtTcyOu4Y4qoRJfslB6GPR4pnxLLghM24S4VHF1LA' }}
           />
        </CardSection>

        <CardSection>
          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{title}</Text>
            <Text>{text}</Text>
           </View>
        </CardSection>
      </View>
      );
    }
  }

  const styles = {
    imageStyle: {
      height: 150,
      flex: 1,
      width: null
    },
    headerContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around'
    },
    headerTextStyle: {
      fontSize: 18
    },
  };

  export default ListItem;
