import { NgModule } from "@angular/core";
import { PhonePipe } from './phone.pipe';
import { DatePipe } from "@angular/common";
import { AddressPipe } from './address.pipe';


@NgModule({
    declarations: [
        PhonePipe,
        AddressPipe
  ],
  imports: [
    DatePipe
  ],
    exports: [
        PhonePipe,
        AddressPipe,
        DatePipe
    ],
})

export class PipesModule {}
