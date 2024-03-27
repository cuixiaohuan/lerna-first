
function component() {
    const element = document.createElement('div');
  
    // 执行这一行需要引入 lodash（目前通过 script 脚本引入）
    element.innerHTML = _.join(['这是P1的页面', 'Hello', "World"], `' ￥ '`);
  
    element.style.color = 'green';


    return element;
  }

  
  
  document.body.appendChild(component());