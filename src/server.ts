import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { ProjectResolver } from "./resolvers/ProjectResolver";

async function main() {
  const connection = await createConnection()
  const schema = await buildSchema({
    resolvers: [ProjectResolver]
  });
  const server = new ApolloServer({ schema })
  await server.listen(3333)
  console.log("Server has started!")
}

main()