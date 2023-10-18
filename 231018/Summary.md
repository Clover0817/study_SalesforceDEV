Big Object<br/>
<br/>
bid data<br/>
<br/>
Big Object allows you to store and manage a massive amount of data on the salesforce platform<br/>
Big Object provide consistent performance for a bilion records or more/accessible with a standard set of APIs<br/>
<br/>
Standard Big Objects-FieldHistoryArchive allows you to store up to 10 years' worth of archived field history data/helping you comply with industry regulations related to auditing and data retention<br/>
<br/>
Custom Big Objects-defined and deployed in Setup/create in setup and set its definition, fields, index.<br/>
fields defined in a big object's index determine the big object's identity and its ability to be queried.<br/>
<br/>
Usage<br/>
You can use big object to store different kinds of data<br/>
But it is created to tackle a few specific scenarios<br/>
-360View of the Customer: lot of customer information like order/billing information->track every detail by using custom big object<br/>
-Auditing and Tracking<br/>
-Historical Archive<br/>
-Querying Big objects: query big objects using standard SOQL with the Bulk API/batch Apex<br/>
*Bulk API can query results larger than 100k records which is optimal for reporting<br/>
*If you need to manipulate data->Batch Apex is better option. <br/>
<br/>
Caution<br/>
-Big Objects support only object and field permissions<br/>
-Once you've deployed a big object, you can't edit or delete the index<br/>
-SOQL relationship queries are based on a lookup field from a big object to a standard/custom object in the select field list<br/>
-Big Objects support custom Salesforce lightning and Visualforce components rather than standard UI elements<br/>
-create upto 100 big objects per org. the limits are similar to the limits on custom objects and depend on org's license type<br/>
-To support the scale of data in a big object, you can't use triggers, flows, processes, salesforce app<br/>
<br/>
Big Object Definition details<br/>
label: used to refer to the object in the user interface<br/>
plural label<br/>
