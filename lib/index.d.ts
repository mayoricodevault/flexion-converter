declare module 'convert-units' {
    type uVolume =
        | 'cm3'
        | 'l'
        | 'Tbs'
        | 'in3'
        | 'cup'
        | 'gal'
        | 'ft3'; // Volume
    type uTemperature = 'C' | 'F' | 'K' | 'R'; // Temperature

    type unit =
        | uVolume
        | uTemperature;

    type measure =
        | 'volume'
        | 'volumeFlowRate'
        | 'temperature';

    type system = 'metric' | 'imperial' | 'bits' | 'bytes';

    class Convert {
        constructor(numerator: number, denominator: number);
        from(from: unit): this;
        to(to: unit): number;
        toBest(options?: {
            exclude?: unit[];
            cutOffNumber?: number;
        }): { val: number; unit: string; singular: string; plural: string };
        getUnit<T extends unit>(
            abbr: T
        ): {
            abbr: T;
            measure: measure;
            system: system;
            unit: { name: { singular: string; plural: string }; to_anchor: number };
        };
        describe<T extends unit>(
            abbr: T
        ): {
            abbr: T;
            measure: measure;
            system: system;
            singular: string;
            plural: string;
        };
        list(measure?: measure): unit[];
        private throwUnsupportedUnitError(what: string): void;
        possibilities(measure?: measure): unit[];
        measures(): measure[];
    }

    function convert(value: number): Convert;

    export = convert;
}
