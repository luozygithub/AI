<template>
  <div class="img-ai">
    <div class="input-box">
      <vs-input v-model="inputValue" @keyup.enter="getRes" placeholder="输入内容" />
      <vs-button
          @click="getRes"
      >
        发送
      </vs-button>
    </div>
    <div class="res-box">
      <img class="res-img" :src="img.url" alt="">
    </div>

    <vs-dialog loading v-model="isLoading">
      <template #header>
        <h4 class="not-margin">
          正在等待AI绘画
        </h4>
      </template>


    </vs-dialog>
  </div>
</template>

<script>
const {Configuration, OpenAIApi} = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

export default {
  name: "img-ai",
  data() {
    return {
      inputValue:"",
      img:[],
      isLoading:false
    }
  },
  methods: {
    async getRes() {
      this.isLoading = true
      const response = await   openai.createImage({
        prompt: this.inputValue,
        n: 1,
        size: "1024x1024",
      });

      this.img =response.data.data[0]
      this.isLoading =false
      this.inputValue=""
    }
  }
}
</script>

<style lang="scss" scoped>
.img-ai{
  width: 100vw;
  .input-box{
    display: flex;
    justify-content: center;
    margin:  2em auto;
  }
  .res-box{
    padding: 0 10vw;
    .res-img{
      width: 100%;
    }
  }
}
</style>
