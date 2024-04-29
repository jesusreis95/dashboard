import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import data from './data/promotions.json';
Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('participationsByHour') 
  participationsByHourElement!: ElementRef;

  constructor() {}
  ngAfterViewInit(): void {
    const promotionsLabels = data.map(p => p.name);
    const promotionsValues = data.map(p => p.value);
    new Chart('participationByHour', {
      type: 'bar',
      data: {
        labels: promotionsLabels,
        datasets: [{
          label: '# of Votes',
          data: promotionsValues,
          borderWidth: 1,
        }]
      },
      options: {
        indexAxis: 'y',
        
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
              display: true,
              labels: {
                  color: 'rgb(255, 99, 132)'
              }
          }
      }
      }
    });

    new Chart('participationByHour1', {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1,
          backgroundColor: 'rgba(75, 192, 192, 0.7)'
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
              display: true,
              labels: {
                  color: 'rgb(255, 99, 132)'
              }
          }
        }
      }
    });

    new Chart('participationByHour2', {
      type: 'bar',
      data: {
        labels: promotionsLabels,
        datasets: [{
          label: '# of Votes',
          data: promotionsValues,
          borderWidth: 1,
          backgroundColor: 'rgba(54, 162, 235, 0.7)'
        }]
      },
      options: {
        responsive: true,
        indexAxis: 'y',
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
              display: true,
              labels: {
                  color: 'rgb(255, 99, 132)'
              }
          }
        }
      }
    });
  }

  ngOnInit(): void {
  }



}
