import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {UnixTime} from "../utils/unix-time";
import {DateTime} from "luxon";

@Component({
  selector: 'app-datetime-picker-box',
  templateUrl: './datetime-picker-box.component.html',
  styleUrls: ['./datetime-picker-box.component.scss']
})
export class DatetimePickerBoxComponent implements OnInit, OnChanges {
  @Input()
  date: UnixTime | null = null;
  @Output()
  dateChange = new EventEmitter<UnixTime>();
  @Input()
  dates: DateTime[] | null = null;
  format: string = 'dd.M.yyyy';

  constructor() {
  }

  ngOnInit(): void {
  }

  changeDate(currentDate: DateTime) {
    this.dateChange.emit(currentDate.toUnixInteger());
  }

  ngOnChanges(changes: SimpleChanges): void {
    const newDate = changes['date']
    if (newDate) {
      const newDateTime = DateTime.fromSeconds(newDate.currentValue);
      if (this.dates == null) {
        this.dates = [
          newDateTime.minus({day: 3}),
          newDateTime.minus({day: 2}),
          newDateTime.minus({day: 1}),
          newDateTime,
          newDateTime.plus({day: 1}),
          newDateTime.plus({day: 2}),
          newDateTime.plus({day: 3})
        ];
      }
    }
  }

  formatUnixDate(): string {
    return this.date ? DateTime.fromSeconds(this.date).toFormat(this.format) : '';
  }
}
