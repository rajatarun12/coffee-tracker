/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      name
      CoffeeTrackers {
        items {
          id
          userID
          locationName
          city
          coffeeName
          Family
          Notes
          Origin
          Aroma
          Flavor
          Acidity
          Body
          Balance
          Overall
          BrewType
          Temperature
          WTOCRatio
          BrewTime
          Comments
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        name
        CoffeeTrackers {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCoffeeTracker = /* GraphQL */ `
  query GetCoffeeTracker($id: ID!) {
    getCoffeeTracker(id: $id) {
      id
      userID
      locationName
      city
      coffeeName
      Family
      Notes
      Origin
      Aroma
      Flavor
      Acidity
      Body
      Balance
      Overall
      BrewType
      Temperature
      WTOCRatio
      BrewTime
      Comments
      createdAt
      updatedAt
    }
  }
`;
export const listCoffeeTrackers = /* GraphQL */ `
  query ListCoffeeTrackers(
    $filter: ModelCoffeeTrackerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCoffeeTrackers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        locationName
        city
        coffeeName
        Family
        Notes
        Origin
        Aroma
        Flavor
        Acidity
        Body
        Balance
        Overall
        BrewType
        Temperature
        WTOCRatio
        BrewTime
        Comments
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const byUserEmail = /* GraphQL */ `
  query ByUserEmail(
    $email: String
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byUserEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        email
        name
        CoffeeTrackers {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
