/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as i0 from './popup.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/forms';
import * as i3 from '@angular/common';
import * as i4 from '../../../../../../../app/pipes/keys.pipe';
import * as i5 from '../../../../../../../app/ui/popup/popup';
var styles_PopupComponent = [i0.styles];
export var RenderType_PopupComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_PopupComponent, data: { 'animation': [{ type: 7, name: 'fadeInOut', definitions: [{ type: 0,
                        name: 'destroyed', styles: { type: 6, styles: { opacity: 0 }, offset: null }, options: undefined },
                    { type: 1, expr: ':enter', animation: [{ type: 6, styles: { opacity: 0 }, offset: null },
                            { type: 4, styles: { type: 6, styles: { opacity: 1 }, offset: null }, timings: '0.2s ease' }],
                        options: null }, { type: 1, expr: '* => destroyed', animation: [{ type: 4,
                                styles: null, timings: '0.2s ease' }], options: null }], options: {} },
            { type: 7, name: 'flyInOut', definitions: [{ type: 0, name: 'destroyed', styles: { type: 6,
                            styles: { opacity: 0, transform: 'translateX(-10%)' }, offset: null },
                        options: undefined }, { type: 1, expr: ':enter', animation: [{ type: 6, styles: { opacity: 0,
                                    transform: 'translateX(-90%)' }, offset: null }, { type: 4, styles: { type: 6,
                                    styles: { opacity: 1, transform: 'translateX(-50%)' }, offset: null },
                                timings: '0.2s ease' }], options: null }, { type: 1, expr: '* => destroyed',
                        animation: [{ type: 4, styles: null, timings: '0.2s ease' }], options: null }],
                options: {} }, { type: 7, name: 'expandHeight', definitions: [{ type: 0, name: '0',
                        styles: { type: 6, styles: { height: '150px' }, offset: null }, options: undefined },
                    { type: 0, name: '1', styles: { type: 6, styles: { height: '*' }, offset: null },
                        options: undefined }, { type: 1, expr: '0 => 1', animation: { type: 4,
                            styles: null, timings: '0.2s ease' }, options: null }],
                options: {} }] } });
function View_PopupComponent_1(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 6, 'div', [['class',
                'popup__loading']], null, null, null, null, null)),
        (_l()(), i1.ɵted(-1, null, ['\n      '])), (_l()(), i1.ɵeld(2, 0, null, null, 1, 'div', [['class', 'popup__loading-text']], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['Loading...'])), (_l()(), i1.ɵted(-1, null, ['\n      '])), (_l()(),
            i1.ɵeld(5, 0, null, null, 0, 'img', [['alt', ''], ['class', 'popup__loading-image'],
                ['src', '/assets/images/loading.svg']], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n    ']))], null, null);
}
function View_PopupComponent_2(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 4, 'div', [['class',
                'popup__content']], null, null, null, null, null)),
        (_l()(), i1.ɵted(-1, null, ['\n      '])), (_l()(), i1.ɵeld(2, 0, null, null, 1, 'div', [['class', 'popup__content-text']], null, null, null, null, null)), (_l()(), i1.ɵted(3, null, ['', ''])), (_l()(), i1.ɵted(-1, null, ['\n    ']))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.data;
        _ck(_v, 3, 0, currVal_0);
    });
}
function View_PopupComponent_4(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 11, 'div', [['class',
                'popup__formgroup']], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n          '])), (_l()(),
            i1.ɵeld(2, 0, null, null, 1, 'label', [['class', 'popup__label']], [[8, 'htmlFor', 0]], null, null, null, null)),
        (_l()(), i1.ɵted(3, null, ['', ''])), (_l()(), i1.ɵted(-1, null, ['\n          '])),
        (_l()(), i1.ɵeld(5, 0, null, null, 5, 'input', [['class', 'input popup__input'],
            ['type', 'text']], [[8, 'id', 0], [2, 'ng-untouched', null], [2, 'ng-touched',
                null], [2, 'ng-pristine', null], [2, 'ng-dirty', null],
            [2, 'ng-valid', null], [2, 'ng-invalid', null], [2, 'ng-pending',
                null]], [[null, 'input'], [null, 'blur'], [null,
                'compositionstart'], [null, 'compositionend']], function (_v, en, $event) {
            var ad = true;
            if (('input' === en)) {
                var pd_0 = (i1.ɵnov(_v, 6)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (i1.ɵnov(_v, 6).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (i1.ɵnov(_v, 6)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (i1.ɵnov(_v, 6)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(6, 16384, null, 0, i2.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i2.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i2.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [i2.DefaultValueAccessor]), i1.ɵdid(8, 671744, null, 0, i2.FormControlName, [[3, i2.ControlContainer], [8, null], [8, null], [2, i2.NG_VALUE_ACCESSOR]], { name: [0, 'name'] }, null), i1.ɵprd(2048, null, i2.NgControl, null, [i2.FormControlName]), i1.ɵdid(10, 16384, null, 0, i2.NgControlStatus, [i2.NgControl], null, null), (_l()(), i1.ɵted(-1, null, ['\n        ']))], function (_ck, _v) {
        var currVal_10 = i1.ɵinlineInterpolate(1, '', _v.context.$implicit, '');
        _ck(_v, 8, 0, currVal_10);
    }, function (_ck, _v) {
        var currVal_0 = i1.ɵinlineInterpolate(1, '', _v.context.$implicit, '');
        _ck(_v, 2, 0, currVal_0);
        var currVal_1 = _v.context.$implicit;
        _ck(_v, 3, 0, currVal_1);
        var currVal_2 = i1.ɵinlineInterpolate(1, '', _v.context.$implicit, '');
        var currVal_3 = i1.ɵnov(_v, 10).ngClassUntouched;
        var currVal_4 = i1.ɵnov(_v, 10).ngClassTouched;
        var currVal_5 = i1.ɵnov(_v, 10).ngClassPristine;
        var currVal_6 = i1.ɵnov(_v, 10).ngClassDirty;
        var currVal_7 = i1.ɵnov(_v, 10).ngClassValid;
        var currVal_8 = i1.ɵnov(_v, 10).ngClassInvalid;
        var currVal_9 = i1.ɵnov(_v, 10).ngClassPending;
        _ck(_v, 5, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9);
    });
}
function View_PopupComponent_3(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 37, 'form', [['novalidate',
                '']], [[2, 'ng-untouched', null], [2, 'ng-touched', null], [2, 'ng-pristine',
                null], [2, 'ng-dirty', null], [2, 'ng-valid', null], [2,
                'ng-invalid', null], [2, 'ng-pending', null]], [[null,
                'ngSubmit'], [null, 'submit'], [null, 'reset']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('submit' === en)) {
                var pd_0 = (i1.ɵnov(_v, 2).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('reset' === en)) {
                var pd_1 = (i1.ɵnov(_v, 2).onReset() !== false);
                ad = (pd_1 && ad);
            }
            if (('ngSubmit' === en)) {
                var pd_2 = (_co.onSubmit() !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(1, 16384, null, 0, i2.ɵbf, [], null, null), i1.ɵdid(2, 540672, null, 0, i2.FormGroupDirective, [[8, null], [8, null]], { form: [0, 'form'] }, { ngSubmit: 'ngSubmit' }),
        i1.ɵprd(2048, null, i2.ControlContainer, null, [i2.FormGroupDirective]),
        i1.ɵdid(4, 16384, null, 0, i2.NgControlStatusGroup, [i2.ControlContainer], null, null), (_l()(), i1.ɵted(-1, null, ['\n\n      '])),
        (_l()(), i1.ɵeld(6, 0, null, null, 15, 'div', [['class', 'popup__content']], null, null, null, null, null)),
        (_l()(), i1.ɵted(-1, null, ['\n        '])), (_l()(), i1.ɵeld(8, 0, null, null, 7, 'div', [['class', 'popup__formgroup']], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n          '])), (_l()(), i1.ɵeld(10, 0, null, null, 1, 'label', [['class', 'popup__label']], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['ID'])), (_l()(), i1.ɵted(-1, null, ['\n          '])), (_l()(), i1.ɵeld(13, 0, null, null, 1, 'div', [['class', 'popup__input']], null, null, null, null, null)), (_l()(), i1.ɵted(14, null, ['', ''])),
        (_l()(), i1.ɵted(-1, null, ['\n        '])), (_l()(), i1.ɵted(-1, null, ['\n\n        '])), (_l()(), i1.ɵand(16777216, null, null, 3, null, View_PopupComponent_4)), i1.ɵdid(18, 802816, null, 0, i3.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0,
                'ngForOf'] }, null), i1.ɵpad(19, 2), i1.ɵppd(20, 2), (_l()(), i1.ɵted(-1, null, ['\n      '])), (_l()(), i1.ɵted(-1, null, ['\n\n      '])),
        (_l()(), i1.ɵeld(23, 0, null, null, 13, 'div', [['class', 'popup__btns']], null, null, null, null, null)),
        (_l()(), i1.ɵted(-1, null, ['\n        '])), (_l()(), i1.ɵeld(25, 0, null, null, 4, 'button', [['class', 'btn btn--warning popup__btn popup__btn--reset'],
            ['type', 'button']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.reset() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i1.ɵted(-1, null, ['\n          '])),
        (_l()(), i1.ɵeld(27, 0, null, null, 1, 'i', [['class', 'material-icons']], null, null, null, null, null)),
        (_l()(), i1.ɵted(-1, null, ['restore'])), (_l()(), i1.ɵted(-1, null, [' Reset\n        '])), (_l()(), i1.ɵted(-1, null, ['\n        '])),
        (_l()(), i1.ɵeld(31, 0, null, null, 4, 'button', [['class', 'btn popup__btn popup__btn--submit'],
            ['type', 'submit']], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n          '])), (_l()(),
            i1.ɵeld(33, 0, null, null, 1, 'i', [['class', 'material-icons']], null, null, null, null, null)),
        (_l()(), i1.ɵted(-1, null, ['save'])), (_l()(), i1.ɵted(-1, null, [' Submit\n        '])), (_l()(), i1.ɵted(-1, null, ['\n      '])),
        (_l()(), i1.ɵted(-1, null, ['\n    ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_7 = _co.form;
        _ck(_v, 2, 0, currVal_7);
        var currVal_9 = i1.ɵunv(_v, 18, 0, _ck(_v, 20, 0, i1.ɵnov(_v.parent, 0), _co.data, _ck(_v, 19, 0, 'id', 'customerId')));
        _ck(_v, 18, 0, currVal_9);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = i1.ɵnov(_v, 4).ngClassUntouched;
        var currVal_1 = i1.ɵnov(_v, 4).ngClassTouched;
        var currVal_2 = i1.ɵnov(_v, 4).ngClassPristine;
        var currVal_3 = i1.ɵnov(_v, 4).ngClassDirty;
        var currVal_4 = i1.ɵnov(_v, 4).ngClassValid;
        var currVal_5 = i1.ɵnov(_v, 4).ngClassInvalid;
        var currVal_6 = i1.ɵnov(_v, 4).ngClassPending;
        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        var currVal_8 = (_co.data.id || _co.data.customerId);
        _ck(_v, 14, 0, currVal_8);
    });
}
export function View_PopupComponent_0(_l) {
    return i1.ɵvid(0, [i1.ɵpid(0, i4.KeysPipe, []), (_l()(), i1.ɵeld(1, 0, null, null, 24, 'div', [['class', 'popup-wrapper']], null, null, null, null, null)), (_l()(), i1.ɵted(-1, null, ['\n  '])), (_l()(), i1.ɵeld(3, 0, null, null, 0, 'div', [['class',
                'popup-overlay']], [[24, '@fadeInOut', 0]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.close() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i1.ɵted(-1, null, ['\n  '])), (_l()(),
            i1.ɵeld(5, 0, null, null, 19, 'div', [['class', 'popup']], [[24, '@expandHeight',
                    0], [24, '@flyInOut', 0]], [[null, '@flyInOut.done']], function (_v, en, $event) {
                var ad = true;
                var _co = _v.component;
                if (('@flyInOut.done' === en)) {
                    var pd_0 = (_co.onAnimationDone($event) !== false);
                    ad = (pd_0 && ad);
                }
                return ad;
            }, null, null)), (_l()(), i1.ɵted(-1, null, ['\n    '])),
        (_l()(), i1.ɵeld(7, 0, null, null, 7, 'div', [['class', 'popup__head']], null, null, null, null, null)),
        (_l()(), i1.ɵted(8, null, ['\n      ', '\n\n      '])), (_l()(), i1.ɵeld(9, 0, null, null, 4, 'div', [['class', 'popup__close']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.close() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i1.ɵted(-1, null, ['\n        '])),
        (_l()(), i1.ɵeld(11, 0, null, null, 1, 'i', [['class', 'material-icons']], null, null, null, null, null)),
        (_l()(), i1.ɵted(-1, null, ['close'])), (_l()(), i1.ɵted(-1, null, ['\n      '])), (_l()(), i1.ɵted(-1, null, ['\n    '])), (_l()(), i1.ɵted(-1, null, ['\n\n    '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PopupComponent_1)), i1.ɵdid(17, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null),
        (_l()(), i1.ɵted(-1, null, ['\n\n    '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PopupComponent_2)), i1.ɵdid(20, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null),
        (_l()(), i1.ɵted(-1, null, ['\n\n    '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PopupComponent_3)), i1.ɵdid(23, 16384, null, 0, i3.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null),
        (_l()(), i1.ɵted(-1, null, ['\n  '])), (_l()(), i1.ɵted(-1, null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_4 = (!_co.hasData && !_co.hasFormData);
        _ck(_v, 17, 0, currVal_4);
        var currVal_5 = _co.hasData;
        _ck(_v, 20, 0, currVal_5);
        var currVal_6 = _co.hasFormData;
        _ck(_v, 23, 0, currVal_6);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.animationState;
        _ck(_v, 3, 0, currVal_0);
        var currVal_1 = (_co.hasData || _co.hasFormData);
        var currVal_2 = _co.animationState;
        _ck(_v, 5, 0, currVal_1, currVal_2);
        var currVal_3 = _co.header;
        _ck(_v, 8, 0, currVal_3);
    });
}
export function View_PopupComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, 'ng-component', [], null, null, null, View_PopupComponent_0, RenderType_PopupComponent)), i1.ɵdid(1, 49152, null, 0, i5.PopupComponent, [i2.FormBuilder], null, null)], null, null);
}
export var PopupComponentNgFactory = i1.ɵccf('ng-component', i5.PopupComponent, View_PopupComponent_Host_0, {}, {}, []);
