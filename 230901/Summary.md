List<String> s = List<String>{~} -> new<br/>
<br/>
Lightning Component framework benefit<br/>
-provides an event-driven architecture for better decoupling between components<br/>
-promotes faster development using out-of-box components that are suitable for desktop and mobile devices<br/>
<br/>
Prevent recursive trigger: use a static Boolean variable<br/>
<br/>
need to be defined with values in the <apex:page> tag: action, standardController, extensions<br/>
<br/>
a developer tries to change the API name of a field that is referenced in an Apex test class<br/>
-The API name is not changed and there are no other impacts -> If a variable is used in any apex class, its API name cannot be changed.<br/>
<br/>
Apex Trigger required instead of a Process Builder Process<br/>
-When an action needs to be taken on a delete or undelete, or before a DML operation is executed<br/>
<br/>
benefit of using an after insert trigger over using a before insert trigger<br/>
-An after insert trigger allows a developer to insert other objects that reference the new record.<br/>
<br/>
uses a custom object called Machinery to manage the usage and maintenance of its cranes and other machinery. manager wants to be able to assign machinery to different <br/>constructions jobs, and track the dates and costs associated with each job. More than one piece of machinery can be assigned to one construction job<br/>
= N machinery -> 1 construction job<br/>
One construction job can have many machineries ("More than one piece of machinery can be assigned to one construction job").<br/>
One Machinery can be assigned to many jobs ("The manager wants to be able to assign machinery to different constructions jobs")<br/>
-> Create a junction object with Master-Detail Relationship to both the Machinery object and the Construction Job object.<br/>
<br/>
List<account> accounts = [Select ID, Name, (Select ID, Name fption due to the number of contacts.rom Contacts) from Account] ;<br/>
SOQL query row limit exception due to the number of contacts.<br/>
SOQL query row limit exception due to the number of accounts.<br/>
ex) System.LimitException: Too many query rows: 50001<br/>
