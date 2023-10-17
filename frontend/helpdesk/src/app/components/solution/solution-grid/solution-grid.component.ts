import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../services/product.service";
import {DomSanitizer} from "@angular/platform-browser";
import {MatDialog} from "@angular/material/dialog";
import {Solution} from "../../../models/Product";
import {ActivatedRoute, Router} from "@angular/router";
import {Chamado} from "../../../models/chamado";
import {Observable} from "rxjs";
import {SolutionStore} from "../../../store/solution.store";

@Component({
  selector: 'app-solution-grid',
  templateUrl: './solution-grid.component.html',
  styleUrls: ['./solution-grid.component.css']
})
export class SolutionGridComponent implements OnInit {
  ELEMENT_DATA_TICKETS: Chamado[] = [];
  solutions$:Observable<Solution[]> = this.solutionStore.state$;
  constructor(private service: ProductService,
              private _sanitizer: DomSanitizer,
              public dialog: MatDialog,
              private solutionStore: SolutionStore,
              private route: ActivatedRoute,
              private router: Router  ) { }

  ngOnInit(): void {
    const productID = this.route.snapshot.paramMap.get('id');
    console.log(productID);
    this.findTicketsByProductId(Number(productID));
  }
  findTicketsByProductId(productID:number): void {
    this.service.findTicketsByProductId(productID).subscribe(resp => {
      this.ELEMENT_DATA_TICKETS = resp;
    })
  }
}
