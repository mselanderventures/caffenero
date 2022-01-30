/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUser
// ====================================================

export interface GetUser_user_company {
  __typename: "CompanyType";
  name: string;
  logoImageUrl: string | null;
}

export interface GetUser_user {
  __typename: "UserType";
  email: string;
  company: GetUser_user_company | null;
}

export interface GetUser {
  user: GetUser_user | null;
}
