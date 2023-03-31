import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'horasTrabalhadas'
})
export class HorasTrabalhadasPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
