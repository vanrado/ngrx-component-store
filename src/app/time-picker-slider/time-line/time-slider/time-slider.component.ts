import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ThumbPositionInfo} from "../../utils/thumb-position-info";

@Component({
  selector: 'app-time-slider',
  templateUrl: './time-slider.component.html',
  styleUrls: ['./time-slider.component.scss']
})
export class TimeSliderComponent implements OnInit {
  @Input()
  thumpPosition: ThumbPositionInfo | null = null;
  @Input()
  sections: number[] = [];
  @Output()
  thumpPositionChange = new EventEmitter<ThumbPositionInfo>();

  constructor() {
  }

  ngOnInit(): void {
  }

  changePosition(section: number): void {
    this.thumpPositionChange.emit({ thumbPosition: this.thumpPosition?.thumbPosition ?? 0, sliderOffset: section });
  }
}
