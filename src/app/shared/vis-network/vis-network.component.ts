import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Network, DataSet } from 'vis';
import { random } from 'lodash';

@Component({
  selector: 'app-vis-network',
  templateUrl: './vis-network.component.html',
  styleUrls: ['./vis-network.component.scss']
})
export class VisNetworkComponent implements OnInit {

  // see http://visjs.org/docs/network/ for documentation on nodes, edges and options
  @Input('nodes') nodes: any[];
  @Input('edges') edges: any[];
  @Input('options') options: any;

  @ViewChild('networkContainer') container: ElementRef;
  
  network: Network;

  ngOnInit() { 
    const { nodes, edges, options } = this;

    this.network = new Network(
      this.container.nativeElement,
      { nodes: new DataSet(nodes), edges: new DataSet(edges) },
      options || {});
  }

}
