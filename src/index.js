
//  循环输出arguments
const loopArgs = (args, output) => {
  if (args && args.length > 0) {
    for (let msg of args) {
      output(msg);
    }
  }
};

/**
 * 日志方法
 */
const log = {
  print: function () {
    loopArgs(arguments, (msg) => {
      console.log(msg); // 白色 普通日志
    });
  },
  error: function () {
    loopArgs(arguments, (msg) => {
      console.log(`\x1B[31m${msg}\x1B[0m`); // 红色 错误提示
    });
  },
  success: function () {
    loopArgs(arguments, (msg) => {
      console.log(`\x1B[32m${msg}\x1B[0m`); // 绿色 成功提示
    });
  },
  warn: () => {
    loopArgs(arguments, (msg) => {
      console.log(`\x1B[33m${msg}\x1B[0m`); // 黄色 警告提醒
    });
  },
  info: () => {
    loopArgs(arguments, (msg) => {
      console.log(`\x1B[34m${msg}\x1B[0m`); // 蓝绿色 强调通知
    });
  },
};


export default log;