import { Component, OnInit } from '@angular/core';
import {TecnicoService} from "../../../services/tecnico.service";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  //TODO USER STORE
  constructor(private service: TecnicoService) { }

  ngOnInit(): void {
  }
  /*getProfile(){
    this.service.getProfile().subscribe(resp => {
        console.log(resp);
    });
  }*/
}
