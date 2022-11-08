import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../serives/tcnewsapi.service';


@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(private api:TcnewsapiService) { }
//bussness news data
tcBuzzNewsData:any=[];

  ngOnInit(): void {
    
    this.api.tcBuzzNews().subscribe((result)=>{
      console.log(result.articles);
      this.tcBuzzNewsData=result.articles
      
    })

  }

}
