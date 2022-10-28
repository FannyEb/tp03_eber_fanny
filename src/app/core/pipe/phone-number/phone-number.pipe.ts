import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(value: string): string {
    console.log("value", value);
    return value.substring(0, 3) + " (0)" + value.substring(3, 4) 
                                  + "." + value.substring(4, 6) 
                                  + "." + value.substring(6, 8) 
                                  + "." + value.substring(8, 10) 
                                  + "." + value.substring(10, 12)
  }

}
