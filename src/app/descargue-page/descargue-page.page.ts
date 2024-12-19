import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-descargue-page',
  templateUrl: './descargue-page.page.html',
  styleUrls: ['./descargue-page.page.scss'],
})
export class DescarguePagePage implements OnInit {
  metraje: any;
  vel: any;  
  descargue: any; 

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

  InputMetrajeChange(event:any){
    this.metraje = event.target;
  }

  InputVelChange(event:any){
    this.vel = event.target;
  }

  CalcTor(){
    let div = this.metraje.value / this.vel.value;
    this.descargue = div / 60;
    
    this.metraje.value = "";
    this.vel.value = "";
  }
}
