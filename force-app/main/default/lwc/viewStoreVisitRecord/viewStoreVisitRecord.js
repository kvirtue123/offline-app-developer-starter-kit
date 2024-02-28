import { LightningElement, api, wire } from "lwc";
import { getRecord } from "lightning/uiRecordApi";

import NAME_FIELD from "@salesforce/schema/Store_Visit__c.Name";


export default class ViewStore_Visit__cRecord 
extends LightningElement {
  @api recordId;
  @api objectApiName;

  get fields() {
    return [
      NAME_FIELD, 
    ];
  }

  @wire(getRecord, { recordId: "$recordId", fields: "$fields" })
  record;

  get name() {
    return this.record?.data?.fields?.Name?.value ?? "";
  }
}
