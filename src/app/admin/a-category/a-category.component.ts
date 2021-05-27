import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/data-types';
import { ChatbotDataService } from 'src/app/services/chatbot-data.service';

@Component({
  selector: 'app-a-category',
  templateUrl: './a-category.component.html',
  styleUrls: ['./a-category.component.css']
})
export class ACategoryComponent implements OnInit {
  
  public categories: ICategory[] = [];
  public selectedCategoryId: number | null = null;

  public ids: string[] = [];
  public texts: string[] = [];

  public newText: string = "";

  constructor(private _chatbotDataService: ChatbotDataService, private router: Router) { }

  ngOnInit(): void {
    this._chatbotDataService.getCategories().subscribe(data =>{
      this.categories = data
      for(var x = 0; x < this.categories.length; x += 1){
        this.ids.push(this.categories[x].id + '');
        this.texts.push(this.categories[x].text);
      }
    }, err => console.log(err));
  }

  select(event: any){
    var selectedCategoryId = +event.target.closest('button').id;
    if(this.selectedCategoryId == selectedCategoryId) this.selectedCategoryId = null;
    else this.selectedCategoryId = selectedCategoryId;
  }

  postCategory() {
    this._chatbotDataService.postCategory({text: this.newText} as ICategory).subscribe(data => {
        alert("Category Added!");
        this.router.navigate(['/']).then(() => { this.router.navigate(['/admin/category']); });
    });
  }

  putCategory(x: number){
    this._chatbotDataService.putCategory(+this.ids[x], {id: +this.ids[x], text: this.texts[x]} as ICategory).subscribe(data => {
      alert("Category Editted!");
      this.router.navigate(['/']).then(() => { this.router.navigate(['/admin/category']); });
    });
  }

  deleteCategory(id: number) {
    this._chatbotDataService.deleteCategory(id).subscribe(data => {
      alert("Category Deleted!");
      this.router.navigate(['/']).then(() => { this.router.navigate(['/admin/category']); });
    });
  }

}
