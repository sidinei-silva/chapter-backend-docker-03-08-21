import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { CreateProjectInput } from "../inputs/CreateProjectInput";
import { UpdateProjectInput } from "../inputs/UpdateProjectInput";
import { Project } from "../models/Project";

@Resolver()
export class ProjectResolver {
  @Query(() => [Project])
  projects() {
    return Project.find();
  }

  @Query(() => Project)
  project(@Arg("id") id: string) {
    return Project.findOne({ where: { id } });
  }

  @Mutation(() => Project)
  async createProject(@Arg("data") data: CreateProjectInput) {
    const project = Project.create(data);
    await project.save();
    return project;
  }

  @Mutation(() => Project)
  async updateProject(@Arg("id") id: string, @Arg("data") data: UpdateProjectInput) {
    const project = await Project.findOne({ where: { id } });
    if (!project) throw new Error("Project not found!");
    Object.assign(project, data);
    await project.save();
    return project;
  }
}