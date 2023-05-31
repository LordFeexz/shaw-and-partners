export default class GlobalHelper {
  static ValidateChar(data: string): boolean {
    return /[^a-zA-Z0-9.:,\-\s@]/g.test(data) ? true : false;
  }
}
