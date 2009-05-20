function less_json_eval(json){return eval('(' +  json + ')')}  

function jq_defined(){return typeof(jQuery) != "undefined"}

function less_get_params(obj){
   
  if (jq_defined()) { return obj }
  if (obj == null) {return '';}
  var s = [];
  for (prop in obj){
    s.push(prop + "=" + obj[prop]);
  }
  return s.join('&') + '';
}

function less_merge_objects(a, b){
   
  if (b == null) {return a;}
  z = new Object;
  for (prop in a){z[prop] = a[prop]}
  for (prop in b){z[prop] = b[prop]}
  return z;
}

function less_ajax(url, verb, params, options){
   
  if (verb == undefined) {verb = 'get';}
  var res;
  if (jq_defined()){
    v = verb.toLowerCase() == 'get' ? 'GET' : 'POST'
    if (verb.toLowerCase() == 'get' || verb.toLowerCase() == 'post'){p = less_get_params(params);}
    else{p = less_get_params(less_merge_objects({'_method': verb.toLowerCase()}, params))} 
     
     
    res = jQuery.ajax(less_merge_objects({async:false, url: url, type: v, data: p}, options)).responseText;
  } else {  
    new Ajax.Request(url, less_merge_objects({asynchronous: false, method: verb, parameters: less_get_params(params), onComplete: function(r){res = r.responseText;}}, options));
  }
  if (url.indexOf('.json') == url.length-5){ return less_json_eval(res);}
  else {return res;}
}
function less_ajaxx(url, verb, params, options){
   
  if (verb == undefined) {verb = 'get';}
  if (jq_defined()){
    v = verb.toLowerCase() == 'get' ? 'GET' : 'POST'
    if (verb.toLowerCase() == 'get' || verb.toLowerCase() == 'post'){p = less_get_params(params);}
    else{p = less_get_params(less_merge_objects({'_method': verb.toLowerCase()}, params))} 
     
     
    jQuery.ajax(less_merge_objects({ url: url, type: v, data: p, complete: function(r){eval(r.responseText)}}, options));
  } else {  
    new Ajax.Request(url, less_merge_objects({method: verb, parameters: less_get_params(params), onComplete: function(r){eval(r.responseText);}}, options));
  }
}
function books_path(format, verb){ return '/books' + format + '';}
function books_ajax(format, verb, params, options){ return less_ajax('/books' + format + '', verb, params, options);}
function books_ajaxx(format, verb, params, options){ return less_ajaxx('/books' + format + '', verb, params, options);}
function new_book_path(format, verb){ return '/books/new' + format + '';}
function new_book_ajax(format, verb, params, options){ return less_ajax('/books/new' + format + '', verb, params, options);}
function new_book_ajaxx(format, verb, params, options){ return less_ajaxx('/books/new' + format + '', verb, params, options);}
function add_dilary_book_path(id, format, verb){ return '/books/' + id + '/add_dilary' + format + '';}
function add_dilary_book_ajax(id, format, verb, params, options){ return less_ajax('/books/' + id + '/add_dilary' + format + '', verb, params, options);}
function add_dilary_book_ajaxx(id, format, verb, params, options){ return less_ajaxx('/books/' + id + '/add_dilary' + format + '', verb, params, options);}
function edit_book_path(id, format, verb){ return '/books/' + id + '/edit' + format + '';}
function edit_book_ajax(id, format, verb, params, options){ return less_ajax('/books/' + id + '/edit' + format + '', verb, params, options);}
function edit_book_ajaxx(id, format, verb, params, options){ return less_ajaxx('/books/' + id + '/edit' + format + '', verb, params, options);}
function book_path(id, format, verb){ return '/books/' + id + '' + format + '';}
function book_ajax(id, format, verb, params, options){ return less_ajax('/books/' + id + '' + format + '', verb, params, options);}
function book_ajaxx(id, format, verb, params, options){ return less_ajaxx('/books/' + id + '' + format + '', verb, params, options);}
function search_book_finace_items_path(book_id, format, verb){ return '/books/' + book_id + '/finace_items/search' + format + '';}
function search_book_finace_items_ajax(book_id, format, verb, params, options){ return less_ajax('/books/' + book_id + '/finace_items/search' + format + '', verb, params, options);}
function search_book_finace_items_ajaxx(book_id, format, verb, params, options){ return less_ajaxx('/books/' + book_id + '/finace_items/search' + format + '', verb, params, options);}
function export_to_excel_book_finace_items_path(book_id, format, verb){ return '/books/' + book_id + '/finace_items/export_to_excel' + format + '';}
function export_to_excel_book_finace_items_ajax(book_id, format, verb, params, options){ return less_ajax('/books/' + book_id + '/finace_items/export_to_excel' + format + '', verb, params, options);}
function export_to_excel_book_finace_items_ajaxx(book_id, format, verb, params, options){ return less_ajaxx('/books/' + book_id + '/finace_items/export_to_excel' + format + '', verb, params, options);}
function book_finace_items_path(book_id, format, verb){ return '/books/' + book_id + '/finace_items' + format + '';}
function book_finace_items_ajax(book_id, format, verb, params, options){ return less_ajax('/books/' + book_id + '/finace_items' + format + '', verb, params, options);}
function book_finace_items_ajaxx(book_id, format, verb, params, options){ return less_ajaxx('/books/' + book_id + '/finace_items' + format + '', verb, params, options);}
function new_book_finace_item_path(book_id, format, verb){ return '/books/' + book_id + '/finace_items/new' + format + '';}
function new_book_finace_item_ajax(book_id, format, verb, params, options){ return less_ajax('/books/' + book_id + '/finace_items/new' + format + '', verb, params, options);}
function new_book_finace_item_ajaxx(book_id, format, verb, params, options){ return less_ajaxx('/books/' + book_id + '/finace_items/new' + format + '', verb, params, options);}
function edit_book_finace_item_path(book_id, id, format, verb){ return '/books/' + book_id + '/finace_items/' + id + '/edit' + format + '';}
function edit_book_finace_item_ajax(book_id, id, format, verb, params, options){ return less_ajax('/books/' + book_id + '/finace_items/' + id + '/edit' + format + '', verb, params, options);}
function edit_book_finace_item_ajaxx(book_id, id, format, verb, params, options){ return less_ajaxx('/books/' + book_id + '/finace_items/' + id + '/edit' + format + '', verb, params, options);}
function book_finace_item_path(book_id, id, format, verb){ return '/books/' + book_id + '/finace_items/' + id + '' + format + '';}
function book_finace_item_ajax(book_id, id, format, verb, params, options){ return less_ajax('/books/' + book_id + '/finace_items/' + id + '' + format + '', verb, params, options);}
function book_finace_item_ajaxx(book_id, id, format, verb, params, options){ return less_ajaxx('/books/' + book_id + '/finace_items/' + id + '' + format + '', verb, params, options);}
function search_book_dilaries_path(book_id, format, verb){ return '/books/' + book_id + '/dilaries/search' + format + '';}
function search_book_dilaries_ajax(book_id, format, verb, params, options){ return less_ajax('/books/' + book_id + '/dilaries/search' + format + '', verb, params, options);}
function search_book_dilaries_ajaxx(book_id, format, verb, params, options){ return less_ajaxx('/books/' + book_id + '/dilaries/search' + format + '', verb, params, options);}
function book_dilaries_path(book_id, format, verb){ return '/books/' + book_id + '/dilaries' + format + '';}
function book_dilaries_ajax(book_id, format, verb, params, options){ return less_ajax('/books/' + book_id + '/dilaries' + format + '', verb, params, options);}
function book_dilaries_ajaxx(book_id, format, verb, params, options){ return less_ajaxx('/books/' + book_id + '/dilaries' + format + '', verb, params, options);}
function new_book_dilary_path(book_id, format, verb){ return '/books/' + book_id + '/dilaries/new' + format + '';}
function new_book_dilary_ajax(book_id, format, verb, params, options){ return less_ajax('/books/' + book_id + '/dilaries/new' + format + '', verb, params, options);}
function new_book_dilary_ajaxx(book_id, format, verb, params, options){ return less_ajaxx('/books/' + book_id + '/dilaries/new' + format + '', verb, params, options);}
function edit_book_dilary_path(book_id, id, format, verb){ return '/books/' + book_id + '/dilaries/' + id + '/edit' + format + '';}
function edit_book_dilary_ajax(book_id, id, format, verb, params, options){ return less_ajax('/books/' + book_id + '/dilaries/' + id + '/edit' + format + '', verb, params, options);}
function edit_book_dilary_ajaxx(book_id, id, format, verb, params, options){ return less_ajaxx('/books/' + book_id + '/dilaries/' + id + '/edit' + format + '', verb, params, options);}
function book_dilary_path(book_id, id, format, verb){ return '/books/' + book_id + '/dilaries/' + id + '' + format + '';}
function book_dilary_ajax(book_id, id, format, verb, params, options){ return less_ajax('/books/' + book_id + '/dilaries/' + id + '' + format + '', verb, params, options);}
function book_dilary_ajaxx(book_id, id, format, verb, params, options){ return less_ajaxx('/books/' + book_id + '/dilaries/' + id + '' + format + '', verb, params, options);}
function report_index_path(format, verb){ return '/report' + format + '';}
function report_index_ajax(format, verb, params, options){ return less_ajax('/report' + format + '', verb, params, options);}
function report_index_ajaxx(format, verb, params, options){ return less_ajaxx('/report' + format + '', verb, params, options);}
function new_report_path(format, verb){ return '/report/new' + format + '';}
function new_report_ajax(format, verb, params, options){ return less_ajax('/report/new' + format + '', verb, params, options);}
function new_report_ajaxx(format, verb, params, options){ return less_ajaxx('/report/new' + format + '', verb, params, options);}
function month_report_report_path(id, format, verb){ return '/report/' + id + '/month_report' + format + '';}
function month_report_report_ajax(id, format, verb, params, options){ return less_ajax('/report/' + id + '/month_report' + format + '', verb, params, options);}
function month_report_report_ajaxx(id, format, verb, params, options){ return less_ajaxx('/report/' + id + '/month_report' + format + '', verb, params, options);}
function year_report_report_path(id, format, verb){ return '/report/' + id + '/year_report' + format + '';}
function year_report_report_ajax(id, format, verb, params, options){ return less_ajax('/report/' + id + '/year_report' + format + '', verb, params, options);}
function year_report_report_ajaxx(id, format, verb, params, options){ return less_ajaxx('/report/' + id + '/year_report' + format + '', verb, params, options);}
function edit_report_path(id, format, verb){ return '/report/' + id + '/edit' + format + '';}
function edit_report_ajax(id, format, verb, params, options){ return less_ajax('/report/' + id + '/edit' + format + '', verb, params, options);}
function edit_report_ajaxx(id, format, verb, params, options){ return less_ajaxx('/report/' + id + '/edit' + format + '', verb, params, options);}
function inOutFenBu_report_path(id, format, verb){ return '/report/' + id + '/inOutFenBu' + format + '';}
function inOutFenBu_report_ajax(id, format, verb, params, options){ return less_ajax('/report/' + id + '/inOutFenBu' + format + '', verb, params, options);}
function inOutFenBu_report_ajaxx(id, format, verb, params, options){ return less_ajaxx('/report/' + id + '/inOutFenBu' + format + '', verb, params, options);}
function inFenBu_report_path(id, format, verb){ return '/report/' + id + '/inFenBu' + format + '';}
function inFenBu_report_ajax(id, format, verb, params, options){ return less_ajax('/report/' + id + '/inFenBu' + format + '', verb, params, options);}
function inFenBu_report_ajaxx(id, format, verb, params, options){ return less_ajaxx('/report/' + id + '/inFenBu' + format + '', verb, params, options);}
function outFenBu_report_path(id, format, verb){ return '/report/' + id + '/outFenBu' + format + '';}
function outFenBu_report_ajax(id, format, verb, params, options){ return less_ajax('/report/' + id + '/outFenBu' + format + '', verb, params, options);}
function outFenBu_report_ajaxx(id, format, verb, params, options){ return less_ajaxx('/report/' + id + '/outFenBu' + format + '', verb, params, options);}
function month_category_report_report_path(id, format, verb){ return '/report/' + id + '/month_category_report' + format + '';}
function month_category_report_report_ajax(id, format, verb, params, options){ return less_ajax('/report/' + id + '/month_category_report' + format + '', verb, params, options);}
function month_category_report_report_ajaxx(id, format, verb, params, options){ return less_ajaxx('/report/' + id + '/month_category_report' + format + '', verb, params, options);}
function year_month_report_report_path(id, format, verb){ return '/report/' + id + '/year_month_report' + format + '';}
function year_month_report_report_ajax(id, format, verb, params, options){ return less_ajax('/report/' + id + '/year_month_report' + format + '', verb, params, options);}
function year_month_report_report_ajaxx(id, format, verb, params, options){ return less_ajaxx('/report/' + id + '/year_month_report' + format + '', verb, params, options);}
function oneCategorySeries_report_path(id, format, verb){ return '/report/' + id + '/oneCategorySeries' + format + '';}
function oneCategorySeries_report_ajax(id, format, verb, params, options){ return less_ajax('/report/' + id + '/oneCategorySeries' + format + '', verb, params, options);}
function oneCategorySeries_report_ajaxx(id, format, verb, params, options){ return less_ajaxx('/report/' + id + '/oneCategorySeries' + format + '', verb, params, options);}
function report_path(id, format, verb){ return '/report/' + id + '' + format + '';}
function report_ajax(id, format, verb, params, options){ return less_ajax('/report/' + id + '' + format + '', verb, params, options);}
function report_ajaxx(id, format, verb, params, options){ return less_ajaxx('/report/' + id + '' + format + '', verb, params, options);}
function categories_path(format, verb){ return '/categories' + format + '';}
function categories_ajax(format, verb, params, options){ return less_ajax('/categories' + format + '', verb, params, options);}
function categories_ajaxx(format, verb, params, options){ return less_ajaxx('/categories' + format + '', verb, params, options);}
function new_category_path(format, verb){ return '/categories/new' + format + '';}
function new_category_ajax(format, verb, params, options){ return less_ajax('/categories/new' + format + '', verb, params, options);}
function new_category_ajaxx(format, verb, params, options){ return less_ajaxx('/categories/new' + format + '', verb, params, options);}
function edit_category_path(id, format, verb){ return '/categories/' + id + '/edit' + format + '';}
function edit_category_ajax(id, format, verb, params, options){ return less_ajax('/categories/' + id + '/edit' + format + '', verb, params, options);}
function edit_category_ajaxx(id, format, verb, params, options){ return less_ajaxx('/categories/' + id + '/edit' + format + '', verb, params, options);}
function category_path(id, format, verb){ return '/categories/' + id + '' + format + '';}
function category_ajax(id, format, verb, params, options){ return less_ajax('/categories/' + id + '' + format + '', verb, params, options);}
function category_ajaxx(id, format, verb, params, options){ return less_ajaxx('/categories/' + id + '' + format + '', verb, params, options);}
function trashbox_messages_path(format, verb){ return '/messages/trashbox' + format + '';}
function trashbox_messages_ajax(format, verb, params, options){ return less_ajax('/messages/trashbox' + format + '', verb, params, options);}
function trashbox_messages_ajaxx(format, verb, params, options){ return less_ajaxx('/messages/trashbox' + format + '', verb, params, options);}
function inbox_messages_path(format, verb){ return '/messages/inbox' + format + '';}
function inbox_messages_ajax(format, verb, params, options){ return less_ajax('/messages/inbox' + format + '', verb, params, options);}
function inbox_messages_ajaxx(format, verb, params, options){ return less_ajaxx('/messages/inbox' + format + '', verb, params, options);}
function outbox_messages_path(format, verb){ return '/messages/outbox' + format + '';}
function outbox_messages_ajax(format, verb, params, options){ return less_ajax('/messages/outbox' + format + '', verb, params, options);}
function outbox_messages_ajaxx(format, verb, params, options){ return less_ajaxx('/messages/outbox' + format + '', verb, params, options);}
function messages_path(format, verb){ return '/messages' + format + '';}
function messages_ajax(format, verb, params, options){ return less_ajax('/messages' + format + '', verb, params, options);}
function messages_ajaxx(format, verb, params, options){ return less_ajaxx('/messages' + format + '', verb, params, options);}
function new_message_path(format, verb){ return '/messages/new' + format + '';}
function new_message_ajax(format, verb, params, options){ return less_ajax('/messages/new' + format + '', verb, params, options);}
function new_message_ajaxx(format, verb, params, options){ return less_ajaxx('/messages/new' + format + '', verb, params, options);}
function reply_message_path(id, format, verb){ return '/messages/' + id + '/reply' + format + '';}
function reply_message_ajax(id, format, verb, params, options){ return less_ajax('/messages/' + id + '/reply' + format + '', verb, params, options);}
function reply_message_ajaxx(id, format, verb, params, options){ return less_ajaxx('/messages/' + id + '/reply' + format + '', verb, params, options);}
function edit_message_path(id, format, verb){ return '/messages/' + id + '/edit' + format + '';}
function edit_message_ajax(id, format, verb, params, options){ return less_ajax('/messages/' + id + '/edit' + format + '', verb, params, options);}
function edit_message_ajaxx(id, format, verb, params, options){ return less_ajaxx('/messages/' + id + '/edit' + format + '', verb, params, options);}
function message_path(id, format, verb){ return '/messages/' + id + '' + format + '';}
function message_ajax(id, format, verb, params, options){ return less_ajax('/messages/' + id + '' + format + '', verb, params, options);}
function message_ajaxx(id, format, verb, params, options){ return less_ajaxx('/messages/' + id + '' + format + '', verb, params, options);}
function dashboards_path(format, verb){ return '/dashboards' + format + '';}
function dashboards_ajax(format, verb, params, options){ return less_ajax('/dashboards' + format + '', verb, params, options);}
function dashboards_ajaxx(format, verb, params, options){ return less_ajaxx('/dashboards' + format + '', verb, params, options);}
function new_dashboard_path(format, verb){ return '/dashboards/new' + format + '';}
function new_dashboard_ajax(format, verb, params, options){ return less_ajax('/dashboards/new' + format + '', verb, params, options);}
function new_dashboard_ajaxx(format, verb, params, options){ return less_ajaxx('/dashboards/new' + format + '', verb, params, options);}
function edit_dashboard_path(id, format, verb){ return '/dashboards/' + id + '/edit' + format + '';}
function edit_dashboard_ajax(id, format, verb, params, options){ return less_ajax('/dashboards/' + id + '/edit' + format + '', verb, params, options);}
function edit_dashboard_ajaxx(id, format, verb, params, options){ return less_ajaxx('/dashboards/' + id + '/edit' + format + '', verb, params, options);}
function dashboard_path(id, format, verb){ return '/dashboards/' + id + '' + format + '';}
function dashboard_ajax(id, format, verb, params, options){ return less_ajax('/dashboards/' + id + '' + format + '', verb, params, options);}
function dashboard_ajaxx(id, format, verb, params, options){ return less_ajaxx('/dashboards/' + id + '' + format + '', verb, params, options);}
function destroy_all_favorites_path(format, verb){ return '/favorites/destroy_all' + format + '';}
function destroy_all_favorites_ajax(format, verb, params, options){ return less_ajax('/favorites/destroy_all' + format + '', verb, params, options);}
function destroy_all_favorites_ajaxx(format, verb, params, options){ return less_ajaxx('/favorites/destroy_all' + format + '', verb, params, options);}
function favorites_path(format, verb){ return '/favorites' + format + '';}
function favorites_ajax(format, verb, params, options){ return less_ajax('/favorites' + format + '', verb, params, options);}
function favorites_ajaxx(format, verb, params, options){ return less_ajaxx('/favorites' + format + '', verb, params, options);}
function new_favorite_path(format, verb){ return '/favorites/new' + format + '';}
function new_favorite_ajax(format, verb, params, options){ return less_ajax('/favorites/new' + format + '', verb, params, options);}
function new_favorite_ajaxx(format, verb, params, options){ return less_ajaxx('/favorites/new' + format + '', verb, params, options);}
function edit_favorite_path(id, format, verb){ return '/favorites/' + id + '/edit' + format + '';}
function edit_favorite_ajax(id, format, verb, params, options){ return less_ajax('/favorites/' + id + '/edit' + format + '', verb, params, options);}
function edit_favorite_ajaxx(id, format, verb, params, options){ return less_ajaxx('/favorites/' + id + '/edit' + format + '', verb, params, options);}
function favorite_path(id, format, verb){ return '/favorites/' + id + '' + format + '';}
function favorite_ajax(id, format, verb, params, options){ return less_ajax('/favorites/' + id + '' + format + '', verb, params, options);}
function favorite_ajaxx(id, format, verb, params, options){ return less_ajaxx('/favorites/' + id + '' + format + '', verb, params, options);}
function forums_path(format, verb){ return '/forums' + format + '';}
function forums_ajax(format, verb, params, options){ return less_ajax('/forums' + format + '', verb, params, options);}
function forums_ajaxx(format, verb, params, options){ return less_ajaxx('/forums' + format + '', verb, params, options);}
function new_forum_path(format, verb){ return '/forums/new' + format + '';}
function new_forum_ajax(format, verb, params, options){ return less_ajax('/forums/new' + format + '', verb, params, options);}
function new_forum_ajaxx(format, verb, params, options){ return less_ajaxx('/forums/new' + format + '', verb, params, options);}
function edit_forum_path(id, format, verb){ return '/forums/' + id + '/edit' + format + '';}
function edit_forum_ajax(id, format, verb, params, options){ return less_ajax('/forums/' + id + '/edit' + format + '', verb, params, options);}
function edit_forum_ajaxx(id, format, verb, params, options){ return less_ajaxx('/forums/' + id + '/edit' + format + '', verb, params, options);}
function forum_path(id, format, verb){ return '/forums/' + id + '' + format + '';}
function forum_ajax(id, format, verb, params, options){ return less_ajax('/forums/' + id + '' + format + '', verb, params, options);}
function forum_ajaxx(id, format, verb, params, options){ return less_ajaxx('/forums/' + id + '' + format + '', verb, params, options);}
function search_netvalues_path(format, verb){ return '/netvalues/search' + format + '';}
function search_netvalues_ajax(format, verb, params, options){ return less_ajax('/netvalues/search' + format + '', verb, params, options);}
function search_netvalues_ajaxx(format, verb, params, options){ return less_ajaxx('/netvalues/search' + format + '', verb, params, options);}
function netvalue_data_netvalues_path(format, verb){ return '/netvalues/netvalue_data' + format + '';}
function netvalue_data_netvalues_ajax(format, verb, params, options){ return less_ajax('/netvalues/netvalue_data' + format + '', verb, params, options);}
function netvalue_data_netvalues_ajaxx(format, verb, params, options){ return less_ajaxx('/netvalues/netvalue_data' + format + '', verb, params, options);}
function netvalues_path(format, verb){ return '/netvalues' + format + '';}
function netvalues_ajax(format, verb, params, options){ return less_ajax('/netvalues' + format + '', verb, params, options);}
function netvalues_ajaxx(format, verb, params, options){ return less_ajaxx('/netvalues' + format + '', verb, params, options);}
function new_netvalue_path(format, verb){ return '/netvalues/new' + format + '';}
function new_netvalue_ajax(format, verb, params, options){ return less_ajax('/netvalues/new' + format + '', verb, params, options);}
function new_netvalue_ajaxx(format, verb, params, options){ return less_ajaxx('/netvalues/new' + format + '', verb, params, options);}
function edit_netvalue_path(id, format, verb){ return '/netvalues/' + id + '/edit' + format + '';}
function edit_netvalue_ajax(id, format, verb, params, options){ return less_ajax('/netvalues/' + id + '/edit' + format + '', verb, params, options);}
function edit_netvalue_ajaxx(id, format, verb, params, options){ return less_ajaxx('/netvalues/' + id + '/edit' + format + '', verb, params, options);}
function netvalue_path(id, format, verb){ return '/netvalues/' + id + '' + format + '';}
function netvalue_ajax(id, format, verb, params, options){ return less_ajax('/netvalues/' + id + '' + format + '', verb, params, options);}
function netvalue_ajaxx(id, format, verb, params, options){ return less_ajaxx('/netvalues/' + id + '' + format + '', verb, params, options);}
function destroy_all_myfunds_path(format, verb){ return '/myfunds/destroy_all' + format + '';}
function destroy_all_myfunds_ajax(format, verb, params, options){ return less_ajax('/myfunds/destroy_all' + format + '', verb, params, options);}
function destroy_all_myfunds_ajaxx(format, verb, params, options){ return less_ajaxx('/myfunds/destroy_all' + format + '', verb, params, options);}
function search_history_myfunds_path(format, verb){ return '/myfunds/search_history' + format + '';}
function search_history_myfunds_ajax(format, verb, params, options){ return less_ajax('/myfunds/search_history' + format + '', verb, params, options);}
function search_history_myfunds_ajaxx(format, verb, params, options){ return less_ajaxx('/myfunds/search_history' + format + '', verb, params, options);}
function history_myfunds_path(format, verb){ return '/myfunds/history' + format + '';}
function history_myfunds_ajax(format, verb, params, options){ return less_ajax('/myfunds/history' + format + '', verb, params, options);}
function history_myfunds_ajaxx(format, verb, params, options){ return less_ajaxx('/myfunds/history' + format + '', verb, params, options);}
function myfunds_chart_myfunds_path(format, verb){ return '/myfunds/myfunds_chart' + format + '';}
function myfunds_chart_myfunds_ajax(format, verb, params, options){ return less_ajax('/myfunds/myfunds_chart' + format + '', verb, params, options);}
function myfunds_chart_myfunds_ajaxx(format, verb, params, options){ return less_ajaxx('/myfunds/myfunds_chart' + format + '', verb, params, options);}
function myfunds_path(format, verb){ return '/myfunds' + format + '';}
function myfunds_ajax(format, verb, params, options){ return less_ajax('/myfunds' + format + '', verb, params, options);}
function myfunds_ajaxx(format, verb, params, options){ return less_ajaxx('/myfunds' + format + '', verb, params, options);}
function new_myfund_path(format, verb){ return '/myfunds/new' + format + '';}
function new_myfund_ajax(format, verb, params, options){ return less_ajax('/myfunds/new' + format + '', verb, params, options);}
function new_myfund_ajaxx(format, verb, params, options){ return less_ajaxx('/myfunds/new' + format + '', verb, params, options);}
function edit_myfund_path(id, format, verb){ return '/myfunds/' + id + '/edit' + format + '';}
function edit_myfund_ajax(id, format, verb, params, options){ return less_ajax('/myfunds/' + id + '/edit' + format + '', verb, params, options);}
function edit_myfund_ajaxx(id, format, verb, params, options){ return less_ajaxx('/myfunds/' + id + '/edit' + format + '', verb, params, options);}
function tb_myfund_path(id, format, verb){ return '/myfunds/' + id + '/tb' + format + '';}
function tb_myfund_ajax(id, format, verb, params, options){ return less_ajax('/myfunds/' + id + '/tb' + format + '', verb, params, options);}
function tb_myfund_ajaxx(id, format, verb, params, options){ return less_ajaxx('/myfunds/' + id + '/tb' + format + '', verb, params, options);}
function bonus_re_myfund_path(id, format, verb){ return '/myfunds/' + id + '/bonus_re' + format + '';}
function bonus_re_myfund_ajax(id, format, verb, params, options){ return less_ajax('/myfunds/' + id + '/bonus_re' + format + '', verb, params, options);}
function bonus_re_myfund_ajaxx(id, format, verb, params, options){ return less_ajaxx('/myfunds/' + id + '/bonus_re' + format + '', verb, params, options);}
function chai_fen_myfund_path(id, format, verb){ return '/myfunds/' + id + '/chai_fen' + format + '';}
function chai_fen_myfund_ajax(id, format, verb, params, options){ return less_ajax('/myfunds/' + id + '/chai_fen' + format + '', verb, params, options);}
function chai_fen_myfund_ajaxx(id, format, verb, params, options){ return less_ajaxx('/myfunds/' + id + '/chai_fen' + format + '', verb, params, options);}
function bonus_myfund_path(id, format, verb){ return '/myfunds/' + id + '/bonus' + format + '';}
function bonus_myfund_ajax(id, format, verb, params, options){ return less_ajax('/myfunds/' + id + '/bonus' + format + '', verb, params, options);}
function bonus_myfund_ajaxx(id, format, verb, params, options){ return less_ajaxx('/myfunds/' + id + '/bonus' + format + '', verb, params, options);}
function plus_myfund_path(id, format, verb){ return '/myfunds/' + id + '/plus' + format + '';}
function plus_myfund_ajax(id, format, verb, params, options){ return less_ajax('/myfunds/' + id + '/plus' + format + '', verb, params, options);}
function plus_myfund_ajaxx(id, format, verb, params, options){ return less_ajaxx('/myfunds/' + id + '/plus' + format + '', verb, params, options);}
function myfund_path(id, format, verb){ return '/myfunds/' + id + '' + format + '';}
function myfund_ajax(id, format, verb, params, options){ return less_ajax('/myfunds/' + id + '' + format + '', verb, params, options);}
function myfund_ajaxx(id, format, verb, params, options){ return less_ajaxx('/myfunds/' + id + '' + format + '', verb, params, options);}
function myfund_myfundlogs_path(myfund_id, format, verb){ return '/myfunds/' + myfund_id + '/myfundlogs' + format + '';}
function myfund_myfundlogs_ajax(myfund_id, format, verb, params, options){ return less_ajax('/myfunds/' + myfund_id + '/myfundlogs' + format + '', verb, params, options);}
function myfund_myfundlogs_ajaxx(myfund_id, format, verb, params, options){ return less_ajaxx('/myfunds/' + myfund_id + '/myfundlogs' + format + '', verb, params, options);}
function new_myfund_myfundlog_path(myfund_id, format, verb){ return '/myfunds/' + myfund_id + '/myfundlogs/new' + format + '';}
function new_myfund_myfundlog_ajax(myfund_id, format, verb, params, options){ return less_ajax('/myfunds/' + myfund_id + '/myfundlogs/new' + format + '', verb, params, options);}
function new_myfund_myfundlog_ajaxx(myfund_id, format, verb, params, options){ return less_ajaxx('/myfunds/' + myfund_id + '/myfundlogs/new' + format + '', verb, params, options);}
function edit_myfund_myfundlog_path(myfund_id, id, format, verb){ return '/myfunds/' + myfund_id + '/myfundlogs/' + id + '/edit' + format + '';}
function edit_myfund_myfundlog_ajax(myfund_id, id, format, verb, params, options){ return less_ajax('/myfunds/' + myfund_id + '/myfundlogs/' + id + '/edit' + format + '', verb, params, options);}
function edit_myfund_myfundlog_ajaxx(myfund_id, id, format, verb, params, options){ return less_ajaxx('/myfunds/' + myfund_id + '/myfundlogs/' + id + '/edit' + format + '', verb, params, options);}
function tb_myfund_myfundlog_path(myfund_id, id, format, verb){ return '/myfunds/' + myfund_id + '/myfundlogs/' + id + '/tb' + format + '';}
function tb_myfund_myfundlog_ajax(myfund_id, id, format, verb, params, options){ return less_ajax('/myfunds/' + myfund_id + '/myfundlogs/' + id + '/tb' + format + '', verb, params, options);}
function tb_myfund_myfundlog_ajaxx(myfund_id, id, format, verb, params, options){ return less_ajaxx('/myfunds/' + myfund_id + '/myfundlogs/' + id + '/tb' + format + '', verb, params, options);}
function bonus_re_myfund_myfundlog_path(myfund_id, id, format, verb){ return '/myfunds/' + myfund_id + '/myfundlogs/' + id + '/bonus_re' + format + '';}
function bonus_re_myfund_myfundlog_ajax(myfund_id, id, format, verb, params, options){ return less_ajax('/myfunds/' + myfund_id + '/myfundlogs/' + id + '/bonus_re' + format + '', verb, params, options);}
function bonus_re_myfund_myfundlog_ajaxx(myfund_id, id, format, verb, params, options){ return less_ajaxx('/myfunds/' + myfund_id + '/myfundlogs/' + id + '/bonus_re' + format + '', verb, params, options);}
function chai_fen_myfund_myfundlog_path(myfund_id, id, format, verb){ return '/myfunds/' + myfund_id + '/myfundlogs/' + id + '/chai_fen' + format + '';}
function chai_fen_myfund_myfundlog_ajax(myfund_id, id, format, verb, params, options){ return less_ajax('/myfunds/' + myfund_id + '/myfundlogs/' + id + '/chai_fen' + format + '', verb, params, options);}
function chai_fen_myfund_myfundlog_ajaxx(myfund_id, id, format, verb, params, options){ return less_ajaxx('/myfunds/' + myfund_id + '/myfundlogs/' + id + '/chai_fen' + format + '', verb, params, options);}
function bonus_myfund_myfundlog_path(myfund_id, id, format, verb){ return '/myfunds/' + myfund_id + '/myfundlogs/' + id + '/bonus' + format + '';}
function bonus_myfund_myfundlog_ajax(myfund_id, id, format, verb, params, options){ return less_ajax('/myfunds/' + myfund_id + '/myfundlogs/' + id + '/bonus' + format + '', verb, params, options);}
function bonus_myfund_myfundlog_ajaxx(myfund_id, id, format, verb, params, options){ return less_ajaxx('/myfunds/' + myfund_id + '/myfundlogs/' + id + '/bonus' + format + '', verb, params, options);}
function plus_myfund_myfundlog_path(myfund_id, id, format, verb){ return '/myfunds/' + myfund_id + '/myfundlogs/' + id + '/plus' + format + '';}
function plus_myfund_myfundlog_ajax(myfund_id, id, format, verb, params, options){ return less_ajax('/myfunds/' + myfund_id + '/myfundlogs/' + id + '/plus' + format + '', verb, params, options);}
function plus_myfund_myfundlog_ajaxx(myfund_id, id, format, verb, params, options){ return less_ajaxx('/myfunds/' + myfund_id + '/myfundlogs/' + id + '/plus' + format + '', verb, params, options);}
function myfund_myfundlog_path(myfund_id, id, format, verb){ return '/myfunds/' + myfund_id + '/myfundlogs/' + id + '' + format + '';}
function myfund_myfundlog_ajax(myfund_id, id, format, verb, params, options){ return less_ajax('/myfunds/' + myfund_id + '/myfundlogs/' + id + '' + format + '', verb, params, options);}
function myfund_myfundlog_ajaxx(myfund_id, id, format, verb, params, options){ return less_ajaxx('/myfunds/' + myfund_id + '/myfundlogs/' + id + '' + format + '', verb, params, options);}
function masterships_path(format, verb){ return '/masterships' + format + '';}
function masterships_ajax(format, verb, params, options){ return less_ajax('/masterships' + format + '', verb, params, options);}
function masterships_ajaxx(format, verb, params, options){ return less_ajaxx('/masterships' + format + '', verb, params, options);}
function new_mastership_path(format, verb){ return '/masterships/new' + format + '';}
function new_mastership_ajax(format, verb, params, options){ return less_ajax('/masterships/new' + format + '', verb, params, options);}
function new_mastership_ajaxx(format, verb, params, options){ return less_ajaxx('/masterships/new' + format + '', verb, params, options);}
function edit_mastership_path(id, format, verb){ return '/masterships/' + id + '/edit' + format + '';}
function edit_mastership_ajax(id, format, verb, params, options){ return less_ajax('/masterships/' + id + '/edit' + format + '', verb, params, options);}
function edit_mastership_ajaxx(id, format, verb, params, options){ return less_ajaxx('/masterships/' + id + '/edit' + format + '', verb, params, options);}
function mastership_path(id, format, verb){ return '/masterships/' + id + '' + format + '';}
function mastership_ajax(id, format, verb, params, options){ return less_ajax('/masterships/' + id + '' + format + '', verb, params, options);}
function mastership_ajaxx(id, format, verb, params, options){ return less_ajaxx('/masterships/' + id + '' + format + '', verb, params, options);}
function companies_path(format, verb){ return '/companies' + format + '';}
function companies_ajax(format, verb, params, options){ return less_ajax('/companies' + format + '', verb, params, options);}
function companies_ajaxx(format, verb, params, options){ return less_ajaxx('/companies' + format + '', verb, params, options);}
function new_company_path(format, verb){ return '/companies/new' + format + '';}
function new_company_ajax(format, verb, params, options){ return less_ajax('/companies/new' + format + '', verb, params, options);}
function new_company_ajaxx(format, verb, params, options){ return less_ajaxx('/companies/new' + format + '', verb, params, options);}
function edit_company_path(id, format, verb){ return '/companies/' + id + '/edit' + format + '';}
function edit_company_ajax(id, format, verb, params, options){ return less_ajax('/companies/' + id + '/edit' + format + '', verb, params, options);}
function edit_company_ajaxx(id, format, verb, params, options){ return less_ajaxx('/companies/' + id + '/edit' + format + '', verb, params, options);}
function company_path(id, format, verb){ return '/companies/' + id + '' + format + '';}
function company_ajax(id, format, verb, params, options){ return less_ajax('/companies/' + id + '' + format + '', verb, params, options);}
function company_ajaxx(id, format, verb, params, options){ return less_ajaxx('/companies/' + id + '' + format + '', verb, params, options);}
function fund_chart_path(id, verb){ return '/funds/chart/' + id + '';}
function fund_chart_ajax(id, verb, params, options){ return less_ajax('/funds/chart/' + id + '', verb, params, options);}
function fund_chart_ajaxx(id, verb, params, options){ return less_ajaxx('/funds/chart/' + id + '', verb, params, options);}
function funds_path(format, verb){ return '/funds' + format + '';}
function funds_ajax(format, verb, params, options){ return less_ajax('/funds' + format + '', verb, params, options);}
function funds_ajaxx(format, verb, params, options){ return less_ajaxx('/funds' + format + '', verb, params, options);}
function new_fund_path(format, verb){ return '/funds/new' + format + '';}
function new_fund_ajax(format, verb, params, options){ return less_ajax('/funds/new' + format + '', verb, params, options);}
function new_fund_ajaxx(format, verb, params, options){ return less_ajaxx('/funds/new' + format + '', verb, params, options);}
function history_fund_path(id, format, verb){ return '/funds/' + id + '/history' + format + '';}
function history_fund_ajax(id, format, verb, params, options){ return less_ajax('/funds/' + id + '/history' + format + '', verb, params, options);}
function history_fund_ajaxx(id, format, verb, params, options){ return less_ajaxx('/funds/' + id + '/history' + format + '', verb, params, options);}
function edit_fund_path(id, format, verb){ return '/funds/' + id + '/edit' + format + '';}
function edit_fund_ajax(id, format, verb, params, options){ return less_ajax('/funds/' + id + '/edit' + format + '', verb, params, options);}
function edit_fund_ajaxx(id, format, verb, params, options){ return less_ajaxx('/funds/' + id + '/edit' + format + '', verb, params, options);}
function fund_path(id, format, verb){ return '/funds/' + id + '' + format + '';}
function fund_ajax(id, format, verb, params, options){ return less_ajax('/funds/' + id + '' + format + '', verb, params, options);}
function fund_ajaxx(id, format, verb, params, options){ return less_ajaxx('/funds/' + id + '' + format + '', verb, params, options);}
function fund_stocks_path(fund_id, format, verb){ return '/funds/' + fund_id + '/stocks' + format + '';}
function fund_stocks_ajax(fund_id, format, verb, params, options){ return less_ajax('/funds/' + fund_id + '/stocks' + format + '', verb, params, options);}
function fund_stocks_ajaxx(fund_id, format, verb, params, options){ return less_ajaxx('/funds/' + fund_id + '/stocks' + format + '', verb, params, options);}
function new_fund_stock_path(fund_id, format, verb){ return '/funds/' + fund_id + '/stocks/new' + format + '';}
function new_fund_stock_ajax(fund_id, format, verb, params, options){ return less_ajax('/funds/' + fund_id + '/stocks/new' + format + '', verb, params, options);}
function new_fund_stock_ajaxx(fund_id, format, verb, params, options){ return less_ajaxx('/funds/' + fund_id + '/stocks/new' + format + '', verb, params, options);}
function edit_fund_stock_path(fund_id, id, format, verb){ return '/funds/' + fund_id + '/stocks/' + id + '/edit' + format + '';}
function edit_fund_stock_ajax(fund_id, id, format, verb, params, options){ return less_ajax('/funds/' + fund_id + '/stocks/' + id + '/edit' + format + '', verb, params, options);}
function edit_fund_stock_ajaxx(fund_id, id, format, verb, params, options){ return less_ajaxx('/funds/' + fund_id + '/stocks/' + id + '/edit' + format + '', verb, params, options);}
function fund_stock_path(fund_id, id, format, verb){ return '/funds/' + fund_id + '/stocks/' + id + '' + format + '';}
function fund_stock_ajax(fund_id, id, format, verb, params, options){ return less_ajax('/funds/' + fund_id + '/stocks/' + id + '' + format + '', verb, params, options);}
function fund_stock_ajaxx(fund_id, id, format, verb, params, options){ return less_ajaxx('/funds/' + fund_id + '/stocks/' + id + '' + format + '', verb, params, options);}
function friends_path(format, verb){ return '/friends' + format + '';}
function friends_ajax(format, verb, params, options){ return less_ajax('/friends' + format + '', verb, params, options);}
function friends_ajaxx(format, verb, params, options){ return less_ajaxx('/friends' + format + '', verb, params, options);}
function new_friend_path(format, verb){ return '/friends/new' + format + '';}
function new_friend_ajax(format, verb, params, options){ return less_ajax('/friends/new' + format + '', verb, params, options);}
function new_friend_ajaxx(format, verb, params, options){ return less_ajaxx('/friends/new' + format + '', verb, params, options);}
function del_friend_path(id, format, verb){ return '/friends/' + id + '/del' + format + '';}
function del_friend_ajax(id, format, verb, params, options){ return less_ajax('/friends/' + id + '/del' + format + '', verb, params, options);}
function del_friend_ajaxx(id, format, verb, params, options){ return less_ajaxx('/friends/' + id + '/del' + format + '', verb, params, options);}
function edit_friend_path(id, format, verb){ return '/friends/' + id + '/edit' + format + '';}
function edit_friend_ajax(id, format, verb, params, options){ return less_ajax('/friends/' + id + '/edit' + format + '', verb, params, options);}
function edit_friend_ajaxx(id, format, verb, params, options){ return less_ajaxx('/friends/' + id + '/edit' + format + '', verb, params, options);}
function friend_path(id, format, verb){ return '/friends/' + id + '' + format + '';}
function friend_ajax(id, format, verb, params, options){ return less_ajax('/friends/' + id + '' + format + '', verb, params, options);}
function friend_ajaxx(id, format, verb, params, options){ return less_ajaxx('/friends/' + id + '' + format + '', verb, params, options);}
function about_path(verb){ return '/about';}
function about_ajax(verb, params, options){ return less_ajax('/about', verb, params, options);}
function about_ajaxx(verb, params, options){ return less_ajaxx('/about', verb, params, options);}
function realtime_path(verb){ return '/realtime';}
function realtime_ajax(verb, params, options){ return less_ajax('/realtime', verb, params, options);}
function realtime_ajaxx(verb, params, options){ return less_ajaxx('/realtime', verb, params, options);}
function ss_funds_path(format, verb){ return '/funds/ss' + format + '';}
function ss_funds_ajax(format, verb, params, options){ return less_ajax('/funds/ss' + format + '', verb, params, options);}
function ss_funds_ajaxx(format, verb, params, options){ return less_ajaxx('/funds/ss' + format + '', verb, params, options);}
function toggle_status_fund_path(id, format, verb){ return '/funds/' + id + '/toggle_status' + format + '';}
function toggle_status_fund_ajax(id, format, verb, params, options){ return less_ajax('/funds/' + id + '/toggle_status' + format + '', verb, params, options);}
function toggle_status_fund_ajaxx(id, format, verb, params, options){ return less_ajaxx('/funds/' + id + '/toggle_status' + format + '', verb, params, options);}
function auto_complete_for_fund_id_fund_path(id, format, verb){ return '/funds/' + id + '/auto_complete_for_fund_id' + format + '';}
function auto_complete_for_fund_id_fund_ajax(id, format, verb, params, options){ return less_ajax('/funds/' + id + '/auto_complete_for_fund_id' + format + '', verb, params, options);}
function auto_complete_for_fund_id_fund_ajaxx(id, format, verb, params, options){ return less_ajaxx('/funds/' + id + '/auto_complete_for_fund_id' + format + '', verb, params, options);}
function index_path(verb){ return '';}
function index_ajax(verb, params, options){ return less_ajax('', verb, params, options);}
function index_ajaxx(verb, params, options){ return less_ajaxx('', verb, params, options);}
function home_path(verb){ return '/forums';}
function home_ajax(verb, params, options){ return less_ajax('/forums', verb, params, options);}
function home_ajaxx(verb, params, options){ return less_ajaxx('/forums', verb, params, options);}
function new_session_path(format, verb){ return '/session/new' + format + '';}
function new_session_ajax(format, verb, params, options){ return less_ajax('/session/new' + format + '', verb, params, options);}
function new_session_ajaxx(format, verb, params, options){ return less_ajaxx('/session/new' + format + '', verb, params, options);}
function edit_session_path(format, verb){ return '/session/edit' + format + '';}
function edit_session_ajax(format, verb, params, options){ return less_ajax('/session/edit' + format + '', verb, params, options);}
function edit_session_ajaxx(format, verb, params, options){ return less_ajaxx('/session/edit' + format + '', verb, params, options);}
function session_path(format, verb){ return '/session' + format + '';}
function session_ajax(format, verb, params, options){ return less_ajax('/session' + format + '', verb, params, options);}
function session_ajaxx(format, verb, params, options){ return less_ajaxx('/session' + format + '', verb, params, options);}
function validate_login_users_path(format, verb){ return '/users/validate_login' + format + '';}
function validate_login_users_ajax(format, verb, params, options){ return less_ajax('/users/validate_login' + format + '', verb, params, options);}
function validate_login_users_ajaxx(format, verb, params, options){ return less_ajaxx('/users/validate_login' + format + '', verb, params, options);}
function validate_email_users_path(format, verb){ return '/users/validate_email' + format + '';}
function validate_email_users_ajax(format, verb, params, options){ return less_ajax('/users/validate_email' + format + '', verb, params, options);}
function validate_email_users_ajaxx(format, verb, params, options){ return less_ajaxx('/users/validate_email' + format + '', verb, params, options);}
function validate_display_name_users_path(format, verb){ return '/users/validate_display_name' + format + '';}
function validate_display_name_users_ajax(format, verb, params, options){ return less_ajax('/users/validate_display_name' + format + '', verb, params, options);}
function validate_display_name_users_ajaxx(format, verb, params, options){ return less_ajaxx('/users/validate_display_name' + format + '', verb, params, options);}
function users_path(format, verb){ return '/users' + format + '';}
function users_ajax(format, verb, params, options){ return less_ajax('/users' + format + '', verb, params, options);}
function users_ajaxx(format, verb, params, options){ return less_ajaxx('/users' + format + '', verb, params, options);}
function new_user_path(format, verb){ return '/users/new' + format + '';}
function new_user_ajax(format, verb, params, options){ return less_ajax('/users/new' + format + '', verb, params, options);}
function new_user_ajaxx(format, verb, params, options){ return less_ajaxx('/users/new' + format + '', verb, params, options);}
function admin_user_path(id, format, verb){ return '/users/' + id + '/admin' + format + '';}
function admin_user_ajax(id, format, verb, params, options){ return less_ajax('/users/' + id + '/admin' + format + '', verb, params, options);}
function admin_user_ajaxx(id, format, verb, params, options){ return less_ajaxx('/users/' + id + '/admin' + format + '', verb, params, options);}
function edit_user_path(id, format, verb){ return '/users/' + id + '/edit' + format + '';}
function edit_user_ajax(id, format, verb, params, options){ return less_ajax('/users/' + id + '/edit' + format + '', verb, params, options);}
function edit_user_ajaxx(id, format, verb, params, options){ return less_ajaxx('/users/' + id + '/edit' + format + '', verb, params, options);}
function chlogo_user_path(id, format, verb){ return '/users/' + id + '/chlogo' + format + '';}
function chlogo_user_ajax(id, format, verb, params, options){ return less_ajax('/users/' + id + '/chlogo' + format + '', verb, params, options);}
function chlogo_user_ajaxx(id, format, verb, params, options){ return less_ajaxx('/users/' + id + '/chlogo' + format + '', verb, params, options);}
function user_path(id, format, verb){ return '/users/' + id + '' + format + '';}
function user_ajax(id, format, verb, params, options){ return less_ajax('/users/' + id + '' + format + '', verb, params, options);}
function user_ajaxx(id, format, verb, params, options){ return less_ajaxx('/users/' + id + '' + format + '', verb, params, options);}
function user_moderators_path(user_id, format, verb){ return '/users/' + user_id + '/moderators' + format + '';}
function user_moderators_ajax(user_id, format, verb, params, options){ return less_ajax('/users/' + user_id + '/moderators' + format + '', verb, params, options);}
function user_moderators_ajaxx(user_id, format, verb, params, options){ return less_ajaxx('/users/' + user_id + '/moderators' + format + '', verb, params, options);}
function new_user_moderator_path(user_id, format, verb){ return '/users/' + user_id + '/moderators/new' + format + '';}
function new_user_moderator_ajax(user_id, format, verb, params, options){ return less_ajax('/users/' + user_id + '/moderators/new' + format + '', verb, params, options);}
function new_user_moderator_ajaxx(user_id, format, verb, params, options){ return less_ajaxx('/users/' + user_id + '/moderators/new' + format + '', verb, params, options);}
function edit_user_moderator_path(user_id, id, format, verb){ return '/users/' + user_id + '/moderators/' + id + '/edit' + format + '';}
function edit_user_moderator_ajax(user_id, id, format, verb, params, options){ return less_ajax('/users/' + user_id + '/moderators/' + id + '/edit' + format + '', verb, params, options);}
function edit_user_moderator_ajaxx(user_id, id, format, verb, params, options){ return less_ajaxx('/users/' + user_id + '/moderators/' + id + '/edit' + format + '', verb, params, options);}
function user_moderator_path(user_id, id, format, verb){ return '/users/' + user_id + '/moderators/' + id + '' + format + '';}
function user_moderator_ajax(user_id, id, format, verb, params, options){ return less_ajax('/users/' + user_id + '/moderators/' + id + '' + format + '', verb, params, options);}
function user_moderator_ajaxx(user_id, id, format, verb, params, options){ return less_ajaxx('/users/' + user_id + '/moderators/' + id + '' + format + '', verb, params, options);}
function search_forums_path(format, verb){ return '/forums/search' + format + '';}
function search_forums_ajax(format, verb, params, options){ return less_ajax('/forums/search' + format + '', verb, params, options);}
function search_forums_ajaxx(format, verb, params, options){ return less_ajaxx('/forums/search' + format + '', verb, params, options);}
function forum_topics_path(forum_id, format, verb){ return '/forums/' + forum_id + '/topics' + format + '';}
function forum_topics_ajax(forum_id, format, verb, params, options){ return less_ajax('/forums/' + forum_id + '/topics' + format + '', verb, params, options);}
function forum_topics_ajaxx(forum_id, format, verb, params, options){ return less_ajaxx('/forums/' + forum_id + '/topics' + format + '', verb, params, options);}
function new_forum_topic_path(forum_id, format, verb){ return '/forums/' + forum_id + '/topics/new' + format + '';}
function new_forum_topic_ajax(forum_id, format, verb, params, options){ return less_ajax('/forums/' + forum_id + '/topics/new' + format + '', verb, params, options);}
function new_forum_topic_ajaxx(forum_id, format, verb, params, options){ return less_ajaxx('/forums/' + forum_id + '/topics/new' + format + '', verb, params, options);}
function edit_forum_topic_path(forum_id, id, format, verb){ return '/forums/' + forum_id + '/topics/' + id + '/edit' + format + '';}
function edit_forum_topic_ajax(forum_id, id, format, verb, params, options){ return less_ajax('/forums/' + forum_id + '/topics/' + id + '/edit' + format + '', verb, params, options);}
function edit_forum_topic_ajaxx(forum_id, id, format, verb, params, options){ return less_ajaxx('/forums/' + forum_id + '/topics/' + id + '/edit' + format + '', verb, params, options);}
function forum_topic_path(forum_id, id, format, verb){ return '/forums/' + forum_id + '/topics/' + id + '' + format + '';}
function forum_topic_ajax(forum_id, id, format, verb, params, options){ return less_ajax('/forums/' + forum_id + '/topics/' + id + '' + format + '', verb, params, options);}
function forum_topic_ajaxx(forum_id, id, format, verb, params, options){ return less_ajaxx('/forums/' + forum_id + '/topics/' + id + '' + format + '', verb, params, options);}
function forum_topic_posts_path(forum_id, topic_id, format, verb){ return '/forums/' + forum_id + '/topics/' + topic_id + '/posts' + format + '';}
function forum_topic_posts_ajax(forum_id, topic_id, format, verb, params, options){ return less_ajax('/forums/' + forum_id + '/topics/' + topic_id + '/posts' + format + '', verb, params, options);}
function forum_topic_posts_ajaxx(forum_id, topic_id, format, verb, params, options){ return less_ajaxx('/forums/' + forum_id + '/topics/' + topic_id + '/posts' + format + '', verb, params, options);}
function new_forum_topic_post_path(forum_id, topic_id, format, verb){ return '/forums/' + forum_id + '/topics/' + topic_id + '/posts/new' + format + '';}
function new_forum_topic_post_ajax(forum_id, topic_id, format, verb, params, options){ return less_ajax('/forums/' + forum_id + '/topics/' + topic_id + '/posts/new' + format + '', verb, params, options);}
function new_forum_topic_post_ajaxx(forum_id, topic_id, format, verb, params, options){ return less_ajaxx('/forums/' + forum_id + '/topics/' + topic_id + '/posts/new' + format + '', verb, params, options);}
function edit_forum_topic_post_path(forum_id, topic_id, id, format, verb){ return '/forums/' + forum_id + '/topics/' + topic_id + '/posts/' + id + '/edit' + format + '';}
function edit_forum_topic_post_ajax(forum_id, topic_id, id, format, verb, params, options){ return less_ajax('/forums/' + forum_id + '/topics/' + topic_id + '/posts/' + id + '/edit' + format + '', verb, params, options);}
function edit_forum_topic_post_ajaxx(forum_id, topic_id, id, format, verb, params, options){ return less_ajaxx('/forums/' + forum_id + '/topics/' + topic_id + '/posts/' + id + '/edit' + format + '', verb, params, options);}
function forum_topic_post_path(forum_id, topic_id, id, format, verb){ return '/forums/' + forum_id + '/topics/' + topic_id + '/posts/' + id + '' + format + '';}
function forum_topic_post_ajax(forum_id, topic_id, id, format, verb, params, options){ return less_ajax('/forums/' + forum_id + '/topics/' + topic_id + '/posts/' + id + '' + format + '', verb, params, options);}
function forum_topic_post_ajaxx(forum_id, topic_id, id, format, verb, params, options){ return less_ajaxx('/forums/' + forum_id + '/topics/' + topic_id + '/posts/' + id + '' + format + '', verb, params, options);}
function new_forum_topic_monitorship_path(forum_id, topic_id, format, verb){ return '/forums/' + forum_id + '/topics/' + topic_id + '/monitorship/new' + format + '';}
function new_forum_topic_monitorship_ajax(forum_id, topic_id, format, verb, params, options){ return less_ajax('/forums/' + forum_id + '/topics/' + topic_id + '/monitorship/new' + format + '', verb, params, options);}
function new_forum_topic_monitorship_ajaxx(forum_id, topic_id, format, verb, params, options){ return less_ajaxx('/forums/' + forum_id + '/topics/' + topic_id + '/monitorship/new' + format + '', verb, params, options);}
function edit_forum_topic_monitorship_path(forum_id, topic_id, format, verb){ return '/forums/' + forum_id + '/topics/' + topic_id + '/monitorship/edit' + format + '';}
function edit_forum_topic_monitorship_ajax(forum_id, topic_id, format, verb, params, options){ return less_ajax('/forums/' + forum_id + '/topics/' + topic_id + '/monitorship/edit' + format + '', verb, params, options);}
function edit_forum_topic_monitorship_ajaxx(forum_id, topic_id, format, verb, params, options){ return less_ajaxx('/forums/' + forum_id + '/topics/' + topic_id + '/monitorship/edit' + format + '', verb, params, options);}
function forum_topic_monitorship_path(forum_id, topic_id, format, verb){ return '/forums/' + forum_id + '/topics/' + topic_id + '/monitorship' + format + '';}
function forum_topic_monitorship_ajax(forum_id, topic_id, format, verb, params, options){ return less_ajax('/forums/' + forum_id + '/topics/' + topic_id + '/monitorship' + format + '', verb, params, options);}
function forum_topic_monitorship_ajaxx(forum_id, topic_id, format, verb, params, options){ return less_ajaxx('/forums/' + forum_id + '/topics/' + topic_id + '/monitorship' + format + '', verb, params, options);}
function search_all_posts_path(format, verb){ return '/posts/search' + format + '';}
function search_all_posts_ajax(format, verb, params, options){ return less_ajax('/posts/search' + format + '', verb, params, options);}
function search_all_posts_ajaxx(format, verb, params, options){ return less_ajaxx('/posts/search' + format + '', verb, params, options);}
function all_posts_path(format, verb){ return '/posts' + format + '';}
function all_posts_ajax(format, verb, params, options){ return less_ajax('/posts' + format + '', verb, params, options);}
function all_posts_ajaxx(format, verb, params, options){ return less_ajaxx('/posts' + format + '', verb, params, options);}
function new_all_post_path(format, verb){ return '/posts/new' + format + '';}
function new_all_post_ajax(format, verb, params, options){ return less_ajax('/posts/new' + format + '', verb, params, options);}
function new_all_post_ajaxx(format, verb, params, options){ return less_ajaxx('/posts/new' + format + '', verb, params, options);}
function edit_all_post_path(id, format, verb){ return '/posts/' + id + '/edit' + format + '';}
function edit_all_post_ajax(id, format, verb, params, options){ return less_ajax('/posts/' + id + '/edit' + format + '', verb, params, options);}
function edit_all_post_ajaxx(id, format, verb, params, options){ return less_ajaxx('/posts/' + id + '/edit' + format + '', verb, params, options);}
function all_post_path(id, format, verb){ return '/posts/' + id + '' + format + '';}
function all_post_ajax(id, format, verb, params, options){ return less_ajax('/posts/' + id + '' + format + '', verb, params, options);}
function all_post_ajaxx(id, format, verb, params, options){ return less_ajaxx('/posts/' + id + '' + format + '', verb, params, options);}
function user_posts_path(user_id, format, verb){ return '/users/' + user_id + '/posts' + format + '';}
function user_posts_ajax(user_id, format, verb, params, options){ return less_ajax('/users/' + user_id + '/posts' + format + '', verb, params, options);}
function user_posts_ajaxx(user_id, format, verb, params, options){ return less_ajaxx('/users/' + user_id + '/posts' + format + '', verb, params, options);}
function new_user_post_path(user_id, format, verb){ return '/users/' + user_id + '/posts/new' + format + '';}
function new_user_post_ajax(user_id, format, verb, params, options){ return less_ajax('/users/' + user_id + '/posts/new' + format + '', verb, params, options);}
function new_user_post_ajaxx(user_id, format, verb, params, options){ return less_ajaxx('/users/' + user_id + '/posts/new' + format + '', verb, params, options);}
function edit_user_post_path(user_id, id, format, verb){ return '/users/' + user_id + '/posts/' + id + '/edit' + format + '';}
function edit_user_post_ajax(user_id, id, format, verb, params, options){ return less_ajax('/users/' + user_id + '/posts/' + id + '/edit' + format + '', verb, params, options);}
function edit_user_post_ajaxx(user_id, id, format, verb, params, options){ return less_ajaxx('/users/' + user_id + '/posts/' + id + '/edit' + format + '', verb, params, options);}
function user_post_path(user_id, id, format, verb){ return '/users/' + user_id + '/posts/' + id + '' + format + '';}
function user_post_ajax(user_id, id, format, verb, params, options){ return less_ajax('/users/' + user_id + '/posts/' + id + '' + format + '', verb, params, options);}
function user_post_ajaxx(user_id, id, format, verb, params, options){ return less_ajaxx('/users/' + user_id + '/posts/' + id + '' + format + '', verb, params, options);}
function forum_posts_path(forum_id, format, verb){ return '/forums/' + forum_id + '/posts' + format + '';}
function forum_posts_ajax(forum_id, format, verb, params, options){ return less_ajax('/forums/' + forum_id + '/posts' + format + '', verb, params, options);}
function forum_posts_ajaxx(forum_id, format, verb, params, options){ return less_ajaxx('/forums/' + forum_id + '/posts' + format + '', verb, params, options);}
function new_forum_post_path(forum_id, format, verb){ return '/forums/' + forum_id + '/posts/new' + format + '';}
function new_forum_post_ajax(forum_id, format, verb, params, options){ return less_ajax('/forums/' + forum_id + '/posts/new' + format + '', verb, params, options);}
function new_forum_post_ajaxx(forum_id, format, verb, params, options){ return less_ajaxx('/forums/' + forum_id + '/posts/new' + format + '', verb, params, options);}
function edit_forum_post_path(forum_id, id, format, verb){ return '/forums/' + forum_id + '/posts/' + id + '/edit' + format + '';}
function edit_forum_post_ajax(forum_id, id, format, verb, params, options){ return less_ajax('/forums/' + forum_id + '/posts/' + id + '/edit' + format + '', verb, params, options);}
function edit_forum_post_ajaxx(forum_id, id, format, verb, params, options){ return less_ajaxx('/forums/' + forum_id + '/posts/' + id + '/edit' + format + '', verb, params, options);}
function forum_post_path(forum_id, id, format, verb){ return '/forums/' + forum_id + '/posts/' + id + '' + format + '';}
function forum_post_ajax(forum_id, id, format, verb, params, options){ return less_ajax('/forums/' + forum_id + '/posts/' + id + '' + format + '', verb, params, options);}
function forum_post_ajaxx(forum_id, id, format, verb, params, options){ return less_ajaxx('/forums/' + forum_id + '/posts/' + id + '' + format + '', verb, params, options);}
function signup_path(verb){ return '/signup';}
function signup_ajax(verb, params, options){ return less_ajax('/signup', verb, params, options);}
function signup_ajaxx(verb, params, options){ return less_ajaxx('/signup', verb, params, options);}
function settings_path(verb){ return '/settings';}
function settings_ajax(verb, params, options){ return less_ajax('/settings', verb, params, options);}
function settings_ajaxx(verb, params, options){ return less_ajaxx('/settings', verb, params, options);}
function activate_path(key, verb){ return '/activate/' + key + '';}
function activate_ajax(key, verb, params, options){ return less_ajax('/activate/' + key + '', verb, params, options);}
function activate_ajaxx(key, verb, params, options){ return less_ajaxx('/activate/' + key + '', verb, params, options);}
function login_path(verb){ return '/login';}
function login_ajax(verb, params, options){ return less_ajax('/login', verb, params, options);}
function login_ajaxx(verb, params, options){ return less_ajaxx('/login', verb, params, options);}
function logout_path(verb){ return '/logout';}
function logout_ajax(verb, params, options){ return less_ajax('/logout', verb, params, options);}
function logout_ajaxx(verb, params, options){ return less_ajaxx('/logout', verb, params, options);}
function formatted_monitored_posts_path(user_id, format, verb){ return '/users/' + user_id + '/monitored' + format + '';}
function formatted_monitored_posts_ajax(user_id, format, verb, params, options){ return less_ajax('/users/' + user_id + '/monitored' + format + '', verb, params, options);}
function formatted_monitored_posts_ajaxx(user_id, format, verb, params, options){ return less_ajaxx('/users/' + user_id + '/monitored' + format + '', verb, params, options);}
function monitored_posts_path(user_id, verb){ return '/users/' + user_id + '/monitored';}
function monitored_posts_ajax(user_id, verb, params, options){ return less_ajax('/users/' + user_id + '/monitored', verb, params, options);}
function monitored_posts_ajaxx(user_id, verb, params, options){ return less_ajaxx('/users/' + user_id + '/monitored', verb, params, options);}
