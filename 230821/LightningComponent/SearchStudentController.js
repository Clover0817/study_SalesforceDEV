/**
 * Created by skdus on 2023-08-21.
 */

({
    handleSearch: function(component, event, helper) {
        var grade = component.get("v.grade");
        var classNumber = component.get("v.classNumber");
        var name = component.get("v.name");

        if (!grade && !classNumber && !name) {
            helper.showToast("error", "조건을 입력해 주세요.");
        } else {
            helper.searchStudents(component, grade, classNumber, name);
        }
    },

    navigateToRecordDetail: function(component, event, helper) {
            var action = event.getParam('action');
            var row = event.getParam('row');
            var recordId = row.Id;

            if (action.name === 'navigate') {
                var navEvt = $A.get("e.force:navigateToSObject");
                navEvt.setParams({
                    "recordId": recordId
                });
                navEvt.fire();
            }
        }
})
