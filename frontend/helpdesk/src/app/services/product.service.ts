import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Chamado} from "../models/chamado";
import {API_CONFIG} from "../config/api.config";
import {Product, Solution} from "../models/Product";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) { }

    findAll(): Observable<Product[]> {
        return this.http.get<Product[]>(`${API_CONFIG.baseUrl}/product`);
    }

    findAllSolutions(): Observable<Solution[]> {
        return this.http.get<Solution[]>(`${API_CONFIG.baseUrl}/solution`);
    }
    findSolutionsByProductId(productID:number): Observable<Solution[]> {
        return this.http.get<Solution[]>(`${API_CONFIG.baseUrl}/solution/product?productID=${productID}`);
    }
    findTicketsByProductId(productID:number): Observable<Chamado[]> {
        return this.http.get<Chamado[]>(`${API_CONFIG.baseUrl}/solution/ticket?productID=${productID}`);
    }
    findSolutionsByTickets(ticketID:number): Observable<Solution[]> {
        return this.http.get<Solution[]>(`${API_CONFIG.baseUrl}/solution/tickets?ticketID=${ticketID}`);
    }

    create(productRequestDTO: any, file:File): Observable<Product[]> {
        let body = new FormData();
        const blob = new Blob([JSON.stringify(productRequestDTO)], { type: 'application/json' });
        body.append("productRequestDTO", blob);
        body.append("file",file);
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        return this.http.post<Product[]>(`${API_CONFIG.baseUrl}/product/create`, body, { headers: headers });
    }

}