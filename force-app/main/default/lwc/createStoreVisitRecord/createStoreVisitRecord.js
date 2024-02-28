import { LightningElement, api } from "lwc";

import NAME_FIELD from "@salesforce/schema/Store_Visit__c.Name";


export default class CreateStore_Visit__cRecord
extends LightningElement {
  @api recordId;
  @api objectApiName;

  nameField = NAME_FIELD;
	

  name = "";
	

  onSuccess(event) {
    console.log("Created record", event.detail);
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
