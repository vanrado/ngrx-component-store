import { Component, OnInit } from '@angular/core';
import {DateTime} from "luxon";
import {TimeSliderStore} from "../time-picker-slider/state/time-slider.store";

@Component({
  selector: 'app-consumer-a',
  templateUrl: './consumer-a.component.html',
  styleUrls: ['./consumer-a.component.scss'],
})
export class ConsumerAComponent implements OnInit {
  dateValue = DateTime.now().toUnixInteger();
  dateValue2 = DateTime.now().toUnixInteger();
  dateValue3 = DateTime.now().toUnixInteger();
  dateValue4 = DateTime.now().toUnixInteger();

  constructor() { }

  ngOnInit(): void {
  }

  onDateValueChange(event: number): void {
    console.log('new date', event, this.dateValue);
  }
}
