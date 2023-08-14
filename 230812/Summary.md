1. Apex Trigger- new/old, before/after 이해

Trigger.old: Returns a list of the old versions of the sObject records. Note that this sObject list is only available in update and delete triggers. Trigger.new will have current details of the record getting inserted or updated, where as trigger.old will have the existing details for a record before it is updated or deleted.

Trigger.OldMap: A map of IDs to the old versions of the sObject records. Note that this map is only available in update and delete triggers.

Trigger.new: Trigger.new is a list of sobjects. If we are talking about a DML operation on account, then trigger.new is simply a list of accounts. Similarly when used in contact trigger, trigger.new becomes a list of contacts.

Trigger.newMap: Trigger.newMap is a map with key as ID of the record and value as the record itself. Just like the above explanation, in case of accounts when we say trigger.newMap we are talking about a map of key-value pairs where the key is the account ID and the value is the account record itself.

<Recommedation>
Use Before Trigger:
In the case of validation check in the same object.
Insert or update the same object.

Use After Trigger:
Insert/Update related object, not the same object.
Notification email.
We cannot use After trigger if we want to update a record because it causes read only error. This is because, after inserting or updating, we cannot update a record.

*주의)
The automatic updating (without DML) behavior of triggers is only present in before triggers, and only for the records being triggered. For anything else, you need to use DML.

If you try to update a record in a trigger context variable in an after event, you'll get the error
System.FinalException: Record is read-only


참고) https://developer.salesforce.com/forums/?id=9060G000000Xh7aQAC
