module.exports = function toReadable(number) {
    const BELOW_TWENTY = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen'
    ];
    const TENS = [
        '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];

    switch (true) {
        case number < 20:
            return BELOW_TWENTY[number];
        case number < 100:
            const ten = Math.floor(number / 10);
            const unit = number % 10;
            return unit === 0 ? TENS[ten] : `${TENS[ten]} ${BELOW_TWENTY[unit]}`;
        case number < 1000:
            const hundred = Math.floor(number / 100);
            const rest  = number % 100;
            const restReadable = rest ? ` ${toReadable(rest)}` : '';
            return `${BELOW_TWENTY[hundred]} hundred${restReadable}`;
        default:
            return 'Out of range';
    }
}
