import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'siteUP-angular';
  homeClass: boolean = true;
  SobreClass: boolean = false; 
  ServicosClass: boolean = false; 
  ClientesClass: boolean = false; 
  ContatoClass: boolean = false; 

  ChangeLink(num) {
      this.homeClass = this.SobreClass = this.ServicosClass = this.ClientesClass = this.ContatoClass = false;

      switch(num) {
          case 1: 
            this.homeClass = true;
            break;
          case 2: 
            this.SobreClass = true; 
            break; 
          case 3: 
            this.ServicosClass = true; 
            break; 
          case 4: 
            this.ClientesClass = true; 
            break; 
          case 5: 
            this.ContatoClass = true; 
            break;
        }
  }

  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
