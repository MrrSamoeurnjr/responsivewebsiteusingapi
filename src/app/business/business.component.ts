import { Component , OnInit} from '@angular/core';
import { ApiserviceService } from '../service/apiservice.service';
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrl: './business.component.css'
})
export class BusinessComponent implements OnInit{
constructor(private service: ApiserviceService){}
getapibusinessservice:any[] = []
ngOnInit(): void {
  this.service.getBusinessapiservicce().subscribe((result) =>{
    this.getapibusinessservice = result.articles;
  })
}
}
