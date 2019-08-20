import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  fotos = [
    {
      src: 'assets/imgs/a1.jpg', 
      message: 'Experiência nos segmentos da indústria, serviços, construtoras e incorporadoras, comércio e logística.'
    },
    {
      src: 'assets/imgs/a2.jpg', 
      message: 'Apoio em projetos de revisão de controles internos e procedimentos previamente acordados em empresas familiares em início de profissionalização de administração.'
    }, 
    {
      src: 'assets/imgs/a4.jpg', 
      message: 'Atuação em projetos de fusões e aquisições em empresas com faturamento combinado de R$5 Bilhões nos últimos 24 meses.'
    }, 
    {
      src: 'assets/imgs/a3.jpg', 
      message: 'Mais de 130.000 horas de equipes dedicadas atuando nas dependências do cliente.'
    }, 
    {
      src: 'assets/imgs/a6.jpg', 
      message: 'R$ 150 Milhões em recuperação de créditos fiscais nos últimos 3 anos.'
    }, 
    {
      src: 'assets/imgs/a7.jpg', 
      message: 'Extensa rede de network que proporciona um leque de soluções nas mais variadas necessidades da empresa.'
    }, 
    {
      src: 'assets/imgs/a5.jpg', 
      message: 'Compliance fiscal, trabalhista e previdenciários com foco preventivo.'
    }
  ];

  ngOnInit() {
  }

}
