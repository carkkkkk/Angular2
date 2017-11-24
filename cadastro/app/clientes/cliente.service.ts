import { Injectable } from '@angular/core';

import {Http} from '@angular/http'
import 'rxjs/add/operator/toPromise';

import { Cliente } from './cliente.model';
import { CLIENTES } from './cliente.mock';

@Injectable()
export class ClienteService{

    private clientesUrl: string = 'app/clientes'
    
    constructor(
        private http: Http
    ){}

    getClientes() : Promise<Cliente[]>  {

        return this.http.get(this.clientesUrl)
                    .toPromise()
                    .then(response => response.json().data as Cliente[])

        //return Promise.resolve(CLIENTES);       
    }

    getCliente(id: number): Promise<Cliente> {
        return this.getClientes().then((clientes: Cliente[]) => clientes.find(cliente => cliente.id === id))
    }
}