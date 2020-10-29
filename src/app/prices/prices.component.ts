import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {

  panda;
  commodities = [];
  fiats = [];
  indexes = [];
  cryptocoins = [];
  items= [];

  constructor(private apiService: ApiService)  {}

  public ngOnInit() {
    this.apiService.displayData()
      .subscribe((data:any[]) => {
        this.panda = data;
        this.commodities = this.panda.data.attributes.commodities;
        this.fiats = this.panda.data.attributes.fiats.slice(0, 4);
        this.indexes = this.panda.data.attributes.indexes;
        this.cryptocoins = this.panda.data.attributes.cryptocoins.slice(0, 29);
        this.items = this.commodities.concat(this.indexes, this.cryptocoins);
      })
  }
}
