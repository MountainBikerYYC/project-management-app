enum ProjectStatus {
  new = "Not Started",
  progress = "In Progress",
  completed = "Completed",
}

export interface ProjectInterface {
  name: string;
  email: string;
  status: ProjectStatus;
  clientID: string;
}
