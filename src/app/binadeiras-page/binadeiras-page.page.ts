import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-binadeiras-page',
  templateUrl: './binadeiras-page.page.html',
  styleUrls: ['./binadeiras-page.page.scss'],
})
export class BinadeirasPagePage implements OnInit {
  husos: any;
  vel: any;
  elastano: any;
  filamento: any;
  estiro: any;

  dennier: any; 
  nm: any;
  khg_binadeiras: any; 
  
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

  InputElastanoChange(event:any){
    this.elastano = event.target;
  }
  
  InputFilamentoChange(event:any){
    this.filamento = event.target;
  }

  InputEstiroChange(event:any){
    this.estiro = event.target;
  }
  
  CalcTor(){
    this.dennier = Number(this.filamento.value) + Number(this.elastano.value / this.estiro.value);
    this.nm = 9000 / this.dennier;

    let mult = this.husos.value * this.vel.value * 0.06;
    this.khg_binadeiras = mult / this.nm;
    
    this.husos.value = "";
    this.vel.value = "";
    this.elastano.value = "";
    this.filamento.value = "";
    this.estiro.value = "";
  }
}
