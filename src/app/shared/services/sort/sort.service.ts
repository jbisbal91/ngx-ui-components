import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor() { }

  sort<T>(array: T[], key: keyof T, desc: boolean = false): T[] {
    return array.sort((a, b) => {
      const valueA = a[key];
      const valueB = b[key];
      if (typeof valueA === 'number' && typeof valueB === 'number') {
        return desc ? valueB - valueA : valueA - valueB;
      } else if (typeof valueA === 'string' && typeof valueB === 'string') {
        return desc
          ? valueB.localeCompare(valueA)
          : valueA.localeCompare(valueB);
      } else {
        return desc
          ? String(valueB).localeCompare(String(valueA))
          : String(valueA).localeCompare(String(valueB));
      }
    });
  }
}
