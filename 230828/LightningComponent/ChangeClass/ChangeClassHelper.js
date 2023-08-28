({
    getInitData: function(component) {
        var action = component.get("c.getInitData");

        action.setCallback(this, function(response) {
            var state = response.getState();

            if (state === "SUCCESS") {
                var returnValue = response.getReturnValue();

                var options = returnValue.map(function(item) {
                    return { label: item.Name, value: item.Id };
                });

                component.set("v.options", options);
            } else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    this.showToast("error", "실패");
                } else {
                    this.showToast("success", "성공");
                }
            }
        });

        $A.enqueueAction(action);
    },

    confirmChangeClass: function(recordId, selectedClassId) {
        var action = component.get("c.confirmChangeClass");

        action.setParams({
            recordId: recordId,
            selectedClassId: selectedClassId
        });

        action.setCallback(this, function(response) {
            var state = response.getState();

            if (state === "SUCCESS") {
                var returnValue = response.getReturnValue();
                if (returnValue == true) {
                    this.showToast("success", "반 이동 성공");
                }else {
                    this.showToast("error", "반 이동 실패");
                }
                $A.get("e.force:closeQuickAction").fire();
            } else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    this.showToast("error", "실패");
                } else {
                    this.showToast("success", "성공");
                }
            }
        });
        $A.enqueueAction(action);
    },

     showToast: function(type, message) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "type": type,
            "message": message
        });
        toastEvent.fire();
    }
})