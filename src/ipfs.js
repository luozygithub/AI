const {create} = require('ipfs-http-client');
const ipfs = create({host: 'localhost', port: '5001', protocol: 'http'});

let User = {
    "name":"yyn",
    "age":23,
    "level":"test"
};
let buff = Buffer.from(JSON.stringify(User));
var hashStr = '';
//上传模型参数
ipfs.add(buff,async (err,result)=>{
    if(err) throw err;
    console.log(result);  //打印上传的信息
    hashStr = result[0].hash;  //保存hash值
    console.log(hashStr); //输出上传后所获得的hash值
});
