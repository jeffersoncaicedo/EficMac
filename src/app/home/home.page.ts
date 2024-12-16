import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  MenuOpen(){
    console.log("SE ABRE EL MENÚ");
  }

  SelectOption(page: any){
    this.router.navigate([page]);
  }

}
