import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-torsion-page',
  templateUrl: './torsion-page.page.html',
  styleUrls: ['./torsion-page.page.scss'],
})
export class TorsionPagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  RetHome(){
    this.router.navigate(['home']);
  }

}
