# redux-db
database-like actions to auto-manage redux state

planned use cases:

```
//reducers
import {dbReduce} from 'redux-db';

//pass to createStore or combineReducers
return dbReduce			
  .array('courses', Course)		
  .field('isLoading', Boolean)		
  .object('current')		
    .field('course', Course)	
    .field('state', String)	



//actions
import {Db, Ds} from 'redux-db';
//thunk-ready

function updateAction(data) {
return function(dispatcher, getState, db) {

db = db.get;
ds = db.set;


let courses = db.select('courses');

let cs = courses
  .get();
  
let cs2 = getState().courses;
expect(csArr2).equal(cs);

let cs3 = courses
  .where({id:1} )
  .get();


let cs4 = courses
  .groupby('duration')
  .sort('duration')
  .first(3)
  .get();


courses
  .remove({id:1})	
  .insert(new Course(3,'adsf'))	
  .where({id:2})	
    .update(new Couse(2, 'rewer'))
  .where({name:'adf*'})
    .update((c)=>{c.name='dd'))
  .go();
;
			    
courses
  .where({id:5})	
    .update((course) => {course.name='asdf'}) 
  .go();

courses		
  .remove({id:33}	
  .go();

db	
  .select('isLoading')
    .set(true)
  .go();

db
  .select('current')
    .select('course')
      .set(new Course()))
      .unselect()
    .select('state')
      .set("draft")
  .go();
}}
```
