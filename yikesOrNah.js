var yikes_or_nah = (function () {
function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.head;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

// loadScript("https://cdn.jsdelivr.net/npm/@tensorflow/tfjs");
// loadScript("https://cdn.jsdelivr.net/npm/@tensorflow-models/toxicity");

    yikes_or_nah = {
    };


    //load json
    fetch("./yikesOrNah.json")
    .then(response => {
      return response.json();
    })
    .then(jsondata => yikes_or_nah = jsonConcat(jsondata, yikes_or_nah));

    function jsonConcat(o1, o2) {
      for (var key in o2) {
        o1[key] = o2[key];
      }
      return o1;
    }
    console.log(yikes_or_nah);




    var Latinise = {};
    Latinise.latin_map = {
      0: "o",
      1: "i",
      "$": "s",
      "5": "s",
      "3": "e",
      "𝛢": "a",
      "𝛢": "a",
      "𝛢": "a",
      "𝛢": "a",
      "4": "a",
      "@": "a",
      "𝓐": "a",
      "𝘈": "a",
      ꓮ: "a",
      "𝜜": "a",
      "𝒜": "a",
      "𝔄": "a",
      ꭺ: "a",
      "𝚨": "a",
      "𝗔": "a",
      "𝔸": "a",
      "𝘼": "a",
      "𝕬": "a",
      "𝙰": "a",
      Α: "a",
      "𝐴": "a",
      "𖽀": "a",
      А: "a",
      ᗅ: "a",
      ᴀ: "a",
      "𝐀": "a",
      Ａ: "a",
      "𝝖": "a",
      "𐊠": "a",
      Ꭺ: "a",
      "𝖠": "a",
      "𝑨": "a",
      "𝞐": "a",
      "𝔹": "b",
      "𝓑": "b",
      "𝙱": "b",
      В: "b",
      "𝗕": "b",
      Ꞵ: "b",
      "𝞑": "b",
      "𝕭": "b",
      "𝝗": "b",
      "𐊂": "b",
      "𐊡": "b",
      в: "b",
      "𝛣": "b",
      Β: "b",
      "𝚩": "b",
      Ᏼ: "b",
      ᗷ: "b",
      ᛒ: "b",
      "𐌁": "b",
      "𝔅": "b",
      "𝑩": "b",
      "𝘉": "b",
      "𝜝": "b",
      "𝐁": "b",
      ℬ: "b",
      "𝐵": "b",
      ᏼ: "b",
      "𝖡": "b",
      "𝘽": "b",
      ꓐ: "b",
      Ｂ: "b",
      ʙ: "b",
      "𝙲": "c",
      "𝖢": "c",
      "𝘊": "c",
      "𝐶": "c",
      "𑣩": "c",
      "𐐕": "c",
      Ꮯ: "c",
      "𑣲": "c",
      ℭ: "c",
      Ｃ: "c",
      Ϲ: "c",
      "𝓒": "c",
      Ⲥ: "c",
      "𝘾": "c",
      С: "c",
      "🝌": "c",
      Ⅽ: "c",
      ᑕ: "c",
      ꓚ: "c",
      "𝑪": "c",
      "𝒞": "c",
      "⊂": "c",
      ℂ: "c",
      "⸦": "c",
      "𐌂": "c",
      "𐔜": "c",
      "𝐂": "c",
      "𝕮": "c",
      "𝗖": "c",
      "𐊢": "c",
      "𝔇": "d",
      "𝘿": "d",
      "𝒟": "d",
      "𝙳": "d",
      ꓓ: "d",
      "𝘋": "d",
      ⅅ: "d",
      "𝑫": "d",
      "𝗗": "d",
      "𝔻": "d",
      ꭰ: "d",
      Ｄ: "d",
      "𝖣": "d",
      "𝓓": "d",
      ᴅ: "d",
      "𝕯": "d",
      Ⅾ: "d",
      Ꭰ: "d",
      ᗪ: "d",
      "𝐷": "d",
      ᗞ: "d",
      "𝐃": "d",
      "𝑬": "e",
      "𝚬": "e",
      "𝔼": "e",
      "𝕰": "e",
      "𝗘": "e",
      "𑢦": "e",
      "𝐄": "e",
      "𝛦": "e",
      "𝔈": "e",
      "⋿": "e",
      "𝙴": "e",
      ℰ: "e",
      Ꭼ: "e",
      ꓰ: "e",
      "𝞔": "e",
      ⴹ: "e",
      "𑢮": "e",
      "𝙀": "e",
      Ｅ: "e",
      ꭼ: "e",
      "𝓔": "e",
      "𝐸": "e",
      "𝖤": "e",
      Ε: "e",
      "𝘌": "e",
      "𝜠": "e",
      Е: "e",
      ᴇ: "e",
      "𝝚": "e",
      "𐊆": "e",
      "𝕱": "f",
      ℱ: "f",
      Ꞙ: "f",
      "𝐅": "f",
      ꓝ: "f",
      "𑣂": "f",
      "𝖥": "f",
      "𝘍": "f",
      "𑢢": "f",
      ᖴ: "f",
      "𝙵": "f",
      "𝗙": "f",
      "𝑭": "f",
      "𝙁": "f",
      "𐊇": "f",
      "𐔥": "f",
      "𝔉": "f",
      Ｆ: "f",
      "𝈓": "f",
      "𝟊": "f",
      "𝔽": "f",
      "𝓕": "f",
      "𝐹": "f",
      "𐊥": "f",
      Ϝ: "f",
      "𝒢": "g",
      ɢ: "g",
      Ꮐ: "g",
      ꓖ: "g",
      "𝐺": "g",
      "𝔾": "g",
      "𝗚": "g",
      Ԍ: "g",
      "𝙶": "g",
      "𝕲": "g",
      "𝘎": "g",
      "𝓖": "g",
      Ᏻ: "g",
      "𝙂": "g",
      "𝖦": "g",
      "𝑮": "g",
      ꮐ: "g",
      ԍ: "g",
      "𝔊": "g",
      "𝐆": "g",
      ᏻ: "g",
      Ｇ: "g",
      ℍ: "h",
      Ⲏ: "h",
      ꮋ: "h",
      "𝑯": "h",
      Ｈ: "h",
      Н: "h",
      "𝙷": "h",
      ʜ: "h",
      "𝛨": "h",
      "𝐻": "h",
      "𝓗": "h",
      "𝗛": "h",
      "𝕳": "h",
      ꓧ: "h",
      "𝜢": "h",
      "𝙃": "h",
      н: "h",
      "𝖧": "h",
      Η: "h",
      "𝞖": "h",
      ᕼ: "h",
      "𝐇": "h",
      "𐋏": "h",
      ℋ: "h",
      ℌ: "h",
      Ꮋ: "h",
      "𝚮": "h",
      "𝘏": "h",
      "𝝜": "h",
      "𝕝": "l",
      "𝕴": "l",
      "𝐼": "l",
      Ɩ: "l",
      ⵏ: "l",
      "𞸀": "l",
      ꓲ: "l",
      ﺍ: "l",
      ｌ: "l",
      "𝙡": "l",
      "∣": "l",
      "𝚰": "l",
      І: "l",
      Ⲓ: "l",
      "׀": "l",
      "𝟭": "l",
      "𝛪": "l",
      "１": "l",
      "𝘐": "l",
      ן: "l",
      "|": "l",
      "𝗅": "l",
      "𝚕": "l",
      "￨": "l",
      "١": "l",
      "𝐈": "l",
      "𝕀": "l",
      ו: "l",
      "𝟣": "l",
      "𝙸": "l",
      "𖼨": "l",
      "𝗹": "l",
      "𝓁": "l",
      "𝟷": "l",
      "𝜤": "l",
      "𝓵": "l",
      ⅼ: "l",
      "𝟏": "l",
      "𝖨": "l",
      "𝐥": "l",
      Ӏ: "l",
      "𐌉": "l",
      "𝗜": "l",
      "𐌠": "l",
      "𝑙": "l",
      "𞣇": "l",
      "⏽": "l",
      Ι: "l",
      ǀ: "l",
      "𝔩": "l",
      "𝑰": "l",
      "𝘭": "l",
      ߊ: "l",
      Ｉ: "l",
      ℑ: "l",
      Ⅰ: "l",
      ﺎ: "l",
      "𞺀": "l",
      ℓ: "l",
      "𐊊": "l",
      "𝝞": "l",
      ℐ: "l",
      "𝞘": "l",
      "🯱": "l",
      "𝓘": "l",
      "۱": "l",
      "𝒍": "l",
      "𝟙": "l",
      "𝙄": "l",
      ا: "l",
      "𝖑": "l",
      ᛁ: "l",
      Ј: "j",
      Ʝ: "j",
      "𝙅": "j",
      "𝔍": "j",
      "𝖩": "j",
      "𝕵": "j",
      "𝗝": "j",
      ꭻ: "j",
      "𝐉": "j",
      ᴊ: "j",
      ᒍ: "j",
      Ｊ: "j",
      "𝘑": "j",
      "𝐽": "j",
      "𝙹": "j",
      ꓙ: "j",
      "𝒥": "j",
      Ϳ: "j",
      "𝕁": "j",
      "𝑱": "j",
      "𝓙": "j",
      Ꭻ: "j",
      ᛕ: "k",
      "𝙆": "k",
      "𝒦": "k",
      "𝖪": "k",
      "𝐾": "k",
      Κ: "k",
      "𝕂": "k",
      ꓗ: "k",
      "𝓚": "k",
      "𝗞": "k",
      "𝘒": "k",
      "𝚱": "k",
      "𐔘": "k",
      "𝛫": "k",
      "𝕶": "k",
      К: "k",
      "𝝟": "k",
      Ｋ: "k",
      Ꮶ: "k",
      "𝞙": "k",
      "𝔎": "k",
      "𝙺": "k",
      "𝑲": "k",
      "𝐊": "k",
      "𝜥": "k",
      Ⲕ: "k",
      K: "k",
      ⳑ: "l",
      "𝙇": "l",
      "𝐿": "l",
      "𝖫": "l",
      "𝗟": "l",
      ꮮ: "l",
      "𝘓": "l",
      Ｌ: "l",
      "𝑳": "l",
      "𝔏": "l",
      "𐔦": "l",
      "𝕷": "l",
      "𝙻": "l",
      "𐑃": "l",
      ꓡ: "l",
      "𖼖": "l",
      Ⅼ: "l",
      ᒪ: "l",
      Ⳑ: "l",
      "𑢣": "l",
      "𝕃": "l",
      ʟ: "l",
      "𝐋": "l",
      "𑢲": "l",
      "𝓛": "l",
      ℒ: "l",
      Ꮮ: "l",
      "𝈪": "l",
      "𐐛": "l",
      "𐊰": "m",
      "𝓜": "m",
      Ⅿ: "m",
      "𐌑": "m",
      ᗰ: "m",
      "𝖬": "m",
      ᛖ: "m",
      "𝘔": "m",
      Μ: "m",
      "𝔐": "m",
      "𝝡": "m",
      "𝚳": "m",
      "𝜧": "m",
      "𝐌": "m",
      "𝑴": "m",
      "𝙼": "m",
      "𝗠": "m",
      Ꮇ: "m",
      "𝑀": "m",
      М: "m",
      ℳ: "m",
      ꓟ: "m",
      "𝕸": "m",
      Ｍ: "m",
      "𝞛": "m",
      Ϻ: "m",
      "𝙈": "m",
      "𝛭": "m",
      "𝕄": "m",
      Ⲙ: "m",
      "𝑁": "n",
      "𝝢": "n",
      Ⲛ: "n",
      "𝖭": "n",
      "𝘕": "n",
      "𝐍": "n",
      ɴ: "n",
      "𝚴": "n",
      "𝕹": "n",
      "𝒩": "n",
      "𝙉": "n",
      ꓠ: "n",
      "𝜨": "n",
      ℕ: "n",
      "𐔓": "n",
      "𝗡": "n",
      "𝓝": "n",
      "𝞜": "n",
      "𝔑": "n",
      "𝛮": "n",
      Ｎ: "n",
      "𝑵": "n",
      "𝙽": "n",
      Ν: "n",
      "𝑶": "o",
      օ: "o",
      ﮪ: "o",
      "𝒪": "o",
      ھ: "o",
      "𝜎": "o",
      "০": "o",
      "ം": "o",
      "𝓞": "o",
      ﻩ: "o",
      "𝘰": "o",
      ہ: "o",
      "𞸤": "o",
      "𝑜": "o",
      "੦": "o",
      "𝞼": "o",
      "ం": "o",
      ჿ: "o",
      "𝒐": "o",
      "𝗈": "o",
      "ං": "o",
      ｏ: "o",
      "𝝄": "o",
      ഠ: "o",
      "𝗼": "o",
      ﮦ: "o",
      "౦": "o",
      "𐊫": "o",
      ᴑ: "o",
      "٥": "o",
      ﮫ: "o",
      "𝛐": "o",
      "𝞸": "o",
      "𑣈": "o",
      "𐓂": "o",
      "𝕆": "o",
      "０": "o",
      "𝑂": "o",
      Ο: "o",
      "𐊒": "o",
      "𝞞": "o",
      ﻬ: "o",
      "𝟎": "o",
      "𝞂": "o",
      "𝛔": "o",
      "۵": "o",
      ﮭ: "o",
      ꓳ: "o",
      ﻫ: "o",
      "𞹤": "o",
      "𑣠": "o",
      "𐐄": "o",
      ⵔ: "o",
      "𝟬": "o",
      ﻪ: "o",
      〇: "o",
      "၀": "o",
      ﮧ: "o",
      "𝝾": "o",
      "𝐨": "o",
      "૦": "o",
      "𑢵": "o",
      "𝚘": "o",
      "𐓪": "o",
      "໐": "o",
      ס: "o",
      "𝓸": "o",
      ه: "o",
      "ಂ": "o",
      "०": "o",
      "൦": "o",
      "𝟢": "o",
      "𑣗": "o",
      "𝙊": "o",
      ﮬ: "o",
      "𝝤": "o",
      "𐐬": "o",
      "𝝈": "o",
      ℴ: "o",
      "𝙾": "o",
      "୦": "o",
      О: "o",
      ꬽ: "o",
      "𞺄": "o",
      "𝛰": "o",
      "🯰": "o",
      "೦": "o",
      "𑓐": "o",
      "𝟘": "o",
      ە: "o",
      "𝜊": "o",
      "𝐎": "o",
      ଠ: "o",
      "๐": "o",
      "𝔬": "o",
      "𝖔": "o",
      "𝘖": "o",
      "𝖮": "o",
      σ: "o",
      о: "o",
      ዐ: "o",
      "𝕺": "o",
      "𝜪": "o",
      ᴏ: "o",
      o: "o",
      ο: "o",
      Ⲟ: "o",
      "𝕠": "o",
      Օ: "o",
      "𝗢": "o",
      "𐔖": "o",
      "௦": "o",
      "߀": "o",
      "𝚶": "o",
      "𝙤": "o",
      Ｏ: "o",
      "𝔒": "o",
      ﮨ: "o",
      ﮩ: "o",
      "𝟶": "o",
      ⲟ: "o",
      ဝ: "o",
      ꮲ: "p",
      "𝗣": "p",
      ᴩ: "p",
      "𝒫": "p",
      Ｐ: "p",
      "𝙋": "p",
      "𝖯": "p",
      "𝔓": "p",
      Р: "p",
      ℙ: "p",
      "𝙿": "p",
      "𝓟": "p",
      ꓑ: "p",
      "𝚸": "p",
      Ρ: "p",
      "𝕻": "p",
      "𝝦": "p",
      "𝞠": "p",
      "𐊕": "p",
      ᴘ: "p",
      "𝑃": "p",
      ᑭ: "p",
      "𝐏": "p",
      Ⲣ: "p",
      "𝛲": "p",
      "𝘗": "p",
      Ꮲ: "p",
      "𝜬": "p",
      "𝑷": "p",
      "𝒬": "q",
      "𝕼": "q",
      ⵕ: "q",
      "𝑸": "q",
      "𝑄": "q",
      "𝐐": "q",
      ℚ: "q",
      "𝔔": "q",
      "𝙌": "q",
      Ｑ: "q",
      "𝘘": "q",
      "𝖰": "q",
      "𝚀": "q",
      "𝗤": "q",
      "𝓠": "q",
      "𝑹": "r",
      ℜ: "r",
      ꭱ: "r",
      "𝈖": "r",
      "𝗥": "r",
      ᖇ: "r",
      ʀ: "r",
      "𝖱": "r",
      "𝐑": "r",
      ᚱ: "r",
      Ʀ: "r",
      Ꭱ: "r",
      Ｒ: "r",
      ℛ: "r",
      ꮢ: "r",
      "𝙍": "r",
      Ꮢ: "r",
      "𐒴": "r",
      "𝕽": "r",
      ℝ: "r",
      "𝑅": "r",
      "𝚁": "r",
      "𖼵": "r",
      "𝓡": "r",
      ꓣ: "r",
      "𝘙": "r",
      Տ: "s",
      Ｓ: "s",
      "𝓢": "s",
      "𝕾": "s",
      "𝖲": "s",
      "𐊖": "s",
      Ꮪ: "s",
      "𝑺": "s",
      "𝑆": "s",
      "𝒮": "s",
      "𝘚": "s",
      "𝙎": "s",
      "𐐠": "s",
      Ꮥ: "s",
      "𝗦": "s",
      ꓢ: "s",
      "𝔖": "s",
      "𝐒": "s",
      "𝕊": "s",
      "𖼺": "s",
      "𝚂": "s",
      Ѕ: "s",
      "𝛕": "t",
      "𝚃": "t",
      "𝑻": "t",
      "𝕋": "t",
      "⟙": "t",
      Ⲧ: "t",
      "𖼊": "t",
      ᴛ: "t",
      "𝐓": "t",
      "𐊗": "t",
      ꭲ: "t",
      "𝓣": "t",
      "𝞽": "t",
      "𝘛": "t",
      τ: "t",
      "𝚻": "t",
      "𝞃": "t",
      "⊤": "t",
      Т: "t",
      т: "t",
      "🝨": "t",
      "𝖳": "t",
      "𝝩": "t",
      "𝛵": "t",
      "𝒯": "t",
      "𝗧": "t",
      "𝙏": "t",
      Τ: "t",
      "𐊱": "t",
      "𝔗": "t",
      Ｔ: "t",
      "𝞣": "t",
      "𝝉": "t",
      "𝑇": "t",
      "𝜏": "t",
      Ꭲ: "t",
      ꓔ: "t",
      "𝜯": "t",
      "𑢼": "t",
      "𐌕": "t",
      "𝕿": "t",
      "𝑈": "u",
      "𝐔": "u",
      "⋃": "u",
      "∪": "u",
      "𝖴": "u",
      "𝔘": "u",
      "𝖀": "u",
      "𝑼": "u",
      "𝒰": "u",
      "𝙐": "u",
      ᑌ: "u",
      "𐓎": "u",
      "𝓤": "u",
      "𝗨": "u",
      "𝘜": "u",
      "𝚄": "u",
      "𑢸": "u",
      "𖽂": "u",
      ꓴ: "u",
      "𝕌": "u",
      ሀ: "u",
      Ｕ: "u",
      Ս: "u",
      "𝐕": "v",
      "𝚅": "v",
      "𐔝": "v",
      Ⅴ: "v",
      "𝖁": "v",
      Ꮩ: "v",
      ᐯ: "v",
      Ѵ: "v",
      ꛟ: "v",
      ⴸ: "v",
      "۷": "v",
      Ｖ: "v",
      "𝈍": "v",
      "𝕍": "v",
      "𝑉": "v",
      "𝘝": "v",
      "𝒱": "v",
      "𝑽": "v",
      "𝖵": "v",
      "𑢠": "v",
      ꓦ: "v",
      "𝔙": "v",
      "٧": "v",
      "𝓥": "v",
      "𝗩": "v",
      "𖼈": "v",
      "𝙑": "v",
      "𝚆": "w",
      "𑣦": "w",
      Ԝ: "w",
      "𝙒": "w",
      "𝑾": "w",
      "𝒲": "w",
      "𝐖": "w",
      "𝓦": "w",
      "𝗪": "w",
      "𑣯": "w",
      "𝔚": "w",
      Ꮤ: "w",
      "𝖶": "w",
      Ｗ: "w",
      "𝕎": "w",
      "𝑊": "w",
      "𝖂": "w",
      Ꮃ: "w",
      ꓪ: "w",
      "𝘞": "w",
      "𝖷": "x",
      Ⅹ: "x",
      "𝞦": "x",
      "𝒳": "x",
      "𐌢": "x",
      "╳": "x",
      "𝘟": "x",
      Χ: "x",
      "𝚾": "x",
      "𐊐": "x",
      "𐊴": "x",
      "𝕏": "x",
      "𐌗": "x",
      ꓫ: "x",
      Ⲭ: "x",
      "𝑿": "x",
      Х: "x",
      Ｘ: "x",
      "𝔛": "x",
      "𝝬": "x",
      "𝑋": "x",
      "𑣬": "x",
      "᙭": "x",
      "𝐗": "x",
      "𝜲": "x",
      ⵝ: "x",
      "𐔧": "x",
      "𝖃": "x",
      "𝙓": "x",
      "𝗫": "x",
      "𝚇": "x",
      "𝛸": "x",
      Ꭓ: "x",
      "𝓧": "x",
      ᚷ: "x",
      "𝖄": "y",
      ꓬ: "y",
      Υ: "y",
      "𝒴": "y",
      "𝚈": "y",
      "𝒀": "y",
      "𐊲": "y",
      "𝘠": "y",
      "𝕐": "y",
      "𝝪": "y",
      "𝙔": "y",
      Ꮍ: "y",
      "𝗬": "y",
      Ⲩ: "y",
      "𝚼": "y",
      Ꭹ: "y",
      "𝞤": "y",
      "𝜰": "y",
      "𝐘": "y",
      У: "y",
      "𝓨": "y",
      "𑢤": "y",
      Ｙ: "y",
      Ү: "y",
      "𖽃": "y",
      "𝔜": "y",
      ϒ: "y",
      "𝑌": "y",
      "𝛶": "y",
      "𝖸": "y",
      "𝑍": "z",
      "𐋵": "z",
      "𝛧": "z",
      "𝚉": "z",
      Ｚ: "z",
      ℤ: "z",
      Ζ: "z",
      "𝙕": "z",
      "𝚭": "z",
      "𝘡": "z",
      "𝜡": "z",
      "𝝛": "z",
      "𝒁": "z",
      "𝖅": "z",
      "𝐙": "z",
      ꓜ: "z",
      "𝖹": "z",
      "𝓩": "z",
      Ꮓ: "z",
      "𝞕": "z",
      "𝒵": "z",
      "𝗭": "z",
      "𑢩": "z",
      "𑣥": "z",
      ℨ: "z",
      ａ: "a",
      ɑ: "a",
      α: "a",
      "𝐚": "a",
      "𝙖": "a",
      "𝝰": "a",
      "𝒂": "a",
      "𝚊": "a",
      "⍺": "a",
      "𝞪": "a",
      "𝒶": "a",
      а: "a",
      "𝔞": "a",
      "𝗮": "a",
      "𝘢": "a",
      "𝕒": "a",
      "𝖺": "a",
      "𝑎": "a",
      "𝛼": "a",
      "𝛂": "a",
      "𝓪": "a",
      "𝜶": "a",
      "𝖆": "a",
      "𝒃": "b",
      "𝐛": "b",
      "𝒷": "b",
      "𝖻": "b",
      ᖯ: "b",
      "𝖇": "b",
      "𝘣": "b",
      Ꮟ: "b",
      "𝓫": "b",
      Ƅ: "b",
      "𝗯": "b",
      "𝕓": "b",
      Ь: "b",
      "𝔟": "b",
      "𝑏": "b",
      ｂ: "b",
      "𝚋": "b",
      "𝙗": "b",
      ᑲ: "b",
      "𝔠": "c",
      "𝑐": "c",
      "𝗰": "c",
      ⅽ: "c",
      "𝖈": "c",
      ᴄ: "c",
      "𐐽": "c",
      ꮯ: "c",
      "𝓬": "c",
      "𝘤": "c",
      "𝐜": "c",
      "𝖼": "c",
      "𝙘": "c",
      с: "c",
      "𝕔": "c",
      ϲ: "c",
      ⲥ: "c",
      "𝚌": "c",
      "𝒄": "c",
      "𝒸": "c",
      ｃ: "c",
      "𝗱": "d",
      Ꮷ: "d",
      "𝐝": "d",
      "𝒹": "d",
      ⅆ: "d",
      ꓒ: "d",
      ԁ: "d",
      ｄ: "d",
      "𝖉": "d",
      "𝔡": "d",
      "𝚍": "d",
      "𝙙": "d",
      "𝖽": "d",
      ᑯ: "d",
      "𝑑": "d",
      "𝘥": "d",
      ⅾ: "d",
      "𝕕": "d",
      "𝒅": "d",
      "𝓭": "d",
      ℯ: "e",
      "𝔢": "e",
      ҽ: "e",
      ｅ: "e",
      "𝕖": "e",
      ⅇ: "e",
      "𝙚": "e",
      "℮": "e",
      ꬲ: "e",
      "𝒆": "e",
      "𝗲": "e",
      "𝑒": "e",
      "𝖾": "e",
      "𝓮": "e",
      "𝖊": "e",
      "𝘦": "e",
      "𝚎": "e",
      е: "e",
      "𝐞": "e",
      "𝙛": "f",
      "𝒇": "f",
      ſ: "f",
      "𝒻": "f",
      "𝔣": "f",
      ք: "f",
      "𝟋": "f",
      "𝗳": "f",
      ｆ: "f",
      "𝚏": "f",
      "𝖋": "f",
      ꬵ: "f",
      "𝓯": "f",
      ẝ: "f",
      "𝕗": "f",
      "𝖿": "f",
      "𝑓": "f",
      "𝐟": "f",
      ϝ: "f",
      "𝘧": "f",
      ꞙ: "f",
      "𝖌": "g",
      "𝐠": "g",
      ℊ: "g",
      "𝗴": "g",
      "𝕘": "g",
      "𝙜": "g",
      ɡ: "g",
      "𝔤": "g",
      "𝚐": "g",
      ƍ: "g",
      ց: "g",
      "𝗀": "g",
      "𝘨": "g",
      ｇ: "g",
      "𝒈": "g",
      ᶃ: "g",
      "𝓰": "g",
      "𝑔": "g",
      "𝐡": "h",
      "𝒽": "h",
      ｈ: "h",
      "𝖍": "h",
      "𝙝": "h",
      "𝚑": "h",
      "𝕙": "h",
      "𝗁": "h",
      "𝘩": "h",
      Ꮒ: "h",
      հ: "h",
      "𝗵": "h",
      "𝓱": "h",
      ℎ: "h",
      "𝒉": "h",
      "𝔥": "h",
      һ: "h",
      "𝘪": "i",
      ι: "i",
      ⅈ: "i",
      "𝝸": "i",
      "𝖎": "i",
      "𝐢": "i",
      ӏ: "i",
      ͺ: "i",
      ｉ: "i",
      "𝗂": "i",
      "𝜾": "i",
      ꙇ: "i",
      "𝗶": "i",
      Ꭵ: "i",
      "𝙞": "i",
      "𑣃": "i",
      ɩ: "i",
      "𝒾": "i",
      "𝚤": "i",
      "⍳": "i",
      "𝔦": "i",
      "𝑖": "i",
      ι: "i",
      "𝓲": "i",
      "𝛊": "i",
      "𝞲": "i",
      "𝒊": "i",
      "𝚒": "i",
      ɪ: "i",
      "𝜄": "i",
      "˛": "i",
      ꭵ: "i",
      і: "i",
      ⅰ: "i",
      ℹ: "i",
      "𝕚": "i",
      ı: "i",
      "𝐣": "j",
      "𝗃": "j",
      "𝚓": "j",
      ⅉ: "j",
      "𝕛": "j",
      ϳ: "j",
      ｊ: "j",
      "𝒋": "j",
      "𝑗": "j",
      "𝒿": "j",
      "𝙟": "j",
      ј: "j",
      "𝔧": "j",
      "𝘫": "j",
      "𝗷": "j",
      "𝓳": "j",
      "𝖏": "j",
      ｋ: "k",
      "𝕜": "k",
      "𝑘": "k",
      "𝐤": "k",
      "𝙠": "k",
      "𝚔": "k",
      "𝖐": "k",
      "𝗄": "k",
      "𝗸": "k",
      "𝔨": "k",
      "𝘬": "k",
      "𝒌": "k",
      "𝓴": "k",
      "𝓀": "k",
      I: "l",
      ｍ: "m",
      "𝔫": "n",
      "𝖓": "n",
      "𝗇": "n",
      "𝑛": "n",
      ｎ: "n",
      "𝗻": "n",
      ո: "n",
      "𝘯": "n",
      "𝓷": "n",
      "𝙣": "n",
      "𝒏": "n",
      "𝓃": "n",
      "𝕟": "n",
      "𝚗": "n",
      "𝐧": "n",
      ռ: "n",
      O: "o",
      "𝑝": "p",
      "𝕡": "p",
      "𝞎": "p",
      ϱ: "p",
      "𝟈": "p",
      "𝜌": "p",
      ｐ: "p",
      ⲣ: "p",
      "𝓅": "p",
      "𝞺": "p",
      "𝒑": "p",
      "𝖕": "p",
      "𝝆": "p",
      "𝐩": "p",
      "𝜚": "p",
      "𝙥": "p",
      "𝝔": "p",
      "𝞀": "p",
      "𝔭": "p",
      "𝚙": "p",
      ρ: "p",
      "⍴": "p",
      "𝗉": "p",
      "𝛠": "p",
      "𝗽": "p",
      р: "p",
      "𝘱": "p",
      "𝛒": "p",
      "𝓹": "p",
      ԛ: "q",
      ｑ: "q",
      "𝓺": "q",
      "𝗊": "q",
      "𝔮": "q",
      "𝕢": "q",
      "𝑞": "q",
      "𝗾": "q",
      "𝙦": "q",
      "𝖖": "q",
      "𝚚": "q",
      գ: "q",
      "𝒒": "q",
      "𝘲": "q",
      "𝐪": "q",
      զ: "q",
      "𝓆": "q",
      "𝖗": "r",
      "𝓻": "r",
      ⲅ: "r",
      "𝗋": "r",
      "𝑟": "r",
      ꭇ: "r",
      "𝚛": "r",
      "𝐫": "r",
      "𝙧": "r",
      г: "r",
      "𝒓": "r",
      "𝓇": "r",
      ꭈ: "r",
      "𝗿": "r",
      ｒ: "r",
      "𝔯": "r",
      ᴦ: "r",
      "𝕣": "r",
      ꮁ: "r",
      "𝘳": "r",
      "𝚜": "s",
      ꜱ: "s",
      ꮪ: "s",
      "𝘀": "s",
      ƽ: "s",
      ѕ: "s",
      "𝑠": "s",
      "𑣁": "s",
      "𝕤": "s",
      "𝙨": "s",
      "𝓼": "s",
      "𝒔": "s",
      "𝗌": "s",
      "𝘴": "s",
      "𝐬": "s",
      "𐑈": "s",
      "𝔰": "s",
      "𝖘": "s",
      ｓ: "s",
      "𝓈": "s",
      "𝒕": "t",
      "𝗍": "t",
      "𝖙": "t",
      "𝙩": "t",
      "𝔱": "t",
      "𝓽": "t",
      "𝓉": "t",
      "𝐭": "t",
      "𝘁": "t",
      "𝑡": "t",
      "𝚝": "t",
      "𝕥": "t",
      ｔ: "t",
      "𝘵": "t",
      "𝑢": "u",
      "𐓶": "u",
      "𝗎": "u",
      "𝛖": "u",
      ᴜ: "u",
      ｕ: "u",
      "𝐮": "u",
      "𝖚": "u",
      "𝚞": "u",
      "𝜐": "u",
      "𝘂": "u",
      "𝘶": "u",
      "𝒖": "u",
      "𝔲": "u",
      "𝙪": "u",
      "𑣘": "u",
      υ: "u",
      "𝞾": "u",
      "𝓊": "u",
      "𝓾": "u",
      "𝕦": "u",
      ս: "u",
      ꭎ: "u",
      ꭒ: "u",
      ꞟ: "u",
      "𝞄": "u",
      ʋ: "u",
      "𝝊": "u",
      "𝙫": "v",
      "𝓿": "v",
      ѵ: "v",
      "𝞶": "v",
      ｖ: "v",
      "𝒗": "v",
      "𝔳": "v",
      "𝝼": "v",
      "𝘃": "v",
      "𝚟": "v",
      "𝐯": "v",
      ᴠ: "v",
      "𝓋": "v",
      "𝖛": "v",
      ט: "v",
      "⋁": "v",
      "𝝂": "v",
      "𝛎": "v",
      "𑜆": "v",
      ν: "v",
      "𝜈": "v",
      "𝑣": "v",
      "∨": "v",
      "𝘷": "v",
      "𝗏": "v",
      ꮩ: "v",
      "𑣀": "v",
      ⅴ: "v",
      "𝕧": "v",
      "𝘄": "w",
      ｗ: "w",
      "𝗐": "w",
      "𝒘": "w",
      "𝐰": "w",
      "𑜏": "w",
      "𝘸": "w",
      "𝙬": "w",
      "𝖜": "w",
      "𝔴": "w",
      "𝔀": "w",
      ꮃ: "w",
      "𝑤": "w",
      ɯ: "w",
      "𑜊": "w",
      ա: "w",
      "𝚠": "w",
      "𝕨": "w",
      ᴡ: "w",
      "𝓌": "w",
      ѡ: "w",
      "𑜎": "w",
      ԝ: "w",
      "𝐱": "x",
      "𝑥": "x",
      "⨯": "x",
      "𝔵": "x",
      "𝗑": "x",
      х: "x",
      ᕽ: "x",
      "𝘹": "x",
      "𝓍": "x",
      "𝒙": "x",
      ⅹ: "x",
      "⤬": "x",
      "𝘅": "x",
      "×": "x",
      "᙮": "x",
      "𝚡": "x",
      ｘ: "x",
      ᕁ: "x",
      "𝕩": "x",
      "⤫": "x",
      "𝖝": "x",
      "𝔁": "x",
      "𝙭": "x",
      ꭚ: "y",
      ỿ: "y",
      у: "y",
      ʏ: "y",
      "𝘆": "y",
      ℽ: "y",
      "𝝲": "y",
      ү: "y",
      ყ: "y",
      "𝕪": "y",
      "𝓎": "y",
      "𝛄": "y",
      "𝘺": "y",
      ｙ: "y",
      "𝙮": "y",
      "𝜸": "y",
      ɣ: "y",
      "𝞬": "y",
      "𝔂": "y",
      "𝑦": "y",
      "𝚢": "y",
      γ: "y",
      "𝔶": "y",
      ᶌ: "y",
      "𝒚": "y",
      "𑣜": "y",
      "𝐲": "y",
      "𝖞": "y",
      "𝛾": "y",
      "𝗒": "y",
      "𝒛": "z",
      "𝐳": "z",
      "𝖟": "z",
      "𝘻": "z",
      "𝕫": "z",
      "𝘇": "z",
      "𝔷": "z",
      ᴢ: "z",
      "𝓏": "z",
      ꮓ: "z",
      "𝑧": "z",
      "𝙯": "z",
      "𝚣": "z",
      "𑣄": "z",
      "𝔃": "z",
      "𝗓": "z",
      ｚ: "z",
    };
    Latinise.convert = function (s) {
      Object.keys(Latinise.latin_map).forEach((key) => {
        s = s.replaceAll(key, Latinise.latin_map[key]);
      });
      return s;
    };

    //this is for base64 conversion
    (function (global, factory) {
      typeof exports === "object" && typeof module !== "undefined"
        ? (module.exports = factory())
        : typeof define === "function" && define.amd
          ? define(factory)
          : // cf. https://github.com/dankogai/js-base64/issues/119
          (function () {
            // existing version for noConflict()
            var _Base64 = global.Base64;
            var gBase64 = factory();
            gBase64.noConflict = function () {
              global.Base64 = _Base64;
              return gBase64;
            };
            if (global.Meteor) {
              // Meteor.js
              Base64 = gBase64;
            }
            global.Base64 = gBase64;
          })();
    })(
      typeof self !== "undefined"
        ? self
        : typeof window !== "undefined"
          ? window
          : typeof global !== "undefined"
            ? global
            : this,
      function () {
        "use strict";
        /**
         *  base64.ts
         *
         *  Licensed under the BSD 3-Clause License.
         *    http://opensource.org/licenses/BSD-3-Clause
         *
         *  References:
         *    http://en.wikipedia.org/wiki/Base64
         *
         * @author Dan Kogai (https://github.com/dankogai)
         */
        var version = "3.7.2";
        /**
         * @deprecated use lowercase `version`.
         */
        var VERSION = version;
        var _hasatob = typeof atob === "function";
        var _hasbtoa = typeof btoa === "function";
        var _hasBuffer = typeof Buffer === "function";
        var _TD = typeof TextDecoder === "function" ? new TextDecoder() : undefined;
        var _TE = typeof TextEncoder === "function" ? new TextEncoder() : undefined;
        var b64ch =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var b64chs = Array.prototype.slice.call(b64ch);
        var b64tab = (function (a) {
          var tab = {};
          a.forEach(function (c, i) {
            return (tab[c] = i);
          });
          return tab;
        })(b64chs);
        var b64re =
          /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
        var _fromCC = String.fromCharCode.bind(String);
        var _U8Afrom =
          typeof Uint8Array.from === "function"
            ? Uint8Array.from.bind(Uint8Array)
            : function (it, fn) {
              if (fn === void 0) {
                fn = function (x) {
                  return x;
                };
              }
              return new Uint8Array(Array.prototype.slice.call(it, 0).map(fn));
            };
        var _mkUriSafe = function (src) {
          return src.replace(/=/g, "").replace(/[+\/]/g, function (m0) {
            return m0 == "+" ? "-" : "_";
          });
        };
        var _tidyB64 = function (s) {
          return s.replace(/[^A-Za-z0-9\+\/]/g, "");
        };
        /**
         * polyfill version of `btoa`
         */
        var btoaPolyfill = function (bin) {
          // console.log('polyfilled');
          var u32,
            c0,
            c1,
            c2,
            asc = "";
          var pad = bin.length % 3;
          for (var i = 0; i < bin.length;) {
            if (
              (c0 = bin.charCodeAt(i++)) > 255 ||
              (c1 = bin.charCodeAt(i++)) > 255 ||
              (c2 = bin.charCodeAt(i++)) > 255
            )
              throw new TypeError("invalid character found");
            u32 = (c0 << 16) | (c1 << 8) | c2;
            asc +=
              b64chs[(u32 >> 18) & 63] +
              b64chs[(u32 >> 12) & 63] +
              b64chs[(u32 >> 6) & 63] +
              b64chs[u32 & 63];
          }
          return pad ? asc.slice(0, pad - 3) + "===".substring(pad) : asc;
        };
        /**
         * does what `window.btoa` of web browsers do.
         * @param {String} bin binary string
         * @returns {string} Base64-encoded string
         */
        var _btoa = _hasbtoa
          ? function (bin) {
            return btoa(bin);
          }
          : _hasBuffer
            ? function (bin) {
              return Buffer.from(bin, "binary").toString("base64");
            }
            : btoaPolyfill;
        var _fromUint8Array = _hasBuffer
          ? function (u8a) {
            return Buffer.from(u8a).toString("base64");
          }
          : function (u8a) {
            // cf. https://stackoverflow.com/questions/12710001/how-to-convert-uint8-array-to-base64-encoded-string/12713326#12713326
            var maxargs = 0x1000;
            var strs = [];
            for (var i = 0, l = u8a.length; i < l; i += maxargs) {
              strs.push(_fromCC.apply(null, u8a.subarray(i, i + maxargs)));
            }
            return _btoa(strs.join(""));
          };
        /**
         * converts a Uint8Array to a Base64 string.
         * @param {boolean} [urlsafe] URL-and-filename-safe a la RFC4648 §5
         * @returns {string} Base64 string
         */
        var fromUint8Array = function (u8a, urlsafe) {
          if (urlsafe === void 0) {
            urlsafe = false;
          }
          return urlsafe ? _mkUriSafe(_fromUint8Array(u8a)) : _fromUint8Array(u8a);
        };
        // This trick is found broken https://github.com/dankogai/js-base64/issues/130
        // const utob = (src: string) => unescape(encodeURIComponent(src));
        // reverting good old fationed regexp
        var cb_utob = function (c) {
          if (c.length < 2) {
            var cc = c.charCodeAt(0);
            return cc < 0x80
              ? c
              : cc < 0x800
                ? _fromCC(0xc0 | (cc >>> 6)) + _fromCC(0x80 | (cc & 0x3f))
                : _fromCC(0xe0 | ((cc >>> 12) & 0x0f)) +
                _fromCC(0x80 | ((cc >>> 6) & 0x3f)) +
                _fromCC(0x80 | (cc & 0x3f));
          } else {
            var cc =
              0x10000 +
              (c.charCodeAt(0) - 0xd800) * 0x400 +
              (c.charCodeAt(1) - 0xdc00);
            return (
              _fromCC(0xf0 | ((cc >>> 18) & 0x07)) +
              _fromCC(0x80 | ((cc >>> 12) & 0x3f)) +
              _fromCC(0x80 | ((cc >>> 6) & 0x3f)) +
              _fromCC(0x80 | (cc & 0x3f))
            );
          }
        };
        var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
        /**
         * @deprecated should have been internal use only.
         * @param {string} src UTF-8 string
         * @returns {string} UTF-16 string
         */
        var utob = function (u) {
          return u.replace(re_utob, cb_utob);
        };
        //
        var _encode = _hasBuffer
          ? function (s) {
            return Buffer.from(s, "utf8").toString("base64");
          }
          : _TE
            ? function (s) {
              return _fromUint8Array(_TE.encode(s));
            }
            : function (s) {
              return _btoa(utob(s));
            };
        /**
         * converts a UTF-8-encoded string to a Base64 string.
         * @param {boolean} [urlsafe] if `true` make the result URL-safe
         * @returns {string} Base64 string
         */
        var encode = function (src, urlsafe) {
          if (urlsafe === void 0) {
            urlsafe = false;
          }
          return urlsafe ? _mkUriSafe(_encode(src)) : _encode(src);
        };
        /**
         * converts a UTF-8-encoded string to URL-safe Base64 RFC4648 §5.
         * @returns {string} Base64 string
         */
        var encodeURI = function (src) {
          return encode(src, true);
        };
        // This trick is found broken https://github.com/dankogai/js-base64/issues/130
        // const btou = (src: string) => decodeURIComponent(escape(src));
        // reverting good old fationed regexp
        var re_btou =
          /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
        var cb_btou = function (cccc) {
          switch (cccc.length) {
            case 4:
              var cp =
                ((0x07 & cccc.charCodeAt(0)) << 18) |
                ((0x3f & cccc.charCodeAt(1)) << 12) |
                ((0x3f & cccc.charCodeAt(2)) << 6) |
                (0x3f & cccc.charCodeAt(3)),
                offset = cp - 0x10000;
              return (
                _fromCC((offset >>> 10) + 0xd800) +
                _fromCC((offset & 0x3ff) + 0xdc00)
              );
            case 3:
              return _fromCC(
                ((0x0f & cccc.charCodeAt(0)) << 12) |
                ((0x3f & cccc.charCodeAt(1)) << 6) |
                (0x3f & cccc.charCodeAt(2))
              );
            default:
              return _fromCC(
                ((0x1f & cccc.charCodeAt(0)) << 6) | (0x3f & cccc.charCodeAt(1))
              );
          }
        };
        /**
         * @deprecated should have been internal use only.
         * @param {string} src UTF-16 string
         * @returns {string} UTF-8 string
         */
        var btou = function (b) {
          return b.replace(re_btou, cb_btou);
        };
        /**
         * polyfill version of `atob`
         */
        var atobPolyfill = function (asc) {
          // console.log('polyfilled');
          asc = asc.replace(/\s+/g, "");
          if (!b64re.test(asc)) throw new TypeError("malformed base64.");
          asc += "==".slice(2 - (asc.length & 3));
          var u24,
            bin = "",
            r1,
            r2;
          for (var i = 0; i < asc.length;) {
            u24 =
              (b64tab[asc.charAt(i++)] << 18) |
              (b64tab[asc.charAt(i++)] << 12) |
              ((r1 = b64tab[asc.charAt(i++)]) << 6) |
              (r2 = b64tab[asc.charAt(i++)]);
            bin +=
              r1 === 64
                ? _fromCC((u24 >> 16) & 255)
                : r2 === 64
                  ? _fromCC((u24 >> 16) & 255, (u24 >> 8) & 255)
                  : _fromCC((u24 >> 16) & 255, (u24 >> 8) & 255, u24 & 255);
          }
          return bin;
        };
        /**
         * does what `window.atob` of web browsers do.
         * @param {String} asc Base64-encoded string
         * @returns {string} binary string
         */
        var _atob = _hasatob
          ? function (asc) {
            return atob(_tidyB64(asc));
          }
          : _hasBuffer
            ? function (asc) {
              return Buffer.from(asc, "base64").toString("binary");
            }
            : atobPolyfill;
        //
        var _toUint8Array = _hasBuffer
          ? function (a) {
            return _U8Afrom(Buffer.from(a, "base64"));
          }
          : function (a) {
            return _U8Afrom(_atob(a), function (c) {
              return c.charCodeAt(0);
            });
          };
        /**
         * converts a Base64 string to a Uint8Array.
         */
        var toUint8Array = function (a) {
          return _toUint8Array(_unURI(a));
        };
        //
        var _decode = _hasBuffer
          ? function (a) {
            return Buffer.from(a, "base64").toString("utf8");
          }
          : _TD
            ? function (a) {
              return _TD.decode(_toUint8Array(a));
            }
            : function (a) {
              return btou(_atob(a));
            };
        var _unURI = function (a) {
          return _tidyB64(
            a.replace(/[-_]/g, function (m0) {
              return m0 == "-" ? "+" : "/";
            })
          );
        };
        /**
         * converts a Base64 string to a UTF-8 string.
         * @param {String} src Base64 string.  Both normal and URL-safe are supported
         * @returns {string} UTF-8 string
         */
        var decode = function (src) {
          return _decode(_unURI(src));
        };
        /**
         * check if a value is a valid Base64 string
         * @param {String} src a value to check
         */
        var isValid = function (src) {
          if (typeof src !== "string") return false;
          var s = src.replace(/\s+/g, "").replace(/={0,2}$/, "");
          return !/[^\s0-9a-zA-Z\+/]/.test(s) || !/[^\s0-9a-zA-Z\-_]/.test(s);
        };
        //
        var _noEnum = function (v) {
          return {
            value: v,
            enumerable: false,
            writable: true,
            configurable: true,
          };
        };
        /**
         * extend String.prototype with relevant methods
         */
        var extendString = function () {
          var _add = function (name, body) {
            return Object.defineProperty(String.prototype, name, _noEnum(body));
          };
          _add("fromBase64", function () {
            return decode(this);
          });
          _add("toBase64", function (urlsafe) {
            return encode(this, urlsafe);
          });
          _add("toBase64URI", function () {
            return encode(this, true);
          });
          _add("toBase64URL", function () {
            return encode(this, true);
          });
          _add("toUint8Array", function () {
            return toUint8Array(this);
          });
        };
        /**
         * extend Uint8Array.prototype with relevant methods
         */
        var extendUint8Array = function () {
          var _add = function (name, body) {
            return Object.defineProperty(Uint8Array.prototype, name, _noEnum(body));
          };
          _add("toBase64", function (urlsafe) {
            return fromUint8Array(this, urlsafe);
          });
          _add("toBase64URI", function () {
            return fromUint8Array(this, true);
          });
          _add("toBase64URL", function () {
            return fromUint8Array(this, true);
          });
        };
        /**
         * extend Builtin prototypes with relevant methods
         */
        var extendBuiltins = function () {
          extendString();
          extendUint8Array();
        };
        var gBase64 = {
          version: version,
          VERSION: VERSION,
          atob: _atob,
          atobPolyfill: atobPolyfill,
          btoa: _btoa,
          btoaPolyfill: btoaPolyfill,
          fromBase64: decode,
          toBase64: encode,
          encode: encode,
          encodeURI: encodeURI,
          encodeURL: encodeURI,
          utob: utob,
          btou: btou,
          decode: decode,
          isValid: isValid,
          fromUint8Array: fromUint8Array,
          toUint8Array: toUint8Array,
          extendString: extendString,
          extendUint8Array: extendUint8Array,
          extendBuiltins: extendBuiltins,
        };
        //
        // export Base64 to the namespace
        //
        // ES5 is yet to have Object.assign() that may make transpilers unhappy.
        // gBase64.Base64 = Object.assign({}, gBase64);
        gBase64.Base64 = {};
        Object.keys(gBase64).forEach(function (k) {
          return (gBase64.Base64[k] = gBase64[k]);
        });
        return gBase64;
      }
    );


    //insert an item at an index
    // Array.prototype.insert = function (index, item) {
    //   this.splice(index, 0, item);
    // };



    yikes_or_nah.categories = ["identity", "insult", "obscene", "severeToxicity", "secuallyExplicit", "threat", "generalToxicity"];


    yikes_or_nah.checkEm = async function (
      sentences,
      callback = function (results) { },
      consoleLog = false,
    ) {
      const model = await toxicity.load();

      //replace homoglypgs
      for (i = 0; i < sentences.length; i++) {
        sentences[i] = Latinise.convert(sentences[i].toLowerCase());
      }

      res = new Array(sentences.length).fill(0);

      //check for big nonos
      const contains = yikes_or_nah.bannedWords.some((element) => {
        el = Base64.decode(element);
        for (i = 0; i < sentences.length; i++) {
          s = " " +sentences[i]+ " ";
          if (s.includes(el)) {
            res[i] = "nono";
            if(consoleLog){
            console.log(sentences[i], " contains a banned word/phrase, direct match");
            }
          }
        }
        return false;
      });
      if (contains) {

      }

      for (j = 0; j < sentences.length; j++) {
        if (res[j] != "nono") {
          res[j] = [];
        }
      }

      // console.log(sentences);
      predictions = await model.classify(sentences);

      // `predictions` is an array of objects, one for each prediction head,
      // that contains the raw probabilities for each input along with the
      // final prediction in `match` (either `true` or `false`).
      // If neither prediction exceeds the threshold, `match` is `null`.
      yikesArray = new Array(sentences.length).fill(false);

      //predictions is 0-7 for each and res res object has the number for each sentence
      for (i = 0; i < predictions.length; i++) {
        for (j = 0; j < sentences.length; j++) {
          if (res[j] != "nono") {
            res[j].push(predictions[i].results[j].probabilities[1])
          }
        }
      }

      //this code block is yikes lol
      //for each sentence result, which looks like [0.3,0.432,0.334... for all 7 categories]
      if(consoleLog){
        console.log(res)
      }
      // 
      for (i = 0; i < res.length; i++) {
        //if it contained a banned phrase we dont check, just skip to set to yikes true below
        if (res[i] != "nono") {
          //false so far, so not yikes
          yikes = false;
          //for each number in the res
          for (j = 0; j < res[i].length; j++) {
            //if the number is bigger than the soft dissalow for that category
            if (res[i][j] > yikes_or_nah.softDissalow[j]) {
              //yikes maybe is true
              yikes = true;
              //but for each special rule in that category (j)
              for (k = 0; k < yikes_or_nah.specialRules[j].length; k++) {
                //we have a chance to be ok if any have a full match
                maybeNotYikes = true;
                //so again for each number in the result
                for (l = 0; l < res[i].length; l++) {
                  //compare to each number in the special rule categories rule (j k) would be [0.3,0.432,0.334... for all 7 categories]
                  //if any are over, then we do not meet this special rule
                  if (res[i][l] > yikes_or_nah.specialRules[j][k][l]) {
                    maybeNotYikes = false;
                    // console.log(yikes_or_nah.tweakAllowPhrases[i]);
                    // console.log(yikes_or_nah.specialRules[j][k]);
                    // console.log(j,k,l);
                    break;
                  }
                  //but if we get through all 7 for any of them
                }
                //with maybe not yikes still true
                if (maybeNotYikes) {
                  yikes = false;
                  break;
                }
              }
              //break again to stop further checks in other softdissalow categories
              if (maybeNotYikes) {
                yikes = false;
                break;
              }
            }
          }
        }
        else {
          yikes = true;
        }
        yikesArray[i] = yikes
      }


      callback(yikesArray);
      //the nn results look like this 
      /*
            
            {
              "label": "identity_attack",
              "results": [{
                //                [probability it is ok, probs its yikes(we just use this)]
                "probabilities": [0.9659664034843445, 0.03403361141681671],
                "match": false    //we dont use this, create special rules instead 
              }]
            },
            {
              "label": "insult",
              "results": [{
                "probabilities": [0.08124706149101257, 0.9187529683113098],
                "match": true
              }]
            },
            ...
            ..........
            ........
            ........
             */
    };


    //example callback function
    // function handleResults(res) {
    //   console.log(res);
    //   //for i in res do something, 
    // }
    //example usage
    // yikes_or_nah.checkEm(yikes_or_nah.tweakAllowPhrases, handleResults)
    return yikes_or_nah;
  }());