({
    fnInit : function(component, event, helper) {
       console.log('recordId :: ' + component.get("v.recordId"));
       helper.getInitData(component);
    },
    
    confirmChangeClass : function(component, event, helper) {
        var selectedClass = event.getParam("value"); // Ensure that selectedClass is set correctly

        if (!selectedClass) {
            helper.showToast("error", "이동할 반을 선택해 주세요.");
            return;
        } else {
            var student = component.get("v.objStudent");
            if (student.Class__c == null || (student.Class__r.Grade__c == selectedClass.Grade__c && student.Class__r.ClassNumber__c != selectedClass.ClassNumber__c)) {
                student.Class__c = selectedClass.Id; // Update the student's class
            } else if (student.Class__c == selectedClass.Id) {
                helper.showToast("error", '이미 지정되어 있는 반입니다.');
            } else {
                helper.showToast("error", '타학년 반을 선택할 수 없습니다.');
            }
        }

        // Call the server action to confirm the class change
        var action = component.get("c.confirmChangeClass");
        action.setParams({
            recordId : component.get("v.recordId"),
            classId: selectedClass.Id // Pass the selected class Id to the server action
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var returnValue = response.getReturnValue();
                console.log(returnValue);
            }
        });
        $A.enqueueAction(action); // Enqueue the server action
        
        // Close the quick action modal
        $A.get("e.force:closeQuickAction").fire();
    },
    
    handleCancel : function(component, event, helper) {
        $A.get("e.force:closeQuickAction").fire();
    }
});
