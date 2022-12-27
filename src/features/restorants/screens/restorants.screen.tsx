import React, { useState } from 'react';
import {
  NativeSyntheticEvent,
  StatusBar,
  TextInputChangeEventData,
} from 'react-native';
import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper';
import RestaurantInfoCard from '../conponents/restaurant-info-card.component';

const StyledWrapper = styled.SafeAreaView`
  flex: 1;
  margintop: ${StatusBar.currentHeight}px;
`;

const StyledSearchWrapper = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const StyledSearchBar = styled(Searchbar)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const StyledListWrapper = styled.View`
  padding: ${(props) => props.theme.space[3]};
  flex: 1;
`;

const RestorantsScreen = () => {
  const [search, setSearch] = useState<string>('');

  const handleOnChange = (
    searchValue: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    setSearch(`${searchValue}`);
  };

  return (
    <StyledWrapper>
      <StyledSearchWrapper>
        <StyledSearchBar value={search} onChange={handleOnChange} />
      </StyledSearchWrapper>
      <StyledListWrapper>
        <RestaurantInfoCard restaurant={undefined} />
      </StyledListWrapper>
    </StyledWrapper>
  );
};

export default RestorantsScreen;
