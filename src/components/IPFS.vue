<template>
<el-container>
<el-container>
  <el-header>
    <span class="bilibili-text">DApp开发</span>
    <span class="tarot-text">基础模板</span>
    <span class="account-text">登录账户</span>
  </el-header>
  <el-main>
    <div class="img-wrapper">
      <img class="img-panel" :src="src"/>
      <div class="txt-title">{{ipfsHash}}</div>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="uploadToIPFS">上传到服务器</el-button>
    </div>
  </el-main>
</el-container>
</el-container>
</template>

<script>
import { create } from 'ipfs-http-client'

export default {
  name: "IPFS",
  props: {
    msg: String,
  },
  data() {
    const ipfs = create('http://127.0.0.1:5001')

    return {
      src: '',
      fileList: [],
      ipfs: ipfs,
      buffer: null,
      ipfsHash: ''
    };
  },
  computed: {
  },
  methods: {
    handleChange(file, fileList) {
      this.fileList = fileList;
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    uploadImage() {
      if (this.fileList.length < 1) {
        this.$message.warning('请选择需要上传的文件')
      } else {
        const reader = new window.FileReader()
        console.log(this.fileList[0].raw)
        reader.readAsArrayBuffer(this.fileList[0].raw)
        reader.onloadend = () => {
          this.buffer = Buffer(reader.result)
          this.uploadToIPFS()
        }
      }
    },
    async uploadToIPFS() {
      console.log(this.ipfs)
      let result = await this.ipfs.add("hello word")
      console.log(result)
      this.src = `https://ipfs.infura.io/ipfs/${result.path}`
      this.ipfsHash = `${result.path}`;
    }
  },
  beforeMount() {
  },
};
</script>
