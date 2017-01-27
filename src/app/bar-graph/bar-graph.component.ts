import { Component, OnInit, OnChanges, ElementRef, Input } from '@angular/core';
import { D3Service, D3, Selection } from 'd3-ng2-service';


@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent implements OnInit {
  @Input() projectToDisplay;

  private d3: D3;
  private parentNativeElement: any;


  progress: number;
  goal: number;

  constructor(element: ElementRef, d3Service: D3Service) {
    this.d3 = d3Service.getD3()
    this.parentNativeElement = element.nativeElement;
   }

   drawBarGraph() {
     if (typeof this.projectToDisplay.progress != 'number'){

       this.projectToDisplay.subscribe(result => {
         var projectObject = result

         let d3 = this.d3;
         let barData = [100];

         d3.select(".bar").remove()

         d3.select("#chart")
         .selectAll('div')
         .data(barData)
         .enter()
         .append('div')
         .attr('class', 'bar')
         .style('height', 20 +'px')
         .style('background-color', 'green')
         .style('width', (projectObject.progress/projectObject.goal *100) +'%')
       });
     } else {


       let d3 = this.d3;
       let barData = [100];

       //d3.select(".bar").remove()

       d3.select("#chart")
       .selectAll('div')
       .data(barData)
       .enter()
       .append('div')
       .attr('class', 'bar')
       .style('height', 20 +'px')
       .style('background-color', 'green')
       .style('width', (this.projectToDisplay.progress/this.projectToDisplay.goal *100) +'%')
     }
     }

   ngOnInit() {
     this.drawBarGraph()
   }

   ngOnChanges() {
     this.drawBarGraph()
   }
  }
