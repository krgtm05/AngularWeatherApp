import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {

  apiKey ='61ea19a2463475ee0c41f75bdad5b2ff'
  constructor(private http:HttpClient) { }

  getWeather(city:string){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`)
  }


  // getWeatherData(cityName : string){
  //   this.http.get(environment.weatherApiBaseUrl,{
  //     headers: new HttpHeaders()
  //     .set(environment.XRapidAPIHostHeaderName,environment.XRapidAPIHostValue)
  //     .set(environment.XRapidAPIHostHeaderName,environment.XRapidAPIKeyValue),
  //     params: new HttpParams()
  //     .set('q',cityName)
  //     .set('units','metric')
  //     .set('mode','json')
  //   })
  // }
}
