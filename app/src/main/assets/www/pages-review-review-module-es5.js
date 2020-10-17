(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-review-review-module"],{

/***/ "./node_modules/ngx-pipes/fesm2015/ngx-pipes.js":
/*!******************************************************!*\
  !*** ./node_modules/ngx-pipes/fesm2015/ngx-pipes.js ***!
  \******************************************************/
/*! exports provided: AorAnPipe, BOOLEAN_PIPES, BytesPipe, CamelizePipe, CeilPipe, ChunkPipe, DATE_PIPES, DegreesPipe, DiffObjPipe, DiffPipe, EveryPipe, FilterByImpurePipe, FilterByPipe, FlattenPipe, FloorPipe, FromPairsPipe, GroupByImpurePipe, GroupByPipe, InitialPipe, IntersectionPipe, InvertByPipe, InvertPipe, IsArrayPipe, IsDefinedPipe, IsEqualToPipe, IsFunctionPipe, IsGreaterEqualThanPipe, IsGreaterThanPipe, IsIdenticalToPipe, IsLessEqualThanPipe, IsLessThanPipe, IsNotEqualToPipe, IsNotIdenticalToPipe, IsNullPipe, IsNumberPipe, IsObjectPipe, IsStringPipe, IsUndefinedPipe, KeysPipe, LatinisePipe, LeftPadPipe, LeftTrimPipe, LinesPipe, MATH_PIPES, MakePluralStringPipe, MatchPipe, MaxPipe, MinPipe, NgArrayPipesModule, NgBooleanPipesModule, NgDatePipesModule, NgMathPipesModule, NgObjectPipesModule, NgPipesModule, NgStringPipesModule, OmitPipe, OrderByImpurePipe, OrderByPipe, PairsPipe, PercentagePipe, PickPipe, PluckPipe, PowerPipe, RadiansPipe, RangePipe, RepeatPipe, ReversePipe, RightPadPipe, RightTrimPipe, RoundPipe, STRING_PIPES, SamplePipe, ScanPipe, ShortenPipe, ShufflePipe, SlugifyPipe, SomePipe, SqrtPipe, StripTagsPipe, SumPipe, TailPipe, TestPipe, TimeAgoPipe, TrimPipe, TrurthifyPipe, UcFirstPipe, UcWordsPipe, UnderscorePipe, UnionPipe, UniquePipe, ValuesPipe, WithoutPipe, WrapPipe, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AorAnPipe", function() { return AorAnPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOOLEAN_PIPES", function() { return BOOLEAN_PIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BytesPipe", function() { return BytesPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamelizePipe", function() { return CamelizePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CeilPipe", function() { return CeilPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChunkPipe", function() { return ChunkPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATE_PIPES", function() { return DATE_PIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DegreesPipe", function() { return DegreesPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiffObjPipe", function() { return DiffObjPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiffPipe", function() { return DiffPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EveryPipe", function() { return EveryPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterByImpurePipe", function() { return FilterByImpurePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterByPipe", function() { return FilterByPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlattenPipe", function() { return FlattenPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloorPipe", function() { return FloorPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FromPairsPipe", function() { return FromPairsPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupByImpurePipe", function() { return GroupByImpurePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupByPipe", function() { return GroupByPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialPipe", function() { return InitialPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntersectionPipe", function() { return IntersectionPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvertByPipe", function() { return InvertByPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvertPipe", function() { return InvertPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsArrayPipe", function() { return IsArrayPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsDefinedPipe", function() { return IsDefinedPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsEqualToPipe", function() { return IsEqualToPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsFunctionPipe", function() { return IsFunctionPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsGreaterEqualThanPipe", function() { return IsGreaterEqualThanPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsGreaterThanPipe", function() { return IsGreaterThanPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsIdenticalToPipe", function() { return IsIdenticalToPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsLessEqualThanPipe", function() { return IsLessEqualThanPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsLessThanPipe", function() { return IsLessThanPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNotEqualToPipe", function() { return IsNotEqualToPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNotIdenticalToPipe", function() { return IsNotIdenticalToPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNullPipe", function() { return IsNullPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNumberPipe", function() { return IsNumberPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsObjectPipe", function() { return IsObjectPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsStringPipe", function() { return IsStringPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsUndefinedPipe", function() { return IsUndefinedPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeysPipe", function() { return KeysPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatinisePipe", function() { return LatinisePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftPadPipe", function() { return LeftPadPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftTrimPipe", function() { return LeftTrimPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinesPipe", function() { return LinesPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MATH_PIPES", function() { return MATH_PIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakePluralStringPipe", function() { return MakePluralStringPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchPipe", function() { return MatchPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxPipe", function() { return MaxPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinPipe", function() { return MinPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgArrayPipesModule", function() { return NgArrayPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgBooleanPipesModule", function() { return NgBooleanPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgDatePipesModule", function() { return NgDatePipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgMathPipesModule", function() { return NgMathPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgObjectPipesModule", function() { return NgObjectPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgPipesModule", function() { return NgPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgStringPipesModule", function() { return NgStringPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OmitPipe", function() { return OmitPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByImpurePipe", function() { return OrderByImpurePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByPipe", function() { return OrderByPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PairsPipe", function() { return PairsPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PercentagePipe", function() { return PercentagePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickPipe", function() { return PickPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluckPipe", function() { return PluckPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PowerPipe", function() { return PowerPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadiansPipe", function() { return RadiansPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangePipe", function() { return RangePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepeatPipe", function() { return RepeatPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReversePipe", function() { return ReversePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightPadPipe", function() { return RightPadPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightTrimPipe", function() { return RightTrimPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundPipe", function() { return RoundPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STRING_PIPES", function() { return STRING_PIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplePipe", function() { return SamplePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanPipe", function() { return ScanPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortenPipe", function() { return ShortenPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShufflePipe", function() { return ShufflePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlugifyPipe", function() { return SlugifyPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SomePipe", function() { return SomePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SqrtPipe", function() { return SqrtPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripTagsPipe", function() { return StripTagsPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SumPipe", function() { return SumPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TailPipe", function() { return TailPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPipe", function() { return TestPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeAgoPipe", function() { return TimeAgoPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrimPipe", function() { return TrimPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrurthifyPipe", function() { return TrurthifyPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UcFirstPipe", function() { return UcFirstPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UcWordsPipe", function() { return UcWordsPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnderscorePipe", function() { return UnderscorePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnionPipe", function() { return UnionPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniquePipe", function() { return UniquePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValuesPipe", function() { return ValuesPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithoutPipe", function() { return WithoutPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapPipe", function() { return WrapPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return isString; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


class DiffPipe {
    transform(input, ...args) {
        if (!Array.isArray(input)) {
            return input;
        }
        // tslint:disable-next-line no-bitwise
        return args.reduce((d, c) => d.filter((e) => !~c.indexOf(e)), input);
    }
}
DiffPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'diff' },] }
];

class InitialPipe {
    transform(input, num = 0) {
        return Array.isArray(input) ? input.slice(0, input.length - num) : input;
    }
}
InitialPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'initial' },] }
];

class FlattenPipe {
    transform(input, shallow = false) {
        if (!Array.isArray(input)) {
            return input;
        }
        return shallow ? [].concat.apply([], input) : this.flatten(input);
    }
    flatten(array) {
        return array.reduce((arr, elm) => {
            if (Array.isArray(elm)) {
                return arr.concat(this.flatten(elm));
            }
            return arr.concat(elm);
        }, []);
    }
}
FlattenPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'flatten' },] }
];

class IntersectionPipe {
    transform(input, ...args) {
        if (!Array.isArray(input)) {
            return input;
        }
        // tslint:disable-next-line no-bitwise
        return args.reduce((n, c) => n.filter((e) => !!~c.indexOf(e)), input);
    }
}
IntersectionPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'intersection' },] }
];

function isUndefined(value) {
    return typeof value === 'undefined';
}
function isNull(value) {
    return value === null;
}
function isFunction(value) {
    return typeof value === 'function';
}
function isNumber(value) {
    return typeof value === 'number';
}
function isString(value) {
    return typeof value === 'string';
}
function isBoolean(value) {
    return typeof value === 'boolean';
}
function isObject(value) {
    return value !== null && typeof value === 'object';
}
function isNumberFinite(value) {
    return isNumber(value) && isFinite(value);
}
function isVowel(letter) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.indexOf(letter) !== -1;
}
function ucFirst(text) {
    const [part, ...split] = text.split(/\s/g);
    const ucd = part
        .toLowerCase()
        .split(/(?=['|-])/g)
        .map((word) => word.indexOf('-') + word.indexOf("'") > -2
        ? word.slice(0, 2).toUpperCase() + word.slice(2)
        : word.slice(0, 1).toUpperCase() + word.slice(1))
        .join('');
    return [ucd, ...split].join(' ');
}
function applyPrecision(num, precision) {
    if (precision <= 0) {
        return Math.round(num);
    }
    const tho = Math.pow(10, precision);
    return Math.round(num * tho) / tho;
}
function extractDeepPropertyByMapKey(obj, map) {
    const keys = map.split('.');
    const head = keys.shift();
    return keys.reduce((prop, key) => {
        return !isUndefined(prop) && !isNull(prop) && !isUndefined(prop[key]) ? prop[key] : undefined;
    }, obj[head || '']);
}
function extractDeepPropertyByParentMapKey(obj, map) {
    const keys = map.split('.');
    const tail = keys.pop();
    const props = extractDeepPropertyByMapKey(obj, keys.join('.'));
    return { props, tail };
}
function getKeysTwoObjects(obj, other) {
    return [...Object.keys(obj), ...Object.keys(other)].filter((key, index, array) => array.indexOf(key) === index);
}
function isDeepEqual(obj, other) {
    if (!isObject(obj) || !isObject(other)) {
        return obj === other;
    }
    return getKeysTwoObjects(obj, other).every((key) => {
        if (!isObject(obj[key]) && !isObject(other[key])) {
            return obj[key] === other[key];
        }
        if (!isObject(obj[key]) || !isObject(other[key])) {
            return false;
        }
        return isDeepEqual(obj[key], other[key]);
    });
}

class ReversePipe {
    transform(input) {
        if (isString(input)) {
            return input
                .split('')
                .reverse()
                .join('');
        }
        return Array.isArray(input) ? input.slice().reverse() : input;
    }
}
ReversePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'reverse' },] }
];

class TailPipe {
    transform(input, num = 0) {
        return Array.isArray(input) ? input.slice(num) : input;
    }
}
TailPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'tail' },] }
];

class TrurthifyPipe {
    transform(input) {
        return Array.isArray(input) ? input.filter(e => !!e) : input;
    }
}
TrurthifyPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'truthify' },] }
];

class UnionPipe {
    transform(input, args = []) {
        if (!Array.isArray(input) || !Array.isArray(args)) {
            return input;
        }
        return args.reduce((newArr, currArr) => {
            return newArr.concat(currArr.reduce((noDupArr, curr) => {
                // tslint:disable-next-line:no-bitwise
                return !~noDupArr.indexOf(curr) && !~newArr.indexOf(curr) ? noDupArr.concat([curr]) : noDupArr;
            }, []));
        }, input);
    }
}
UnionPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'union' },] }
];

class UniquePipe {
    transform(input, propertyName) {
        const uniques = [];
        return Array.isArray(input)
            ? isUndefined(propertyName)
                ? input.filter((e, i) => input.indexOf(e) === i)
                : input.filter((e, i) => {
                    let value = extractDeepPropertyByMapKey(e, propertyName);
                    value = isObject(value) ? JSON.stringify(value) : value;
                    if (isUndefined(value) || uniques[value]) {
                        return false;
                    }
                    uniques[value] = true;
                    return true;
                })
            : input;
    }
}
UniquePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'unique' },] }
];

class WithoutPipe {
    transform(input, args = []) {
        return Array.isArray(input)
            ? // tslint:disable-next-line:no-bitwise
                input.filter(e => !~args.indexOf(e))
            : input;
    }
}
WithoutPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'without' },] }
];

class PluckPipe {
    transform(input, map) {
        if (Array.isArray(input)) {
            return input.map(e => extractDeepPropertyByMapKey(e, map));
        }
        return isObject(input) ? extractDeepPropertyByMapKey(input, map) : input;
    }
}
PluckPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'pluck', pure: false },] }
];

class ShufflePipe {
    // Using a version of the Fisher-Yates shuffle algorithm
    // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
    transform(input) {
        if (!Array.isArray(input)) {
            return input;
        }
        const shuffled = [...input];
        const n = input.length - 1;
        for (let i = 0; i < n; ++i) {
            const j = Math.floor(Math.random() * (n - i + 1)) + i;
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
}
ShufflePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'shuffle' },] }
];

class EveryPipe {
    transform(input, predicate) {
        return Array.isArray(input) ? input.every(predicate) : false;
    }
}
EveryPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'every' },] }
];

class SomePipe {
    transform(input, predicate) {
        return Array.isArray(input) ? input.some(predicate) : input;
    }
}
SomePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'some' },] }
];

class SamplePipe {
    transform(input, len = 1) {
        if (!Array.isArray(input)) {
            return input;
        }
        let sample = [];
        const tmp = [...input];
        const l = len < tmp.length ? len : tmp.length;
        for (let i = 0; i < l; ++i) {
            sample = sample.concat(tmp.splice(Math.floor(Math.random() * tmp.length), 1));
        }
        return sample;
    }
}
SamplePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'sample' },] }
];

class GroupByPipe {
    transform(input, discriminator = [], delimiter = '|') {
        if (!Array.isArray(input)) {
            return input;
        }
        return this.groupBy(input, discriminator, delimiter);
    }
    groupBy(list, discriminator, delimiter) {
        return list.reduce((acc, payload) => {
            const key = this.extractKeyByDiscriminator(discriminator, payload, delimiter);
            acc[key] = Array.isArray(acc[key]) ? acc[key].concat([payload]) : [payload];
            return acc;
        }, {});
    }
    extractKeyByDiscriminator(discriminator, payload, delimiter) {
        if (isFunction(discriminator)) {
            return discriminator(payload);
        }
        if (Array.isArray(discriminator)) {
            return discriminator.map(k => extractDeepPropertyByMapKey(payload, k)).join(delimiter);
        }
        return extractDeepPropertyByMapKey(payload, discriminator);
    }
}
GroupByPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'groupBy' },] }
];

// tslint:disable no-bitwise
class FilterByPipe {
    transform(input, props, search = '', strict = false) {
        if (!Array.isArray(input) ||
            (!Array.isArray(search) && !isString(search) && !isNumberFinite(search) && !isBoolean(search))) {
            return input;
        }
        const terms = String(search)
            .toLowerCase()
            .split(',');
        return input.filter(obj => {
            return props.some(prop => {
                return terms.some(term => {
                    const value = extractDeepPropertyByMapKey(obj, prop);
                    /* tslint:disable */
                    const { props, tail } = extractDeepPropertyByParentMapKey(obj, prop);
                    if (isUndefined(value) && !isUndefined(props) && Array.isArray(props)) {
                        return props.some(parent => {
                            const str = String(parent[tail]).toLowerCase();
                            return strict ? str === term : !!~str.indexOf(term);
                        });
                    }
                    if (isUndefined(value)) {
                        return false;
                    }
                    const strValue = String(value).toLowerCase();
                    return strict ? term === strValue : !!~strValue.indexOf(term);
                });
            });
        });
    }
}
FilterByPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'filterBy' },] }
];

class OrderByPipe {
    transform(input, config) {
        if (!Array.isArray(input)) {
            return input;
        }
        const out = [...input];
        // sort by multiple properties
        if (Array.isArray(config)) {
            return out.sort((a, b) => {
                const l = config.length;
                for (let i = 0; i < l; ++i) {
                    const [prop, asc] = OrderByPipe.extractFromConfig(config[i]);
                    const pos = OrderByPipe.orderCompare(prop, asc, a, b);
                    if (pos !== 0) {
                        return pos;
                    }
                }
                return 0;
            });
        }
        // sort by a single property value
        if (isString(config)) {
            const [prop, asc, sign] = OrderByPipe.extractFromConfig(config);
            if (config.length === 1) {
                // tslint:disable-next-line:switch-default
                switch (sign) {
                    case '+':
                        return out.sort(OrderByPipe.simpleSort.bind(this));
                    case '-':
                        return out.sort(OrderByPipe.simpleSort.bind(this)).reverse();
                }
            }
            return out.sort(OrderByPipe.orderCompare.bind(this, prop, asc));
        }
        // default sort by value
        return out.sort(OrderByPipe.simpleSort.bind(this));
    }
    static simpleSort(a, b) {
        return isString(a) && isString(b) ? a.toLowerCase().localeCompare(b.toLowerCase()) : a - b;
    }
    static orderCompare(prop, asc, a, b) {
        const first = extractDeepPropertyByMapKey(a, prop);
        const second = extractDeepPropertyByMapKey(b, prop);
        if (first === second) {
            return 0;
        }
        if (isUndefined(first) || first === '') {
            return 1;
        }
        if (isUndefined(second) || second === '') {
            return -1;
        }
        if (isString(first) && isString(second)) {
            const pos = first.toLowerCase().localeCompare(second.toLowerCase());
            return asc ? pos : -pos;
        }
        return asc ? first - second : second - first;
    }
    static extractFromConfig(config) {
        const sign = config.substr(0, 1);
        const prop = config.replace(/^[-+]/, '');
        const asc = sign !== '-';
        return [prop, asc, sign];
    }
}
OrderByPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'orderBy' },] }
];

// tslint:disable use-pipe-transform-interface
class GroupByImpurePipe extends GroupByPipe {
}
GroupByImpurePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'groupByImpure', pure: false },] }
];

// tslint:disable use-pipe-transform-interface
class FilterByImpurePipe extends FilterByPipe {
}
FilterByImpurePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'filterByImpure', pure: false },] }
];

// tslint:disable use-pipe-transform-interface
class OrderByImpurePipe extends OrderByPipe {
}
OrderByImpurePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'orderByImpure', pure: false },] }
];

class RangePipe {
    transform(start = 1, count = 0, step = 1) {
        return Array(count)
            .fill('')
            .map((v, i) => step * i + start);
    }
}
RangePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'range' },] }
];

class ChunkPipe {
    transform(input, size = 1) {
        if (isString(input)) {
            return this.chunk(input
                .split(''), size);
        }
        return Array.isArray(input) ? this.chunk(input, size) : input;
    }
    chunk(input, size) {
        return Array(Math.ceil(input.length / size))
            .fill([])
            .map((_, index) => index * size)
            .map(begin => input.slice(begin, begin + size));
    }
}
ChunkPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'chunk' },] }
];

class FromPairsPipe {
    transform(input) {
        if (!Array.isArray(input)) {
            return input;
        }
        return input.reduce((obj, arr) => {
            if (!Array.isArray(arr)) {
                return obj;
            }
            const [prop, val] = arr;
            obj[prop] = val;
            return obj;
        }, {});
    }
}
FromPairsPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'fromPairs' },] }
];

const ARRAY_PIPES = [
    DiffPipe,
    FlattenPipe,
    InitialPipe,
    IntersectionPipe,
    ReversePipe,
    TailPipe,
    TrurthifyPipe,
    UnionPipe,
    UniquePipe,
    WithoutPipe,
    PluckPipe,
    ShufflePipe,
    EveryPipe,
    SomePipe,
    SamplePipe,
    GroupByPipe,
    GroupByImpurePipe,
    FilterByPipe,
    FilterByImpurePipe,
    OrderByPipe,
    OrderByImpurePipe,
    RangePipe,
    ChunkPipe,
    FromPairsPipe
];
class NgArrayPipesModule {
}
NgArrayPipesModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: ARRAY_PIPES,
                imports: [],
                exports: ARRAY_PIPES,
            },] }
];

class KeysPipe {
    transform(obj) {
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return Object.keys(obj);
    }
}
KeysPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'keys' },] }
];

class ValuesPipe {
    transform(obj) {
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return Object.keys(obj).map(k => obj[k]);
    }
}
ValuesPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'values' },] }
];

class PairsPipe {
    transform(obj) {
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return Object.entries(obj);
    }
}
PairsPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'pairs' },] }
];

class PickPipe {
    transform(obj, ...args) {
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return args.reduce((o, k) => {
            return Object.assign(o, { [k]: obj[k] });
        }, {});
    }
}
PickPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'pick' },] }
];

class OmitPipe {
    transform(obj, ...args) {
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return (Object.keys(obj)
            // tslint:disable-next-line:no-bitwise
            .filter(k => !~args.indexOf(k))
            .reduce((o, k) => {
            return Object.assign(o, { [k]: obj[k] });
        }, {}));
    }
}
OmitPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'omit' },] }
];

class InvertPipe {
    transform(obj) {
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return Object.keys(obj).reduce((o, k) => {
            return Object.assign(o, { [obj[k]]: k });
        }, {});
    }
}
InvertPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'invert' },] }
];

class InvertByPipe {
    transform(obj, cb) {
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return Object.keys(obj).reduce((o, k) => {
            const key = cb ? cb(obj[k]) : obj[k];
            return Array.isArray(o[key]) ? (o[key].push(k), o) : Object.assign(o, { [key]: [k] });
        }, {});
    }
}
InvertByPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'invertBy' },] }
];

class DiffObjPipe {
    transform(obj, original = {}) {
        if (Array.isArray(obj) || Array.isArray(original) || !isObject(obj) || !isObject(original)) {
            return {};
        }
        return getKeysTwoObjects(obj, original).reduce((diff, key) => {
            if (!isDeepEqual(original[key], obj[key])) {
                diff[key] = obj[key];
            }
            return diff;
        }, {});
    }
}
DiffObjPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'diffObj' },] }
];

const OBJECT_PIPES = [KeysPipe, ValuesPipe, PairsPipe, PickPipe, InvertPipe, InvertByPipe, OmitPipe, DiffObjPipe];
class NgObjectPipesModule {
}
NgObjectPipesModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: OBJECT_PIPES,
                imports: [],
                exports: OBJECT_PIPES,
            },] }
];

/**
 * Takes a string and returns the string prepended by 'a' or 'an'.
 * Uses both naive and holdout-list approaches.
 * @constructor
 * @param {string} stringEntity - Entity to prepend 'a' or 'an' to.
 */
class AorAnPipe {
    constructor() {
        this.irregularMap = {
            herb: 'an',
            honor: 'an',
            honorable: 'an',
            hour: 'an',
            mba: 'an',
            msc: 'an',
            'm.sc.': 'an',
            unicorn: 'a',
        };
    }
    transform(stringEntity) {
        if (!stringEntity || stringEntity === '') {
            return '';
        }
        else {
            const firstWord = stringEntity.trim().split(' ')[0];
            if (this.irregularMap[firstWord.toLocaleLowerCase()]) {
                return `${this.irregularMap[firstWord.toLocaleLowerCase()]} ${stringEntity}`;
            }
            else {
                return isVowel(stringEntity[0]) ? `an ${stringEntity}` : `a ${stringEntity}`;
            }
        }
    }
}
AorAnPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                name: 'aOrAn',
            },] }
];

class UcWordsPipe {
    transform(text) {
        if (isString(text)) {
            return text
                .split(' ')
                .map((sub) => ucFirst(sub))
                .join(' ');
        }
        return text;
    }
}
UcWordsPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'ucwords' },] }
];

class LeftTrimPipe {
    transform(text, chars = '\\s') {
        return isString(text) ? text.replace(new RegExp(`^[${chars}]+`), '') : text;
    }
}
LeftTrimPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'ltrim' },] }
];

class RepeatPipe {
    transform(str, n = 1, separator = '') {
        if (n <= 0) {
            throw new RangeError();
        }
        return n === 1 ? str : this.repeat(str, n - 1, separator);
    }
    repeat(str, n, separator) {
        return isString(str) ? (n === 0 ? str : str + separator + this.repeat(str, n - 1, separator)) : str;
    }
}
RepeatPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'repeat' },] }
];

class RightTrimPipe {
    transform(text, chars = '\\s') {
        return isString(text) ? text.replace(new RegExp(`[${chars}]+$`), '') : text;
    }
}
RightTrimPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'rtrim' },] }
];

class ScanPipe {
    transform(text, args = []) {
        return isString(text)
            ? text.replace(/\{(\d+)}/g, (match, index) => (!isUndefined(args[index]) ? args[index] : match))
            : text;
    }
}
ScanPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'scan' },] }
];

class ShortenPipe {
    transform(text, length = 0, suffix = '', wordBreak = true) {
        if (!isString(text)) {
            return text;
        }
        if (text.length > length) {
            if (wordBreak) {
                return text.slice(0, length) + suffix;
            }
            // tslint:disable-next-line:no-bitwise
            if (!!~text.indexOf(' ', length)) {
                return text.slice(0, text.indexOf(' ', length)) + suffix;
            }
        }
        return text;
    }
}
ShortenPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'shorten' },] }
];

class StripTagsPipe {
    transform(text, ...allowedTags) {
        return allowedTags.length > 0
            ? text.replace(new RegExp(`<(?!\/?(${allowedTags.join('|')})\s*\/?)[^>]+>`, 'g'), '')
            : text.replace(/<(?:.|\s)*?>/g, '');
    }
}
StripTagsPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'stripTags' },] }
];

class TrimPipe {
    transform(text, chars = '\\s') {
        return isString(text) ? text.replace(new RegExp(`^[${chars}]+|[${chars}]+$`, 'g'), '') : text;
    }
}
TrimPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'trim' },] }
];

class UcFirstPipe {
    transform(text) {
        return isString(text) ? ucFirst(text) : text;
    }
}
UcFirstPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'ucfirst' },] }
];

class SlugifyPipe {
    transform(str) {
        return isString(str)
            ? str
                .toLowerCase()
                .trim()
                .replace(/[^\w\-]+/g, ' ')
                .replace(/\s+/g, '-')
            : str;
    }
}
SlugifyPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'slugify' },] }
];

class CamelizePipe {
    transform(text, chars = '\\s') {
        if (!isString(text)) {
            return text;
        }
        return text
            .toLowerCase()
            .split(/[-_\s]/g)
            .filter((v) => !!v)
            .map((word, key) => {
            return !key ? word : word.slice(0, 1).toUpperCase() + word.slice(1);
        })
            .join('');
    }
}
CamelizePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'camelize' },] }
];

class LatinisePipe {
    constructor() {
        // Source: http://semplicewebsites.com/removing-accents-javascript
        // tslint:disable-next-line whitespace max-line-length object-literal-key-quotes
        this.latinMap = {
            'Á': 'A',
            'Ă': 'A',
            'Ắ': 'A',
            'Ặ': 'A',
            'Ằ': 'A',
            'Ẳ': 'A',
            'Ẵ': 'A',
            'Ǎ': 'A',
            'Â': 'A',
            'Ấ': 'A',
            'Ậ': 'A',
            'Ầ': 'A',
            'Ẩ': 'A',
            'Ẫ': 'A',
            'Ä': 'A',
            'Ǟ': 'A',
            'Ȧ': 'A',
            'Ǡ': 'A',
            'Ạ': 'A',
            'Ȁ': 'A',
            'À': 'A',
            'Ả': 'A',
            'Ȃ': 'A',
            'Ā': 'A',
            'Ą': 'A',
            'Å': 'A',
            'Ǻ': 'A',
            'Ḁ': 'A',
            'Ⱥ': 'A',
            'Ã': 'A',
            'Ꜳ': 'AA',
            'Æ': 'AE',
            'Ǽ': 'AE',
            'Ǣ': 'AE',
            'Ꜵ': 'AO',
            'Ꜷ': 'AU',
            'Ꜹ': 'AV',
            'Ꜻ': 'AV',
            'Ꜽ': 'AY',
            'Ḃ': 'B',
            'Ḅ': 'B',
            'Ɓ': 'B',
            'Ḇ': 'B',
            'Ƀ': 'B',
            'Ƃ': 'B',
            'Ć': 'C',
            'Č': 'C',
            'Ç': 'C',
            'Ḉ': 'C',
            'Ĉ': 'C',
            'Ċ': 'C',
            'Ƈ': 'C',
            'Ȼ': 'C',
            'Ď': 'D',
            'Ḑ': 'D',
            'Ḓ': 'D',
            'Ḋ': 'D',
            'Ḍ': 'D',
            'Ɗ': 'D',
            'Ḏ': 'D',
            'ǲ': 'D',
            'ǅ': 'D',
            'Đ': 'D',
            'Ƌ': 'D',
            'Ǳ': 'DZ',
            'Ǆ': 'DZ',
            'É': 'E',
            'Ĕ': 'E',
            'Ě': 'E',
            'Ȩ': 'E',
            'Ḝ': 'E',
            'Ê': 'E',
            'Ế': 'E',
            'Ệ': 'E',
            'Ề': 'E',
            'Ể': 'E',
            'Ễ': 'E',
            'Ḙ': 'E',
            'Ë': 'E',
            'Ė': 'E',
            'Ẹ': 'E',
            'Ȅ': 'E',
            'È': 'E',
            'Ẻ': 'E',
            'Ȇ': 'E',
            'Ē': 'E',
            'Ḗ': 'E',
            'Ḕ': 'E',
            'Ę': 'E',
            'Ɇ': 'E',
            'Ẽ': 'E',
            'Ḛ': 'E',
            'Ꝫ': 'ET',
            'Ḟ': 'F',
            'Ƒ': 'F',
            'Ǵ': 'G',
            'Ğ': 'G',
            'Ǧ': 'G',
            'Ģ': 'G',
            'Ĝ': 'G',
            'Ġ': 'G',
            'Ɠ': 'G',
            'Ḡ': 'G',
            'Ǥ': 'G',
            'Ḫ': 'H',
            'Ȟ': 'H',
            'Ḩ': 'H',
            'Ĥ': 'H',
            'Ⱨ': 'H',
            'Ḧ': 'H',
            'Ḣ': 'H',
            'Ḥ': 'H',
            'Ħ': 'H',
            'Í': 'I',
            'Ĭ': 'I',
            'Ǐ': 'I',
            'Î': 'I',
            'Ï': 'I',
            'Ḯ': 'I',
            'İ': 'I',
            'Ị': 'I',
            'Ȉ': 'I',
            'Ì': 'I',
            'Ỉ': 'I',
            'Ȋ': 'I',
            'Ī': 'I',
            'Į': 'I',
            'Ɨ': 'I',
            'Ĩ': 'I',
            'Ḭ': 'I',
            'Ꝺ': 'D',
            'Ꝼ': 'F',
            'Ᵹ': 'G',
            'Ꞃ': 'R',
            'Ꞅ': 'S',
            'Ꞇ': 'T',
            'Ꝭ': 'IS',
            'Ĵ': 'J',
            'Ɉ': 'J',
            'Ḱ': 'K',
            'Ǩ': 'K',
            'Ķ': 'K',
            'Ⱪ': 'K',
            'Ꝃ': 'K',
            'Ḳ': 'K',
            'Ƙ': 'K',
            'Ḵ': 'K',
            'Ꝁ': 'K',
            'Ꝅ': 'K',
            'Ĺ': 'L',
            'Ƚ': 'L',
            'Ľ': 'L',
            'Ļ': 'L',
            'Ḽ': 'L',
            'Ḷ': 'L',
            'Ḹ': 'L',
            'Ⱡ': 'L',
            'Ꝉ': 'L',
            'Ḻ': 'L',
            'Ŀ': 'L',
            'Ɫ': 'L',
            'ǈ': 'L',
            'Ł': 'L',
            'Ǉ': 'LJ',
            'Ḿ': 'M',
            'Ṁ': 'M',
            'Ṃ': 'M',
            'Ɱ': 'M',
            'Ń': 'N',
            'Ň': 'N',
            'Ņ': 'N',
            'Ṋ': 'N',
            'Ṅ': 'N',
            'Ṇ': 'N',
            'Ǹ': 'N',
            'Ɲ': 'N',
            'Ṉ': 'N',
            'Ƞ': 'N',
            'ǋ': 'N',
            'Ñ': 'N',
            'Ǌ': 'NJ',
            'Ó': 'O',
            'Ŏ': 'O',
            'Ǒ': 'O',
            'Ô': 'O',
            'Ố': 'O',
            'Ộ': 'O',
            'Ồ': 'O',
            'Ổ': 'O',
            'Ỗ': 'O',
            'Ö': 'O',
            'Ȫ': 'O',
            'Ȯ': 'O',
            'Ȱ': 'O',
            'Ọ': 'O',
            'Ő': 'O',
            'Ȍ': 'O',
            'Ò': 'O',
            'Ỏ': 'O',
            'Ơ': 'O',
            'Ớ': 'O',
            'Ợ': 'O',
            'Ờ': 'O',
            'Ở': 'O',
            'Ỡ': 'O',
            'Ȏ': 'O',
            'Ꝋ': 'O',
            'Ꝍ': 'O',
            'Ō': 'O',
            'Ṓ': 'O',
            'Ṑ': 'O',
            'Ɵ': 'O',
            'Ǫ': 'O',
            'Ǭ': 'O',
            'Ø': 'O',
            'Ǿ': 'O',
            'Õ': 'O',
            'Ṍ': 'O',
            'Ṏ': 'O',
            'Ȭ': 'O',
            'Ƣ': 'OI',
            'Ꝏ': 'OO',
            'Ɛ': 'E',
            'Ɔ': 'O',
            'Ȣ': 'OU',
            'Ṕ': 'P',
            'Ṗ': 'P',
            'Ꝓ': 'P',
            'Ƥ': 'P',
            'Ꝕ': 'P',
            'Ᵽ': 'P',
            'Ꝑ': 'P',
            'Ꝙ': 'Q',
            'Ꝗ': 'Q',
            'Ŕ': 'R',
            'Ř': 'R',
            'Ŗ': 'R',
            'Ṙ': 'R',
            'Ṛ': 'R',
            'Ṝ': 'R',
            'Ȑ': 'R',
            'Ȓ': 'R',
            'Ṟ': 'R',
            'Ɍ': 'R',
            'Ɽ': 'R',
            'Ꜿ': 'C',
            'Ǝ': 'E',
            'Ś': 'S',
            'Ṥ': 'S',
            'Š': 'S',
            'Ṧ': 'S',
            'Ş': 'S',
            'Ŝ': 'S',
            'Ș': 'S',
            'Ṡ': 'S',
            'Ṣ': 'S',
            'Ṩ': 'S',
            'ẞ': 'SS',
            'Ť': 'T',
            'Ţ': 'T',
            'Ṱ': 'T',
            'Ț': 'T',
            'Ⱦ': 'T',
            'Ṫ': 'T',
            'Ṭ': 'T',
            'Ƭ': 'T',
            'Ṯ': 'T',
            'Ʈ': 'T',
            'Ŧ': 'T',
            'Ɐ': 'A',
            'Ꞁ': 'L',
            'Ɯ': 'M',
            'Ʌ': 'V',
            'Ꜩ': 'TZ',
            'Ú': 'U',
            'Ŭ': 'U',
            'Ǔ': 'U',
            'Û': 'U',
            'Ṷ': 'U',
            'Ü': 'U',
            'Ǘ': 'U',
            'Ǚ': 'U',
            'Ǜ': 'U',
            'Ǖ': 'U',
            'Ṳ': 'U',
            'Ụ': 'U',
            'Ű': 'U',
            'Ȕ': 'U',
            'Ù': 'U',
            'Ủ': 'U',
            'Ư': 'U',
            'Ứ': 'U',
            'Ự': 'U',
            'Ừ': 'U',
            'Ử': 'U',
            'Ữ': 'U',
            'Ȗ': 'U',
            'Ū': 'U',
            'Ṻ': 'U',
            'Ų': 'U',
            'Ů': 'U',
            'Ũ': 'U',
            'Ṹ': 'U',
            'Ṵ': 'U',
            'Ꝟ': 'V',
            'Ṿ': 'V',
            'Ʋ': 'V',
            'Ṽ': 'V',
            'Ꝡ': 'VY',
            'Ẃ': 'W',
            'Ŵ': 'W',
            'Ẅ': 'W',
            'Ẇ': 'W',
            'Ẉ': 'W',
            'Ẁ': 'W',
            'Ⱳ': 'W',
            'Ẍ': 'X',
            'Ẋ': 'X',
            'Ý': 'Y',
            'Ŷ': 'Y',
            'Ÿ': 'Y',
            'Ẏ': 'Y',
            'Ỵ': 'Y',
            'Ỳ': 'Y',
            'Ƴ': 'Y',
            'Ỷ': 'Y',
            'Ỿ': 'Y',
            'Ȳ': 'Y',
            'Ɏ': 'Y',
            'Ỹ': 'Y',
            'Ź': 'Z',
            'Ž': 'Z',
            'Ẑ': 'Z',
            'Ⱬ': 'Z',
            'Ż': 'Z',
            'Ẓ': 'Z',
            'Ȥ': 'Z',
            'Ẕ': 'Z',
            'Ƶ': 'Z',
            'Ĳ': 'IJ',
            'Œ': 'OE',
            'ᴀ': 'A',
            'ᴁ': 'AE',
            'ʙ': 'B',
            'ᴃ': 'B',
            'ᴄ': 'C',
            'ᴅ': 'D',
            'ᴇ': 'E',
            'ꜰ': 'F',
            'ɢ': 'G',
            'ʛ': 'G',
            'ʜ': 'H',
            'ɪ': 'I',
            'ʁ': 'R',
            'ᴊ': 'J',
            'ᴋ': 'K',
            'ʟ': 'L',
            'ᴌ': 'L',
            'ᴍ': 'M',
            'ɴ': 'N',
            'ᴏ': 'O',
            'ɶ': 'OE',
            'ᴐ': 'O',
            'ᴕ': 'OU',
            'ᴘ': 'P',
            'ʀ': 'R',
            'ᴎ': 'N',
            'ᴙ': 'R',
            'ꜱ': 'S',
            'ᴛ': 'T',
            'ⱻ': 'E',
            'ᴚ': 'R',
            'ᴜ': 'U',
            'ᴠ': 'V',
            'ᴡ': 'W',
            'ʏ': 'Y',
            'ᴢ': 'Z',
            'á': 'a',
            'ă': 'a',
            'ắ': 'a',
            'ặ': 'a',
            'ằ': 'a',
            'ẳ': 'a',
            'ẵ': 'a',
            'ǎ': 'a',
            'â': 'a',
            'ấ': 'a',
            'ậ': 'a',
            'ầ': 'a',
            'ẩ': 'a',
            'ẫ': 'a',
            'ä': 'a',
            'ǟ': 'a',
            'ȧ': 'a',
            'ǡ': 'a',
            'ạ': 'a',
            'ȁ': 'a',
            'à': 'a',
            'ả': 'a',
            'ȃ': 'a',
            'ā': 'a',
            'ą': 'a',
            'ᶏ': 'a',
            'ẚ': 'a',
            'å': 'a',
            'ǻ': 'a',
            'ḁ': 'a',
            'ⱥ': 'a',
            'ã': 'a',
            'ꜳ': 'aa',
            'æ': 'ae',
            'ǽ': 'ae',
            'ǣ': 'ae',
            'ꜵ': 'ao',
            'ꜷ': 'au',
            'ꜹ': 'av',
            'ꜻ': 'av',
            'ꜽ': 'ay',
            'ḃ': 'b',
            'ḅ': 'b',
            'ɓ': 'b',
            'ḇ': 'b',
            'ᵬ': 'b',
            'ᶀ': 'b',
            'ƀ': 'b',
            'ƃ': 'b',
            'ɵ': 'o',
            'ć': 'c',
            'č': 'c',
            'ç': 'c',
            'ḉ': 'c',
            'ĉ': 'c',
            'ɕ': 'c',
            'ċ': 'c',
            'ƈ': 'c',
            'ȼ': 'c',
            'ď': 'd',
            'ḑ': 'd',
            'ḓ': 'd',
            'ȡ': 'd',
            'ḋ': 'd',
            'ḍ': 'd',
            'ɗ': 'd',
            'ᶑ': 'd',
            'ḏ': 'd',
            'ᵭ': 'd',
            'ᶁ': 'd',
            'đ': 'd',
            'ɖ': 'd',
            'ƌ': 'd',
            'ı': 'i',
            'ȷ': 'j',
            'ɟ': 'j',
            'ʄ': 'j',
            'ǳ': 'dz',
            'ǆ': 'dz',
            'é': 'e',
            'ĕ': 'e',
            'ě': 'e',
            'ȩ': 'e',
            'ḝ': 'e',
            'ê': 'e',
            'ế': 'e',
            'ệ': 'e',
            'ề': 'e',
            'ể': 'e',
            'ễ': 'e',
            'ḙ': 'e',
            'ë': 'e',
            'ė': 'e',
            'ẹ': 'e',
            'ȅ': 'e',
            'è': 'e',
            'ẻ': 'e',
            'ȇ': 'e',
            'ē': 'e',
            'ḗ': 'e',
            'ḕ': 'e',
            'ⱸ': 'e',
            'ę': 'e',
            'ᶒ': 'e',
            'ɇ': 'e',
            'ẽ': 'e',
            'ḛ': 'e',
            'ꝫ': 'et',
            'ḟ': 'f',
            'ƒ': 'f',
            'ᵮ': 'f',
            'ᶂ': 'f',
            'ǵ': 'g',
            'ğ': 'g',
            'ǧ': 'g',
            'ģ': 'g',
            'ĝ': 'g',
            'ġ': 'g',
            'ɠ': 'g',
            'ḡ': 'g',
            'ᶃ': 'g',
            'ǥ': 'g',
            'ḫ': 'h',
            'ȟ': 'h',
            'ḩ': 'h',
            'ĥ': 'h',
            'ⱨ': 'h',
            'ḧ': 'h',
            'ḣ': 'h',
            'ḥ': 'h',
            'ɦ': 'h',
            'ẖ': 'h',
            'ħ': 'h',
            'ƕ': 'hv',
            'í': 'i',
            'ĭ': 'i',
            'ǐ': 'i',
            'î': 'i',
            'ï': 'i',
            'ḯ': 'i',
            'ị': 'i',
            'ȉ': 'i',
            'ì': 'i',
            'ỉ': 'i',
            'ȋ': 'i',
            'ī': 'i',
            'į': 'i',
            'ᶖ': 'i',
            'ɨ': 'i',
            'ĩ': 'i',
            'ḭ': 'i',
            'ꝺ': 'd',
            'ꝼ': 'f',
            'ᵹ': 'g',
            'ꞃ': 'r',
            'ꞅ': 's',
            'ꞇ': 't',
            'ꝭ': 'is',
            'ǰ': 'j',
            'ĵ': 'j',
            'ʝ': 'j',
            'ɉ': 'j',
            'ḱ': 'k',
            'ǩ': 'k',
            'ķ': 'k',
            'ⱪ': 'k',
            'ꝃ': 'k',
            'ḳ': 'k',
            'ƙ': 'k',
            'ḵ': 'k',
            'ᶄ': 'k',
            'ꝁ': 'k',
            'ꝅ': 'k',
            'ĺ': 'l',
            'ƚ': 'l',
            'ɬ': 'l',
            'ľ': 'l',
            'ļ': 'l',
            'ḽ': 'l',
            'ȴ': 'l',
            'ḷ': 'l',
            'ḹ': 'l',
            'ⱡ': 'l',
            'ꝉ': 'l',
            'ḻ': 'l',
            'ŀ': 'l',
            'ɫ': 'l',
            'ᶅ': 'l',
            'ɭ': 'l',
            'ł': 'l',
            'ǉ': 'lj',
            'ſ': 's',
            'ẜ': 's',
            'ẛ': 's',
            'ẝ': 's',
            'ḿ': 'm',
            'ṁ': 'm',
            'ṃ': 'm',
            'ɱ': 'm',
            'ᵯ': 'm',
            'ᶆ': 'm',
            'ń': 'n',
            'ň': 'n',
            'ņ': 'n',
            'ṋ': 'n',
            'ȵ': 'n',
            'ṅ': 'n',
            'ṇ': 'n',
            'ǹ': 'n',
            'ɲ': 'n',
            'ṉ': 'n',
            'ƞ': 'n',
            'ᵰ': 'n',
            'ᶇ': 'n',
            'ɳ': 'n',
            'ñ': 'n',
            'ǌ': 'nj',
            'ó': 'o',
            'ŏ': 'o',
            'ǒ': 'o',
            'ô': 'o',
            'ố': 'o',
            'ộ': 'o',
            'ồ': 'o',
            'ổ': 'o',
            'ỗ': 'o',
            'ö': 'o',
            'ȫ': 'o',
            'ȯ': 'o',
            'ȱ': 'o',
            'ọ': 'o',
            'ő': 'o',
            'ȍ': 'o',
            'ò': 'o',
            'ỏ': 'o',
            'ơ': 'o',
            'ớ': 'o',
            'ợ': 'o',
            'ờ': 'o',
            'ở': 'o',
            'ỡ': 'o',
            'ȏ': 'o',
            'ꝋ': 'o',
            'ꝍ': 'o',
            'ⱺ': 'o',
            'ō': 'o',
            'ṓ': 'o',
            'ṑ': 'o',
            'ǫ': 'o',
            'ǭ': 'o',
            'ø': 'o',
            'ǿ': 'o',
            'õ': 'o',
            'ṍ': 'o',
            'ṏ': 'o',
            'ȭ': 'o',
            'ƣ': 'oi',
            'ꝏ': 'oo',
            'ɛ': 'e',
            'ᶓ': 'e',
            'ɔ': 'o',
            'ᶗ': 'o',
            'ȣ': 'ou',
            'ṕ': 'p',
            'ṗ': 'p',
            'ꝓ': 'p',
            'ƥ': 'p',
            'ᵱ': 'p',
            'ᶈ': 'p',
            'ꝕ': 'p',
            'ᵽ': 'p',
            'ꝑ': 'p',
            'ꝙ': 'q',
            'ʠ': 'q',
            'ɋ': 'q',
            'ꝗ': 'q',
            'ŕ': 'r',
            'ř': 'r',
            'ŗ': 'r',
            'ṙ': 'r',
            'ṛ': 'r',
            'ṝ': 'r',
            'ȑ': 'r',
            'ɾ': 'r',
            'ᵳ': 'r',
            'ȓ': 'r',
            'ṟ': 'r',
            'ɼ': 'r',
            'ᵲ': 'r',
            'ᶉ': 'r',
            'ɍ': 'r',
            'ɽ': 'r',
            'ↄ': 'c',
            'ꜿ': 'c',
            'ɘ': 'e',
            'ɿ': 'r',
            'ś': 's',
            'ṥ': 's',
            'š': 's',
            'ṧ': 's',
            'ş': 's',
            'ŝ': 's',
            'ș': 's',
            'ṡ': 's',
            'ṣ': 's',
            'ṩ': 's',
            'ʂ': 's',
            'ᵴ': 's',
            'ᶊ': 's',
            'ȿ': 's',
            'ɡ': 'g',
            'ß': 'ss',
            'ᴑ': 'o',
            'ᴓ': 'o',
            'ᴝ': 'u',
            'ť': 't',
            'ţ': 't',
            'ṱ': 't',
            'ț': 't',
            'ȶ': 't',
            'ẗ': 't',
            'ⱦ': 't',
            'ṫ': 't',
            'ṭ': 't',
            'ƭ': 't',
            'ṯ': 't',
            'ᵵ': 't',
            'ƫ': 't',
            'ʈ': 't',
            'ŧ': 't',
            'ᵺ': 'th',
            'ɐ': 'a',
            'ᴂ': 'ae',
            'ǝ': 'e',
            'ᵷ': 'g',
            'ɥ': 'h',
            'ʮ': 'h',
            'ʯ': 'h',
            'ᴉ': 'i',
            'ʞ': 'k',
            'ꞁ': 'l',
            'ɯ': 'm',
            'ɰ': 'm',
            'ᴔ': 'oe',
            'ɹ': 'r',
            'ɻ': 'r',
            'ɺ': 'r',
            'ⱹ': 'r',
            'ʇ': 't',
            'ʌ': 'v',
            'ʍ': 'w',
            'ʎ': 'y',
            'ꜩ': 'tz',
            'ú': 'u',
            'ŭ': 'u',
            'ǔ': 'u',
            'û': 'u',
            'ṷ': 'u',
            'ü': 'u',
            'ǘ': 'u',
            'ǚ': 'u',
            'ǜ': 'u',
            'ǖ': 'u',
            'ṳ': 'u',
            'ụ': 'u',
            'ű': 'u',
            'ȕ': 'u',
            'ù': 'u',
            'ủ': 'u',
            'ư': 'u',
            'ứ': 'u',
            'ự': 'u',
            'ừ': 'u',
            'ử': 'u',
            'ữ': 'u',
            'ȗ': 'u',
            'ū': 'u',
            'ṻ': 'u',
            'ų': 'u',
            'ᶙ': 'u',
            'ů': 'u',
            'ũ': 'u',
            'ṹ': 'u',
            'ṵ': 'u',
            'ᵫ': 'ue',
            'ꝸ': 'um',
            'ⱴ': 'v',
            'ꝟ': 'v',
            'ṿ': 'v',
            'ʋ': 'v',
            'ᶌ': 'v',
            'ⱱ': 'v',
            'ṽ': 'v',
            'ꝡ': 'vy',
            'ẃ': 'w',
            'ŵ': 'w',
            'ẅ': 'w',
            'ẇ': 'w',
            'ẉ': 'w',
            'ẁ': 'w',
            'ⱳ': 'w',
            'ẘ': 'w',
            'ẍ': 'x',
            'ẋ': 'x',
            'ᶍ': 'x',
            'ý': 'y',
            'ŷ': 'y',
            'ÿ': 'y',
            'ẏ': 'y',
            'ỵ': 'y',
            'ỳ': 'y',
            'ƴ': 'y',
            'ỷ': 'y',
            'ỿ': 'y',
            'ȳ': 'y',
            'ẙ': 'y',
            'ɏ': 'y',
            'ỹ': 'y',
            'ź': 'z',
            'ž': 'z',
            'ẑ': 'z',
            'ʑ': 'z',
            'ⱬ': 'z',
            'ż': 'z',
            'ẓ': 'z',
            'ȥ': 'z',
            'ẕ': 'z',
            'ᵶ': 'z',
            'ᶎ': 'z',
            'ʐ': 'z',
            'ƶ': 'z',
            'ɀ': 'z',
            'ﬀ': 'ff',
            'ﬃ': 'ffi',
            'ﬄ': 'ffl',
            'ﬁ': 'fi',
            'ﬂ': 'fl',
            'ĳ': 'ij',
            'œ': 'oe',
            'ﬆ': 'st',
            'ₐ': 'a',
            'ₑ': 'e',
            'ᵢ': 'i',
            'ⱼ': 'j',
            'ₒ': 'o',
            'ᵣ': 'r',
            'ᵤ': 'u',
            'ᵥ': 'v',
            'ₓ': 'x',
        };
    }
    transform(text, chars = '\\s') {
        return isString(text)
            ? text.replace(/[^A-Za-z0-9]/g, (key) => {
                return this.latinMap[key] || key;
            })
            : text;
    }
}
LatinisePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'latinise' },] }
];

class LinesPipe {
    transform(text, chars = '\\s') {
        return isString(text) ? text.replace(/\r\n/g, '\n').split('\n') : text;
    }
}
LinesPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'lines' },] }
];

class UnderscorePipe {
    transform(text, chars = '\\s') {
        return isString(text)
            ? text
                .trim()
                .replace(/\s+/g, '')
                .replace(/[A-Z]/g, (c, k) => {
                return k ? `_${c.toLowerCase()}` : c.toLowerCase();
            })
            : text;
    }
}
UnderscorePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'underscore' },] }
];

class MatchPipe {
    transform(text, pattern, flags) {
        if (!isString(text)) {
            return text;
        }
        return text.match(new RegExp(pattern, flags));
    }
}
MatchPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'match' },] }
];

class TestPipe {
    transform(text, pattern, flags) {
        if (!isString(text)) {
            return text;
        }
        return new RegExp(pattern, flags).test(text);
    }
}
TestPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'test' },] }
];

class LeftPadPipe {
    transform(str, length, padCharacter = ' ') {
        if (!isString(str) || str.length >= length) {
            return str;
        }
        while (str.length < length) {
            str = padCharacter + str;
        }
        return str;
    }
}
LeftPadPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'lpad' },] }
];

class RightPadPipe {
    transform(str, length = 1, padCharacter = ' ') {
        if (!isString(str) || str.length >= length) {
            return str;
        }
        while (str.length < length) {
            str = str + padCharacter;
        }
        return str;
    }
}
RightPadPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'rpad' },] }
];

/**
 * Takes a singular entity string and pluralizes it.
 * Uses both naive and holdout-list approaches.
 * If several words appear in the string, only the last word is pluralized -- this
 * means that if "your story" was passed in, "your stories" would be passed out.
 *
 * @param {string} singularEntity - Entity to pluralize. Pass as a singular ('story' or 'house').
 *          NOTE: The last word is examined. So you can pass in e.g. 'my story'.
 * @param {number} [quantity=0] quantity - How many of the entity are there? If left blank, this will
 *          pluralize the string (e.g. 'story' -> 'stories', 'house' -> 'houses'). If given a value,
 *          this will pluralize appropriately (e.g. ('story', 1) -> 'story', ('story', 2) -> 'stories').
 */
class MakePluralStringPipe {
    constructor() {
        this.irregularMap = {
            addendum: 'addenda',
            alga: 'algae',
            alumna: 'alumnae',
            alumnus: 'alumni',
            analysis: 'analyses',
            antenna: 'antennae',
            appendix: 'appendices',
            aquarium: 'aquaria',
            arch: 'arches',
            axe: 'axes',
            axis: 'axes',
            bacillus: 'bacilli',
            bacterium: 'bacteria',
            basis: 'bases',
            batch: 'batches',
            beach: 'beaches',
            beau: 'beaux',
            bison: 'bison',
            brush: 'brushes',
            buffalo: 'buffaloes',
            bureau: 'bureaus',
            bus: 'busses',
            cactus: 'cacti',
            calf: 'calves',
            chateau: 'chateaux',
            cherry: 'cherries',
            child: 'children',
            church: 'churches',
            circus: 'circuses',
            cod: 'cod',
            corps: 'corps',
            corpus: 'corpora',
            crisis: 'crises',
            criterion: 'criteria',
            curriculum: 'curricula',
            datum: 'data',
            deer: 'deer',
            diagnosis: 'diagnoses',
            die: 'dice',
            domino: 'dominoes',
            dwarf: 'dwarves',
            echo: 'echoes',
            elf: 'elves',
            ellipsis: 'ellipses',
            embargo: 'embargoes',
            emphasis: 'emphases',
            erratum: 'errata',
            fax: 'faxes',
            fireman: 'firemen',
            fish: 'fish',
            flush: 'flushes',
            focus: 'foci',
            foot: 'feet',
            formula: 'formulas',
            fungus: 'fungi',
            genus: 'genera',
            goose: 'geese',
            grafito: 'grafiti',
            half: 'halves',
            hero: 'heroes',
            hoax: 'hoaxes',
            hoof: 'hooves',
            hypothesis: 'hypotheses',
            index: 'indices',
            kiss: 'kisses',
            knife: 'knives',
            leaf: 'leaves',
            life: 'lives',
            loaf: 'loaves',
            louse: 'lice',
            man: 'men',
            mango: 'mangoes',
            matrix: 'matrices',
            means: 'means',
            medium: 'media',
            memorandum: 'memoranda',
            millennium: 'milennia',
            moose: 'moose',
            mosquito: 'mosquitoes',
            motto: 'mottoes',
            mouse: 'mice',
            nebula: 'nebulae',
            neurosis: 'neuroses',
            nucleus: 'nuclei',
            oasis: 'oases',
            octopus: 'octopodes',
            ovum: 'ova',
            ox: 'oxen',
            paralysis: 'paralyses',
            parenthesis: 'parentheses',
            person: 'people',
            phenomenon: 'phenomena',
            plateau: 'plateaux',
            potato: 'potatoes',
            quiz: 'quizzes',
            radius: 'radii',
            reflex: 'reflexes',
            'runner-up': 'runners-up',
            scampo: 'scampi',
            scarf: 'scarves',
            scissors: 'scissors',
            scratch: 'scratches',
            self: 'selves',
            series: 'series',
            sheaf: 'sheaves',
            sheep: 'sheep',
            shelf: 'shelves',
            'son-in-law': 'sons-in-law',
            species: 'species',
            splash: 'splashes',
            stimulus: 'stimuli',
            stitch: 'stitches',
            stratum: 'strata',
            syllabus: 'syllabi',
            symposium: 'symposia',
            synopsis: 'synopses',
            synthesis: 'syntheses',
            tableau: 'tableaux',
            tax: 'taxes',
            that: 'those',
            thesis: 'theses',
            thief: 'thieves',
            this: 'these',
            tomato: 'tomatoes',
            tooth: 'teeth',
            tornado: 'tornadoes',
            torpedo: 'torpedoes',
            vertebra: 'vertebrae',
            veto: 'vetoes',
            vita: 'vitae',
            volcano: 'volcanoes',
            waltz: 'waltzes',
            wash: 'washes',
            watch: 'watches',
            wharf: 'wharves',
            wife: 'wives',
            wolf: 'wolves',
            woman: 'women',
            zero: 'zeroes',
        };
    }
    transform(singularEntity, quantity = 0) {
        if (!singularEntity || singularEntity === '') {
            return '';
        }
        if (quantity === 1) {
            return singularEntity;
        }
        else {
            const lastWord = singularEntity.trim().split(' ')[singularEntity.trim().split(' ').length - 1];
            if (this.irregularMap[lastWord.toLocaleLowerCase()]) {
                if (lastWord[0] === lastWord[0].toLocaleUpperCase()) {
                    return singularEntity.replace(lastWord, this.irregularMap[lastWord.toLocaleLowerCase()].replace(this.irregularMap[lastWord.toLocaleLowerCase()][0], this.irregularMap[lastWord.toLocaleLowerCase()][0].toLocaleUpperCase()));
                }
                return singularEntity.replace(lastWord, this.irregularMap[lastWord.toLocaleLowerCase()]);
            }
            else if (lastWord[lastWord.length - 1] === 'y') {
                // Naive approach:
                // consonant+y = word - 'y' +'ies'
                // vowel+y = word + 's'
                return isVowel(lastWord[lastWord.length - 2])
                    ? singularEntity + 's'
                    : singularEntity.replace(lastWord, lastWord.slice(0, -1) + 'ies');
            }
            else if (lastWord[lastWord.length - 1] === 's') {
                return singularEntity + 'es';
            }
            else {
                return singularEntity + 's';
            }
        }
    }
}
MakePluralStringPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                name: 'makePluralString',
            },] }
];

class WrapPipe {
    transform(str, prefix = '', suffix = '') {
        if (!isString(str)) {
            return str;
        }
        return (!!prefix && isString(prefix) ? prefix : '') + str + (!!suffix && isString(suffix) ? suffix : '');
    }
}
WrapPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'wrap' },] }
];

const STRING_PIPES = [
    AorAnPipe,
    LeftTrimPipe,
    RepeatPipe,
    RightTrimPipe,
    ScanPipe,
    ShortenPipe,
    StripTagsPipe,
    TrimPipe,
    UcFirstPipe,
    UcWordsPipe,
    SlugifyPipe,
    CamelizePipe,
    LatinisePipe,
    LinesPipe,
    UnderscorePipe,
    MatchPipe,
    TestPipe,
    LeftPadPipe,
    RightPadPipe,
    MakePluralStringPipe,
    WrapPipe,
];
class NgStringPipesModule {
}
NgStringPipesModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: STRING_PIPES,
                imports: [],
                exports: STRING_PIPES,
            },] }
];

class MaxPipe {
    transform(arr) {
        return Array.isArray(arr) ? Math.max(...arr) : arr;
    }
}
MaxPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'max' },] }
];

class MinPipe {
    transform(arr) {
        return Array.isArray(arr) ? Math.min(...arr) : arr;
    }
}
MinPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'min' },] }
];

class PercentagePipe {
    transform(num, total = 100, floor = false) {
        if (isNaN(num)) {
            return num;
        }
        const percent = (num * 100) / total;
        return floor ? Math.floor(percent) : percent;
    }
}
PercentagePipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'percentage' },] }
];

class SumPipe {
    transform(arr) {
        return Array.isArray(arr) ? arr.reduce((sum, curr) => sum + curr, 0) : arr;
    }
}
SumPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'sum' },] }
];

class FloorPipe {
    transform(num, precision = 0) {
        if (precision <= 0) {
            return Math.floor(num);
        }
        const tho = Math.pow(10, precision);
        return Math.floor(num * tho) / tho;
    }
}
FloorPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'floor' },] }
];

class RoundPipe {
    transform(num, precision = 0) {
        return applyPrecision(num, precision);
    }
}
RoundPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'round' },] }
];

class SqrtPipe {
    transform(num) {
        return !isNaN(num) ? Math.sqrt(num) : num;
    }
}
SqrtPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'sqrt' },] }
];

class PowerPipe {
    transform(num, power = 2) {
        return !isNaN(num) ? Math.pow(num, power) : num;
    }
}
PowerPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'pow' },] }
];

class CeilPipe {
    transform(num, precision = 0) {
        if (precision <= 0) {
            return Math.ceil(num);
        }
        const tho = Math.pow(10, precision);
        return Math.ceil(num * tho) / tho;
    }
}
CeilPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'ceil' },] }
];

class DegreesPipe {
    transform(radians) {
        if (!isNumberFinite(radians)) {
            return NaN;
        }
        return (radians * 180) / Math.PI;
    }
}
DegreesPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'degrees' },] }
];

class BytesPipe {
    constructor() {
        this.dictionary = [
            { max: 1024, type: 'B' },
            { max: 1048576, type: 'KB' },
            { max: 1073741824, type: 'MB' },
            { max: 1.0995116e12, type: 'GB' },
        ];
    }
    transform(value, precision) {
        if (!isNumberFinite(value)) {
            return NaN;
        }
        const format = this.dictionary.find(d => value < d.max) || this.dictionary[this.dictionary.length - 1];
        const calc = value / (format.max / 1024);
        const num = isUndefined(precision) ? calc : applyPrecision(calc, precision);
        return `${num} ${format.type}`;
    }
}
BytesPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'bytes' },] }
];

class RadiansPipe {
    transform(degrees) {
        if (!isNumberFinite(degrees)) {
            return NaN;
        }
        return (degrees * Math.PI) / 180;
    }
}
RadiansPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'radians' },] }
];

const MATH_PIPES = [
    MaxPipe,
    MinPipe,
    PercentagePipe,
    SumPipe,
    FloorPipe,
    RoundPipe,
    SqrtPipe,
    PowerPipe,
    CeilPipe,
    DegreesPipe,
    BytesPipe,
    RadiansPipe,
];
class NgMathPipesModule {
}
NgMathPipesModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: MATH_PIPES,
                imports: [],
                exports: MATH_PIPES,
            },] }
];

class IsDefinedPipe {
    transform(input) {
        return !isUndefined(input);
    }
}
IsDefinedPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'isDefined' },] }
];

class IsNullPipe {
    transform(input) {
        return input === null;
    }
}
IsNullPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'isNull' },] }
];

class IsUndefinedPipe {
    transform(input) {
        return isUndefined(input);
    }
}
IsUndefinedPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'isUndefined' },] }
];

class IsStringPipe {
    transform(input) {
        return isString(input);
    }
}
IsStringPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'isString' },] }
];

class IsFunctionPipe {
    transform(input) {
        return isFunction(input);
    }
}
IsFunctionPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'isFunction' },] }
];

class IsNumberPipe {
    transform(input) {
        return isNumber(input);
    }
}
IsNumberPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'isNumber' },] }
];

class IsArrayPipe {
    transform(input) {
        return Array.isArray(input);
    }
}
IsArrayPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'isArray' },] }
];

class IsObjectPipe {
    transform(input) {
        return isObject(input);
    }
}
IsObjectPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'isObject' },] }
];

class IsGreaterEqualThanPipe {
    transform(input, other) {
        return input >= other;
    }
}
IsGreaterEqualThanPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'isGreaterEqualThan' },] }
];

class IsGreaterThanPipe {
    transform(input, other) {
        return input > other;
    }
}
IsGreaterThanPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'isGreaterThan' },] }
];

class IsLessEqualThanPipe {
    transform(input, other) {
        return input <= other;
    }
}
IsLessEqualThanPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'isLessEqualThan' },] }
];

class IsEqualToPipe {
    transform(input, other) {
        // tslint:disable-next-line:triple-equals
        return input == other;
    }
}
IsEqualToPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'isEqualTo' },] }
];

class IsNotEqualToPipe {
    transform(input, other) {
        // tslint:disable-next-line:triple-equals
        return input != other;
    }
}
IsNotEqualToPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'isNotEqualTo' },] }
];

class IsIdenticalToPipe {
    transform(input, other) {
        return input === other;
    }
}
IsIdenticalToPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'isIdenticalTo' },] }
];

class IsNotIdenticalToPipe {
    transform(input, other) {
        return input !== other;
    }
}
IsNotIdenticalToPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'isNotIdenticalTo' },] }
];

class IsLessThanPipe {
    transform(input, other) {
        return input < other;
    }
}
IsLessThanPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'isLessThan' },] }
];

const BOOLEAN_PIPES = [
    IsDefinedPipe,
    IsNullPipe,
    IsUndefinedPipe,
    IsStringPipe,
    IsFunctionPipe,
    IsNumberPipe,
    IsArrayPipe,
    IsObjectPipe,
    IsGreaterEqualThanPipe,
    IsGreaterThanPipe,
    IsLessEqualThanPipe,
    IsLessEqualThanPipe,
    IsEqualToPipe,
    IsNotEqualToPipe,
    IsIdenticalToPipe,
    IsNotIdenticalToPipe,
    IsLessThanPipe,
];
class NgBooleanPipesModule {
}
NgBooleanPipesModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: BOOLEAN_PIPES,
                imports: [],
                exports: BOOLEAN_PIPES,
            },] }
];

class TimeAgoPipe {
    /**
     * @param inputDate: Date | Moment - not included as TypeScript interface,
     * in order to keep `ngx-pipes` "pure" from dependencies!
     */
    transform(inputDate) {
        if (!inputDate || (!inputDate.getTime && !inputDate.toDate)) {
            return 'Invalid date';
        }
        const past = inputDate.toDate ? inputDate.toDate() : inputDate.getTime();
        const now = +new Date();
        if (past > now) {
            return 'in the future';
        }
        for (let i = 0, l = TimeAgoPipe.MAPPER.length, ms = now - past, div = TimeAgoPipe.YEAR_MS; i < l; ++i) {
            const elm = TimeAgoPipe.MAPPER[i];
            const unit = Math.floor(ms / (div /= elm.div));
            if (unit >= 1) {
                return unit === 1 ? elm.single : `${unit} ${elm.many} ago`;
            }
        }
        return 'just now';
    }
}
TimeAgoPipe.YEAR_MS = 1000 * 60 * 60 * 24 * 7 * 4 * 12;
TimeAgoPipe.MAPPER = [
    { single: 'last year', many: 'years', div: 1 },
    { single: 'last month', many: 'months', div: 12 },
    { single: 'last week', many: 'weeks', div: 4 },
    { single: 'yesterday', many: 'days', div: 7 },
    { single: 'an hour ago', many: 'hours', div: 24 },
    { single: 'just now', many: 'minutes', div: 60 },
];
TimeAgoPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{ name: 'timeAgo' },] }
];

const DATE_PIPES = [TimeAgoPipe];
class NgDatePipesModule {
}
NgDatePipesModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: DATE_PIPES,
                imports: [],
                exports: DATE_PIPES,
            },] }
];

class NgPipesModule {
}
NgPipesModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                exports: [
                    NgArrayPipesModule,
                    NgStringPipesModule,
                    NgMathPipesModule,
                    NgBooleanPipesModule,
                    NgObjectPipesModule,
                    NgDatePipesModule,
                ],
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-pipes.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/review/review.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/review/review.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content [scrollEvents]=\"true\" (ionScroll)=\"logScrolling($event)\">\n    <ion-header no-border=\"no-border\">\n        <ion-toolbar [style.backgroundColor]=\"state == 1 ? '' : 'rgba(0,0,0,0.7)'\" mode=\"md\">\n            <ion-buttons slot=\"start\">\n                <ion-back-button defaultHref=\"home\" icon=\"ios-arrow-back\" text=\"\"></ion-back-button>\n            </ion-buttons>\n            <ion-buttons slot=\"end\">\n                <ion-button fill=\"clear\" mode=\"md\" (click)=\"addBookmark()\">\n                    <ion-icon class=\"bookmark-icon\" *ngIf=\"!data?.favourite\" src=\"../../../assets/icon-image/detail-icon.svg\"></ion-icon>\n                    <ion-icon class=\"bookmark-icon\" *ngIf=\"data?.favourite\" src=\"../../../assets/icon-image/bookmark-icon.svg\"></ion-icon>\n                </ion-button>\n            </ion-buttons>\n        </ion-toolbar>\n    </ion-header>\n\n    <div class=\"img_div\">\n        <img [src]=\"data?.imagePath + data?.image\" />\n        <div class=\"name_div\">\n            <h3 class=\"name\">\n                {{data?.name}}\n            </h3>\n        </div>\n    </div>\n\n    <div class=\"menu_div ion-margin-horizontal\">\n        <div class=\"four\">\n            <div class=\"first_div\">\n                <span>{{data?.rate}}</span>\n            </div>\n            <div class=\"last_div\">\n                <h3 class=\"ascii\">{{data?.totalReview}}</h3>\n                <h3 class=\"review\">{{'review_page.review' | translate}}</h3>\n            </div>\n        </div>\n        <h3 class=\"tittle\">{{data?.itemNames}}</h3>\n        <p class=\"address\">{{data?.address}}</p>\n        <p class=\"open\">\n            {{'review_page.open_now' | translate}}\n            <span>- {{data?.open_time}}-{{data?.close_time}}\n                {{'review_page.mon_to_sun' | translate}}</span>\n        </p>\n    </div>\n    <div class=\"rating_div ion-margin-horizontal\">\n        <div class=\"first_col\">\n            <h3 class=\"rate\">\n                <ion-icon name=\"star\"></ion-icon>\n                {{data?.rate}}\n            </h3>\n            <h3 class=\"rating\">5000+ {{'review_page.rating' | translate}}</h3>\n        </div>\n        <div class=\"first_col ion-text-center dot_div\">\n            <div class=\"dot\"></div>\n        </div>\n        <div class=\"first_col\">\n            <h3 class=\"rate\">{{data?.delivery_time}} {{'review_page.mins' | translate}}</h3>\n            <h3 class=\"rating\">{{'review_page.delivery_time' | translate}}</h3>\n        </div>\n        <div class=\"first_col ion-text-center dot_div\">\n            <div class=\"dot\"></div>\n        </div>\n        <div class=\"first_col\">\n            <h3 class=\"rate\">{{currency}}{{data?.avarage_plate_price}}</h3>\n            <h3 class=\"rating\">{{'review_page.for_two' | translate}}</h3>\n        </div>\n    </div>\n    <div class=\"coopan_div\">\n        <div class=\"container\" *ngFor=\"let item of data?.coupon\">\n            <section class=\"left\">\n                <p class=\"left_p\">{{item?.discount}}% {{'review_page.off' | translate}}</p>\n            </section>\n            <section class=\"right\">\n                <p class=\"right_p\">{{item?.description}}</p>\n            </section>\n        </div>\n    </div>\n\n    <p class=\"about_p ion-padding-horizontal\">\n        {{data?.description}}\n    </p>\n\n    <div class=\"photo_div ion-margin-start\">\n        <p class=\"p_text\">\n            {{'review_page.photos' | translate}}\n        </p>\n        <p *ngIf=\"data?.gallery?.length==0\" class=\"no_data_p\">{{'review_page.no_data' | translate}}</p>\n        <div class=\"gallary_img\">\n\n            <img [src]=\"item.imagePath + item.image\" *ngFor=\"let item of data?.gallery\" />\n        </div>\n    </div>\n\n    <div class=\"review_div \">\n        <p class=\"p_text ion-padding-start\">\n            {{'review_page.review' | translate}}\n        </p>\n        <p *ngIf=\"data?.review?.length==0\" class=\"ion-padding-start no_data_p\"> {{'review_page.no_data' | translate}}</p>\n        <ion-item class=\"review_item\" *ngFor=\"let item of data?.review\" lines=\"none\">\n            <ion-avatar slot=\"start\">\n                <img [src]=\"item.customer.imagePath + item.customer.image\" />\n            </ion-avatar>\n            <ion-label>\n                <ion-icon [class]=\"item.rate >= 5 ? 'first_icon hydrated ion-float-right' :\n                                       'last_icon hydrated ion-float-right'\" name=\"star\"></ion-icon>\n                <ion-icon [class]=\"item.rate >= 4 ? 'first_icon hydrated ion-float-right' :\n                                          'last_icon hydrated ion-float-right'\" name=\"star\"></ion-icon>\n                <ion-icon [class]=\"item.rate >= 3 ? 'first_icon hydrated ion-float-right' :\n                                              'last_icon hydrated ion-float-right'\" name=\"star\"></ion-icon>\n                <ion-icon [class]=\"item.rate >= 2 ? 'first_icon hydrated ion-float-right' :\n                                                  'last_icon hydrated ion-float-right'\" name=\"star\"></ion-icon>\n                <ion-icon [class]=\"item.rate >= 1 ? 'first_icon hydrated ion-float-right' :\n                                                      'last_icon hydrated ion-float-right'\" name=\"star\"></ion-icon>\n                <h3 class=\"name\">{{item?.customer?.name}}</h3>\n\n                <h3 class=\"ago\">{{ item?.created_at}}</h3>\n                <p class=\"detail\">{{item?.message}}</p>\n                <div class=\"yes_div\" *ngIf=\"item?.status\">\n                    <p class=\"yes_p\">\n                        {{'review_page.was_helpful' | translate}}\n                        <ion-button class=\"no_btn ion-float-right ion-text-capitalize\">{{'review_page.no' | translate}}</ion-button>\n                        <ion-button class=\"yes_btn ion-float-right ion-text-capitalize\">{{'review_page.yes' | translate}}</ion-button>\n                    </p>\n                </div>\n            </ion-label>\n        </ion-item>\n\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/review/review.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/review/review.module.ts ***!
  \***********************************************/
/*! exports provided: ReviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewPageModule", function() { return ReviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/fesm2015/ngx-pipes.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _review_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./review.page */ "./src/app/pages/review/review.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");









var routes = [
    {
        path: "",
        component: _review_page__WEBPACK_IMPORTED_MODULE_7__["ReviewPage"]
    }
];
var ReviewPageModule = /** @class */ (function () {
    function ReviewPageModule() {
    }
    ReviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                ngx_pipes__WEBPACK_IMPORTED_MODULE_5__["NgPipesModule"]
            ],
            declarations: [_review_page__WEBPACK_IMPORTED_MODULE_7__["ReviewPage"]]
        })
    ], ReviewPageModule);
    return ReviewPageModule;
}());



/***/ }),

/***/ "./src/app/pages/review/review.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/review/review.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  position: relative;\n}\nion-content ion-header {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n}\nion-content ion-header ion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n  -webkit-transform-style: flat;\n          transform-style: flat;\n  -webkit-transition: background-color 0.5s ease-in 0.5s;\n  transition: background-color 0.5s ease-in 0.5s;\n}\nion-content ion-header ion-toolbar ion-buttons ion-back-button {\n  --color: var(--ion-color-white);\n}\nion-content .img_div {\n  position: relative;\n}\nion-content .img_div img {\n  height: 200px;\n  width: -webkit-fill-available;\n}\nion-content .img_div .name_div {\n  position: absolute;\n  padding: 0 16px;\n  bottom: 0;\n  width: 100%;\n}\nion-content .img_div .name_div .name {\n  font-family: \"Poppins-Medium\";\n  font-size: 20px;\n  color: var(--ion-color-white);\n}\nion-content .menu_div {\n  position: relative;\n  margin-top: 15px;\n  padding-bottom: 10px;\n  border-bottom: dashed 1px var(--ion-border-color);\n}\nion-content .menu_div .tittle {\n  font-size: 14px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-darkBlue);\n  margin: 0px;\n  padding-right: 50px;\n}\nion-content .menu_div .address {\n  font-size: 10.5px;\n  font-family: \"Poppins-Regular\";\n  color: var(--ion-color-darkgray);\n  margin-top: 5px;\n  margin-bottom: 3px;\n}\nion-content .menu_div .open {\n  font-size: 10.5px;\n  font-family: \"Poppins-Regular\";\n  color: var(--ion-color-green);\n  margin: 0px;\n}\nion-content .menu_div .open span {\n  color: var(--ion-color-darkgray);\n}\nion-content .menu_div .four {\n  position: absolute;\n  top: 5px;\n  right: 0;\n}\nion-content .menu_div .four .first_div {\n  height: 22px;\n  width: 30px;\n  background-color: var(--ion-color-green);\n  border-radius: 2px 2px 0px 0px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\nion-content .menu_div .four .first_div span {\n  font-size: 12px;\n  font-family: \"Poppins-Regular\";\n  color: var(--ion-color-white);\n}\nion-content .menu_div .four .last_div {\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.16);\n  height: 22px;\n  width: 30px;\n  border-radius: 0px 0px 2px 2px;\n  display: grid;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\nion-content .menu_div .four .last_div .ascii {\n  font-size: 8px;\n  font-family: \"Poppins-Regular\";\n  margin-top: 2.5px;\n  margin-bottom: 0px;\n  text-align: center;\n}\nion-content .menu_div .four .last_div .review {\n  font-family: \"Poppins-Regular\";\n  font-size: 6.5px;\n  color: var(--ion-color-darkgray);\n  text-align: center;\n  margin: 0px;\n}\nion-content .rating_div {\n  margin-top: 16px;\n  display: -webkit-box;\n  display: flex;\n}\nion-content .rating_div .first_col {\n  width: 20%;\n}\nion-content .rating_div .first_col .rate {\n  font-size: 12px;\n  font-family: \"Poppins-Regular\";\n  color: var(--ion-color-darkgray);\n  margin: 0px;\n  text-align: center;\n}\nion-content .rating_div .first_col .rate ion-icon {\n  color: var(--ion-color-yellow);\n  margin-right: 3px;\n}\nion-content .rating_div .first_col .rating {\n  margin-top: 3px;\n  font-size: 9.7px;\n  font-family: \"Poppins-Regular\";\n  text-align: center;\n  color: var(--ion-color-darkgray);\n}\nion-content .rating_div .dot_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\nion-content .rating_div .dot_div .dot {\n  height: 6px;\n  width: 6px;\n  border-radius: 50%;\n  background-color: var(--ion-color-green);\n  align-self: center;\n}\nion-content .coopan_div {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  background-color: var(--ion-color-sky);\n  padding-left: 16px;\n  display: -webkit-box;\n  overflow: scroll;\n}\nion-content .coopan_div::-webkit-scrollbar {\n  display: none;\n}\nion-content .about_p {\n  font-size: 12px;\n  font-family: \"Poppins-Regular\";\n  color: var(--ion-color-darkgray);\n  text-align: -webkit-center;\n}\nion-content .photo_div .p_text {\n  font-size: 16px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-darkBlue);\n}\nion-content .photo_div .gallary_img {\n  display: -webkit-box;\n  display: flex;\n  overflow-y: auto;\n}\nion-content .photo_div .gallary_img img {\n  margin-right: 10px;\n  height: 90px;\n  width: 90px;\n  border-radius: 5px;\n  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.3);\n}\nion-content .photo_div .gallary_img::-webkit-scrollbar {\n  display: none;\n}\nion-content .review_div {\n  margin-bottom: 20px;\n}\nion-content .review_div .p_text {\n  font-size: 16px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-darkBlue);\n}\nion-content .review_div .yes_div {\n  margin-top: 10px;\n}\nion-content .review_div .yes_div .yes_p {\n  font-size: 12px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-darkBlue);\n}\nion-content .review_div .yes_div .yes_p .yes_btn {\n  --background: var(--ion-btn-green);\n}\nion-content .review_div .yes_div .yes_p .no_btn {\n  --background: var(--ion-btn-color);\n}\nion-content .review_div .yes_div .yes_p ion-button {\n  height: 20px;\n  width: 50px;\n  --border-radius: 10px;\n  font-size: 10px;\n  --color: var(--ion-color-darkBlue);\n  --box-shadow: none;\n}\nion-content .review_div .review_item ion-avatar {\n  align-self: baseline;\n}\nion-content .review_div .review_item ion-avatar img {\n  border: solid 3px var(--ion-color-white);\n  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.6);\n}\nion-content .review_div .review_item ion-label {\n  white-space: normal;\n}\nion-content .review_div .review_item ion-label .name {\n  font-size: 12px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-darkBlue);\n  margin: 0;\n}\nion-content .review_div .review_item ion-label .ago {\n  font-size: 10.5px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-darkgray);\n  margin-top: 3px;\n  margin-bottom: 3px;\n}\nion-content .review_div .review_item ion-label .detail {\n  font-size: 10.5px;\n  font-family: \"Poppins-Regular\";\n  color: var(--ion-color-darkgray);\n  margin: 0;\n  line-height: 15px;\n}\nion-content .review_div .review_item ion-label .first_icon {\n  color: var(--ion-color-green);\n}\nion-content .review_div .review_item ion-label .last_icon {\n  color: var(--ion-star-color);\n}\nion-content .review_div .last_div {\n  height: 36px;\n  background-color: var(--ion-color-sky);\n  border-radius: 18px;\n  margin-top: 30px;\n  margin-bottom: 10px;\n  padding: 10px 15px 0px 15px;\n}\nion-content .review_div .last_div .last_p {\n  font-size: 12px;\n  margin: 0px;\n  font-family: \"Poppins-Medium\";\n  color: var(--ion-color-darkBlue);\n}\n.container {\n  position: relative;\n  width: 155px;\n  background-color: #fff;\n  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.16);\n  display: -webkit-box;\n  display: flex;\n  margin-right: 10px;\n}\nsection {\n  display: inline-block;\n  vertical-align: middle;\n}\n.container .left:before {\n  content: \"\";\n  background-color: var(--ion-color-sky);\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  position: absolute;\n  top: -3px;\n  left: 38px;\n}\n.container .left:after {\n  content: \"\";\n  background-color: var(--ion-color-sky);\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  position: absolute;\n  bottom: -3px;\n  left: 38px;\n}\n.container .left {\n  padding: 5px 10px;\n  font-weight: 700;\n  text-align: center;\n  letter-spacing: 0px;\n  width: 40%;\n}\n.container .right {\n  padding: 5px 5px 5px 0px;\n  width: 60%;\n}\n.left_p {\n  color: var(--ion-color-red);\n  font-family: \"Poppins-Regular\";\n  font-size: 11px;\n  margin-top: 5px;\n  width: 70%;\n}\n.right_p {\n  font-family: \"Poppins-Regular\";\n  color: var(--ion-color-darkgray);\n  font-size: 11px;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmV2aWV3L0M6XFxVc2Vyc1xcb3NpYW5cXERlc2t0b3BcXE5BVFVVVDIuMC9zcmNcXGFwcFxccGFnZXNcXHJldmlld1xccmV2aWV3LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmV2aWV3L3Jldmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGO0FEQUU7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNFSjtBREFJO0VBQ0UseUJBQUE7RUFDQSx3Q0FBQTtFQUNBLDZCQUFBO1VBQUEscUJBQUE7RUFDQSxzREFBQTtFQUFBLDhDQUFBO0FDRU47QURBUTtFQUNFLCtCQUFBO0FDRVY7QURHRTtFQUtFLGtCQUFBO0FDTEo7QURDSTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtBQ0NOO0FERUk7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0FOO0FEQ007RUFDRSw2QkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQ0NSO0FESUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpREFBQTtBQ0ZKO0FER0k7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0ROO0FER0k7RUFDRSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNETjtBREdJO0VBQ0UsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtBQ0ROO0FERU07RUFDRSxnQ0FBQTtBQ0FSO0FESUk7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0FDRk47QURHTTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esd0NBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNEUjtBREVRO0VBQ0UsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7QUNBVjtBREdNO0VBQ0UsK0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNEUjtBREVRO0VBQ0UsY0FBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQVY7QURFUTtFQUNFLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0FWO0FES0U7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0hKO0FESUk7RUFDRSxVQUFBO0FDRk47QURJTTtFQUNFLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRlI7QURHUTtFQUNFLDhCQUFBO0VBQ0EsaUJBQUE7QUNEVjtBRElNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FDRlI7QURLSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNITjtBRElNO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7QUNGUjtBRE9FO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDTEo7QURPRTtFQUNFLGFBQUE7QUNMSjtBRE9FO0VBQ0UsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwwQkFBQTtBQ0xKO0FEUUk7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQ05OO0FEUUk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxnQkFBQTtBQ05OO0FET007RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw4Q0FBQTtBQ0xSO0FEUUk7RUFDRSxhQUFBO0FDTk47QURTRTtFQUNFLG1CQUFBO0FDUEo7QURTSTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FDUE47QURTSTtFQUNFLGdCQUFBO0FDUE47QURRTTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0FDTlI7QURPUTtFQUNFLGtDQUFBO0FDTFY7QURPUTtFQUNFLGtDQUFBO0FDTFY7QURPUTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtBQ0xWO0FEVU07RUFDRSxvQkFBQTtBQ1JSO0FEU1E7RUFDRSx3Q0FBQTtFQUNBLDhDQUFBO0FDUFY7QURVTTtFQUNFLG1CQUFBO0FDUlI7QURTUTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtBQ1BWO0FEU1E7RUFDRSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNQVjtBRFNRO0VBQ0UsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FDUFY7QURTUTtFQUNFLDZCQUFBO0FDUFY7QURTUTtFQUNFLDRCQUFBO0FDUFY7QURZSTtFQUNFLFlBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FDVk47QURXTTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQ1RSO0FEZUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLCtDQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esa0JBQUE7QUNaRjtBRGVBO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtBQ1pGO0FEY0E7RUFDRSxXQUFBO0VBQ0Esc0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ1hGO0FEY0E7RUFDRSxXQUFBO0VBQ0Esc0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ1hGO0FEY0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUNYRjtBRGNBO0VBQ0Usd0JBQUE7RUFDQSxVQUFBO0FDWEY7QURjQTtFQUNFLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUNYRjtBRGNBO0VBQ0UsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDWEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXZpZXcvcmV2aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaW9uLWhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuXHJcbiAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHRyYW5zZm9ybS1zdHlsZTogZmxhdDtcclxuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzIGVhc2UtaW4gMC41cztcclxuICAgICAgaW9uLWJ1dHRvbnMge1xyXG4gICAgICAgIGlvbi1iYWNrLWJ1dHRvbiB7XHJcbiAgICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuaW1nX2RpdiB7XHJcbiAgICBpbWcge1xyXG4gICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICAgIH1cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC5uYW1lX2RpdiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAubmFtZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tZW51X2RpdiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiBkYXNoZWQgMXB4IHZhcigtLWlvbi1ib3JkZXItY29sb3IpO1xyXG4gICAgLnRpdHRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XHJcbiAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLmFkZHJlc3Mge1xyXG4gICAgICBmb250LXNpemU6IDEwLjVweDtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1SZWd1bGFyXCI7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2dyYXkpO1xyXG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgIH1cclxuICAgIC5vcGVuIHtcclxuICAgICAgZm9udC1zaXplOiAxMC41cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtUmVndWxhclwiO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2dyYXkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvdXIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNXB4O1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgLmZpcnN0X2RpdiB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1ncmVlbik7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4IDJweCAwcHggMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAubGFzdF9kaXYge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG4gICAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDJweCAycHg7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAuYXNjaWkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDIuNXB4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmV2aWV3IHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtUmVndWxhclwiO1xyXG4gICAgICAgICAgZm9udC1zaXplOiA2LjVweDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2dyYXkpO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5yYXRpbmdfZGl2IHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLmZpcnN0X2NvbCB7XHJcbiAgICAgIHdpZHRoOiAyMCU7XHJcblxyXG4gICAgICAucmF0ZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtUmVndWxhclwiO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2dyYXkpO1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXllbGxvdyk7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnJhdGluZyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOS43cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1SZWd1bGFyXCI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2dyYXkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuZG90X2RpdiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAuZG90IHtcclxuICAgICAgICBoZWlnaHQ6IDZweDtcclxuICAgICAgICB3aWR0aDogNnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvb3Bhbl9kaXYge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1za3kpO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIH1cclxuICAuY29vcGFuX2Rpdjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmFib3V0X3Age1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1SZWd1bGFyXCI7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtncmF5KTtcclxuICAgIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xyXG4gIH1cclxuICAucGhvdG9fZGl2IHtcclxuICAgIC5wX3RleHQge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xyXG4gICAgfVxyXG4gICAgLmdhbGxhcnlfaW1nIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgaW1nIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuZ2FsbGFyeV9pbWc6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgLnJldmlld19kaXYge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAucF90ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKTtcclxuICAgIH1cclxuICAgIC55ZXNfZGl2IHtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgLnllc19wIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKTtcclxuICAgICAgICAueWVzX2J0biB7XHJcbiAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1idG4tZ3JlZW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubm9fYnRuIHtcclxuICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJ0bi1jb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xyXG4gICAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJldmlld19pdGVtIHtcclxuICAgICAgaW9uLWF2YXRhciB7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIGJvcmRlcjogc29saWQgM3B4IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWdvIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTAuNXB4O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2dyYXkpO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGV0YWlsIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTAuNXB4O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1SZWd1bGFyXCI7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtncmF5KTtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZmlyc3RfaWNvbiB7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxhc3RfaWNvbiB7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLXN0YXItY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5sYXN0X2RpdiB7XHJcbiAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNreSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMTVweCAwcHggMTVweDtcclxuICAgICAgLmxhc3RfcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTU1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLmNvbnRhaW5lciAubGVmdDpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNreSk7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtM3B4O1xyXG4gIGxlZnQ6IDM4cHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLmxlZnQ6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNreSk7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAtM3B4O1xyXG4gIGxlZnQ6IDM4cHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLmxlZnQge1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgd2lkdGg6IDQwJTtcclxufVxyXG5cclxuLmNvbnRhaW5lciAucmlnaHQge1xyXG4gIHBhZGRpbmc6IDVweCA1cHggNXB4IDBweDtcclxuICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG4ubGVmdF9wIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXJlZCk7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1SZWd1bGFyXCI7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4ucmlnaHRfcCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1SZWd1bGFyXCI7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZ3JheSk7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4iLCJpb24tY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmlvbi1jb250ZW50IGlvbi1oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG59XG5pb24tY29udGVudCBpb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBmbGF0O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXMgZWFzZS1pbiAwLjVzO1xufVxuaW9uLWNvbnRlbnQgaW9uLWhlYWRlciBpb24tdG9vbGJhciBpb24tYnV0dG9ucyBpb24tYmFjay1idXR0b24ge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xufVxuaW9uLWNvbnRlbnQgLmltZ19kaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5pb24tY29udGVudCAuaW1nX2RpdiBpbWcge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbn1cbmlvbi1jb250ZW50IC5pbWdfZGl2IC5uYW1lX2RpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWNvbnRlbnQgLmltZ19kaXYgLm5hbWVfZGl2IC5uYW1lIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbn1cbmlvbi1jb250ZW50IC5tZW51X2RpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IGRhc2hlZCAxcHggdmFyKC0taW9uLWJvcmRlci1jb2xvcik7XG59XG5pb24tY29udGVudCAubWVudV9kaXYgLnRpdHRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xufVxuaW9uLWNvbnRlbnQgLm1lbnVfZGl2IC5hZGRyZXNzIHtcbiAgZm9udC1zaXplOiAxMC41cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtUmVndWxhclwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtncmF5KTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG5pb24tY29udGVudCAubWVudV9kaXYgLm9wZW4ge1xuICBmb250LXNpemU6IDEwLjVweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1SZWd1bGFyXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xuICBtYXJnaW46IDBweDtcbn1cbmlvbi1jb250ZW50IC5tZW51X2RpdiAub3BlbiBzcGFuIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZ3JheSk7XG59XG5pb24tY29udGVudCAubWVudV9kaXYgLmZvdXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICByaWdodDogMDtcbn1cbmlvbi1jb250ZW50IC5tZW51X2RpdiAuZm91ciAuZmlyc3RfZGl2IHtcbiAgaGVpZ2h0OiAyMnB4O1xuICB3aWR0aDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4IDJweCAwcHggMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5tZW51X2RpdiAuZm91ciAuZmlyc3RfZGl2IHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtUmVndWxhclwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbn1cbmlvbi1jb250ZW50IC5tZW51X2RpdiAuZm91ciAubGFzdF9kaXYge1xuICBib3gtc2hhZG93OiAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgaGVpZ2h0OiAyMnB4O1xuICB3aWR0aDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAycHggMnB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5tZW51X2RpdiAuZm91ciAubGFzdF9kaXYgLmFzY2lpIHtcbiAgZm9udC1zaXplOiA4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtUmVndWxhclwiO1xuICBtYXJnaW4tdG9wOiAyLjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAubWVudV9kaXYgLmZvdXIgLmxhc3RfZGl2IC5yZXZpZXcge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcbiAgZm9udC1zaXplOiA2LjVweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZ3JheSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwcHg7XG59XG5pb24tY29udGVudCAucmF0aW5nX2RpdiB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5pb24tY29udGVudCAucmF0aW5nX2RpdiAuZmlyc3RfY29sIHtcbiAgd2lkdGg6IDIwJTtcbn1cbmlvbi1jb250ZW50IC5yYXRpbmdfZGl2IC5maXJzdF9jb2wgLnJhdGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtUmVndWxhclwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtncmF5KTtcbiAgbWFyZ2luOiAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5yYXRpbmdfZGl2IC5maXJzdF9jb2wgLnJhdGUgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXllbGxvdyk7XG4gIG1hcmdpbi1yaWdodDogM3B4O1xufVxuaW9uLWNvbnRlbnQgLnJhdGluZ19kaXYgLmZpcnN0X2NvbCAucmF0aW5nIHtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBmb250LXNpemU6IDkuN3B4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtncmF5KTtcbn1cbmlvbi1jb250ZW50IC5yYXRpbmdfZGl2IC5kb3RfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5pb24tY29udGVudCAucmF0aW5nX2RpdiAuZG90X2RpdiAuZG90IHtcbiAgaGVpZ2h0OiA2cHg7XG4gIHdpZHRoOiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWdyZWVuKTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLmNvb3Bhbl9kaXYge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1za3kpO1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuaW9uLWNvbnRlbnQgLmNvb3Bhbl9kaXY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmlvbi1jb250ZW50IC5hYm91dF9wIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZ3JheSk7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLnBob3RvX2RpdiAucF90ZXh0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKTtcbn1cbmlvbi1jb250ZW50IC5waG90b19kaXYgLmdhbGxhcnlfaW1nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbmlvbi1jb250ZW50IC5waG90b19kaXYgLmdhbGxhcnlfaW1nIGltZyB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICB3aWR0aDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwcHggMXB4IDZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuaW9uLWNvbnRlbnQgLnBob3RvX2RpdiAuZ2FsbGFyeV9pbWc6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmlvbi1jb250ZW50IC5yZXZpZXdfZGl2IHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbmlvbi1jb250ZW50IC5yZXZpZXdfZGl2IC5wX3RleHQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTWVkaXVtXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xufVxuaW9uLWNvbnRlbnQgLnJldmlld19kaXYgLnllc19kaXYge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLnJldmlld19kaXYgLnllc19kaXYgLnllc19wIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtCbHVlKTtcbn1cbmlvbi1jb250ZW50IC5yZXZpZXdfZGl2IC55ZXNfZGl2IC55ZXNfcCAueWVzX2J0biB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJ0bi1ncmVlbik7XG59XG5pb24tY29udGVudCAucmV2aWV3X2RpdiAueWVzX2RpdiAueWVzX3AgLm5vX2J0biB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJ0bi1jb2xvcik7XG59XG5pb24tY29udGVudCAucmV2aWV3X2RpdiAueWVzX2RpdiAueWVzX3AgaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya0JsdWUpO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59XG5pb24tY29udGVudCAucmV2aWV3X2RpdiAucmV2aWV3X2l0ZW0gaW9uLWF2YXRhciB7XG4gIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xufVxuaW9uLWNvbnRlbnQgLnJldmlld19kaXYgLnJldmlld19pdGVtIGlvbi1hdmF0YXIgaW1nIHtcbiAgYm9yZGVyOiBzb2xpZCAzcHggdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cbmlvbi1jb250ZW50IC5yZXZpZXdfZGl2IC5yZXZpZXdfaXRlbSBpb24tbGFiZWwge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuaW9uLWNvbnRlbnQgLnJldmlld19kaXYgLnJldmlld19pdGVtIGlvbi1sYWJlbCAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XG4gIG1hcmdpbjogMDtcbn1cbmlvbi1jb250ZW50IC5yZXZpZXdfZGl2IC5yZXZpZXdfaXRlbSBpb24tbGFiZWwgLmFnbyB7XG4gIGZvbnQtc2l6ZTogMTAuNXB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmtncmF5KTtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG5pb24tY29udGVudCAucmV2aWV3X2RpdiAucmV2aWV3X2l0ZW0gaW9uLWxhYmVsIC5kZXRhaWwge1xuICBmb250LXNpemU6IDEwLjVweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1SZWd1bGFyXCI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFya2dyYXkpO1xuICBtYXJnaW46IDA7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xufVxuaW9uLWNvbnRlbnQgLnJldmlld19kaXYgLnJldmlld19pdGVtIGlvbi1sYWJlbCAuZmlyc3RfaWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZ3JlZW4pO1xufVxuaW9uLWNvbnRlbnQgLnJldmlld19kaXYgLnJldmlld19pdGVtIGlvbi1sYWJlbCAubGFzdF9pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1zdGFyLWNvbG9yKTtcbn1cbmlvbi1jb250ZW50IC5yZXZpZXdfZGl2IC5sYXN0X2RpdiB7XG4gIGhlaWdodDogMzZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNreSk7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTVweCAwcHggMTVweDtcbn1cbmlvbi1jb250ZW50IC5yZXZpZXdfZGl2IC5sYXN0X2RpdiAubGFzdF9wIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1NZWRpdW1cIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrQmx1ZSk7XG59XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxNTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmNvbnRhaW5lciAubGVmdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2t5KTtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTNweDtcbiAgbGVmdDogMzhweDtcbn1cblxuLmNvbnRhaW5lciAubGVmdDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1za3kpO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtM3B4O1xuICBsZWZ0OiAzOHB4O1xufVxuXG4uY29udGFpbmVyIC5sZWZ0IHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgd2lkdGg6IDQwJTtcbn1cblxuLmNvbnRhaW5lciAucmlnaHQge1xuICBwYWRkaW5nOiA1cHggNXB4IDVweCAwcHg7XG4gIHdpZHRoOiA2MCU7XG59XG5cbi5sZWZ0X3Age1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXJlZCk7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtUmVndWxhclwiO1xuICBmb250LXNpemU6IDExcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgd2lkdGg6IDcwJTtcbn1cblxuLnJpZ2h0X3Age1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLVJlZ3VsYXJcIjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrZ3JheSk7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/review/review.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/review/review.page.ts ***!
  \*********************************************/
/*! exports provided: ReviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewPage", function() { return ReviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/util.service */ "./src/app/service/util.service.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);






var ReviewPage = /** @class */ (function () {
    function ReviewPage(ntrl, menu, api, util) {
        var _this = this;
        this.ntrl = ntrl;
        this.menu = menu;
        this.api = api;
        this.util = util;
        this.data = {};
        this.state = 1;
        this.bookmarkData = {};
        this.currency = this.api.currency;
        this.util.startLoad();
        this.api
            .getDataWithToken("shopDetail/" + this.api.detailId)
            .subscribe(function (res) {
            if (res.success) {
                _this.data = res.data;
                _this.util.dismissLoader();
                _this.data.review.forEach(function (element) {
                    element.created_at = moment__WEBPACK_IMPORTED_MODULE_5__(element.created_at).fromNow();
                });
            }
        });
    }
    ReviewPage.prototype.ngOnInit = function () { };
    ReviewPage.prototype.logScrolling = function (ev) {
        if (ev.detail.scrollTop >= 200) {
            this.state = 2;
        }
        else {
            this.state = 1;
        }
    };
    ReviewPage.prototype.back = function () {
        this.ntrl.back();
    };
    ReviewPage.prototype.addBookmark = function () {
        var _this = this;
        this.bookmarkData.shop_id = this.data.id;
        this.api
            .postDataWithToken("addBookmark", this.bookmarkData)
            .subscribe(function (res) {
            if (res.success) {
                if (_this.data.favourite) {
                    _this.data.favourite = false;
                    _this.util.presentToast(res.msg);
                }
                else {
                    _this.data.favourite = true;
                    _this.util.presentToast(res.msg);
                }
            }
        });
    };
    ReviewPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
        { type: _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: _service_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"] }
    ]; };
    ReviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: "app-review",
            template: __webpack_require__(/*! raw-loader!./review.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/review/review.page.html"),
            styles: [__webpack_require__(/*! ./review.page.scss */ "./src/app/pages/review/review.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
            _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _service_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"]])
    ], ReviewPage);
    return ReviewPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-review-review-module-es5.js.map