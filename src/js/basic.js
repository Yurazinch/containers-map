export default class ErrorRepository { 
  constructor() {
    this.errors = new Map();
  }

  translate(errorCode) {
    return this.errors.get(errorCode);
  }
}
