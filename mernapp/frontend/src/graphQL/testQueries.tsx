import { gql } from "@apollo/client";

export class gqlQueries {
  GET_RATES = gql`
    query GetRates {
      rates(currency: "USD") {
        currency
      }
    }
  `;

}

export default gqlQueries;