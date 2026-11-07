//% color="#008577" icon="\uf11c" block="CardKB"
namespace CardKB {

    const ADDRESS = 0x5F

    let lastKey = 0

    /**
     * Odczytuje klawiaturę I2C.
     * Zapisuje odebrany kod.
     * Zwraca kod klawisza lub 0.
     */
    //% block="CardKB odczytaj klawisz"
    //% group="Odczyt"
    export function readKey(): number {
        lastKey = pins.i2cReadNumber(
            ADDRESS,
            NumberFormat.UInt8BE
        )
        return lastKey
    }

    /**
     * Zwraca ostatnio zapamiętany kod.
     */
    //% block="CardKB kod klawisza"
    //% group="Odczyt"
    export function keyCode(): number {
        return lastKey
    }

    /**
     * Zwraca ostatnio zapamiętany znak.
     */
    //% block="CardKB znak"
    //% group="Odczyt"
    export function keyChar(): string {
        if (lastKey >= 32 && lastKey <= 126) {
            return String.fromCharCode(lastKey)
        }
        return ""
    }

    /**
     * Sprawdza zapamiętany kod klawisza.
     */
    //% block="CardKB czy ASCII %ascii"
    //% ascii.defl=65
    //% group="Klawisze"
    export function isAscii(ascii: number): boolean {
        return lastKey == ascii
    }

    /**
     * Sprawdza ENTER.
     */
    //% block="CardKB czy ENTER"
    //% group="Klawisze"
    export function enter(): boolean {
        return lastKey == 13
    }

    /**
     * Sprawdza strzałkę w górę.
     */
    //% block="CardKB czy GÓRA"
    //% group="Strzałki"
    export function up(): boolean {
        return lastKey == 181
    }

    /**
     * Sprawdza strzałkę w dół.
     */
    //% block="CardKB czy DÓŁ"
    //% group="Strzałki"
    export function down(): boolean {
        return lastKey == 182
    }

    /**
     * Sprawdza strzałkę w lewo.
     */
    //% block="CardKB czy LEWO"
    //% group="Strzałki"
    export function left(): boolean {
        return lastKey == 180
    }

    /**
     * Sprawdza strzałkę w prawo.
     */
    //% block="CardKB czy PRAWO"
    //% group="Strzałki"
    export function right(): boolean {
        return lastKey == 183
    }

    /**
     * Czy odebrano dowolny klawisz?
     */
    //% block="CardKB czy jest klawisz"
    //% group="Klawisze"
    export function available(): boolean {
        return lastKey != 0
    }

    /**
     * Czyści zapamiętany kod.
     */
    //% block="CardKB wyczyść klawisz"
    //% group="Odczyt"
    export function clearKey(): void {
        lastKey = 0
    }
}