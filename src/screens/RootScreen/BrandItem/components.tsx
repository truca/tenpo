import styled from 'styled-components/native';
import { fontStylesHelperCSS } from '../../../components/StyledText/fontStylesHelper';
import { FontName } from '../../../components/StyledText/types';

export const Container = styled.View`
  display: flex; width: 110; height: 145; align-items: center; background-color: #FFF; position: relative;
`;

export const DiscountContainer = styled.View`
  background-color: #00BAA4; width: 30; height: 30; border-radius: 15; position: absolute; right: 0; z-index: 1; top: 0; display: flex; flex-direction: column; align-items: center; justify-content: center;
`;

export const ItemContainer = styled.View`
  background-color: #fff; margin-top: 6; right: 1; align-items: center;
`;

export const BrandDescriptionContainer = styled.View`
    display: flex; flex-direction: row; justify-content: space-between; background-color: #FFF;
`;

export const StyledText = styled.Text`
    ${(props: any) => props.css}
    font-size: ${(props: any) => props.fontSize}px;
    color: ${(props: any) => props.color};
    line-height: ${(props: any) => props.lineHeight};
    ${(props: any) => (props.textTransform ? `text-transform: ${props.textTransform};` : '')}
    font-family: ${(props: any) => fontStylesHelperCSS(props.fontName as FontName, props.fontSize)['font-family']};
    
    ${(props: any) => {
    const fontWeight = fontStylesHelperCSS(props.fontName as FontName, props.fontSize)['font-weight'];
    return fontWeight ? `font-weight: ${fontWeight};` : '';
  }};
`;

export const Image = styled.Image`
    width: ${(props: any) => props.width}px;
    height: ${(props: any) => props.height}px;
    ${(props: any) => (props.borderRadius ? `border-radius: ${props.borderRadius}px;` : '')}
`;
