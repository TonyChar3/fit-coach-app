import styled from "styled-components";
import { Image } from "react-native";


/**
 *  Welcome Screen styling
 */

/*
 * Layout
 */
export const WelcomeScreenContainer = styled.View`
    width: 100%;
    height: 100%;
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #333333;
`;

/**
 * Image
 */
export const WelcomeScreenLogoImage = styled(Image).attrs({
    source: {
        uri: 'https://ik.imagekit.io/bqofr3ncj/Projects/Fit%20(1).png?updatedAt=1717430956550'
    },
})`
    width: 10em;
    height: 10em;
`;

/**
 * Buttons
 */
export const WelcomeButton = styled.View`

`;