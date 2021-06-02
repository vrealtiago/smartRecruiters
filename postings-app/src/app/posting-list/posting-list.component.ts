import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";
import {PostingListService} from "./service/posting-list.service";
import {Router} from "@angular/router";
import {Posting} from "./model/posting";

@Component({
  selector: 'app-posting-list',
  templateUrl: './posting-list.component.html',
  styleUrls: ['./posting-list.component.scss']
})
export class PostingListComponent implements OnInit {
  countries: any[] = []
  departments: any[] = []
  postings = new Posting();
  countryControl = new FormControl();
  departmentControl = new FormControl();
  filteredCountries: Observable<any[]> | undefined;
  filteredDepartments: Observable<any[]> | undefined;
  ctrySelected = '';
  depSelected = '';
  showLoading = false;

  constructor(public dataService: PostingListService, private router: Router) {
    this.loadItems();
  }

  ngOnInit(): void {
    this.loadPosting();
  }
  loadItems(){
    this.dataService.getDepartmentList().subscribe(
      data => {
        if(data.body.totalFound !== 0) {
          this.departments = data.body.content
        }
        this.filteredDepartments = this.departmentControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value, 'department'))
        );
      },
      err => console.log('err ' + err),
    );
    this.dataService.getCountryList().subscribe(
      data => {
        if(data.body?.length !== 0) {
          this.countries = data.body
        }
        this.filteredCountries = this.countryControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value, 'country'))
        );
      },
      err => console.log('err ' + err),
    );
  }
  loadPosting(){
    this.showLoading = true;
    this.postings = new Posting();
    this.dataService.getPostingList(this.ctrySelected, this.depSelected).subscribe(
      data => {
        this.postings = data.body;
        // if(data.body.totalFound !== 0) {
        //   this.postings = data.body.content
        // }
        this.showLoading = false;
      },
      err => {
        console.log('err ' + err)
        this.showLoading = false;
      },
    );
  }
  private _filter(value: any, key: string): any[] {
    const filterValue =  typeof value == 'string' ? (value == 'All' ? '' : value.toLowerCase()): value;
    if(key == 'country') {
      return this.countries.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
    } else {
      return this.departments.filter(option => option.label.toLowerCase().indexOf(filterValue) === 0);
    }
  }
  getDepTxt(department: any) {
    if(department !== null){
      return department == '' ? '' : department.label;
    }
  }
  getCtryTxt(ctry: any) {
    if(ctry !== null){
      return ctry == '' ? '' : ctry.name;
    }
  }
  selectedOption(event: any, key: string) {
    if(key == 'country') {
      this.ctrySelected = typeof event.option.value == 'string' ? '' : event.option.value.alpha2Code.toLowerCase()
    } else {
      this.depSelected = typeof event.option.value == 'string' ? '' :  event.option.value.id
    }
    this.loadPosting();
  }
  selectedPosting(id: string){
    console.log(id);
    this.router.navigate(['/posting-details', id])
  }
}
