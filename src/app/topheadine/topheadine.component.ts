import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../serives/tcnewsapi.service';

@Component({
  selector: 'app-topheadine',
  templateUrl: './topheadine.component.html',
  styleUrls: ['./topheadine.component.css']
})
export class TopheadineComponent implements OnInit {

  constructor(private api:TcnewsapiService) { }

  //display headlines data
  topHeadlinesData:any=[];
  ngOnInit(): void {

    this.api.tcHeadlines().subscribe((result)=>{
      console.log(result.articles);
      this.topHeadlinesData=result.articles
      
    })

  }

}
