import { Component } from '@angular/core';
import { CommonServiceService } from './services/common-service.service';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public modalRef: BsModalRef;
  keys: string[]=[]; 
  public deletedData : any;
  public viewData : any;
  public updatedIdData: any
  public viewId : string;

  public openModal(template: TemplateRef<any>, id) {
    this.modalRef = this.modalService.show(template);
    this.viewId = id;
  }
  constructor(private commonService: CommonServiceService, private modalService: BsModalService){}
  public data :any;
  ngOnInit(){
  	this.commonService.dynamicTable().subscribe(tableData => {
  		console.log(tableData);
  		this.data = tableData;
      this.keys= Object.keys(this.data[0]);
  	})
  }
  updateData=()=>{

    this.commonService.updateData(this.viewId).subscribe(res=>{
      this.updatedIdData = res;
      console.log(this.updatedIdData);
    })
  }
  viewDetails=(id)=>{
    this.commonService.viewData(id).subscribe(res=>{
      this.viewData = res;
      alert(JSON.stringify(this.viewData));
    })
  }
   deleteData=(id)=>{
    this.commonService.deleteData(id).subscribe(res =>{
      this.deletedData = res;
      console.log(this.deletedData);
    })
  }
}