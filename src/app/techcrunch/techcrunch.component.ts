import { Component , OnInit} from '@angular/core';
import { ApiserviceService } from '../service/apiservice.service';
@Component({
  selector: 'app-techcrunch',
  templateUrl: './techcrunch.component.html',
  styleUrl: './techcrunch.component.css'
})
export class TechcrunchComponent implements OnInit{
  constructor(private service: ApiserviceService){}
  gettechcrunchapiservice: any[] = []
  ngOnInit(): void {
    this.service.getTechcrunchapiservice().subscribe((result) => {
      this.gettechcrunchapiservice = result.articles
    })
  }
}
