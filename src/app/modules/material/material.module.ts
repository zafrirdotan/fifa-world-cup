import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [],
  imports: [MatAutocompleteModule, MatTableModule, MatFormFieldModule, MatDialogModule],
  exports: [MatAutocompleteModule, MatTableModule, MatFormFieldModule, MatDialogModule],
})
export class MaterialModule { }
