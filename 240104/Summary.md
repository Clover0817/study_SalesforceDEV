System.DmlException: Update failed. First exception on row 0 with id a0F1y000004eT2IEAU; first error: INVALID_CROSS_REFERENCE_KEY, Owner ID: owner cannot be blank: [OwnerId]

-> objMember에 User__c 필드 값이 null이었음
objMember.User__c = UserInfo.getUserId(); 
값 채워준 후 bizCode[0].OwnerId = objMember.User__c; 하니까 오류 해결됨
