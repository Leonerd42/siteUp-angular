import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-clients',
  templateUrl: './our-clients.component.html',
  styleUrls: ['./our-clients.component.css']
})
export class OurClientsComponent implements OnInit {

  clients = new Array(27);

  constructor() { }

  async ngOnInit() {
    for(let i=1; i<=27; i++){
        var aux; 
        if(i>=26){
            aux = `Franquiados`;
        }
        this.clients[i-1] = {
            url: `assets\\clientes\\Imagem${i}.png`, 
            descricao: aux
        }
    }
    console.log(this.clients);    
  }

}
