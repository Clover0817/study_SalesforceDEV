/**
 * Created by skdus on 2023-08-21.
 */

({
    searchStudents: function(component, grade, classNumber, name) {
        var action = component.get("c.searchStudents");

        action.setParams({
            grade: grade,
            classNumber: classNumber,
            name: name
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var students = response.getReturnValue();
                console.log(students);
                component.set('v.columns', [
                    {label: '학생 정보', fieldName: 'Id', type: 'button', typeAttributes: { label: {fieldName: 'Id'}, name: 'view'}},
                    {label: '학년', fieldName: 'Grade', type: 'number'},
                    {label: '반', fieldName: 'ClassNumber', type: 'number'},
                    {label: '이름', fieldName: 'Name', type: 'text'}
                ]);
                component.set("v.students", students);
            } else if (state === "ERROR") {
                this.toast("error", "오류가 발생했습니다");
            }
        });
        $A.enqueueAction(action);
    },

    showToast: function(type, message) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            type: type,
            message: message
        });
        toastEvent.fire();
    }
})
