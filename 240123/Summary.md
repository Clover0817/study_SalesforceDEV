Trigger에서

beforeInsert의 경우 Id값이 아직 배정되기 이전에 도는 Trigger이기 때문에,

해당 Object의 Id값을 바로 이용하고 싶을 때는
afterInsert를 써야 한다!
