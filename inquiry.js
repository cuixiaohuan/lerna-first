const inquirer = require('inquirer');
const { spawn } = require('child_process')

const promptList = [
  {
    type: 'checkbox', 
    name: 'project',
    message: '请选择构建工程:',
    choices: ['p4', 'p5', 'p6', 'p7', 'p8'],
    validate: function (val) {
      return !val.length ? '请至少选择一项工程' : true; 
    }
  }
];

inquirer.prompt(promptList).then( result => {
  let { project } = result
  let params = ['exec', 'yarn', 'run', `dev`, '--scope', 'base']

  project.forEach(item => {
    params.push('--scope')
    params.push(item)
  })

  let ls = spawn('lerna', [...params])

  // 正常输出
  ls.stdout.on('data', function (data) {
    console.log(data.toString());
  });
  // 错误输出
  ls.stderr.on('data', function (data) {
    console.log(data.toString());
  });
  // 退出输出
  ls.on('exit', function (code) {
    console.log('child process exited with code ' + code.toString());
  });
  
})