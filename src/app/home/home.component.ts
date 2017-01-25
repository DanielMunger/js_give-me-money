import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2';
import { Project } from '../project.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProjectService]
})
export class HomeComponent implements OnInit {
  categoryToFilter: string = "all";


  projects: FirebaseListObservable<any[]>;

  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  goToDetailPage(project) {
    this.router.navigate(['projects', project.$key])
  }

  onChange(optionFromMenu) {
    console.log('on change')
    this.categoryToFilter = optionFromMenu;
  }

}
