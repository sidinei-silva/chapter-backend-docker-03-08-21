// src/inputs/CreateProjectInput.ts

import { InputType, Field } from "type-graphql";

@InputType()
export class CreateProjectInput {
  @Field()
  title: string;

  @Field()
  author: string;
}