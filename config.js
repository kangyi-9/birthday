// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "To",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "我亲爱的侄女哈哈哈",  // 同上...
        "又是一年一度的10月6号",
        "祝你生日大快乐",
        "青春美丽 健康平安",
        "年年赚大钱",
        "抄袭了一点你送的礼物的idea",
        "做了这个东西哈哈哈",
        "虽然毕业了 开始做工了 联络也少了",
        "但是我的心还是和你同在 啾咪哈哈哈",
        "有烦恼可以随时来找我",
        "有可能我也解决不了",
        "但是我耳朵肯定可以借给你哈哈",
        "希望你度过了快乐的一天哦",
        "Happy Birthday!!!",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "小仙女": "./imgs/WhatsApp Image 2020-10-06 at 5.56.38 PM.jpeg",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "来点音乐",
        bannar_coming: "换换颜色",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐！！",
        story: "A MESSAGE FOR YOU",
    }
};
