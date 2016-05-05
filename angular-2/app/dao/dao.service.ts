import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Person } from '../people/people.component';

@Injectable()
export class DaoService {

    constructor(private _http : Http) { }

    getPeople() {
       return this._http.get('http://localhost:8090/rest/people')
            .map((response : Response) => <Person[]>response.json())
            .catch(this.error);
    }
    
    private error(error : Response) {
        return Observable.throw(error.json().error || 'Server error');
    }
}