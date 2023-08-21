({
    doInit: function(component, event, helper) {
        component.set('v.columns', [
            {label: '학생 정보', fieldName: 'Id', type: 'url', typeAttributes: {label: {fieldName: 'Name'}, target: '_blank'}},
            {label: '학년', fieldName: 'Grade__c', type: 'text'},
            {label: '반', fieldName: 'ClassNumber__c', type: 'text'}
        ]);
    },
    
    searchStudents: function(component, event, helper) {
        var searchParams = component.get("v.searchParams");
        
        if (!searchParams.grade && !searchParams.classNumber && !searchParams.name) {
            helper.showToast("error", "조건을 입력해 주세요.");
            return;
        }
        
        helper.searchStudents(component);
    },
    
    navigateToDetail: function (component, event, helper) {
        var row = event.getParam('row');
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId": row.Id,
            "slideDevName": "detail"
        });
        navEvt.fire();
    }
})
