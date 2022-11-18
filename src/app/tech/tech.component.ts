import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../serives/tcnewsapi.service';


@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  constructor(private api:TcnewsapiService) { }

    //technewsdata
    techNewsData:any=[];

  ngOnInit(): void {

    this.api.tcTechnews().subscribe((result)=>{
      console.log(result.articles);
      this.techNewsData=result.articles
      
    })

  }

}
