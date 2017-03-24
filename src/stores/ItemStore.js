import { extendObservable } from 'mobx';
import {browserHistory} from 'react-router';


export default class ItemStore {
  constructor  () {
    extendObservable(this, {
      name: "",
      description: "",
      keyword: ""
    });
  }
  NewItem(name, description, keyword) {
    fetch('/item', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        description: description,
        keyword: keyword
      })
    })
    .then(function(){
      alert ('Item added');
    });
  }
}
