1. Difference Between Lightning Component and Lightning Web Component<br/>
   <img width="440" alt="image" src="https://github.com/Clover0817/study_SalesforceDEV/assets/77714668/4b757646-525c-4445-a9ef-507525c66a2c"> <br/>
<br/>
2. Lightning Web Component를 Tab에 추가하고 싶을 때<br/>
   <br/>
lwc js-meta.xml 파일에 <br/>
<br/>
<?xml version="1.0" encoding="UTF-8"?><br/>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>47.0</apiVersion>
    <isExposed>true</isExposed>
    <targets>
        <target>lightning__Tab</target>
    </targets>
</LightningComponentBundle>
<br/>
추가해줘야 함<br/>
<br/>
참고 링크: https://sfdcrocks247.com/lightning-web-component/how-to-create-tab-for-lwc-in-salesforce/
