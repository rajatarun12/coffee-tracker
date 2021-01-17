/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateCoffeeTracker = /* GraphQL */ `
  subscription OnCreateCoffeeTracker {
    onCreateCoffeeTracker {
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
export const onUpdateCoffeeTracker = /* GraphQL */ `
  subscription OnUpdateCoffeeTracker {
    onUpdateCoffeeTracker {
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
export const onDeleteCoffeeTracker = /* GraphQL */ `
  subscription OnDeleteCoffeeTracker {
    onDeleteCoffeeTracker {
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
