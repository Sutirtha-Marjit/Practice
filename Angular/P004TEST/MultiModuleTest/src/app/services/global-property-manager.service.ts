import { Injectable } from '@angular/core';

@Injectable()
export class GlobalPropertyManagerService {

  constructor() { }
  public alertCount=0;
  public updateCount():number{
    this.alertCount++;
    return this.alertCount;
  }

}
