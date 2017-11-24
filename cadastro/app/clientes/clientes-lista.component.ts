import {Component, OnInit} from '@angular/core';
import { Cliente } from './cliente.model';
import {ClienteService} from './cliente.service'
import {DialogConfirmService} from '../dialogconfirm.service'

@Component({
    moduleId: module.id,
    selector : 'clientes-lista',
    templateUrl: 'clientes-lista.component.html'
})
export class ClientesListaComponent implements OnInit {
    clientes: Cliente[];

    constructor(
        private clienteService: ClienteService,
        private dialogconfirmService: DialogConfirmService
    ){}

    ngOnInit(): void {
        this.clienteService.getClientes().then((clientes: Cliente[]) => {
            this.clientes = clientes;
        }).catch(err => console.log(err))
        
    }

    onDelete(cliente: Cliente): void {
        this.dialogconfirmService.confirm('Deseja excluir o cliente ' + cliente.nome + ' ?')
        .then((podeDeletar: boolean)=> {

            if (podeDeletar){
                this.clienteService.delete(cliente)
                .then(()=>{
                    this.clientes = this.clientes.filter((c: Cliente)=> c.id != cliente.id)
                }).catch(err=>{
                    console.log(err)
                })
            }
        })
    }
}