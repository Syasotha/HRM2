import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-interview-paneldetails',
  templateUrl: './add-interview-paneldetails.component.html',
  styleUrls: ['./add-interview-paneldetails.component.css']
})
export class AddInterviewPaneldetailsComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  editField: string;
  personList: Array<any> = [
    { id: 1, name: 'Aurelia Vega', age: 30, companyName: 'Deepends', country: 'Spain' },
   
  ];

  awaitingPersonList: Array<any> = [
    { id: 2, name: 'Guerra Cortez', age: 45, companyName: 'Insectus', country: 'USA' },
    { id: 3, name: 'Guadalupe House', age: 26, companyName: 'Isotronic', country: 'Germany' },
    { id: 4, name: 'Aurelia Vega', age: 30, companyName: 'Deepends', country: 'Spain' },
    { id: 5, name: 'Elisa Gallagher', age: 31, companyName: 'Portica', country: 'United Kingdom'},
    { id: 6, name: 'George Vega', age: 28, companyName: 'Classical', country: 'Russia'},
    { id: 7, name: 'Mike Low', age: 22, companyName: 'Lou', country: 'USA' },
    { id: 8, name: 'John Derp', age: 36, companyName: 'Derping', country: 'USA' },
    { id: 9, name: 'Anastasia John', age: 21, companyName: 'Ajo', country: 'Brazil' },
    { id: 10, name: 'John Maklowicz', age: 36, companyName: 'Mako', country: 'Poland' },
  ];

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.personList[id][property] = editField;
  }

  remove(id: any) {
    this.awaitingPersonList.push(this.personList[id]);
    this.personList.splice(id, 1);
  }

  add() {
    if (this.awaitingPersonList.length > 0) {
      const person = this.awaitingPersonList[0];
      this.personList.push(person);
      this.awaitingPersonList.splice(0, 1);
    }
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }
 

}
