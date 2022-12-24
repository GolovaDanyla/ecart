import { Component, Input } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);
@Component({
  selector: 'swipelist',
  templateUrl: './swipelist.component.html',
  styleUrls: ['./swipelist.component.scss']
})
export class SwipelistComponent {
  @Input() items: any = [];
}
