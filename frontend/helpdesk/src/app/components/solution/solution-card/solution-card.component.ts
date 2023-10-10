import {Component, Input, OnInit} from '@angular/core';
import {Chamado} from "../../../models/chamado";
import {Solution} from "../../../models/Product";
import {ProductService} from "../../../services/product.service";
import {DomSanitizer} from "@angular/platform-browser";
import {MatDialog} from "@angular/material/dialog";
import {SolutionStore} from "../../../store/solution.store";

@Component({
  selector: 'app-solution-card',
  templateUrl: './solution-card.component.html',
  styleUrls: ['./solution-card.component.css']
})
export class SolutionCardComponent implements OnInit {
  @Input() ticket: Chamado;
  ELEMENT_DATA_SOLUTIONS: Solution[] = [];
  constructor(private service: ProductService,
  private solutionStore: SolutionStore,
  private _sanitizer: DomSanitizer,
  public dialog: MatDialog,) { }

  ngOnInit(): void {
  }


  findTicketsByProductId(ticketID:number): void {
    this.service.findSolutionsByTickets(ticketID).subscribe(resp => {
      console.log("TEST->",ticketID)
      this.ELEMENT_DATA_SOLUTIONS = resp;
      this.solutionStore.saveState(resp);
      //this.dataSource.paginator = this.paginator;
    })
  }
}
