'use strict';

class RozpObd {
    constructor() {
        this.leto = 'Astronomicke leto...';
        this.podzim = 'Astronomicke podzim...';
        this.zima = 'Astronomicke zima...';
        this.jaro = 'Astronomicke jaro...';
    }

    zjisti() {
        const datum = new Date();
        const den = datum.getDate();
        const mesic = datum.getMonth() + 1;
        swith (mesic) {
            case 1:
            case 2:
                document.write (this.zima);
                break;
            case 3:
                if (den < 21) document.write (this.zima);
                elsedocument.write(this.jaro);
                break;
            case 4:
            case 5:
                document.write (this.jaro);
                break;
            case 6:
                if (den < 21) document.write (this.jaro);
                elsedocument.write(this.leto);
                break;
            case 7:
            case 8:
                document.write (this.leto);
                break;
            case 9:
                if (den < 21) document.write (this.leto);
                elsedocument.write(this.podzim);
                break;
            case 10:
            case 11:
                document.write (this.podzim);
                break;
            case 12:
                if (den < 21) document.write (this.podzim);
                elsedocument.write(this.zima);
                break;



        }
    }
}