({
    fnInit: function(component, event, helper) {
        helper.getInitData(component);

        var action = component.get("c.getStudentInfo");
        var recordId = component.get("v.recordId");
        action.setParams({
            recordId: recordId
        });

        action.setCallback(this, function(response) {
            var state = response.getState();
            console.log("getStudentInfo state:: " + state);

            if (state === "SUCCESS") {
                var student = response.getReturnValue();
                component.set("v.objStudent", student);
            } else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    helper.showToast("error", "실패");
                } else {
                    helper.showToast("success", "성공");
                }
            }
        });
        $A.enqueueAction(action);
    },

    checkClass: function(component, event, helper) {
        var action = component.get("c.checkClass");
        var recordId = component.get("v.recordId");
        var selectedClassId = component.get("v.selectedClass");

        console.log('recordId:: ' + recordId);
        console.log('selectedClass:: ' + selectedClassId);

        action.setParams({
            recordId: recordId,
            selectedClassId: selectedClassId
        });

        action.setCallback(this, function(response) {
            var state = response.getState();
            console.log('checkClass state:: ' + state);

            if (state === "SUCCESS") {
                var returnValue = response.getReturnValue();
                console.log("returnValue::::: " + returnValue);

                if (returnValue == true) {
                    if (confirm('정말 반을 이동하시겠습니까?')) {
                        helper.confirmChangeClass(recordId, selectedClassId);
                    }else {
                        helper.showToast("error", "반 이동 취소");
                        $A.get("e.force:closeQuickAction").fire();
                    }
                }else {
                    helper.showToast("error", "선택 불가한 학급입니다.");
                }
            } else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    helper.showToast("error", "실패");
                } else {
                    helper.showToast("success", "성공");
                }
            }
        });
        $A.enqueueAction(action);
    },

    handleCancel : function(component, event, helper) {
        $A.get("e.force:closeQuickAction").fire();
    }
})