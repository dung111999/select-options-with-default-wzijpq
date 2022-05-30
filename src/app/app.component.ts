import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  OrganizationList: any[];
  projectinformationFrm: FormGroup;
  msg;

  constructor(private _service: DataService) {}

  ngOnInit() {
    this.projectinformationFrm = new FormGroup({
      abc: new FormControl(),
    });
    this.LoadListforProjectManager();
  }

  onSelectOrgEdit(value) {
    console.log(value);
  }

  LoadListforProjectManager(): void {
    try {
      this._service.get(URL).subscribe(
        (data) => {
          this.OrganizationList = data;
        },
        (error) => (this.msg = <any>error)
      );
    } catch (e) {
      // this._errorLogService.LogError(e);
    }
  }
}
