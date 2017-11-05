/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './pagination.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/forms';
import * as i3 from '@angular/common';
import * as i4 from '../../../../../../../app/ui/pagination/pagination';
const styles_Pagination:any[] = [i0.styles];
export const RenderType_Pagination:i1.RendererType2 = i1.ɵcrt({encapsulation:0,styles:styles_Pagination,
    data:{}});
function View_Pagination_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),3,'option',([] as any[]),
      [[1,'selected',0]],(null as any),(null as any),(null as any),(null as any))),
      i1.ɵdid(1,147456,(null as any),0,i2.NgSelectOption,[i1.ElementRef,i1.Renderer2,
          [8,(null as any)]],{value:[0,'value']},(null as any)),i1.ɵdid(2,147456,(null as any),
          0,i2.ɵq,[i1.ElementRef,i1.Renderer2,[8,(null as any)]],{value:[0,'value']},
          (null as any)),(_l()(),i1.ɵted(3,(null as any),['\n        ','\n      ']))],
      (_ck,_v) => {
        const currVal_1:any = i1.ɵinlineInterpolate(1,'',_v.context.$implicit,'');
        _ck(_v,1,0,currVal_1);
        const currVal_2:any = i1.ɵinlineInterpolate(1,'',_v.context.$implicit,'');
        _ck(_v,2,0,currVal_2);
      },(_ck,_v) => {
        var _co:any = _v.component;
        const currVal_0:any = ((_v.context.$implicit === _co.pageLength)? '': (null as any));
        _ck(_v,0,0,currVal_0);
        const currVal_3:any = _v.context.$implicit;
        _ck(_v,3,0,currVal_3);
      });
}
function View_Pagination_3(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),1,'li',[['class',
      'spread']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['...']))],(null as any),(null as any));
}
function View_Pagination_4(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),1,'li',([] as any[]),
      [[2,'active',(null as any)]],[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.selectPage(_v.context.$implicit)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),(_l()(),i1.ɵted(1,(null as any),['\n        ',
      '\n      ']))],(null as any),(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = (_v.context.$implicit === _co.currentPageNumber);
    _ck(_v,0,0,currVal_0);
    const currVal_1:any = _v.context.$implicit;
    _ck(_v,1,0,currVal_1);
  });
}
function View_Pagination_5(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),1,'li',[['class',
      'spread']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['...']))],(null as any),(null as any));
}
function View_Pagination_2(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),22,'ul',[['class',
      'pagination__selector']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n      '])),(_l()(),i1.ɵeld(2,
      0,(null as any),(null as any),1,'li',([] as any[]),[[2,'disabled',(null as any)]],
      [[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.selectPage(_co.getPrevPage())) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['Prev'])),
      (_l()(),i1.ɵted(-1,(null as any),['\n      '])),(_l()(),i1.ɵeld(5,0,(null as any),
          (null as any),1,'li',([] as any[]),[[2,'active',(null as any)]],[[(null as any),
              'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:any = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.selectPage(1)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['1'])),
      (_l()(),i1.ɵted(-1,(null as any),['\n      '])),(_l()(),i1.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_Pagination_3)),i1.ɵdid(9,16384,(null as any),
          0,i3.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),
      (_l()(),i1.ɵted(-1,(null as any),['\n\n      '])),(_l()(),i1.ɵand(16777216,(null as any),
          (null as any),1,(null as any),View_Pagination_4)),i1.ɵdid(12,802816,(null as any),
          0,i3.NgForOf,[i1.ViewContainerRef,i1.TemplateRef,i1.IterableDiffers],{ngForOf:[0,
              'ngForOf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n\n      '])),
      (_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_Pagination_5)),
      i1.ɵdid(15,16384,(null as any),0,i3.NgIf,[i1.ViewContainerRef,i1.TemplateRef],
          {ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),['\n      '])),
      (_l()(),i1.ɵeld(17,0,(null as any),(null as any),1,'li',([] as any[]),[[2,'active',
          (null as any)]],[[(null as any),'click']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:any = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.selectPage(_co.lastPage)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),(_l()(),i1.ɵted(18,(null as any),['\n        ',
          '\n      '])),(_l()(),i1.ɵted(-1,(null as any),['\n      '])),(_l()(),i1.ɵeld(20,
          0,(null as any),(null as any),1,'li',([] as any[]),[[2,'disabled',(null as any)]],
          [[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:any = _v.component;
            if (('click' === en)) {
              const pd_0:any = ((<any>_co.selectPage(_co.getNextPage())) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['Next'])),
      (_l()(),i1.ɵted(-1,(null as any),['\n    ']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_2:any = _co.isPrevSpreadShown();
    _ck(_v,9,0,currVal_2);
    const currVal_3:any = _co.pages;
    _ck(_v,12,0,currVal_3);
    const currVal_4:any = _co.isNextSpreadShown();
    _ck(_v,15,0,currVal_4);
  },(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = (_co.currentPageNumber === 1);
    _ck(_v,2,0,currVal_0);
    const currVal_1:any = (_co.currentPageNumber === 1);
    _ck(_v,5,0,currVal_1);
    const currVal_5:any = (_co.currentPageNumber === _co.lastPage);
    _ck(_v,17,0,currVal_5);
    const currVal_6:any = _co.lastPage;
    _ck(_v,18,0,currVal_6);
    const currVal_7:any = (_co.currentPageNumber === _co.lastPage);
    _ck(_v,20,0,currVal_7);
  });
}
export function View_Pagination_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),17,'div',[['class',
      'pagination']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['\n\n  '])),(_l()(),i1.ɵeld(2,0,(null as any),
          (null as any),1,'div',[['class','pagination__info']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(3,(null as any),
          ['\n    Displaying ',' – ',' of ',' items\n  '])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n\n  '])),(_l()(),i1.ɵeld(5,0,(null as any),(null as any),11,'div',[['class',
          'pagination__right']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵeld(7,
          0,(null as any),(null as any),5,'select',[['class','pagination__length input'],
              ['id',''],['name','']],(null as any),[[(null as any),'change']],(_v,
              en,$event) => {
            var ad:boolean = true;
            var _co:i4.Pagination = _v.component;
            if (('change' === en)) {
              const pd_0:any = ((<any>_co.changeLength($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n      '])),
      (_l()(),i1.ɵand(16777216,(null as any),(null as any),2,(null as any),View_Pagination_1)),
      i1.ɵdid(10,802816,(null as any),0,i3.NgForOf,[i1.ViewContainerRef,i1.TemplateRef,
          i1.IterableDiffers],{ngForOf:[0,'ngForOf']},(null as any)),i1.ɵpad(11,5),
      (_l()(),i1.ɵted(-1,(null as any),['\n    '])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n\n    '])),(_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),
          View_Pagination_2)),i1.ɵdid(15,16384,(null as any),0,i3.NgIf,[i1.ViewContainerRef,
          i1.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted(-1,(null as any),
          ['\n\n  '])),(_l()(),i1.ɵted(-1,(null as any),['\n']))],(_ck,_v) => {
    var _co:i4.Pagination = _v.component;
    const currVal_3:any = _ck(_v,11,0,10,20,50,100,200);
    _ck(_v,10,0,currVal_3);
    const currVal_4:any = (_co.totalItems > _co.pageLength);
    _ck(_v,15,0,currVal_4);
  },(_ck,_v) => {
    var _co:i4.Pagination = _v.component;
    const currVal_0:any = (((_co.currentPageNumber - 1) * _co.pageLength) + 1);
    const currVal_1:any = (_co.currentPageNumber * _co.pageLength);
    const currVal_2:any = _co.totalItems;
    _ck(_v,3,0,currVal_0,currVal_1,currVal_2);
  });
}
export function View_Pagination_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),1,'pagination',
      ([] as any[]),(null as any),(null as any),(null as any),View_Pagination_0,RenderType_Pagination)),
      i1.ɵdid(1,638976,(null as any),0,i4.Pagination,([] as any[]),(null as any),(null as any))],
      (_ck,_v) => {
        _ck(_v,1,0);
      },(null as any));
}
export const PaginationNgFactory:i1.ComponentFactory<i4.Pagination> = i1.ɵccf('pagination',
    i4.Pagination,View_Pagination_Host_0,{totalItems:'total',pageLength:'length',currentParentPage:'current'},
    {dataChanged:'dataChanged',lengthChanged:'lengthChanged'},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvbWFsaWtvdi9JZGVhUHJvamVjdHMvb3Ntcy9zcmMvbWFpbi9zcmMvYXBwL3VpL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9ob21lL21hbGlrb3YvSWRlYVByb2plY3RzL29zbXMvc3JjL21haW4vc3JjL2FwcC91aS9wYWdpbmF0aW9uL3BhZ2luYXRpb24udHMiLCJuZzovLy9ob21lL21hbGlrb3YvSWRlYVByb2plY3RzL29zbXMvc3JjL21haW4vc3JjL2FwcC91aS9wYWdpbmF0aW9uL3BhZ2luYXRpb24uaHRtbCIsIm5nOi8vL2hvbWUvbWFsaWtvdi9JZGVhUHJvamVjdHMvb3Ntcy9zcmMvbWFpbi9zcmMvYXBwL3VpL3BhZ2luYXRpb24vcGFnaW5hdGlvbi50cy5QYWdpbmF0aW9uX0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGRpdiBjbGFzcz1cInBhZ2luYXRpb25cIj5cblxuICA8ZGl2IGNsYXNzPVwicGFnaW5hdGlvbl9faW5mb1wiPlxuICAgIERpc3BsYXlpbmcge3sgKGN1cnJlbnRQYWdlTnVtYmVyIC0gMSkgKiBwYWdlTGVuZ3RoICsgMX19IOKAkyB7eyBjdXJyZW50UGFnZU51bWJlciAqIHBhZ2VMZW5ndGggfX0gb2Yge3sgdG90YWxJdGVtcyB9fSBpdGVtc1xuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwicGFnaW5hdGlvbl9fcmlnaHRcIj5cbiAgICA8c2VsZWN0IG5hbWU9XCJcIiBpZD1cIlwiIGNsYXNzPVwicGFnaW5hdGlvbl9fbGVuZ3RoIGlucHV0XCJcbiAgICAgICAgICAgIChjaGFuZ2UpPVwiY2hhbmdlTGVuZ3RoKCRldmVudC50YXJnZXQudmFsdWUpXCJcbiAgICA+XG4gICAgICA8b3B0aW9uXG4gICAgICAgICpuZ0Zvcj1cImxldCB2YWx1ZSBvZiBbMTAsIDIwLCA1MCwgMTAwLCAyMDBdXCJcbiAgICAgICAgdmFsdWU9XCJ7eyB2YWx1ZSB9fVwiXG4gICAgICAgIFthdHRyLnNlbGVjdGVkXT1cInZhbHVlID09PSBwYWdlTGVuZ3RoID8gJycgOiBudWxsXCJcbiAgICAgID5cbiAgICAgICAge3sgdmFsdWUgfX1cbiAgICAgIDwvb3B0aW9uPlxuICAgIDwvc2VsZWN0PlxuXG4gICAgPHVsIGNsYXNzPVwicGFnaW5hdGlvbl9fc2VsZWN0b3JcIlxuICAgICAgICAqbmdJZj1cInRvdGFsSXRlbXMgPiBwYWdlTGVuZ3RoXCJcbiAgICA+XG4gICAgICA8bGlcbiAgICAgICAgKGNsaWNrKT1cInNlbGVjdFBhZ2UoZ2V0UHJldlBhZ2UoKSlcIlxuICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwiY3VycmVudFBhZ2VOdW1iZXIgPT09IDFcIlxuICAgICAgPlByZXY8L2xpPlxuICAgICAgPGxpXG4gICAgICAgIChjbGljayk9XCJzZWxlY3RQYWdlKDEpXCJcbiAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJjdXJyZW50UGFnZU51bWJlciA9PT0gMVwiXG4gICAgICA+MTwvbGk+XG4gICAgICA8bGkgY2xhc3M9XCJzcHJlYWRcIiAqbmdJZj1cImlzUHJldlNwcmVhZFNob3duKClcIj4uLi48L2xpPlxuXG4gICAgICA8bGlcbiAgICAgICAgKm5nRm9yPVwibGV0IHBhZ2Ugb2YgcGFnZXNcIlxuICAgICAgICBbY2xhc3MuYWN0aXZlXT1cInBhZ2UgPT09IGN1cnJlbnRQYWdlTnVtYmVyXCJcbiAgICAgICAgKGNsaWNrKT1cInNlbGVjdFBhZ2UocGFnZSlcIlxuICAgICAgPlxuICAgICAgICB7eyBwYWdlIH19XG4gICAgICA8L2xpPlxuXG4gICAgICA8bGkgY2xhc3M9XCJzcHJlYWRcIiAqbmdJZj1cImlzTmV4dFNwcmVhZFNob3duKClcIj4uLi48L2xpPlxuICAgICAgPGxpXG4gICAgICAgIChjbGljayk9XCJzZWxlY3RQYWdlKGxhc3RQYWdlKVwiXG4gICAgICAgIFtjbGFzcy5hY3RpdmVdPVwiY3VycmVudFBhZ2VOdW1iZXIgPT09IGxhc3RQYWdlXCJcbiAgICAgID5cbiAgICAgICAge3sgbGFzdFBhZ2UgfX1cbiAgICAgIDwvbGk+XG4gICAgICA8bGlcbiAgICAgICAgKGNsaWNrKT1cInNlbGVjdFBhZ2UoZ2V0TmV4dFBhZ2UoKSlcIlxuICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwiY3VycmVudFBhZ2VOdW1iZXIgPT09IGxhc3RQYWdlXCJcbiAgICAgID5OZXh0PC9saT5cbiAgICA8L3VsPlxuXG4gIDwvZGl2PlxuPC9kaXY+IiwiPHBhZ2luYXRpb24+PC9wYWdpbmF0aW9uPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ1VNO01BQUE7YUFBQTtVQUFBLDZEQUFBO1VBQUE7VUFBQSxlQUlDOztRQUZDO1FBRkYsV0FFRSxTQUZGO1FBRUU7UUFGRixXQUVFLFNBRkY7OztRQUdFO1FBSEYsV0FHRSxTQUhGO1FBSUM7UUFBQTs7OztvQkFnQkQ7TUFBQTtNQUErQzs7O29CQUUvQztNQUFBO1FBQUE7UUFBQTtRQUdFO1VBQUE7VUFBQTtRQUFBO1FBSEY7TUFBQSxnQ0FJQztNQUFBOztJQUZDO0lBRkYsV0FFRSxTQUZGO0lBSUM7SUFBQTs7OztvQkFJRDtNQUFBO01BQStDOzs7b0JBckJqRDtNQUFBO01BQUEsZ0JBRUMsZ0RBQ0M7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUNFO1VBQUE7VUFBQTtRQUFBO1FBREY7TUFBQSxnQ0FHQztNQUFTLGdEQUNWO1VBQUE7Y0FBQTtZQUFBO1lBQUE7WUFDRTtjQUFBO2NBQUE7WUFBQTtZQURGO1VBQUEsZ0NBR0M7TUFBTSxnREFDUDtVQUFBLHlEQUFBO1VBQUE7TUFBdUQsa0RBRXZEO1VBQUEseURBQUE7VUFBQTtjQUFBLDJCQU1LO01BRUw7YUFBQTtVQUFBLGlDQUF1RDtNQUN2RDtVQUFBO1FBQUE7UUFBQTtRQUNFO1VBQUE7VUFBQTtRQUFBO1FBREY7TUFBQSxnQ0FHQztVQUFBLGNBRUksZ0RBQ0w7VUFBQTtVQUFBO1lBQUE7WUFBQTtZQUNFO2NBQUE7Y0FBQTtZQUFBO1lBREY7VUFBQSxnQ0FHQztNQUFTOztJQXBCUztJQUFuQixXQUFtQixTQUFuQjtJQUdFO0lBREYsWUFDRSxTQURGO0lBUW1CO0lBQW5CLFlBQW1CLFNBQW5COzs7SUFoQkU7SUFGRixXQUVFLFNBRkY7SUFNRTtJQUZGLFdBRUUsU0FGRjtJQWlCRTtJQUZGLFlBRUUsU0FGRjtJQUdDO0lBQUE7SUFLQztJQUZGLFlBRUUsU0FGRjs7OztvQkEvQ047TUFBQTtNQUF3Qiw4Q0FFdEI7VUFBQTtVQUFBLDRDQUE4QjtVQUFBLGtEQUV4QjtVQUFBLGFBRU47VUFBQTtVQUFBLGdCQUErQiw4Q0FDN0I7VUFBQTtjQUFBO3VCQUFBO1lBQUE7WUFBQTtZQUNRO2NBQUE7Y0FBQTtZQUFBO1lBRFI7VUFBQSxnQ0FFQztNQUNDO2FBQUE7NEJBQUEsZ0RBQ0U7TUFLTyw4Q0FDRjtVQUFBLGVBRVQ7VUFBQSwyQkFBQTt3QkFBQSxtQ0FnQ0s7VUFBQSxhQUVEOztJQTFDQTtJQURGLFlBQ0UsU0FERjtJQVVFO0lBREosWUFDSSxTQURKOzs7SUFqQjRCO0lBQUE7SUFBQTtJQUFBOzs7O29CQ0ZoQztNQUFBO2FBQUE7O1FBQUE7Ozs7OyJ9