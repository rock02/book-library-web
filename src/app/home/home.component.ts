import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookByCategory } from '../book/server/book-by-category';
import { BookService } from '../book/server/book.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public booksCategories!: BookByCategory[];
    public data: any;

    public chartOptions: any;

    public subscription!: Subscription;
    public labels!: string[];
    public quantities: number[] = [];

    constructor(private bookService: BookService) { }

    async ngOnInit() {
        this.bookService.getBooksByCategories().subscribe(
            response => {
              this.booksCategories = response!;
              this.quantities = this.booksCategories.map((b)=>b.quantity);
              this.labels = this.booksCategories.map((b)=>b.category);
              this.mount(this.labels, this.quantities);
              this.updateChartOptions();
            }
        )
    }

    mount(labels:string[], quantities:number[]) {
        this.data = {
            labels: labels,
            datasets: [
                {
                    data: quantities,
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }
            ]
        };
    }

    updateChartOptions() {
        this.chartOptions = this.getDarkTheme();
    }

    getLightTheme() {
        return {
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            }
        }
    }

    getDarkTheme() {
        return {
            plugins: {
                legend: {
                    labels: {
                        color: '#585a5c'
                    }
                }
            }
        }
    }

}
