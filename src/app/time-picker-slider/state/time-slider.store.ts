import {Injectable} from "@angular/core";
import {ComponentStore} from "@ngrx/component-store";
import {Observable} from "rxjs";
import {UnixTime} from "../utils/unix-time";
import {TimeSliderService} from "../utils/time-slider.service";

interface TimeSliderState {
  date: UnixTime;
  sections: UnixTime[];
}

@Injectable()
export class TimeSliderStore extends ComponentStore<TimeSliderState> {
  readonly date$: Observable<UnixTime> = this.select(state => state.date);
  readonly sections$: Observable<UnixTime[]> = this.select(state => state.sections);

  constructor(private timeSliderService: TimeSliderService) {
    super({date: 0, sections: []});
  }

  readonly setDateFromDatepicker = this.updater((state, date: UnixTime) => ({
    ...state,
    date,
    sections: this.timeSliderService.getSections(date),
  }));

  readonly setDateFromTimeLine = this.updater((state, date: UnixTime) => ({
    ...state,
    date,
  }));
}
