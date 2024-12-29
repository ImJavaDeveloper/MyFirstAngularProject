import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatList, MatListItem } from '@angular/material/list';
import { News } from './news';
import { MatInputModule } from '@angular/material/input';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news',
  imports: [
    MatExpansionModule,
    MatFormFieldModule,
    MatListItem,MatList,
    MatCard,
    MatCardContent,
    MatInputModule,
   FormsModule,
   CommonModule,
   ReactiveFormsModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {

  newsObj : News;
  newsList:News[];
  submitted = false;

  newsForm: FormGroup=new FormGroup(
    {
      newsTitle: new FormControl(''),
      newsDesc: new FormControl(''),
    }
  );

  constructor(private newsService: NewsService, private fb : FormBuilder)
  {
    console.log('Inside Constructor News');
    this.newsObj=new News();
    this.newsList=[];
    this.newsForm=fb.group({
      newsTitle:[
        'news1',
        Validators.compose([Validators.required, Validators.minLength(3)])
      ],
      newsDesc:[
        'news1 Desc',
        Validators.compose([Validators.required,Validators.minLength(6)])
      ]
    })
  }
  ngOnInit(): void {
    console.log('Inside onInit News');

    this.newsService.getNews().subscribe((newsData) => {
      (this.newsList = newsData),
        (err: any) => {
          console.log(err);
        };
    });
  }
  addNews()
  {
    this.newsObj=this.newsForm.value;
    this.newsList.push(this.newsObj);
    console.log(this.newsList);

    this.newsService.addNews(this.newsObj).subscribe(
      (data)=>{},
      (err)=>
      {
        console.log('Error Occured');
      }
    )
this.newsObj=new News();
  }

}
