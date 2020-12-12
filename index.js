const nodemailer = require("nodemailer");
const { default: Axios } = require("axios");
const schedule = require("node-schedule");
//每天下午5点21分发送
// schedule.scheduleJob({ hour: 19, minute: 06 }, function () {
//   console.log("启动任务:" + new Date());
//   getHoneyedWords().then((res) => {
//     console.log(res.data);
//     sendMail(res.data);
//   });
// });

function getHoneyedWords() {
  var url = "https://chp.shadiao.app/api.php";
  //获取这个接口的信息
  return Axios.get(url);
}

// 发送邮件函数
async function sendMail(text) {
  var user = "18534799988@163.com";
  var pass = "IAVEGDPLRCJFEVON"; //qq邮箱授权码,如何获取授权码下面有讲
  var to = "541484540@qq.com";//对方的邮箱
  let transporter = nodemailer.createTransport({
    host: "smtp.163.com",
    port: 465,
    secure: true,
    auth: {
      user: user, // 用户账号
      pass: pass, //授权码,通过QQ获取
    },
  });
  let info = await transporter.sendMail({
    from: `董卓小蛮腰<${user}>`, // sender address
    to: `小仙女<${to}>`, // list of receivers
    subject: "碎碎念", // Subject line
    text: text, // plain text body
  });
  console.log("发送成功");
}
getHoneyedWords().then((res) => {
    console.log(res.data);
    sendMail(res.data);
  });
// npm init -y #初始化npm
// npm install nodemailer  安装邮件发送模块
// npm install node-schedule  node的定时模块