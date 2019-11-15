import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = "Adam Weaver"
  Picture = "\assets\\img\\IMG_20191115_103820.jpg"
  address = "774 Sunset Circle Cranberry Township, PA 16066"
  email = "weaveradam1191@gmail.com"
  phone = "(724)-831-9209"

  constructor() { }

  ngOnInit() {
  }

}
