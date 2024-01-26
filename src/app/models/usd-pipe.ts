import { Pipe, PipeTransform }  from '@angular/core';

@Pipe({
    name: 'usdPipe'
})

export class UsdPipe implements PipeTransform {
    transform( value: number | null ): string {
        if (value === null) {
            return 'N/A';
        }
        if (value >= 1_000_000_000) {
            return `$${(value / 1_000_000_000).toFixed(2)}b`;
        } else if (value >= 1_000_000) {
            return `$${(value / 1_000_000).toFixed(2)}m`;
        } else {
            return `$${value.toFixed(2)}`;
        }
    }
}

