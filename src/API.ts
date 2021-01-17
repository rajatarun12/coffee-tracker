/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  email: string,
  name: string,
};

export type ModelUserConditionInput = {
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateUserInput = {
  id: string,
  email?: string | null,
  name?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateCoffeeTrackerInput = {
  id?: string | null,
  userID: string,
  locationName: string,
  city?: string | null,
  coffeeName?: string | null,
  Family?: string | null,
  Notes?: string | null,
  Origin?: string | null,
  Aroma?: number | null,
  Flavor?: number | null,
  Acidity?: number | null,
  Body?: number | null,
  Balance?: number | null,
  Overall?: number | null,
  BrewType?: string | null,
  Temperature?: string | null,
  WTOCRatio?: string | null,
  BrewTime?: string | null,
  Comments?: string | null,
};

export type ModelCoffeeTrackerConditionInput = {
  userID?: ModelIDInput | null,
  locationName?: ModelStringInput | null,
  city?: ModelStringInput | null,
  coffeeName?: ModelStringInput | null,
  Family?: ModelStringInput | null,
  Notes?: ModelStringInput | null,
  Origin?: ModelStringInput | null,
  Aroma?: ModelIntInput | null,
  Flavor?: ModelIntInput | null,
  Acidity?: ModelIntInput | null,
  Body?: ModelIntInput | null,
  Balance?: ModelIntInput | null,
  Overall?: ModelIntInput | null,
  BrewType?: ModelStringInput | null,
  Temperature?: ModelStringInput | null,
  WTOCRatio?: ModelStringInput | null,
  BrewTime?: ModelStringInput | null,
  Comments?: ModelStringInput | null,
  and?: Array< ModelCoffeeTrackerConditionInput | null > | null,
  or?: Array< ModelCoffeeTrackerConditionInput | null > | null,
  not?: ModelCoffeeTrackerConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateCoffeeTrackerInput = {
  id: string,
  userID?: string | null,
  locationName?: string | null,
  city?: string | null,
  coffeeName?: string | null,
  Family?: string | null,
  Notes?: string | null,
  Origin?: string | null,
  Aroma?: number | null,
  Flavor?: number | null,
  Acidity?: number | null,
  Body?: number | null,
  Balance?: number | null,
  Overall?: number | null,
  BrewType?: string | null,
  Temperature?: string | null,
  WTOCRatio?: string | null,
  BrewTime?: string | null,
  Comments?: string | null,
};

export type DeleteCoffeeTrackerInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelCoffeeTrackerFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  locationName?: ModelStringInput | null,
  city?: ModelStringInput | null,
  coffeeName?: ModelStringInput | null,
  Family?: ModelStringInput | null,
  Notes?: ModelStringInput | null,
  Origin?: ModelStringInput | null,
  Aroma?: ModelIntInput | null,
  Flavor?: ModelIntInput | null,
  Acidity?: ModelIntInput | null,
  Body?: ModelIntInput | null,
  Balance?: ModelIntInput | null,
  Overall?: ModelIntInput | null,
  BrewType?: ModelStringInput | null,
  Temperature?: ModelStringInput | null,
  WTOCRatio?: ModelStringInput | null,
  BrewTime?: ModelStringInput | null,
  Comments?: ModelStringInput | null,
  and?: Array< ModelCoffeeTrackerFilterInput | null > | null,
  or?: Array< ModelCoffeeTrackerFilterInput | null > | null,
  not?: ModelCoffeeTrackerFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    email: string,
    name: string,
    CoffeeTrackers:  {
      __typename: "ModelCoffeeTrackerConnection",
      items:  Array< {
        __typename: "CoffeeTracker",
        id: string,
        userID: string,
        locationName: string,
        city: string | null,
        coffeeName: string | null,
        Family: string | null,
        Notes: string | null,
        Origin: string | null,
        Aroma: number | null,
        Flavor: number | null,
        Acidity: number | null,
        Body: number | null,
        Balance: number | null,
        Overall: number | null,
        BrewType: string | null,
        Temperature: string | null,
        WTOCRatio: string | null,
        BrewTime: string | null,
        Comments: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    email: string,
    name: string,
    CoffeeTrackers:  {
      __typename: "ModelCoffeeTrackerConnection",
      items:  Array< {
        __typename: "CoffeeTracker",
        id: string,
        userID: string,
        locationName: string,
        city: string | null,
        coffeeName: string | null,
        Family: string | null,
        Notes: string | null,
        Origin: string | null,
        Aroma: number | null,
        Flavor: number | null,
        Acidity: number | null,
        Body: number | null,
        Balance: number | null,
        Overall: number | null,
        BrewType: string | null,
        Temperature: string | null,
        WTOCRatio: string | null,
        BrewTime: string | null,
        Comments: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    email: string,
    name: string,
    CoffeeTrackers:  {
      __typename: "ModelCoffeeTrackerConnection",
      items:  Array< {
        __typename: "CoffeeTracker",
        id: string,
        userID: string,
        locationName: string,
        city: string | null,
        coffeeName: string | null,
        Family: string | null,
        Notes: string | null,
        Origin: string | null,
        Aroma: number | null,
        Flavor: number | null,
        Acidity: number | null,
        Body: number | null,
        Balance: number | null,
        Overall: number | null,
        BrewType: string | null,
        Temperature: string | null,
        WTOCRatio: string | null,
        BrewTime: string | null,
        Comments: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCoffeeTrackerMutationVariables = {
  input: CreateCoffeeTrackerInput,
  condition?: ModelCoffeeTrackerConditionInput | null,
};

export type CreateCoffeeTrackerMutation = {
  createCoffeeTracker:  {
    __typename: "CoffeeTracker",
    id: string,
    userID: string,
    locationName: string,
    city: string | null,
    coffeeName: string | null,
    Family: string | null,
    Notes: string | null,
    Origin: string | null,
    Aroma: number | null,
    Flavor: number | null,
    Acidity: number | null,
    Body: number | null,
    Balance: number | null,
    Overall: number | null,
    BrewType: string | null,
    Temperature: string | null,
    WTOCRatio: string | null,
    BrewTime: string | null,
    Comments: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCoffeeTrackerMutationVariables = {
  input: UpdateCoffeeTrackerInput,
  condition?: ModelCoffeeTrackerConditionInput | null,
};

export type UpdateCoffeeTrackerMutation = {
  updateCoffeeTracker:  {
    __typename: "CoffeeTracker",
    id: string,
    userID: string,
    locationName: string,
    city: string | null,
    coffeeName: string | null,
    Family: string | null,
    Notes: string | null,
    Origin: string | null,
    Aroma: number | null,
    Flavor: number | null,
    Acidity: number | null,
    Body: number | null,
    Balance: number | null,
    Overall: number | null,
    BrewType: string | null,
    Temperature: string | null,
    WTOCRatio: string | null,
    BrewTime: string | null,
    Comments: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCoffeeTrackerMutationVariables = {
  input: DeleteCoffeeTrackerInput,
  condition?: ModelCoffeeTrackerConditionInput | null,
};

export type DeleteCoffeeTrackerMutation = {
  deleteCoffeeTracker:  {
    __typename: "CoffeeTracker",
    id: string,
    userID: string,
    locationName: string,
    city: string | null,
    coffeeName: string | null,
    Family: string | null,
    Notes: string | null,
    Origin: string | null,
    Aroma: number | null,
    Flavor: number | null,
    Acidity: number | null,
    Body: number | null,
    Balance: number | null,
    Overall: number | null,
    BrewType: string | null,
    Temperature: string | null,
    WTOCRatio: string | null,
    BrewTime: string | null,
    Comments: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    email: string,
    name: string,
    CoffeeTrackers:  {
      __typename: "ModelCoffeeTrackerConnection",
      items:  Array< {
        __typename: "CoffeeTracker",
        id: string,
        userID: string,
        locationName: string,
        city: string | null,
        coffeeName: string | null,
        Family: string | null,
        Notes: string | null,
        Origin: string | null,
        Aroma: number | null,
        Flavor: number | null,
        Acidity: number | null,
        Body: number | null,
        Balance: number | null,
        Overall: number | null,
        BrewType: string | null,
        Temperature: string | null,
        WTOCRatio: string | null,
        BrewTime: string | null,
        Comments: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      CoffeeTrackers:  {
        __typename: "ModelCoffeeTrackerConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCoffeeTrackerQueryVariables = {
  id: string,
};

export type GetCoffeeTrackerQuery = {
  getCoffeeTracker:  {
    __typename: "CoffeeTracker",
    id: string,
    userID: string,
    locationName: string,
    city: string | null,
    coffeeName: string | null,
    Family: string | null,
    Notes: string | null,
    Origin: string | null,
    Aroma: number | null,
    Flavor: number | null,
    Acidity: number | null,
    Body: number | null,
    Balance: number | null,
    Overall: number | null,
    BrewType: string | null,
    Temperature: string | null,
    WTOCRatio: string | null,
    BrewTime: string | null,
    Comments: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCoffeeTrackersQueryVariables = {
  filter?: ModelCoffeeTrackerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCoffeeTrackersQuery = {
  listCoffeeTrackers:  {
    __typename: "ModelCoffeeTrackerConnection",
    items:  Array< {
      __typename: "CoffeeTracker",
      id: string,
      userID: string,
      locationName: string,
      city: string | null,
      coffeeName: string | null,
      Family: string | null,
      Notes: string | null,
      Origin: string | null,
      Aroma: number | null,
      Flavor: number | null,
      Acidity: number | null,
      Body: number | null,
      Balance: number | null,
      Overall: number | null,
      BrewType: string | null,
      Temperature: string | null,
      WTOCRatio: string | null,
      BrewTime: string | null,
      Comments: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ByUserEmailQueryVariables = {
  email?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ByUserEmailQuery = {
  byUserEmail:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      email: string,
      name: string,
      CoffeeTrackers:  {
        __typename: "ModelCoffeeTrackerConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    email: string,
    name: string,
    CoffeeTrackers:  {
      __typename: "ModelCoffeeTrackerConnection",
      items:  Array< {
        __typename: "CoffeeTracker",
        id: string,
        userID: string,
        locationName: string,
        city: string | null,
        coffeeName: string | null,
        Family: string | null,
        Notes: string | null,
        Origin: string | null,
        Aroma: number | null,
        Flavor: number | null,
        Acidity: number | null,
        Body: number | null,
        Balance: number | null,
        Overall: number | null,
        BrewType: string | null,
        Temperature: string | null,
        WTOCRatio: string | null,
        BrewTime: string | null,
        Comments: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    email: string,
    name: string,
    CoffeeTrackers:  {
      __typename: "ModelCoffeeTrackerConnection",
      items:  Array< {
        __typename: "CoffeeTracker",
        id: string,
        userID: string,
        locationName: string,
        city: string | null,
        coffeeName: string | null,
        Family: string | null,
        Notes: string | null,
        Origin: string | null,
        Aroma: number | null,
        Flavor: number | null,
        Acidity: number | null,
        Body: number | null,
        Balance: number | null,
        Overall: number | null,
        BrewType: string | null,
        Temperature: string | null,
        WTOCRatio: string | null,
        BrewTime: string | null,
        Comments: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    email: string,
    name: string,
    CoffeeTrackers:  {
      __typename: "ModelCoffeeTrackerConnection",
      items:  Array< {
        __typename: "CoffeeTracker",
        id: string,
        userID: string,
        locationName: string,
        city: string | null,
        coffeeName: string | null,
        Family: string | null,
        Notes: string | null,
        Origin: string | null,
        Aroma: number | null,
        Flavor: number | null,
        Acidity: number | null,
        Body: number | null,
        Balance: number | null,
        Overall: number | null,
        BrewType: string | null,
        Temperature: string | null,
        WTOCRatio: string | null,
        BrewTime: string | null,
        Comments: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCoffeeTrackerSubscription = {
  onCreateCoffeeTracker:  {
    __typename: "CoffeeTracker",
    id: string,
    userID: string,
    locationName: string,
    city: string | null,
    coffeeName: string | null,
    Family: string | null,
    Notes: string | null,
    Origin: string | null,
    Aroma: number | null,
    Flavor: number | null,
    Acidity: number | null,
    Body: number | null,
    Balance: number | null,
    Overall: number | null,
    BrewType: string | null,
    Temperature: string | null,
    WTOCRatio: string | null,
    BrewTime: string | null,
    Comments: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCoffeeTrackerSubscription = {
  onUpdateCoffeeTracker:  {
    __typename: "CoffeeTracker",
    id: string,
    userID: string,
    locationName: string,
    city: string | null,
    coffeeName: string | null,
    Family: string | null,
    Notes: string | null,
    Origin: string | null,
    Aroma: number | null,
    Flavor: number | null,
    Acidity: number | null,
    Body: number | null,
    Balance: number | null,
    Overall: number | null,
    BrewType: string | null,
    Temperature: string | null,
    WTOCRatio: string | null,
    BrewTime: string | null,
    Comments: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCoffeeTrackerSubscription = {
  onDeleteCoffeeTracker:  {
    __typename: "CoffeeTracker",
    id: string,
    userID: string,
    locationName: string,
    city: string | null,
    coffeeName: string | null,
    Family: string | null,
    Notes: string | null,
    Origin: string | null,
    Aroma: number | null,
    Flavor: number | null,
    Acidity: number | null,
    Body: number | null,
    Balance: number | null,
    Overall: number | null,
    BrewType: string | null,
    Temperature: string | null,
    WTOCRatio: string | null,
    BrewTime: string | null,
    Comments: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
