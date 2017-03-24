import { extendObservable } from 'mobx';
import {browserHistory} from 'react-router';


export default class ItemStore {
  constructor  () {
    extendObservable(this, {
      item: []
    });
    this.newItem = this.newItem.bind(this);
  }

  newItem(item) {
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
        category: item.category
      })
    })
      .then(this.item.push(item));
  }
}
