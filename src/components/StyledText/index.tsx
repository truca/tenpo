import React from 'react';
import { Text, TextProps } from '../Themed';
import fontStylesHelper from './fontStylesHelper';
import { FontName } from './types';

interface StyledTextExtraProps {
  fontName?: FontName
  fontSize?: number
}

type StyledTextProps = StyledTextExtraProps & TextProps;

export default function StyledText(props: StyledTextProps) {
  const {
    style, fontName, fontSize, ...otherProps
  } = props;

  const fontStyles = fontStylesHelper(fontName || FontName.GothamBook, fontSize || 16);

  // This is intended in the design of this component
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Text {...otherProps} style={[style, fontStyles]} />;
}
