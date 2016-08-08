import $ from 'jquery';

export default class Request {
  constructor(uri) {
    this.uri = uri;
  }

  index() {
    return $.get(this.uri);
  }

  get(id) {
    return $.get(this.uri + '/' + id);
  }

  post(data) {
    return $.post(this.uri, data);
  }
}
