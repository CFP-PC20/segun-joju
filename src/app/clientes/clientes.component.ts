import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes = [];

  constructor(public rest:RestService) { }

  ngOnInit(): void {
    this.get();
  }

  get () {
    this.clientes = [];
    this.rest.get().subscribe((data) => {
      this.clientes = data.results;
    });
  }
}
