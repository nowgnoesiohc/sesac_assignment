const objs = [{ id: 1 }, { name: "Hong" }, { addr: "Seoul", id: 5 }];
// ⇒⇒⇒ {id: 5, name: 'Hong', addr: 'Seoul'}

// assign은 잘 안씁니다
const obj_nope = bojs.reduce((acc, user) => Object.assign(acc, user), {});
const obj = bojs.reduce((acc, user) => ({ ...acc, ...user }), {});

// assert.deepStrictEqual(obj, { id: 5, name: 'Hong', addr: 'Seoul' });
