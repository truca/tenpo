import { StyleProp, TextStyle } from 'react-native';
import { FontName } from './types';

const fontStylesHelper = (name: FontName, fontSize: number): StyleProp<TextStyle> => {
  switch (name) {
    case FontName.GothamLight:
      return { fontFamily: 'GothamLight', fontSize };
    case FontName.GothamMedium:
      return { fontFamily: 'GothamMedium', fontSize };
    case FontName.GothamBook:
      return { fontFamily: 'GothamBook', fontSize };
    case FontName.GothamBold:
      return { fontFamily: 'GothamBold', fontSize };
    case FontName.GothamUltra:
      return { fontFamily: 'GothamUltra', fontSize };

    case FontName.RobotoLight:
      return { fontFamily: 'Roboto', fontWeight: '100', fontSize };
    case FontName.RobotoRegular:
      return { fontFamily: 'Roboto', fontWeight: 'normal', fontSize };
    case FontName.RobotoBlack:
      return { fontFamily: 'Roboto', fontWeight: 'bold', fontSize };

    default:
      return { fontFamily: 'GothamBook', fontSize };
  }
};

interface ReturnType {
  ['font-family']: string, ['font-size']: number, ['font-weight']?: string
}
export const fontStylesHelperCSS = (name: FontName, fontSize: number): ReturnType => {
  switch (name) {
    case FontName.GothamLight:
      return { 'font-family': 'GothamLight', 'font-size': fontSize };
    case FontName.GothamMedium:
      return { 'font-family': 'GothamMedium', 'font-size': fontSize };
    case FontName.GothamBook:
      return { 'font-family': 'GothamBook', 'font-size': fontSize };
    case FontName.GothamBold:
      return { 'font-family': 'GothamBold', 'font-size': fontSize };
    case FontName.GothamUltra:
      return { 'font-family': 'GothamUltra', 'font-size': fontSize };

    case FontName.RobotoLight:
      return { 'font-family': 'Roboto', 'font-weight': '100', 'font-size': fontSize };
    case FontName.RobotoRegular:
      return { 'font-family': 'Roboto', 'font-weight': 'normal', 'font-size': fontSize };
    case FontName.RobotoBlack:
      return { 'font-family': 'Roboto', 'font-weight': 'bold', 'font-size': fontSize };

    default:
      return { 'font-family': 'GothamBook', 'font-size': fontSize };
  }
};

export default fontStylesHelper;
