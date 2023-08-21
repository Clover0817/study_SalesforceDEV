({
    searchStudents: function(component) {
        var action = component.get("c.searchStudents");
        var searchParams = component.get("v.searchParams");

        action.setParams({
            grade: searchParams.grade,
            classNumber: searchParams.classNumber,
            name: searchParams.name
        });

        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var result = response.getReturnValue();
                if (result.length === 0) {
                    this.showToast("info", "검색된 내역이 없습니다.");
                }
                component.set("v.studentList", result);
                component.set("v.totalRecords", result.length);
            } else if (state === "ERROR") {
                this.showToast("error", "오류가 발생하였습니다.");
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
