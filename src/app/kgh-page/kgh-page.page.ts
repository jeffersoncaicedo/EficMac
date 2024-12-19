import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kgh-page',
  templateUrl: './kgh-page.page.html',
  styleUrls: ['./kgh-page.page.scss'],
})
export class KghPagePage implements OnInit {
  husos: any;
  nm: any; 
  vel: any; 
  kgh: any; 
  
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
  
  InputHusosChange(event:any){
    this.husos = event.target;
  }
  
  InputVelChange(event:any){
    this.vel = event.target;
  }


  InputNmChange(event:any){
    this.nm = event.target;
  }
  
  CalcTor(){
    let mult = this.husos.value * this.vel.value * 0.06;
    this.kgh = mult / this.nm.value;
    this.husos.value = "";
    this.vel.value = "";
    this.nm.value = "";
  }
}
