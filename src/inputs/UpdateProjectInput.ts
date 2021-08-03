// src/inputs/UpdateProjectInput.ts

import { InputType, Field } from "type-graphql";

@InputType()
export class UpdateProjectInput {
  @Field({nullable: true})
  title?: string;

  @Field({nullable: true})
  author?: string;
}