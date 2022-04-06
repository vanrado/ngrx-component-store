import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {UnixTime} from "../utils/unix-time";
import {ThumbPositionInfo} from "../utils/thumb-position-info";

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss']
})
export class TimeLineComponent implements OnInit, OnChanges {
  @Input()
  set date(value: UnixTime | null) {
    this._date = value;
    if (value) {
      const section = this.dateToSection(value);
      this.thumpPosition = { thumbPosition: section, sliderOffset: section };
    }
  };

  @Input()
  set sections(value: UnixTime[] | null) {
    this._sections = value;
    this.initThumbSections();
  };

  @Output()
  dateChange = new EventEmitter<UnixTime>();
  public timeSliderSections: number[] = [];

  // TODO
  thumpPosition!: ThumbPositionInfo;
  private sectionDateMap = new Map<number, UnixTime>();
  private _date: UnixTime | null = null;
  private _sections: UnixTime[] | null = [];


  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const dateChange = changes['date'];
  }

  ngOnInit(): void {
  }

  onThumbPositionChanged(thumbPosition: ThumbPositionInfo): void {
    const newDate = this.thumbPositionToUnixDate(thumbPosition.sliderOffset);
    this.dateChange.emit(newDate);
  }

  private dateToSection(date: UnixTime): number {
    let sectionKey: number = 0;

    for (const [key, value] of this.sectionDateMap.entries()) {
      if (value === date) {
        sectionKey = key;
      }
    }

    return sectionKey;
  }

  private initThumbSections(): void {
    this.timeSliderSections = [0, 0.15, 0.25, 0.5, 0.65, 0.80, 1];
    this.timeSliderSections.forEach((item, index) => {
      if (this._sections && this._sections[index]) {
        this.sectionDateMap.set(item, this._sections[index])
      }
    })
  }

  private thumbPositionToUnixDate(offset: number): UnixTime {
    return this.sectionDateMap.get(offset) ?? 0;
  }
}
