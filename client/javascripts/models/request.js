import $ from 'jquery';

export class Request {
  constructor(uri) {
    this.uri = uri;
  }

  get() {
    return $.get(this.uri);
  }

  post(data) {
    return $.post(this.uri, data);
  }
}

/*
    let request = new Request('/users');
    request.get().done((response) => {
      console.log('response: ', response['message']);
      this.setState({ content: response['message'] });
    });
 */
