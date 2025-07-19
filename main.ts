/**
 * TCA9548A Multiplexador I2C
 */
//% color=#AA278D icon="\uf2db" weight=100
namespace TCA9548A {
    const TCA_ADDR = 0x70

    /**
     * Seleciona o canal do multiplexador TCA9548A
     * @param canal número do canal de 0 a 7
     */
    //% block="selecionar canal $canal no TCA9548A"
    //% canal.min=0 canal.max=7
    //% weight=100
    export function selecionarCanal(canal: number): void {
        if (canal < 0 || canal > 7) return
        pins.i2cWriteNumber(TCA_ADDR, 1 << canal, NumberFormat.UInt8BE)
        basic.pause(10)
    }
}