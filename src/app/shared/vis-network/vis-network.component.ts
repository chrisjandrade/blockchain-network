import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Network, DataSet } from 'vis';
import { random } from 'lodash';

@Component({
  selector: 'app-vis-network',
  templateUrl: './vis-network.component.html',
  styleUrls: ['./vis-network.component.scss']
})
export class VisNetworkComponent implements OnInit {

  @Input('data') data: any[];
  @Input('options') options: any;

  @ViewChild('networkContainer') container: ElementRef;
  
  network: Network;

  constructor() { }

  ngOnInit() {
    let nodes = [];
    for (let i = 0, end = 10; i < end; i++) {
      nodes.push({ id: i, label: `node ${i}` });
    }
    nodes = new DataSet(nodes);

    let edges = [];
    for (let i = 0, end = 10; i < end; i++) {
      edges.push({ from: i, to: random(i, 9) });
    }
    edges = new DataSet(edges);
      
    this.network = new Network(this.container.nativeElement, { nodes, edges }, {});
  }

}
