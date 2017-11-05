var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Subject } from "rxjs/Subject";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/pluck';
import { Store } from '../../store';
import { ProductService, NotyService } from '../../services/index';
import { slideToLeft, changeWidth } from '../../ui/animations';
var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(productService, notyService, store) {
        this.productService = productService;
        this.notyService = notyService;
        this.store = store;
        this.searchStream = new FormControl();
        this.searchQuery = '';
        this.pageStream = new Subject();
        this.page = 1;
        this.pageLength = 10;
        this.filterStream = new Subject();
        this.filterData = { supplier: '', categories: '' };
        this.subs = [];
        this.categories = [''];
        this.suppliers = [''];
        this.searchExpanded = 'collapsed';
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs[this.subs.length] = this.productService.getAllProducts().subscribe(function (_a) {
            var totalElements = _a.totalElements, elements = _a.elements;
            _this.totalProducts = totalElements;
            _this.getFiltersList(elements);
        });
        var storeSource = this.store.changes
            .map(function (store) {
            return { search: _this.searchQuery, page: _this.page, length: _this.pageLength, filterData: _this.filterData };
        });
        var searchSource = this.searchStream
            .valueChanges
            .debounceTime(100)
            .distinctUntilChanged()
            .map(function (searchQuery) {
            _this.page = 1;
            return { search: searchQuery, page: _this.page, length: _this.pageLength, filterData: _this.filterData };
        });
        var pageSource = this.pageStream
            .map(function (params) {
            _this.page = params.page;
            _this.pageLength = params.length;
            return { search: _this.searchQuery, page: params.page, length: params.length, filterData: _this.filterData };
        });
        var filterSource = this.filterStream
            .map(function (filterData) {
            _this.filterData = filterData;
            return { search: _this.searchQuery, page: 1, length: _this.pageLength, filterData: filterData };
        });
        var source = storeSource
            .merge(searchSource, pageSource, filterSource)
            .startWith({ search: this.searchQuery, page: this.page, length: this.pageLength, filterData: this.filterData })
            .switchMap(function (params) {
            return _this.productService.list(params.search, params.page, params.length, params.filterData);
        })
            .share();
        this.products$ = source.pluck('products');
        this.filteredProducts$ = source.pluck('filtered');
    };
    ProductsComponent.prototype.ngOnDestroy = function () {
        this.subs.forEach(function (sub) { return sub.unsubscribe(); });
        this.productService.purgeStore();
    };
    /* Pagination */
    ProductsComponent.prototype.paginationChanged = function (_a) {
        var page = _a.page, length = _a.length;
        this.pageStream.next({ page: page, length: length });
        this.page = page;
        this.pageLength = length;
    };
    ProductsComponent.prototype.getFiltersList = function (products) {
        var _categories = [];
        var _suppliers = [];
        products.forEach(function (product) {
            if (product.categories) {
                _categories = _categories.concat(product.categories);
            }
            if (product.supplier) {
                _suppliers.push(product.supplier);
            }
        });
        this.categories = Array.from(new Set(_categories));
        this.suppliers = Array.from(new Set(_suppliers));
    };
    ProductsComponent.prototype.onFilterChange = function (e) {
        this.filterStream.next(e);
    };
    ProductsComponent.prototype.onUpdateProductField = function (productId, productVarId, fieldName, _a) {
        var _this = this;
        var newValue = _a.newValue, oldValue = _a.oldValue;
        this.productService.updateProductField(productId, productVarId, (_b = {}, _b[fieldName] = newValue, _b))
            .subscribe(function () {
            _this.notyService.renderNoty("\"" + oldValue + "\" has been changed to \"" + newValue + "\"");
        });
        var _b;
    };
    ProductsComponent.prototype.isEditable = function (key) {
        return key === 'price' || key === 'quantity' ? true : false;
    };
    ProductsComponent.prototype.isCategory = function (key) {
        return key === 'categories' ? true : false;
    };
    ProductsComponent.prototype.toggleAnimState = function () {
        this.searchExpanded = this.searchExpanded === 'collapsed' ? 'expanded' : 'collapsed';
    };
    ProductsComponent = __decorate([
        Component({
            moduleId: module.id,
            templateUrl: 'products.component.html',
            animations: [slideToLeft(), changeWidth()],
            host: { '[@slideToLeft]': '' }
        }),
        __metadata("design:paramtypes", [ProductService,
            NotyService,
            Store])
    ], ProductsComponent);
    return ProductsComponent;
}());
export { ProductsComponent };