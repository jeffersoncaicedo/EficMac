import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pesobote-page',
  templateUrl: './pesobote-page.page.html',
  styleUrls: ['./pesobote-page.page.scss'],
})
export class PesobotePagePage implements OnInit {
  metros: any;
  nm: any;  
  peso_bote: any; 

  public alertButtons = [
    {
      text: 'Aceptar',
      role: 'confirm',
      handler: () => {
        console.log("Aceptar");
      }
    },
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  RetHome(){
    this.router.navigate(['home']);
  }

  InputMetrosChange(event:any){
    this.metros = event.target;
  }

  InputNmChange(event:any){
    this.nm = event.target;
  }

  CalcTor(){
    let div = this.metros.value / this.nm.value;
    this.peso_bote = div / 1000;
    
    this.metros.value = "";
    this.nm.value = "";
  }
}
