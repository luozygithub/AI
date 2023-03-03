<template>
  <div class="tradingview-widget-loading-script" >
    <div :id="widgetId" :style="{ height: widgetHeight + 'px' }"/>
<!--    <div class="tradingview-widget-copyright">-->
<!--      <a-->
<!--          href="https://www.tradingview.com/symbols/BTCUSDT/?exchange=BINANCE"-->
<!--          rel="noopener"-->
<!--          target="_blank"-->
<!--      >-->
<!--        <span class="blue-text">BTCUSDT chart</span>-->
<!--      </a>-->
<!--      by TradingView-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      widgetId: 'tradingview_8c9b3',
      widgetHeight: 500,
    };
  },
  mounted() {
    this.loadTradingViewScript();
  },
  methods: {
    loadTradingViewScript() {
      if (document.getElementById('tradingview-widget-loading-script')) {
        this.createWidget();
        return;
      }

      const script = document.createElement('script');
      script.id = 'tradingview-widget-loading-script';
      script.src = 'https://s3.tradingview.com/tv.js';
      script.type = 'text/javascript';
      script.onload = () => this.createWidget();

      document.head.appendChild(script);
    },
    createWidget() {
      if (document.getElementById(this.widgetId) && window.TradingView) {
        new window.TradingView.widget({
          autosize: true,
          symbol: 'BINANCE:BTCUSDT',
          interval: 'D',
          timezone: 'Etc/UTC',
          theme: 'light',
          style: '1',
          locale: 'en',
          toolbar_bg: '#f1f3f6',
          enable_publishing: false,
          container_id: this.widgetId,
        });
      }
    },
  },
};
</script>
<style lang="scss">
.tradingview-widget-loading-script{
  height: 100vh;
  .tradingview_8c9b3{
    height: 500px;
  }
}
</style>
