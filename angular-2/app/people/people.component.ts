import { Component, OnInit } from '@angular/core';

import { DaoService } from '../dao/dao.service';

@Component({
    selector: 'people',
    templateUrl: '/app/people/people.component.html',
    styles: [`
        .card {
            position: relative;
            min-height: 1px;
            margin: 13px 13px 13px 13px;
            padding-left: 13px;
            padding-right: 13px;
            padding-top: 13px;
            float: left;
            background-color: floralwhite;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
        }
    `]
})
export class PeopleComponent implements OnInit {
    constructor(private _daoService: DaoService) { }

    ngOnInit() {
        this._daoService.getPeople()
            .subscribe(p => this.people = p,
            error => this.errorMessage = <any>error);
    }
    people: Person[];
    errorMessage: string;
}

export class Person {
    id: number;
    name: string;
    disclosableInfo: string;
}