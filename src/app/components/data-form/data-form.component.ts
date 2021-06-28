import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { VacinaServiceService } from '../services/vacina-service.service';
import { Vacinados } from './../model/vacinados';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css'],
  preserveWhitespaces: true
})
export class DataFormComponent implements OnInit {

  formVacinados!: FormGroup

  vacinado = {} as Vacinados;

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private vacinaService: VacinaServiceService
    ) { }

  ngOnInit() {
    this.formVacinados = this.formBuilder.group({
      id: [''],
      document_id: [''],
      paciente_id: [''],
      paciente_idade: [''],
      paciente_datanascimento: [''],
      paciente_enumsexobiologico: [''],
      paciente_racacor_codigo: [''],
      paciente_racacor_valor: [''],
      paciente_endereco_coibgemunicipio: [''],
      paciente_endereco_nmmunicipio: [''],
      paciente_endereco_nmpais: [''],
      paciente_endereco_uf: [''],
      paciente_endereco_cep: [''],
      paciente_nacionalidade_enumnacionalidade: [''],
      estabelecimento_valor: [''],
      estabelecimento_razaosocial: [''],
      estabelecimento_nofantasia: [''],
      estabelecimento_municipio_codigo: [''],
      estabelecimento_municipio_nome: [''],
      estabelecimento_uf: [''],
      vacina_grupoatendimento_codigo: [''],
      vacina_grupoatendimento_nome: [''],
      vacina_categoria_codigo: [''],
      vacina_categoria_nome: [''],
      vacina_lote: [''],
      vacina_fabricante_nome: [''],
      vacina_dataaplicacao: [''],
      vacina_descricao_dose: [''],
      vacina_codigo: [''],
      vacina_nome: [''],
    });

  }

  onSubmit() {
    console.log(this.formVacinados.value);

  }

  salvarVacinado(form: FormGroup) {
    if(this.vacinado.document_id !== undefined) {
      this.vacinaService.atualizaVacinados(this.vacinado).subscribe(() => {
        this.cleanForm(form);
      });
    }
    else
    {
      this.vacinaService.salvarVacinados(this.vacinado).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  pegarVacinados() {
    this.vacinaService.pegarVacinados().subscribe((vacinados: Vacinados[]) => {
      this.vacinado = this.vacinado;
    });
    console.log(this.vacinado);
  }

  apagarVacinado(vacinado: Vacinados) {
    this.vacinaService.apagarVacinados(vacinado).subscribe(() => {
      this.pegarVacinados();
    });
  }

  editarVacinado(vacinado: Vacinados) {
    this.vacinado = { ...vacinado };
  }

  cleanForm(formVacinado: FormGroup) {
    this.pegarVacinados();
    this.formVacinados.reset();
    this.vacinado = {} as Vacinados;
  }


}

