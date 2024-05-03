import { Component , OnInit} from '@angular/core';
import { ApiserviceService } from '../service/apiservice.service';
@Component({
  selector: 'app-appnew',
  templateUrl: './appnew.component.html',
  styleUrl: './appnew.component.css'
})
export class AppnewComponent implements OnInit
{
  constructor(private service:ApiserviceService){}
  getapiappleservice: any[] = [];
  ngOnInit(): void {
    this.service.getApplenewapiservice().subscribe((result) => {
      this.getapiappleservice = result.articles;
       console.log(result)
    });
  }
}
