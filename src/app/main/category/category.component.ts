import { Component, EventEmitter, Input, OnInit, Output, Pipe, PipeTransform } from '@angular/core';
import { ICategory } from 'src/app/data-types';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input() public categories: ICategory[] = [];
  @Output() public selectedCategoryEmitter = new EventEmitter();
  private selectedCategoryId: number | null = null;
  
  public filterString = "";

  constructor() { }

  ngOnInit(): void {
  }

  setCategory(event: any){
    this.selectedCategoryId = event.target.id;
    this.selectedCategoryEmitter.emit(this.selectedCategoryId);
  }

}

@Pipe({
  name: 'searchCategory'
})
export class SearchCategoryPipe implements PipeTransform {
  public transform(value: any[], filterString: string) {
    if (!filterString) return value;
    var filteredList = value.filter(item => item.text.toLowerCase().includes(filterString.toLowerCase()));
    return filteredList;
  }
}
