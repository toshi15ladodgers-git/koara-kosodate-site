// Google Analytics 4（gtag.js）読み込み
// CSPでインラインスクリプトを禁止しているため、外部ファイルとして読み込む。
// 測定IDはこの1か所だけで管理する。未設定（G-XXXXXXXXXX のまま）なら何も送信しない。
(function () {
  var GA_ID = 'G-26KQYFXRNN';
  if (!/^G-[A-Z0-9]+$/.test(GA_ID) || GA_ID === 'G-XXXXXXXXXX') return;

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID);
})();
