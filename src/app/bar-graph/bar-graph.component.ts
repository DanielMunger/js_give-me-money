import { Component, OnInit, OnChanges, ElementRef, Input } from '@angular/core';
import { D3Service, D3, Selection } from 'd3-ng2-service';


@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent implements OnInit {
  @Input() percentComplete;
  private d3: D3;
  private parentNativeElement: any;


  progress: number;
  goal: number;

  constructor(element: ElementRef, d3Service: D3Service) {
    this.d3 = d3Service.getD3()
    this.parentNativeElement = element.nativeElement;
   }

   drawBarGraph() {
     let d3 = this.d3;
     let barData = [100, 75];
     console.log(this.percentComplete)

     d3.select("#chart")
     .selectAll('div')
     .data(barData)
     .enter()
     .append('div')
     .attr('class', 'bar')
     .style('height', 20 +'px')
     .style('background-color', 'green')
     .style('width', (this.percentComplete *100) +'%')
   }

   ngOnInit() {
     this.drawBarGraph()
   }

   ngOnChanges() {
     console.log('change?', this.percentComplete)
     this.drawBarGraph()
   }
  }
