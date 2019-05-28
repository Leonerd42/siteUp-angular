import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'siteUP-angular';
  homeClass: boolean = false;
  SobreClass: boolean = true; 
  ServicosClass: boolean = false; 
  ClientesClass: boolean = false; 
  ContatoClass: boolean = false; 

  constructor(private router: Router) {
    /*this.router.events.subscribe((event) => {
            if(event.url != undefined){
                const aux = event.url.split('/');
                if(aux[1] == 'home'){
                    this.ChangeLink(aux[1]);
                } else {
                    console.log(aux[2]);
                    this.ChangeLink(aux[2]);
                }
            }
               // console.log(event.url); //based on this change class
        }); */
    }

  ChangeLink(num) {
      this.homeClass = this.SobreClass = this.ServicosClass = this.ClientesClass = this.ContatoClass = false;

      switch(num) {
          case 1: 
          case 'home':
            this.homeClass = true;
            break;
          case 2: 
          case 'sobre':
            this.SobreClass = true; 
            break; 
          case 3: 
          case 'servicos':
            this.ServicosClass = true; 
            break; 
          case 4: 
          case 'clientes':
            this.ClientesClass = true; 
            break; 
          case 5: 
          case 'contatos':
            this.ContatoClass = true; 
            break;
        }
  }

  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
