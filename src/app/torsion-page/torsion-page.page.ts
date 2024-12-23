import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-torsion-page',
  templateUrl: './torsion-page.page.html',
  styleUrls: ['./torsion-page.page.scss'],
})
export class TorsionPagePage implements OnInit { 
  alfa: any;
  nm: any;  
  torsiones: any; 

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

  InputAlfaChange(event:any){
    this.alfa=event.target;
  }

  InputNmChange(event:any){
    this.nm=event.target;
  }

  CalcTor(){
    let sqr = Math.sqrt(this.nm.value);
    this.torsiones = this.alfa.value * 30.3 * sqr;
    this.alfa.value = "";
    this.nm.value = "";
  }

}
