import { gql } from "@apollo/client";

export class gqlQueries {
  queries = { GET_RATES : gql`
    query GetRates {
      rates(currency: "USD") {
        currency
      }
    }
  `,

  EXCHANGE_RATES : gql`
    query GetExchangeRates {
      rates(currency: "USD") {
        currency
        rate
      }
    }
  `
  };

  mutations = {
    ADD_TODO : gql`
      mutation AddTodo($type: String!) {
        addTodo(type: $type) {
          id
          type
        }
      }
    `
  };

}

export default gqlQueries;