import { Component } from '@angular/core';
import {IFilterOptions} from "../../interfaces/IFilterOptions";
@Component({
  selector: 'app-filter',
  standalone: false,
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  // foods = [
  //   {value: "value", viewValue: "Ativo"},
  //   {value: "value", viewValue: "Inativo"},

  // ]

  filterOptions: IFilterOptions = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined
  };


  statusList = [
    { description: "Ativo", value: true },
    { description: "Inativo", value: false }
  ]
}
