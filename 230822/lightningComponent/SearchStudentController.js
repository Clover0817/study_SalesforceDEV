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

    navigateToRecordDetail : function(component, event, helper) {
        var action = event.getParam("action");
            var row = event.getParam("row");

        if (action.name === "view") {
            var navEvt = $A.get("e.force:navigateToSObject");
            navEvt.setParams({
                recordId: row.Id,
                slideDevName: "detail"
            });
            navEvt.fire();
        }
    }

})
