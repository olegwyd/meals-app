import React, { useState } from 'react';
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  FlatList,
} from 'react-native';
import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper';
import RestaurantInfoCard from '../components/restaurant-info-card.component';
import { Spacer } from '../../../components/spacer.component';
import { SafeArea } from '../../../utils/safe-area.util';

const StyledSearchWrapper = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const StyledSearchBar = styled(Searchbar)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const StyledList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const data: { name: string }[] = [
  { name: 'name' },
  { name: 'name1' },
  { name: 'name2' },
  { name: 'name3' },
  { name: 'name4' },
];

const RestaurantsScreen = () => {
  const [search, setSearch] = useState<string>('');

  const handleOnChange = (
    searchValue: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    setSearch(`${searchValue}`);
  };

  return (
    <SafeArea>
      <StyledSearchWrapper>
        <StyledSearchBar value={search} onChange={handleOnChange} />
      </StyledSearchWrapper>

      <StyledList
        data={data}
        renderItem={(item) => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard restaurant={item} />
          </Spacer>
        )}
        keyExtractor={(item: { name: string }) => item.name}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;
