import "./index.scss";
// import Icon from "../assets/img.JPG";
// import data from "../assets/data.json";

// import print from "./print.js";

function component() {
    const element = document.createElement('div');
  
    // 执行这一行需要引入 lodash（目前通过 script 脚本引入）
    element.innerHTML = _.join(['Hello', 'webpack'], `' aaa '`);
  
    element.style.color = 'green';

    // const myIcon = new Image();
    // myIcon.src = Icon;
    // myIcon.style.width = "100px";
    // element.appendChild(myIcon);
    // print();

    return element;
  }

  
  
  document.body.appendChild(component());