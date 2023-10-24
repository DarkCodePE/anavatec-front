import { Component, OnInit } from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";
import {TecnicoService} from "../../services/tecnico.service";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {ToastrService} from "ngx-toastr";
import {ChamadoService} from "../../services/chamado.service";
import {ChamadoExpiredDTO} from "../../models/chamado";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: any;
  jwt = new JwtHelperService();
  ticketExpired: ChamadoExpiredDTO[] = [];
  constructor(private service: TecnicoService,
              private chamadoService: ChamadoService,
              private router: Router,
              private authService: AuthService,
              private toast: ToastrService) { }

  ngOnInit(): void {
    this.loadUser();
    this.LoadTicketExpired();
  }
  loadUser(){
    const token = localStorage.getItem('token');
    const decode = this.jwt.decodeToken(token);
    this.service.findByEmail(decode?.sub).subscribe(resp => {
      this.user = resp;
    });
  }
  LoadTicketExpired(){
    this.chamadoService.getChamadoExpired().subscribe(resp => {
      this.ticketExpired = resp;
    })
  }
  logout() {
    this.router.navigate(['/login']);
    this.authService.logout();
    this.toast.info('Logout realizado com sucesso', 'Logout');
  }
}
