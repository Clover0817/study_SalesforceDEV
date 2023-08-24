({
    fnInit : function(component, event, helper){
        component.set("v.vfPageUrl", "/apex/PrintStudentList2?recordId=" + component.get("v.recordId"));
    },

    fnCancel : function(component, event, helper){
        //취소(창닫기)
        $A.get("e.force:closeQuickAction").fire();
    }
});
