import data from "../assets/data.json";

export default () => {
    console.log('this is something about printing');
    console.log("%c " + _.join(['Hello', 'webpack'], `' ${data.aaa} '`), "color:#008000;");
};