import {Component, OnInit, ViewChild} from '@angular/core';
import {ApexChart, ApexNonAxisChartSeries, ApexResponsive, ChartComponent} from "ng-apexcharts";
import {ChamadoService} from "../../services/chamado.service";
import {ChamadoTop} from "../../models/chamado";


export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  top: ChamadoTop;
  constructor(private chamadoService: ChamadoService) {
    this.findTopTecnico();
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Rosa", "Orlando", "Kimberly", "Hilda", "fabio"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

  }
  findTopTecnico(){
    this.chamadoService.getTopTechnician().subscribe(resp => {
     this.top = resp;
    });
  }
  ngOnInit(): void {
  }

}
