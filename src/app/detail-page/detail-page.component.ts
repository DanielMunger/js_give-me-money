import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css'],
  providers: [ProjectService]
})
export class DetailPageComponent implements OnInit {
  projectId: string;
  projectToDisplay;
  percentComplete: number;


  constructor(private route: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.projectId = urlParametersArray['id'];
    })
    this.projectToDisplay = this.projectService.getProjectById(this.projectId);
  }

  donateMoney(amount) {

    var numberAmount = parseInt(amount)
    var projectObject = null;
    this.projectToDisplay.subscribe(result => {
      projectObject = result
      console.log("in donate func", projectObject.progress)
      this.percentComplete = projectObject.progress/projectObject.goal
    });
    this.projectService.addDonation(numberAmount, projectObject)
  }
}
