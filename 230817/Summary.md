intellij-> anonymous Apex(수동 테스트)
Database.executeBatch(new PersonalInfoDelete_ba(), 배치 사이즈 숫자);

String CRON = '0 02 14 * * ? *';
System.schedule('졸업생 개인 정보 파기', CRON, new PersonalInfoDelete_sc());
