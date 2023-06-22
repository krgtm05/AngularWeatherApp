import { WeatherserviceService } from './services/weatherservice.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weatherapp';
  weatherData :any;
  temp!:number;
  city! : string;
  windSpeed!: number;
  constructor(private WeatherSerice:WeatherserviceService){

  }
  ngOnInit(){
    this.city = 'London';
    this.getWeather();
  }

  getWeather(){
    this.WeatherSerice.getWeather(this.city)
    .subscribe(data =>{
      this.weatherData = data;
      this.temp = this.weatherData.main.temp;
      this.windSpeed = this.weatherData.wind.speed;
      console.log(data);
    })
  }

}
