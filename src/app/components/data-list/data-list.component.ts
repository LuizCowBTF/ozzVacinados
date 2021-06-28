import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Vacinados } from '../model/vacinados';
import { VacinaServiceService } from '../services/vacina-service.service';


@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css'],
  preserveWhitespaces: true
})
export class DataListComponent implements OnInit {

  vacinados!: Vacinados[];

  vacinados$!: Observable<Vacinados[]>

  constructor(private vacinaService: VacinaServiceService) { }

  ngOnInit() {
    this.vacinados$ = this.vacinaService.pegarVacinados();
  }

}
