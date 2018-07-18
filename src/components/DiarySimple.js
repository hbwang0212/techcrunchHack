import React from 'react';
import { Text, View, Image } from 'react-native';
import { Card, CardSection } from './basecomponents';


const DiarySimple = ({ diary }) => {
  const { title, text } = diary;
  const {
    headerContentStyle,
    headerTextStyle,
    imageStyle
  } = styles;

  
  return (
    <Card>
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
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default DiarySimple;
