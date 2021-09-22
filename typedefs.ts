
import {gql} from "apollo-server";

export const typeDefs = gql`
  
  type User {
    id: Int
    email: String
    name: String
  }
 
  type Query {
    allUsers: [User!]!
    userById (id: Int): User!
  }

  type Mutation {
    addUser( name: String, email: String): User!
    deleteUser (id: Int): User!
    updateUser(id: Int, name: String, email: String): User!
    }

` // typeDefs
export default typeDefs;
