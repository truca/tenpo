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

export default fontStylesHelper;
