import React, { Component } from 'react';

import Restaurant from './restaurant'
import RestaurantSelectButtons from './restaurant_select_buttons'
import '../yelp_api'

export default class App extends Component {
  render() {
    return (
      <div>
        <Restaurant name="Burma Superstar"
                    rating="5"
                    location="Oakland"
                    cost="$$"/>
        <RestaurantSelectButtons />
      </div>
    );
  }
}

/*
Specs:
- As a user I should be able to select a restaurant
- once I select a restaurant I should see the details of the restaurant
- as a user, I should not see a restaurant more than once


App's state
{
  restaurantsSeenIds: ['abcd', 'defg', ...],
  currentRestaurant: {},
  restaurantToBeSeen: [],
  restaurantSelected: {},
}
 */
