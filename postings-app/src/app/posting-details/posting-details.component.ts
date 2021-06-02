import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostingDetailsService} from "./service/posting-details.service";

@Component({
  selector: 'app-posting-details',
  templateUrl: './posting-details.component.html',
  styleUrls: ['./posting-details.component.scss']
})
export class PostingDetailsComponent implements OnInit {
  id: string | null = '';
  posting: any;
  showDetails = false;
  constructor(public dataService: PostingDetailsService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.loadPostingDetails();
  }
  loadPostingDetails(){
    this.dataService.getPostingDetails(this.id).subscribe(
      data => {
        this.posting = data.body
        this.showDetails = true;
        this.setText();
      },
      err => console.log('err ' + err),
    );
  }
  setText() {
    const jobDesc =  document.getElementById('jobDescriptionText');
    const qualification = document.getElementById('qualificationsText');
    // @ts-ignore
    jobDesc.innerHTML = this.posting.jobAd.sections.jobDescription.text;
    // @ts-ignore
    qualification.innerHTML = this.posting.jobAd.sections.qualifications.text;
  }
}
