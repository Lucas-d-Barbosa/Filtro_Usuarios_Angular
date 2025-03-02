import { NgModule } from "@angular/core";
import { PhonePipe } from './phone.pipe';
import { DatePipe } from "@angular/common";
import { AddressPipe } from './address.pipe';
import { StatusPipe } from './status.pipe';


@NgModule({
    declarations: [
        PhonePipe,
        AddressPipe,
        StatusPipe
  ],
  imports: [
    DatePipe
  ],
    exports: [
        PhonePipe,
        AddressPipe,
        StatusPipe,
        DatePipe

    ],
})

export class PipesModule {}
