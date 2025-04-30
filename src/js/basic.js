export default class ErrorRepository { 
  constructor() {
    this.map = new Map();
  }

  translate(errorCode) {
    if(this.map.has(errorCode)) {
      return this.map.get(errorCode);
    } else {
      return 'Unknown error';
    }
  }
}
