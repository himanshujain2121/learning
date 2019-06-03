import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { items } from '../../model/item';

@Component({
  selector: 'app-course-featured',
  templateUrl: './course-featured.component.html',
  styleUrls: ['./course-featured.component.css']
})
export class CourseFeaturedComponent implements OnInit {

  jeansData:items[] = [];
  constructor( private courseService:CoursesService ) { }

  ngOnInit() {
    this.courseService.getJeansItems().subscribe((data) => {
      this.jeansData = data.items;
      console.log(this.jeansData);
    });
    
  }

}
