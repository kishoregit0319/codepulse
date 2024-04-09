import { Component, OnDestroy } from '@angular/core';
import {AddCategoryRequest} from "../models/add-category-request.model"
import { CategoryService } from '../category.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnDestroy{
model:AddCategoryRequest;
private addCategorySubscribe?:Subscription;
constructor(private categoryService:CategoryService){
  this.model = {
    Name:'',
    UrlHandle:''
  }
}
  ngOnDestroy(): void {
     this.addCategorySubscribe?.unsubscribe();
  }
  onFromSubmit(){
    this.addCategorySubscribe = this.categoryService.addCategory(this.model)
    .subscribe({next:(respose)=>{
      console.log("Record Saved");
    },
    error:()=>{
      console.log("Error")
    },
    complete:()=>{
      console.log("Completed.")
    }
  })
  }
}
