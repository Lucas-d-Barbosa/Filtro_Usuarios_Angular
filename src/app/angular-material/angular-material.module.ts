import { NgModule } from "@angular/core";

import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatNativeDateModule, provideNativeDateAdapter} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatSelectModule } from '@angular/material/select'; 

import { MatButtonModule } from '@angular/material/button';

import { MatTableModule } from '@angular/material/table';
@NgModule({
    imports: [
        MatListModule,
        MatDividerModule, 
        MatFormFieldModule, 
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatButtonModule,
        MatTableModule
        
    ],
    exports: [
        MatListModule,
        MatDividerModule, 
        MatFormFieldModule, 
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatButtonModule,
        MatTableModule


    ],
    providers: [
        provideNativeDateAdapter()
    ]
})
export class AngularMaterialModule{}