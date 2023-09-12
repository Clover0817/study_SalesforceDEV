Upsert Operation: you can either insert or update an existing record in one call.<br/>
To determine whether a record already exists, the upsert statement or Database method uses the record's ID as the key to match records, a custom externalID field, or a standard field with the idLookup attribute set to true.<br/>
<br/>
If the key is not matched, then a new object record is created.<br/>
If the key is matched once, then the existing object record is updated.<br/>
If the key is matched multiple times, then an error is generated and the object record is neither inserted or updated.<br/>
