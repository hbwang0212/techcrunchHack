import React from 'react';
import DiaryComplex from './DiaryComplex';
import { CardSection } from './basecomponents';

const DiaryComplexDisplay = (props) => {
  return (
    <CardSection>
     <DiaryComplex key={props.children.title} diary={props.children} />
    </CardSection>
    );
};

export default DiaryComplexDisplay;
