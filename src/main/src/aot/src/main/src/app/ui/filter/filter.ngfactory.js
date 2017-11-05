/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as i0 from './filter.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/forms';
import * as i3 from '@angular/common';
import * as i4 from '../../../../../../../app/ui/filter/filter';
var styles_Filter = [i0.styles];
export var RenderType_Filter = i1.ɵcrt({ encapsulation: 0, styles: styles_Filter,
    data: { 'animation': [{ type: 7, name: 'appear', definitions: [{ type: 1, expr: ':enter', animation: [{ type: 6,
                                styles: { opacity: 0.001, height: 1 }, offset: null }, { type: 3, steps: [{ type: 4,
                                        styles: { type: 6, styles: { height: '*' }, offset: null }, timings: '0.25s ease' },
                                    { type: 4, styles: { type: 6, styles: { opacity: 1 }, offset: null }, timings: '0.35s 0.1s ease' }],
                                options: null }], options: null }, { type: 1, expr: ':leave', animation: [{ type: 3,
                                steps: [{ type: 4, styles: { type: 6, styles: { height: 0, margin: 0 }, offset: null },
                                        timings: '0.25s ease' }, { type: 4, styles: { type: 6, styles: { opacity: 0 }, offset: null },
                                        timings: '0.25s 0.1s ease' }], options: null }], options: null }],
                options: {} }, { type: 7, name: 'fadeInOut', definitions: [{ type: 0, name: 'void', styles: { type: 6,
                            styles: { display: 'none', opacity: 0 }, offset: null }, options: undefined },
                    { type: 0, name: 'any', styles: { type: 6, styles: { display: '*', opacity: 1 }, offset: null },
                        options: undefined }, { type: 1, expr: 'void <=> any', animation: { type: 4,
                            styles: null, timings: '.2s ease' }, options: null }], options: {} }] } });
function View_Filter_2(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, 'input', [['class',
                'input filter__input'], ['type', 'text']], [[2, 'ng-untouched', null], [2,
                'ng-touched', null], [2, 'ng-pristine', null], [2, 'ng-dirty', null],
            [2, 'ng-valid', null], [2, 'ng-invalid', null], [2, 'ng-pending',
                null]], [[null, 'input'], [null, 'blur'], [null,
                'compositionstart'], [null, 'compositionend']], function (_v, en, $event) {
            var ad = true;
            if (('input' === en)) {
                var pd_0 = (i1.ɵnov(_v, 1)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (i1.ɵnov(_v, 1).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (i1.ɵnov(_v, 1)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (i1.ɵnov(_v, 1)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(1, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null),
        i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [i2.DefaultValueAccessor]), i1.ɵdid(3, 671744, null, 0, i2.FormControlName, [[3, i2.ControlContainer], [8, null], [8, null], [2, i2.NG_VALUE_ACCESSOR]], { name: [0, 'name'] }, null), i1.ɵprd(2048, null, i2.NgControl, null, [i2.FormControlName]), i1.ɵdid(5, 16384, null, 0, i2.NgControlStatus, [i2.NgControl], null, null)], function (_ck, _v) {
        var currVal_7 = i1.ɵinlineInterpolate(1, '', _v.parent.context.$implicit.code, '');
        _ck(_v, 3, 0, currVal_7);
    }, function (_ck, _v) {
        var currVal_0 = i1.ɵnov(_v, 5).ngClassUntouched;
        var currVal_1 = i1.ɵnov(_v, 5).ngClassTouched;
        var currVal_2 = i1.ɵnov(_v, 5).ngClassPristine;
        var currVal_3 = i1.ɵnov(_v, 5).ngClassDirty;
        var currVal_4 = i1.ɵnov(_v, 5).ngClassValid;
        var currVal_5 = i1.ɵnov(_v, 5).ngClassInvalid;
        var currVal_6 = i1.ɵnov(_v, 5).ngClassPending;
        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
    });
}
function View_Filter_3(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 5, 'input', [['class',
                'input filter__input'], ['type', 'date']], [[2, 'ng-untouched', null], [2,
                'ng-touched', null], [2, 'ng-pristine', null], [2, 'ng-dirty', null],
            [2, 'ng-valid', null], [2, 'ng-invalid', null], [2, 'ng-pending',
                null]], [[null, 'input'], [null, 'blur'], [null,
                'compositionstart'], [null, 'compositionend']], function (_v, en, $event) {
            var ad = true;
            if (('input' === en)) {
                var pd_0 = (i1.ɵnov(_v, 1)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (i1.ɵnov(_v, 1).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (i1.ɵnov(_v, 1)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (i1.ɵnov(_v, 1)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(1, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null),
        i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [i2.DefaultValueAccessor]), i1.ɵdid(3, 671744, null, 0, i2.FormControlName, [[3, i2.ControlContainer], [8, null], [8, null], [2, i2.NG_VALUE_ACCESSOR]], { name: [0, 'name'] }, null), i1.ɵprd(2048, null, i2.NgControl, null, [i2.FormControlName]), i1.ɵdid(5, 16384, null, 0, i2.NgControlStatus, [i2.NgControl], null, null)], function (_ck, _v) {
        var currVal_7 = i1.ɵinlineInterpolate(1, '', _v.parent.context.$implicit.code, '');
        _ck(_v, 3, 0, currVal_7);
    }, function (_ck, _v) {
        var currVal_0 = i1.ɵnov(_v, 5).ngClassUntouched;
        var currVal_1 = i1.ɵnov(_v, 5).ngClassTouched;
        var currVal_2 = i1.ɵnov(_v, 5).ngClassPristine;
        var currVal_3 = i1.ɵnov(_v, 5).ngClassDirty;
        var currVal_4 = i1.ɵnov(_v, 5).ngClassValid;
        var currVal_5 = i1.ɵnov(_v, 5).ngClassInvalid;
        var currVal_6 = i1.ɵnov(_v, 5).ngClassPending;
        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
    });
}
function View_Filter_5(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, 'option', [], null, null, null, null, null)), i1.ɵdid(1, 147456, null, 0, i2.NgSelectOption, [i1.ElementRef, i1.Renderer2, [2, i2.SelectControlValueAccessor]], { value: [0, 'value'] }, null), i1.ɵdid(2, 147456, null, 0, i2.ɵq, [i1.ElementRef,
            i1.Renderer2, [8, null]], { value: [0, 'value'] }, null), (_l()(), i1.ɵted(3, null, ['\n            ', '\n          ']))], function (_ck, _v) {
        var currVal_0 = i1.ɵinlineInterpolate(1, '', _v.context.$implicit, '');
        _ck(_v, 1, 0, currVal_0);
        var currVal_1 = i1.ɵinlineInterpolate(1, '', _v.context.$implicit, '');
        _ck(_v, 2, 0, currVal_1);
    }, function (_ck, _v) {
        var currVal_2 = _v.context.$implicit;
        _ck(_v, 3, 0, currVal_2);
    });
}
function View_Filter_4(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 14, 'select', [['class',
                'filter__select input']], [[2, 'ng-untouched', null], [2, 'ng-touched', null],
            [2, 'ng-pristine', null], [2, 'ng-dirty', null], [2, 'ng-valid', null],
            [2, 'ng-invalid', null], [2, 'ng-pending', null]], [[null,
                'change'], [null, 'blur']], function (_v, en, $event) {
            var ad = true;
            if (('change' === en)) {
                var pd_0 = (i1.ɵnov(_v, 1).onChange($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (i1.ɵnov(_v, 1).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(1, 16384, null, 0, i2.SelectControlValueAccessor, [i1.Renderer2, i1.ElementRef], null, null), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [i2.SelectControlValueAccessor]), i1.ɵdid(3, 671744, null, 0, i2.FormControlName, [[3, i2.ControlContainer], [8, null], [8, null], [2, i2.NG_VALUE_ACCESSOR]], { name: [0, 'name'] }, null), i1.ɵprd(2048, null, i2.NgControl, null, [i2.FormControlName]), i1.ɵdid(5, 16384, null, 0, i2.NgControlStatus, [i2.NgControl], null, null), (_l()(), i1.ɵted(-1, null, ['\n          '])),
        (_l()(), i1.ɵeld(7, 0, null, null, 3, 'option', [['selected', ''],
            ['value', '']], null, null, null, null, null)),
        i1.ɵdid(8, 147456, null, 0, i2.NgSelectOption, [i1.ElementRef, i1.Renderer2,
            [2, i2.SelectControlValueAccessor]], { value: [0, 'value'] }, null), i1.ɵdid(9, 147456, null, 0, i2.ɵq, [i1.ElementRef, i1.Renderer2, [8, null]], { value: [0, 'value'] }, null), (_l()(), i1.ɵted(-1, null, ['- Show all -'])),
        (_l()(), i1.ɵted(-1, null, ['\n          '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_Filter_5)), i1.ɵdid(13, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i1.ɵted(-1, null, ['\n        ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_7 = i1.ɵinlineInterpolate(1, '', _v.parent.context.$implicit.code, '');
        _ck(_v, 3, 0, currVal_7);
        var currVal_8 = '';
        _ck(_v, 8, 0, currVal_8);
        var currVal_9 = '';
        _ck(_v, 9, 0, currVal_9);
        var currVal_10 = _co.filters[_v.parent.context.$implicit];
        _ck(_v, 13, 0, currVal_10);
    }, function (_ck, _v) {
        var currVal_0 = i1.ɵnov(_v, 5).ngClassUntouched;
        var currVal_1 = i1.ɵnov(_v, 5).ngClassTouched;
        var currVal_2 = i1.ɵnov(_v, 5).ngClassPristine;
        var currVal_3 = i1.ɵnov(_v, 5).ngClassDirty;
        var currVal_4 = i1.ɵnov(_v, 5).ngClassValid;
        var currVal_5 = i1.ɵnov(_v, 5).ngClassInvalid;
        var currVal_6 = i1.ɵnov(_v, 5).ngClassPending;
        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
    });
}
function View_Filter_1(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 17, 'div', [['class',
                'filter filter__block']], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n      '])), (_l()(), i1.ɵeld(2, 0, null, null, 1, 'div', [['class', 'filter__label']], null, null, null, null, null)), (_l()(), i1.ɵted(3, null, ['\n        ', ' :\n      '])), (_l()(), i1.ɵted(-1, null, ['\n\n      '])), (_l()(), i1.ɵeld(5, 0, null, null, 11, null, null, null, null, null, null, null)),
        i1.ɵdid(6, 16384, null, 0, i3.NgSwitch, [], { ngSwitch: [0, 'ngSwitch'] }, null), (_l()(), i1.ɵted(-1, null, ['\n        '])), (_l()(),
            i1.ɵand(16777216, null, null, 1, null, View_Filter_2)),
        i1.ɵdid(9, 278528, null, 0, i3.NgSwitchCase, [i1.ViewContainerRef, i1.TemplateRef,
            i3.NgSwitch], { ngSwitchCase: [0, 'ngSwitchCase'] }, null), (_l()(), i1.ɵted(-1, null, ['\n\n        '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_Filter_3)), i1.ɵdid(12, 278528, null, 0, i3.NgSwitchCase, [i1.ViewContainerRef, i1.TemplateRef, i3.NgSwitch], { ngSwitchCase: [0,
                'ngSwitchCase'] }, null), (_l()(), i1.ɵted(-1, null, ['\n\n        '])),
        (_l()(), i1.ɵand(16777216, null, null, 1, null, View_Filter_4)),
        i1.ɵdid(15, 278528, null, 0, i3.NgSwitchCase, [i1.ViewContainerRef, i1.TemplateRef,
            i3.NgSwitch], { ngSwitchCase: [0, 'ngSwitchCase'] }, null), (_l()(), i1.ɵted(-1, null, ['\n\n      '])), (_l()(), i1.ɵted(-1, null, ['\n\n    ']))], function (_ck, _v) {
        var currVal_1 = _v.context.$implicit.type;
        _ck(_v, 6, 0, currVal_1);
        var currVal_2 = 'text';
        _ck(_v, 9, 0, currVal_2);
        var currVal_3 = 'date';
        _ck(_v, 12, 0, currVal_3);
        var currVal_4 = 'select';
        _ck(_v, 15, 0, currVal_4);
    }, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.label;
        _ck(_v, 3, 0, currVal_0);
    });
}
function View_Filter_6(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, 'div', [['class',
                'filter-overlay']], [[24, '@fadeInOut', 0]], null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n    '])), (_l()(), i1.ɵeld(2, 0, null, null, 0, 'img', [['alt', ''], ['class', 'filter-overlay__image'],
            ['src', '/assets/images/loading.svg']], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n  ']))], null, function (_ck, _v) {
        var currVal_0 = undefined;
        _ck(_v, 0, 0, currVal_0);
    });
}
export function View_Filter_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 17, 'div', [['class',
                'filter-container']], [[24, '@appear', 0]], null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n  '])), (_l()(), i1.ɵeld(2, 0, null, null, 11, 'form', [['class', 'filter__form'], ['novalidate',
                '']], [[2, 'ng-untouched', null], [2, 'ng-touched', null], [2,
                'ng-pristine', null], [2, 'ng-dirty', null], [2, 'ng-valid',
                null], [2, 'ng-invalid', null], [2, 'ng-pending', null]], [[null, 'ngSubmit'], [null, 'submit'], [null, 'reset']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('submit' === en)) {
                var pd_0 = (i1.ɵnov(_v, 4).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('reset' === en)) {
                var pd_1 = (i1.ɵnov(_v, 4).onReset() !== false);
                ad = (pd_1 && ad);
            }
            if (('ngSubmit' === en)) {
                var pd_2 = (_co.onSubmit($event) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(3, 16384, null, 0, i2.ɵbf, [], null, null), i1.ɵdid(4, 540672, null, 0, i2.FormGroupDirective, [[8, null], [8, null]], { form: [0, 'form'] }, { ngSubmit: 'ngSubmit' }),
        i1.ɵprd(2048, null, i2.ControlContainer, null, [i2.FormGroupDirective]),
        i1.ɵdid(6, 16384, null, 0, i2.NgControlStatusGroup, [i2.ControlContainer], null, null), (_l()(), i1.ɵted(-1, null, ['\n    '])),
        (_l()(), i1.ɵand(16777216, null, null, 1, null, View_Filter_1)),
        i1.ɵdid(9, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef,
            i1.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i1.ɵted(-1, null, ['\n\n    '])), (_l()(), i1.ɵeld(11, 0, null, null, 1, 'button', [['class', 'btn filter__block filter__submit'], ['type', 'submit']], null, null, null, null, null)),
        (_l()(), i1.ɵted(-1, null, ['Submit'])), (_l()(), i1.ɵted(-1, null, ['\n  '])), (_l()(), i1.ɵted(-1, null, ['\n  '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_Filter_6)), i1.ɵdid(16, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(-1, null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_8 = _co.form;
        _ck(_v, 4, 0, currVal_8);
        var currVal_9 = _co.filters;
        _ck(_v, 9, 0, currVal_9);
        var currVal_10 = _co.loads;
        _ck(_v, 16, 0, currVal_10);
    }, function (_ck, _v) {
        var currVal_0 = undefined;
        _ck(_v, 0, 0, currVal_0);
        var currVal_1 = i1.ɵnov(_v, 6).ngClassUntouched;
        var currVal_2 = i1.ɵnov(_v, 6).ngClassTouched;
        var currVal_3 = i1.ɵnov(_v, 6).ngClassPristine;
        var currVal_4 = i1.ɵnov(_v, 6).ngClassDirty;
        var currVal_5 = i1.ɵnov(_v, 6).ngClassValid;
        var currVal_6 = i1.ɵnov(_v, 6).ngClassInvalid;
        var currVal_7 = i1.ɵnov(_v, 6).ngClassPending;
        _ck(_v, 2, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);
    });
}
export function View_Filter_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, 'filter', [], null, null, null, View_Filter_0, RenderType_Filter)),
        i1.ɵdid(1, 573440, null, 0, i4.Filter, [i2.FormBuilder], null, null)], null, null);
}
export var FilterNgFactory = i1.ɵccf('filter', i4.Filter, View_Filter_Host_0, { filters: 'filters', loads: 'loads' }, { filterSubmit: 'filterSubmit' }, []);