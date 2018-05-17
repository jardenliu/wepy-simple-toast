
module.exports = {
    wpyExt: ".wpy",
    src: "",
    dist: "",
    babel: {
        presets: [
            'env'
        ],
        plugins: [
            'transform-class-properties',
            'transform-export-extensions'
        ]
    }
};

