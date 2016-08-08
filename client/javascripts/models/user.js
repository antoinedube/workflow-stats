import Base from './base.js';

export default class User extends Base {
  constructor() {
    super({
      'url': '/users'
    });
  }
}
