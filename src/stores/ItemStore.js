import { extendObservable } from 'mobx';
import {browserHistory} from 'react-router';


export default class ItemStore {
  constructor  () {
    extendObservable(this, {
      items: []
    });
    this.newItem = this.newItem.bind(this);
  }

  newItem(item) {
    console.log("before post", item);
    fetch('/item', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        condition: item.condition,
        description: item.description,
        brand: item.brand,
        category: item.category,
        url: item.url
      })
    })
    .then(function(result) {
      return result.json();})
    .then(resultItem => {
      this.items.push(resultItem);
      console.log(resultItem);
    });
  }

}
