import { LightningElement, api, wire } from "lwc";
import { getRecord } from "lightning/uiRecordApi";

import NAME_FIELD from "@salesforce/schema/Store_Visit__c.Name";


export default class EditStore_Visit__cRecord 
extends LightningElement {
  @api recordId;
  @api objectApiName;

  nameField = NAME_FIELD;
	

  @wire(getRecord, { recordId: "$recordId", fields: [NAME_FIELD] })
  record;

  get name() {
    return this.record?.data?.fields?.Name?.value || "";
  }

  onSuccess(event) {
    console.log("Updated record", event.detail);
    // Dismiss modal on success
    this.dismiss(event);
  }

  dismiss(event) {
    console.log("Dismissing modal", event.detail);
    // TODO: Can we use window.history.back() here?
    // eslint-disable-next-line no-restricted-globals
    history.back();
  }
}
