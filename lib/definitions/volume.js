var metric, imperial;

metric = {
    l: {
        name: {
            singular: 'Liter',
            plural: 'Liters',
        },
        to_anchor: 1,
    },
    cm3: {
        name: {
            singular: 'Cubic Centimeter',
            plural: 'Cubic Centimeters',
        },
        to_anchor: 1 / 1000,
    },
};

imperial = {
    Tbs: {
        name: {
            singular: 'Tablespoon',
            plural: 'Tablespoons',
        },
        to_anchor: 1 / 2,
    },
    'fl-oz': {
        name: {
            singular: 'Fluid Ounce',
            plural: 'Fluid Ounces',
        },
        to_anchor: 1,
    },
    in3: {
        name: {
            singular: 'Cubic inch',
            plural: 'Cubic inches',
        },
        to_anchor: 0.55411,
    },
    cup: {
        name: {
            singular: 'Cup',
            plural: 'Cups',
        },
        to_anchor: 8,
    },
    gal: {
        name: {
            singular: 'Gallon',
            plural: 'Gallons',
        },
        to_anchor: 128,
    },
    ft3: {
        name: {
            singular: 'Cubic foot',
            plural: 'Cubic feet',
        },
        to_anchor: 957.506,
    },
};

module.exports = {
    metric: metric,
    imperial: imperial,
    _anchors: {
        metric: {
            unit: 'l',
            ratio: 33.8140226,
        },
        imperial: {
            unit: 'fl-oz',
            ratio: 1 / 33.8140226,
        },
    },
};
