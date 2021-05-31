import { Component, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-fetch-data",
  templateUrl: "./fetch-data.component.html"
})
export class FetchDataComponent {
  forecasts: IWeatherForecast[];

  constructor(http: HttpClient) {
    http.get<IWeatherForecast[]>("http://localhost:4202/weatherforecast").subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }
}

interface IWeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
