import React from 'react';
import { Text, TextProps } from './Themed';

export default function MonoText(props: TextProps) {
  const { style } = props;
  // This is intended in the design of this component so it can just overwrite a single value of
  // the Text component
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Text {...props} style={[style, { fontFamily: 'space-mono' }]} />;
}
