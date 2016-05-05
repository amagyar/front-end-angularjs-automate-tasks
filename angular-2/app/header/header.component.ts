import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'header',
    templateUrl: '/app/header/header.component.html',
    styles: [`
        .header {
            box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.3);
            background-color: cadetblue;
            color: azure;
            width: 100%;
            left: 0;
            top: 0;
            padding-top: 13px;
            padding-bottom: 13px;
        }
    `]
})
export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    titulo = "Tarefa da CINQ - Design responsivo: 4 colunas full hd / 2 colunas hd / 1 coluna wvga";
}