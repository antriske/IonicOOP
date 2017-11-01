import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

lists: any = [
    {
        listHeader: "Things I do instead of homework",
          Items: [
            {
                item: "Cook or bake"
            },
            {
                item: "Clean"
            },
            {
                item: "Eat"
            },
            {
                item: "Spoon/walk my dog"
            },
            {
                item: "Drink"
            },
            {
                item: "Poop for too long"
            }
        ]
    }
];

  constructor() {
    //solve data provider error
    console.log('Hello DataProvider Provider');
  }

}
