const mapping = {
  '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
  'Locket': ['Gold']
};

var ua=$request.headers["User-Agent"]||$request.headers["user-agent"],obj=JSON.parse($response.body);obj.Attention="PWR BY: Hasumiki Yuna (YUNAGRP)";var locket02={is_sandbox:!1,ownership_type:"PURCHASED",billing_issues_detected_at:null,period_type:"normal",expires_date:"2088-12-03T03:12:20Z",grace_period_expires_date:null,unsubscribe_detected_at:null,original_purchase_date:"2024-10-13T03:12:20Z",purchase_date:"2024-10-13T03:12:20Z",store:"app_store"},locket01={grace_period_expires_date:null,purchase_date:"2024-10-13T13:12:20Z",product_identifier:"com.locket02.premium.yearly",expires_date:"2088-12-03T03:12:20Z"};const match=Object.keys(mapping).find(e=>ua.includes(e));if(match){let[e,s]=mapping[match];s?(locket01.product_identifier=s,obj.subscriber.subscriptions[s]=locket02):obj.subscriber.subscriptions["com.locket02.premium.yearly"]=locket02,obj.subscriber.entitlements[e]=locket01}else obj.subscriber.subscriptions["com.locket02.premium.yearly"]=locket02,obj.subscriber.entitlements.pro=locket01;$done({body:JSON.stringify(obj)});
