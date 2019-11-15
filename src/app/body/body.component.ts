import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  edu = "Education"
  highschool = "High School Diploma: Seneca Valley School District"
  college = "Senior, Slippery Rock University, Pursuing B.S. in Computing: Information Technology Concentration"
  standing = "116/120 Credits Acquired, GPA 3.1 Dean’s List: Fall 2014"
  job = "Entry-Level Position"
  job1 = "Prospective Graduate of Slippery Rock University with a B.S. in Information Technology"
  job2 = "Over a year of Experience managing a kitchen towards better product and faster service"
  job3 = "Knowledge and experience with small businesses and restaurants"
  job4 = "Work well in team or individually"
  employment = "North Country Brewing: Line Cook May 2015 – March 2018 Temp Manager March 2018 – August 2019"
  employment1 = "Responsible for quick completion of objectives, leading a small team towards quality service, and handled inventory and orders for small business."
  experience = "Management of teams small and large"
  tech = "Languages: Python, JavaScript, SQL, CSS, HTML, C++"
  constructor() { }

  ngOnInit() {
  }

}
