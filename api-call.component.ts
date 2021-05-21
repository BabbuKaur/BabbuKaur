import { Component, OnInit } from '@angular/core';
import { ApiCallService } from './api-call.service';

@Component({
  selector: 'app-api-call',
  templateUrl: './api-call.component.html',
  styleUrls: ['./api-call.component.scss']
})
export class ApiCallComponent implements OnInit {

  constructor(private apiCallService: ApiCallService) { }
  
   ngOnInit() { }

      submit(): void {
        this.apiCallService.getAPI().subscribe(res => {
          console.log(res);
        }
      }
    }

