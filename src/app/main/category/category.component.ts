import { Component, Input, OnInit } from '@angular/core';
import { ICategory } from 'src/app/data-types';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input() public categories: ICategory[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
