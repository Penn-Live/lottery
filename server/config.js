/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 0,
    count: 1000,
    title: "",
    text: "精美伴手礼"
  },
  {
    type: 1,
    count: 1,
    text: "一等奖",
    title: "苹果平板电脑",
    img: "../img/pb.jpg"
  },
  {
    type: 2,
    count: 2,
    text: "二等奖",
    title: "黑科技筋膜枪",
    img: "../img/jmq.jpg"
  },
  {
    type: 3,
    count: 3,
    text: "三等奖",
    title: "时尚眼部按摩仪",
    img: "../img/amy.jpg"
  },
  {
    type: 4,
    count: 5,
    text: "四等奖",
    title: "舒适床品四件套",
    img: "../img/sjt.jpg"
  },
  {
    type: 5,
    count: 10,
    text: "五等奖",
    title: "夏日凉爽便携式小风扇",
    img: "../img/fs.jpg"
  },
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1, 1, 1, 1, 1,1];

/**
 * 卡片公司名称标识
 */
const COMPANY = "APEXEL";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
