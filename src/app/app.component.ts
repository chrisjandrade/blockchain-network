import { Component } from '@angular/core';
import { random } from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blockchain-network';

  nodes: any[];
  edges: any[];
  options: any;

  constructor() {
    const nodes = [];
    for (let i = 0, end = 100; i < end; i++) {
      nodes.push({ id: i, label: `node ${i}` });
    }

    const edges = [];
    for (let i = 0, end = 100; i < end; i++) {
      edges.push({ from: i, to: random(i, 99) });
    }
    
    const options = {};
    Object.assign(this, { nodes, edges, options });
  }
  
}
