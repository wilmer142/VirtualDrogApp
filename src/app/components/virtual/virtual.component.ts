import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport, {static: false}) viewPort: CdkVirtualScrollViewport;
  personas = Array(500).fill(0);

  constructor() { }

  ngOnInit() {
  }

  irFinal() {
    this.viewPort.scrollToIndex(this.personas.length)
  }

  irInicio() {
    this.viewPort.scrollToIndex(0)
  }

  irMittad() {
    this.viewPort.scrollToIndex(Math.round(this.personas.length / 2));
  }

}
