import { NgModule } from "@angular/core";
import { PhonePipe } from './phone.pipe';
import { DatePipe } from "@angular/common";
import { AddressPipe } from './address.pipe';
import { StatusPipe } from './status.pipe';
import { DashIfEmptyPipe } from './dash-if-empty.pipe';


@NgModule({
    declarations: [
        PhonePipe,
        AddressPipe,
        StatusPipe,
        DashIfEmptyPipe
  ],
  imports: [
    DatePipe
  ],
    exports: [
        PhonePipe,
        AddressPipe,
        StatusPipe,
        DatePipe,
        DashIfEmptyPipe

    ],
})

export class PipesModule {}
