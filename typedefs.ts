
import {gql} from "apollo-server";

export const typeDefs = gql`
  
  type User {
    id: Int
    email: String
    name: String
  }
 
  type Query {
    allUsers: [User!]!
  }



  type Mutation {
    addUser(email: String, name: String): User!,
    deleteUser(id: Int): User!
    updateUser( id: Int, email: String, name: String): User!
  }
`

export default typeDefs;
