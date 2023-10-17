import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../services/product.service";
import {DomSanitizer} from "@angular/platform-browser";
import {MatDialog} from "@angular/material/dialog";
import {Solution} from "../../../models/Product";
import {SolutionStore} from "../../../store/solution.store";
import {Observable} from "rxjs";
import {Chamado} from "../../../models/chamado";

@Component({
  selector: 'app-solution-detail',
  templateUrl: './solution-detail.component.html',
  styleUrls: ['./solution-detail.component.css']
})
export class SolutionDetailComponent implements OnInit {
  ELEMENT_DATA_SOLUTIONS: Solution[] = [];
  @Input() solution: Solution | null = null;

  constructor(private service: ProductService,
              private _sanitizer: DomSanitizer,
              public dialog: MatDialog,
              private solutionStore: SolutionStore,
              private route: ActivatedRoute,
              private router: Router ) {

  }

  ngOnInit(): void {
    //validate exist solution
    const ticketID = this.route.snapshot.paramMap.get('id');
    //this.findTicketsByProductId(Number(ticketID));
  }
  decodeImage(base64Image: string){
    return this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
        + base64Image);
  }
}
