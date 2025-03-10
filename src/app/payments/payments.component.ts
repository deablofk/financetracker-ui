import {Component, ElementRef, inject} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-payments',
  imports: [
    FormsModule,
    NgOptimizedImage,
    ReactiveFormsModule
  ],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.css'
})
export class PaymentsComponent {
  private formBuilder = inject(FormBuilder);
  protected addTransactionForm = this.formBuilder.group({
    name: [null, Validators.required, Validators.minLength(3), Validators.maxLength(50)],
    amount: [null, [Validators.required, Validators.pattern("^\\$?[0-9]+(\\.[0-9]{2})?$")]],
    account: [null, Validators.required],
    category: [null, Validators.required],
    date: [null, Validators.required],
  });
  showForm: boolean = false;
  accounts = ['Checking', 'Saves', 'Credit Card'];
  categories = ['Food', 'Transport', 'Entertainment'];
  sortField: string = "name";
  sortDirection: string = "asc";
  data = [
    {
      name: "FastFood",
      amount: "1",
      account: "Checking",
      category: "Food",
      date: new Date().toLocaleDateString("en-US")
    },
  ];

  constructor(private eRef: ElementRef) {
  }

  setShowForm(showForm: boolean) {
    this.showForm = showForm;
  }

  handleFormSubmit() {
    console.log(this.addTransactionForm.value);
    this.showForm = false;
  }

  handleSort(field: string) {
    const newDirection = field === this.sortField && this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.sortField = field;
    this.sortDirection = newDirection;

    this.data = [...this.data].sort((a, b) => {
      if (a[field as keyof typeof a] < b[field as keyof typeof b]) {
        return newDirection === "asc" ? -1 : 1
      }
      if (a[field as keyof typeof a] > b[field as keyof typeof b]) {
        return newDirection === "asc" ? 1 : -1
      }
      return 0
    })
  }
}
