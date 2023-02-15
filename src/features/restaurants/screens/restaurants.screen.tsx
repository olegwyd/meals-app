import React, { useContext, useState } from 'react';
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  FlatList,
  View,
} from 'react-native';
import styled from 'styled-components/native';
import { ActivityIndicator, MD2Colors, Searchbar } from 'react-native-paper';
import RestaurantInfoCard from '../components/restaurant-info-card.component';
import { Spacer } from '../../../components/spacer.component';
import { SafeArea } from '../../../utils/safe-area.util';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';

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

const StyledView = styled(View)`
  position: absolute;
  margin-left: -20px;
  top: 50%;
`;

const RestaurantsScreen = () => {
  const [search, setSearch] = useState<string>('');
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  const handleOnChange = (
    searchValue: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    setSearch(`${searchValue}`);
  };

  return (
    <SafeArea>
      {isLoading ? (
        <StyledView style={{ position: 'absolute', top: '50%', left: '50%' }}>
          <ActivityIndicator
            animating={true}
            color={MD2Colors.red800}
            size={50}
          />
        </StyledView>
      ) : null}
      {error ? (
        <View>There was an error occurred while processing the request</View>
      ) : null}
      <StyledSearchWrapper>
        <StyledSearchBar value={search} onChange={handleOnChange} />
      </StyledSearchWrapper>

      <StyledList
        data={restaurants}
        renderItem={({ item }) => (
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
