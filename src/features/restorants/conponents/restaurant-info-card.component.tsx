import React from 'react';
import styled from 'styled-components/native';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';

import star from '../../../../assets/star';
import openNow from '../../../../assets/openNow';

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const StyledTitleWrapper = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const StyledRatingWrapper = styled.View`
  display: flex;
  flex-direction: row;
`;
const StyledInfoWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;
const StyledDangerText = styled.Text`
  color: ${(props) => props.theme.colors.ui.error};
`;

interface IRestorantInfo {
  restaurant: any;
}

const RestaurantInfoCard = ({
  restaurant = {},
}: IRestorantInfo): JSX.Element => {
  const {
    name = 'Some Restaurant',
    // icon,
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 some random street',
    isOpenNow = false,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArr = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <StyledTitleWrapper>
        <Title>{name}</Title>
        <StyledInfoWrapper>
          <StyledRatingWrapper>
            {ratingArr.map((_, i) => (
              <SvgXml xml={star} width={20} height={20} key={i} />
            ))}
          </StyledRatingWrapper>
          {isClosedTemporarily && (
            <StyledDangerText>CLOSED TEMPORARILY</StyledDangerText>
          )}
          {isOpenNow && <SvgXml xml={openNow} width={20} height={20} />}
        </StyledInfoWrapper>
        <Address>{address}</Address>
      </StyledTitleWrapper>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
