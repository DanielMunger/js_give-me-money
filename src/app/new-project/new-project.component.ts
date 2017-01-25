import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
  providers: [ProjectService]
})
export class NewProjectComponent implements OnInit {
  newProject: Project;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }
  createProject(category:string, title:string, description:string, goal:number)
  {

    this.newProject = new Project(category, title, description, goal);
    console.log(this.newProject);
    this.projectService.createProject(this.newProject);
  }
}
