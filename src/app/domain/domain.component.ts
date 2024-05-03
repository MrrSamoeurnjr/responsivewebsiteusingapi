import { Component , OnInit} from '@angular/core';
import { ApiserviceService } from '../service/apiservice.service';
@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrl: './domain.component.css'
})
export class DomainComponent implements OnInit{
constructor(private service: ApiserviceService){}
getdomainapiservice:any [] = []
ngOnInit(): void {
  this.service.getDomainapiservice().subscribe((result) => {
    console.log(result)
    this.getdomainapiservice = result.articles;
  })
}
}
