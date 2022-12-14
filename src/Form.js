import React, { useState } from "react";
//import { CREATE_USER_MUTATION } from "../GraphQL/Mutations";
import { useMutation } from "@apollo/client";
import {  gql
     } from '@apollo/client';
const CREATE_USER_MUTATION = gql`
  mutation createUser(
    $first_name: String!
    $last_name: String!
    $email: String!
    $gender: String
  ) {
    createUser(
      first_name: $first_name
      last_name: $last_name
      email: $email
      gender: $gender
    ) {
      id
    }
  }
`;
function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  const [createUser, { error }] = useMutation(CREATE_USER_MUTATION);

  const addUser = () => {
    createUser({
      variables: {
        first_name: firstName,
        last_name: lastName,
        email: email,
        gender: gender,
      },
    });

    if (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="First Name"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Gender"
        onChange={(e) => {
          setGender(e.target.value);
        }}
      />
      <button onClick={addUser}> Create User</button>
    </div>
  );
}

export default Form;