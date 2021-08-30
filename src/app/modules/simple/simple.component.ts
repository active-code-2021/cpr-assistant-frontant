import { Component, OnInit } from '@angular/core';
import { SimpleService } from '../simple.service';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {

  constructor(private _service:SimpleService) { 
    this._service.get().subscribe(data=>{
      console.log(data);
    })
  }

  ngOnInit(): void {
  }

}
