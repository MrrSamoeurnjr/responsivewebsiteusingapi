import { Component , OnInit} from '@angular/core';
import { ApiserviceService } from '../service/apiservice.service';
@Component({
  selector: 'app-tesla',
  templateUrl: './tesla.component.html',
  styleUrl: './tesla.component.css'
})
export class TeslaComponent implements OnInit{
  constructor(private sercive: ApiserviceService){}
  getapiteslaservice:any[] =[]
  ngOnInit(): void {
    this.sercive.getTestalnewapiservice().subscribe((result) => {
      this.getapiteslaservice = result.articles;
    })
  }
}
