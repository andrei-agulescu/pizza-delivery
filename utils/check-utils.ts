export class CheckUtils {
  static isNull(object: any): boolean {
    return object === null;
  }
  static isUndefined(object: any): boolean {
    return typeof object === 'undefined';
  }
  static exists(object: any): boolean {
    return !CheckUtils.isNull(object) && !CheckUtils.isUndefined(object);
  }
}
