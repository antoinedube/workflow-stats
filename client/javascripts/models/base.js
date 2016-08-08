import Request from './request.js';

export default class Base {
  constructor(props) {
    this.url = props.url;
    this.request = new Request(this.url);
  }

  fetchAll() {
    return this.request.index();
  }
}
