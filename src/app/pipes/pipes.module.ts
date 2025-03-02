import { NgModule } from "@angular/core";
import { PhonePipe } from './phone.pipe';
import { DatePipe } from "@angular/common";


@NgModule({
    declarations: [
        PhonePipe
  ],
  imports: [
    DatePipe
  ],
    exports: [
        PhonePipe,
        DatePipe
    ],
})

export class PipesModule {}
