/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createCoffeeTracker = /* GraphQL */ `
  mutation CreateCoffeeTracker(
    $input: CreateCoffeeTrackerInput!
    $condition: ModelCoffeeTrackerConditionInput
  ) {
    createCoffeeTracker(input: $input, condition: $condition) {
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
export const updateCoffeeTracker = /* GraphQL */ `
  mutation UpdateCoffeeTracker(
    $input: UpdateCoffeeTrackerInput!
    $condition: ModelCoffeeTrackerConditionInput
  ) {
    updateCoffeeTracker(input: $input, condition: $condition) {
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
export const deleteCoffeeTracker = /* GraphQL */ `
  mutation DeleteCoffeeTracker(
    $input: DeleteCoffeeTrackerInput!
    $condition: ModelCoffeeTrackerConditionInput
  ) {
    deleteCoffeeTracker(input: $input, condition: $condition) {
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
