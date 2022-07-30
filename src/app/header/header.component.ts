import { Component, OnInit } from '@angular/core';
import { PreloaderService } from '../myservice/preloader.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showloader = true;
  constructor(
    private myservice:PreloaderService
  ) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.showloader = false;
    },1000)
  }

}
