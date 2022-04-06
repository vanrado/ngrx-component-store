import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {TimeSliderStore} from "./state/time-slider.store";
import {UnixTime} from "./utils/unix-time";
import {ThumbPositionInfo} from "./utils/thumb-position-info";
import {tap} from "rxjs";

@Component({
  selector: 'app-time-picker-slider',
  templateUrl: './time-picker-slider.component.html',
  styleUrls: ['./time-picker-slider.component.scss'],
  providers: [TimeSliderStore],
})
export class TimePickerSliderComponent implements OnInit, OnChanges {
  @Input()
  value: UnixTime | null = null; // unix integer
  @Output()
  valueChange = new EventEmitter<number>();
  date$ = this.timeSliderStore.date$.pipe(tap(newDate => {
    this.valueChange.emit(newDate)
  }));
  sections$ = this.timeSliderStore.sections$;

  constructor(private timeSliderStore: TimeSliderStore) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const valueChange = changes['value'];
    // if (valueChange) {
    //   this.onValueChangeHandler(valueChange.currentValue);
    // }
  }

  private onValueChangeHandler(value: UnixTime): void {
    console.log('onValueChangeHandler');
    this.timeSliderStore.setDateFromDatepicker(value);
  }

  onDatePickerChange(date: UnixTime): void {
    console.log('onTimeLineChange');
    this.timeSliderStore.setDateFromDatepicker(date);
    this.timeSliderStore.patchState({ date });
  }

  onTimeLineChange(date: UnixTime): void {
    console.log('onTimeLineChange');
    this.timeSliderStore.setDateFromTimeLine(date);
  }
}
