import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../interfaces';
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  // template: `<p>current-weather works!</p>`,
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  current: ICurrentWeather;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
    this.weatherService.getCurrentWeather('Bethesda', 'US')
      .subscribe((data) => this.current = data);

    // this.current = {
    //   city: 'Bethesda',
    //   country: 'US',
    //   date: new Date(),
    //   image: 'assets/img/sunny.svg',
    //   temperature: 72,
    //   description: 'sunny'
    // };
  }

}
