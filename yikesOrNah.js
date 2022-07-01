var yikes_or_nah = (function () {
  function loadScript(url, callback) {
    // Adding the script tag to the head as suggested before
    var head = document.head;
    var script = document.createElement("script");
    script.type = "text/javascript";
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

  yikes_or_nah = {};

  //load json
  fetch("./yikesOrNah.json")
    .then((response) => {
      return response.json();
    })
    .then((jsondata) => (yikes_or_nah = jsonConcat(jsondata, yikes_or_nah)));

  function jsonConcat(o1, o2) {
    for (var key in o2) {
      o1[key] = o2[key];
    }
    return o1;
  }
  // console.log(yikes_or_nah);

  var Latinise = {};
  Latinise.latin_map = {
    "0": "o",
    "1": "i",
    "3": "e",
    "4": "a",
    "5": "s",
    "9": "g",
    "$": "s",
    "@": "a",
    "B": "b",
    "D": "d",
    "E": "e",
    "F": "f",
    "G": "g",
    "I": "l",
    "J": "j",
    "K": "k",
    "M": "m",
    "O": "o",
    "P": "p",
    "Q": "q",
    "S": "s",
    "T": "t",
    "V": "v",
    "X": "x",
    "Y": "y",
    "Z": "z",
    "b": "b",
    "c": "c",
    "d": "d",
    "f": "f",
    "g": "g",
    "h": "h",
    "i": "i",
    "j": "j",
    "k": "k",
    "l": "l",
    "m": "m",
    "o": "o",
    "p": "p",
    "q": "q",
    "r": "r",
    "s": "s",
    "t": "t",
    "v": "v",
    "w": "w",
    "x": "x",
    "y": "y",
    "z": "z",
    "|": "l",
    "¢": "c",
    "£": "f",
    "¥": "y",
    "§": "s",
    "µ": "u",
    "Ð": "d",
    "×": "x",
    "Ø": "o",
    "ß": "b",
    "å": "a",
    "ç": "c",
    "ê": "e",
    "ì": "i",
    "ï": "i",
    "ð": "o",
    "ñ": "n",
    "þ": "p",
    "ą": "a",
    "Ć": "c",
    "Č": "c",
    "Ď": "d",
    "Đ": "d",
    "đ": "d",
    "ē": "e",
    "Ğ": "g",
    "Ĥ": "h",
    "Ħ": "h",
    "ħ": "h",
    "ı": "i",
    "Ĵ": "j",
    "ķ": "k",
    "Ĺ": "l",
    "ł": "i",
    "Ň": "n",
    "ŋ": "n",
    "ŕ": "r",
    "Ř": "r",
    "Ş": "s",
    "ş": "s",
    "ţ": "t",
    "Ť": "t",
    "Ŧ": "f",
    "ų": "u",
    "Ŵ": "w",
    "Ż": "z",
    "Ž": "z",
    "ž": "z",
    "ſ": "f",
    "Ƅ": "b",
    "ƈ": "c",
    "ƍ": "g",
    "Ƒ": "f",
    "ƒ": "f",
    "Ɩ": "l",
    "ƙ": "k",
    "ƚ": "t",
    "ơ": "o",
    "Ƥ": "p",
    "Ʀ": "r",
    "Ƨ": "s",
    "Ƭ": "t",
    "Ƴ": "y",
    "ƹ": "e",
    "ƽ": "s",
    "ǀ": "l",
    "Ǘ": "u",
    "ǝ": "e",
    "ǟ": "a",
    "Ǫ": "q",
    "ǫ": "g",
    "ȥ": "z",
    "ȶ": "t",
    "Ʉ": "u",
    "Ɇ": "e",
    "Ɋ": "q",
    "Ɏ": "y",
    "ɐ": "a",
    "ɑ": "a",
    "ɒ": "a",
    "ɓ": "g",
    "ɔ": "c",
    "ɖ": "d",
    "ɘ": "e",
    "ɛ": "e",
    "ɟ": "f",
    "ɠ": "g",
    "ɡ": "g",
    "ɢ": "g",
    "ɣ": "y",
    "ɥ": "h",
    "ɦ": "h",
    "ɧ": "h",
    "ɨ": "i",
    "ɩ": "i",
    "ɪ": "i",
    "ɬ": "t",
    "ɭ": "l",
    "ɮ": "b",
    "ɯ": "w",
    "ɱ": "m",
    "ɳ": "n",
    "ɴ": "n",
    "ɹ": "r",
    "ɾ": "r",
    "ɿ": "r",
    "ʀ": "r",
    "ʂ": "s",
    "ʄ": "f",
    "ʅ": "l",
    "ʇ": "t",
    "ʊ": "u",
    "ʋ": "u",
    "ʍ": "m",
    "ʎ": "y",
    "ʏ": "y",
    "ʐ": "z",
    "ʑ": "z",
    "ʙ": "b",
    "ʜ": "h",
    "ʝ": "j",
    "ʞ": "k",
    "ʟ": "l",
    "ʰ": "h",
    "ʲ": "j",
    "ʳ": "r",
    "ʷ": "w",
    "ʸ": "y",
    "˛": "i",
    "ˡ": "l",
    "ˢ": "s",
    "ˣ": "x",
    "ͺ": "i",
    "Ϳ": "j",
    "Ή": "h",
    "Α": "a",
    "Β": "b",
    "Δ": "a",
    "Ε": "e",
    "Ζ": "z",
    "Η": "h",
    "Ι": "l",
    "Κ": "k",
    "Λ": "a",
    "Μ": "m",
    "Ν": "n",
    "Ο": "o",
    "Ρ": "p",
    "Σ": "e",
    "Τ": "t",
    "Υ": "y",
    "Χ": "x",
    "ά": "a",
    "ή": "n",
    "ί": "i",
    "α": "a",
    "γ": "y",
    "ε": "e",
    "η": "n",
    "ι": "i",
    "ν": "v",
    "ο": "o",
    "ρ": "p",
    "ς": "c",
    "σ": "o",
    "τ": "t",
    "υ": "u",
    "χ": "x",
    "ω": "w",
    "ό": "o",
    "ϒ": "y",
    "ϙ": "q",
    "Ϝ": "f",
    "ϝ": "f",
    "ϱ": "p",
    "ϲ": "c",
    "ϳ": "j",
    "Ϲ": "c",
    "Ϻ": "m",
    "Ѕ": "s",
    "І": "l",
    "Ј": "j",
    "Ў": "y",
    "А": "a",
    "В": "b",
    "Е": "e",
    "Ж": "x",
    "К": "k",
    "М": "m",
    "Н": "h",
    "О": "o",
    "П": "n",
    "Р": "p",
    "С": "c",
    "Т": "t",
    "У": "y",
    "Х": "x",
    "Ц": "u",
    "Щ": "w",
    "Ь": "b",
    "Я": "r",
    "а": "a",
    "в": "b",
    "г": "r",
    "е": "e",
    "к": "k",
    "м": "m",
    "н": "h",
    "о": "o",
    "р": "p",
    "с": "c",
    "т": "t",
    "у": "y",
    "х": "x",
    "ч": "y",
    "я": "r",
    "ђ": "h",
    "є": "e",
    "ѕ": "s",
    "і": "i",
    "ј": "j",
    "ѡ": "w",
    "Ѵ": "v",
    "ѵ": "v",
    "Ѷ": "v",
    "ҍ": "b",
    "Ҝ": "k",
    "ҟ": "k",
    "Ү": "y",
    "ү": "y",
    "ҳ": "x",
    "һ": "h",
    "ҽ": "e",
    "Ӏ": "l",
    "ӄ": "k",
    "ӏ": "i",
    "Ө": "o",
    "Ӽ": "x",
    "Ӿ": "x",
    "ԁ": "d",
    "ԃ": "d",
    "ԋ": "h",
    "Ԍ": "g",
    "ԍ": "g",
    "ԛ": "q",
    "Ԝ": "w",
    "ԝ": "w",
    "Հ": "z",
    "Շ": "t",
    "Ս": "u",
    "Տ": "s",
    "Օ": "o",
    "ա": "w",
    "գ": "q",
    "զ": "q",
    "է": "t",
    "ժ": "d",
    "հ": "h",
    "ղ": "n",
    "մ": "u",
    "ո": "n",
    "չ": "e",
    "ռ": "n",
    "ս": "u",
    "վ": "y",
    "ց": "g",
    "ք": "f",
    "օ": "o",
    "ֆ": "s",
    "׀": "l",
    "א": "x",
    "ו": "l",
    "ט": "v",
    "ן": "l",
    "נ": "j",
    "ס": "o",
    "ץ": "y",
    "ק": "p",
    "ש": "v",
    "ا": "l",
    "ه": "o",
    "١": "l",
    "٥": "o",
    "٧": "v",
    "ڶ": "j",
    "ھ": "o",
    "ہ": "o",
    "ە": "o",
    "۱": "l",
    "۵": "o",
    "۷": "v",
    "߀": "o",
    "ߊ": "l",
    "०": "o",
    "০": "o",
    "੦": "o",
    "૦": "o",
    "ଠ": "o",
    "୦": "o",
    "௦": "o",
    "ం": "o",
    "౦": "o",
    "ಂ": "o",
    "೦": "o",
    "ം": "o",
    "ഠ": "o",
    "൦": "o",
    "ං": "o",
    "ค": "a",
    "ง": "v",
    "น": "u",
    "ภ": "n",
    "ย": "u",
    "ร": "s",
    "ว": "j",
    "ฬ": "w",
    "ฯ": "y",
    "฿": "b",
    "เ": "i",
    "๏": "o",
    "๐": "o",
    "๑": "q",
    "๒": "b",
    "๓": "m",
    "๔": "d",
    "๖": "b",
    "ງ": "g",
    "ຊ": "z",
    "ຖ": "n",
    "ຟ": "w",
    "໐": "o",
    "໓": "d",
    "ཞ": "r",
    "ဝ": "o",
    "၀": "o",
    "Ⴆ": "b",
    "ყ": "y",
    "ც": "b",
    "ჿ": "o",
    "ᄂ": "l",
    "ᄃ": "c",
    "ሀ": "u",
    "ዐ": "o",
    "ጀ": "x",
    "ፈ": "c",
    "ፚ": "z",
    "Ꭰ": "d",
    "Ꭱ": "r",
    "Ꭲ": "t",
    "Ꭴ": "q",
    "Ꭵ": "i",
    "Ꭶ": "f",
    "Ꭷ": "o",
    "Ꭹ": "y",
    "Ꭺ": "a",
    "Ꭻ": "j",
    "Ꭼ": "e",
    "Ꭾ": "p",
    "Ꮃ": "w",
    "Ꮄ": "d",
    "Ꮆ": "g",
    "Ꮇ": "m",
    "Ꮈ": "f",
    "Ꮋ": "h",
    "Ꮍ": "y",
    "Ꮐ": "g",
    "Ꮑ": "n",
    "Ꮒ": "h",
    "Ꮓ": "z",
    "Ꮗ": "w",
    "Ꮙ": "v",
    "Ꮛ": "e",
    "Ꮟ": "b",
    "Ꮢ": "r",
    "Ꮤ": "w",
    "Ꮥ": "s",
    "Ꮦ": "t",
    "Ꮩ": "v",
    "Ꮪ": "s",
    "Ꮭ": "l",
    "Ꮮ": "l",
    "Ꮯ": "c",
    "Ꮰ": "j",
    "Ꮲ": "p",
    "Ꮶ": "k",
    "Ꮷ": "d",
    "Ꮼ": "u",
    "Ᏸ": "b",
    "Ᏻ": "g",
    "Ᏼ": "b",
    "ᏻ": "g",
    "ᏼ": "b",
    "ᐯ": "v",
    "ᐸ": "c",
    "ᐺ": "v",
    "ᑌ": "u",
    "ᑎ": "n",
    "ᑕ": "c",
    "ᑘ": "u",
    "ᑢ": "c",
    "ᑫ": "q",
    "ᑭ": "p",
    "ᑯ": "d",
    "ᑲ": "b",
    "ᒍ": "j",
    "ᒎ": "j",
    "ᒚ": "j",
    "ᒪ": "l",
    "ᓍ": "o",
    "ᓰ": "i",
    "ᔕ": "s",
    "ᕁ": "x",
    "ᕲ": "d",
    "ᕴ": "q",
    "ᕵ": "p",
    "ᕼ": "h",
    "ᕽ": "x",
    "ᖇ": "r",
    "ᖯ": "b",
    "ᖴ": "f",
    "ᖶ": "t",
    "ᖻ": "y",
    "ᖽ": "k",
    "ᗅ": "a",
    "ᗞ": "d",
    "ᗩ": "a",
    "ᗪ": "d",
    "ᗯ": "w",
    "ᗰ": "m",
    "ᗱ": "e",
    "ᗷ": "b",
    "ᘉ": "n",
    "ᘔ": "z",
    "ᘜ": "g",
    "ᘺ": "w",
    "ᘻ": "m",
    "ᘿ": "e",
    "᙭": "x",
    "᙮": "x",
    "ᚱ": "r",
    "ᚷ": "x",
    "ᛁ": "l",
    "ᛒ": "b",
    "ᛕ": "k",
    "ᛖ": "m",
    "ᴀ": "a",
    "ᴄ": "c",
    "ᴅ": "d",
    "ᴇ": "e",
    "ᴊ": "j",
    "ᴋ": "k",
    "ᴍ": "m",
    "ᴎ": "n",
    "ᴏ": "o",
    "ᴑ": "o",
    "ᴘ": "p",
    "ᴛ": "t",
    "ᴜ": "u",
    "ᴠ": "v",
    "ᴡ": "w",
    "ᴢ": "z",
    "ᴦ": "r",
    "ᴩ": "p",
    "ᵃ": "a",
    "ᵇ": "b",
    "ᵈ": "d",
    "ᵉ": "e",
    "ᵍ": "g",
    "ᵏ": "k",
    "ᵐ": "m",
    "ᵒ": "o",
    "ᵖ": "p",
    "ᵗ": "t",
    "ᵘ": "u",
    "ᵛ": "v",
    "ᵠ": "q",
    "ᵢ": "i",
    "ᵣ": "r",
    "ᵤ": "u",
    "ᵥ": "v",
    "ᶃ": "g",
    "ᶌ": "y",
    "ᶜ": "c",
    "ᶠ": "f",
    "ᶰ": "n",
    "ᶻ": "z",
    "ẝ": "f",
    "ợ": "q",
    "Ữ": "u",
    "ỿ": "y",
    "ι": "i",
    "ῳ": "w",
    "†": "t",
    "ⁱ": "i",
    "ⁿ": "n",
    "ₐ": "a",
    "ₑ": "e",
    "ₒ": "o",
    "ₓ": "x",
    "ₕ": "h",
    "ₖ": "k",
    "ₗ": "l",
    "ₘ": "m",
    "ₙ": "n",
    "ₚ": "p",
    "ₛ": "s",
    "ₜ": "t",
    "₣": "f",
    "₥": "m",
    "₦": "n",
    "₩": "w",
    "₭": "k",
    "₮": "t",
    "₱": "p",
    "₲": "g",
    "₳": "a",
    "₴": "s",
    "₵": "c",
    "ℂ": "c",
    "ℊ": "g",
    "ℋ": "h",
    "ℌ": "h",
    "ℍ": "h",
    "ℎ": "h",
    "ℐ": "l",
    "ℑ": "l",
    "ℒ": "l",
    "ℓ": "l",
    "ℕ": "n",
    "℘": "p",
    "ℙ": "p",
    "ℚ": "q",
    "ℛ": "r",
    "ℜ": "r",
    "ℝ": "r",
    "ℤ": "z",
    "ℨ": "z",
    "K": "k",
    "ℬ": "b",
    "ℭ": "c",
    "℮": "e",
    "ℯ": "e",
    "ℰ": "e",
    "ℱ": "f",
    "ℳ": "m",
    "ℴ": "o",
    "ℹ": "i",
    "ℽ": "y",
    "ⅅ": "d",
    "ⅆ": "d",
    "ⅇ": "e",
    "ⅈ": "i",
    "ⅉ": "j",
    "Ⅰ": "l",
    "Ⅴ": "v",
    "Ⅹ": "x",
    "Ⅼ": "l",
    "Ⅽ": "c",
    "Ⅾ": "d",
    "Ⅿ": "m",
    "ⅰ": "i",
    "ⅴ": "v",
    "ⅹ": "x",
    "ⅼ": "l",
    "ⅽ": "c",
    "ⅾ": "d",
    "∂": "e",
    "√": "v",
    "∣": "l",
    "∨": "v",
    "∪": "u",
    "⊂": "c",
    "⊤": "t",
    "⋁": "v",
    "⋃": "u",
    "⋿": "e",
    "⍳": "i",
    "⍴": "p",
    "⍺": "a",
    "⏽": "l",
    "①": "i",
    "③": "e",
    "④": "a",
    "⑤": "s",
    "⑦": "t",
    "⑨": "g",
    "⑩": "io",
    "⑪": "ii",
    "⑬": "ie",
    "⑭": "ia",
    "⑮": "is",
    "⑰": "it",
    "⑲": "ig",
    "Ⓐ": "a",
    "Ⓑ": "b",
    "Ⓒ": "c",
    "Ⓓ": "d",
    "Ⓔ": "e",
    "Ⓕ": "f",
    "Ⓖ": "g",
    "Ⓗ": "h",
    "Ⓘ": "i",
    "Ⓙ": "j",
    "Ⓚ": "k",
    "Ⓛ": "l",
    "Ⓜ": "m",
    "Ⓝ": "n",
    "Ⓞ": "o",
    "Ⓟ": "p",
    "Ⓠ": "q",
    "Ⓡ": "r",
    "Ⓢ": "s",
    "Ⓣ": "t",
    "Ⓤ": "u",
    "Ⓥ": "v",
    "Ⓦ": "w",
    "Ⓧ": "x",
    "Ⓨ": "y",
    "Ⓩ": "z",
    "ⓐ": "a",
    "ⓑ": "b",
    "ⓒ": "c",
    "ⓓ": "d",
    "ⓔ": "e",
    "ⓕ": "f",
    "ⓖ": "g",
    "ⓗ": "h",
    "ⓘ": "i",
    "ⓙ": "j",
    "ⓚ": "k",
    "ⓛ": "l",
    "ⓜ": "m",
    "ⓝ": "n",
    "ⓞ": "o",
    "ⓟ": "p",
    "ⓠ": "q",
    "ⓡ": "r",
    "ⓢ": "s",
    "ⓣ": "t",
    "ⓤ": "u",
    "ⓥ": "v",
    "ⓦ": "w",
    "ⓧ": "x",
    "ⓨ": "y",
    "ⓩ": "z",
    "⓪": "o",
    "⓫": "ii",
    "⓭": "ie",
    "⓮": "ia",
    "⓯": "is",
    "⓳": "ig",
    "⓵": "i",
    "⓷": "e",
    "⓸": "a",
    "⓹": "s",
    "⓽": "g",
    "⓾": "io",
    "⓿": "o",
    "╳": "x",
    "♡": "o",
    "❀": "o",
    "❶": "i",
    "❸": "e",
    "❹": "a",
    "❺": "s",
    "❼": "t",
    "❾": "g",
    "❿": "io",
    "⟙": "t",
    "⤫": "x",
    "⤬": "x",
    "⨯": "x",
    "Ⱡ": "l",
    "Ɽ": "r",
    "Ⱨ": "h",
    "Ⱬ": "z",
    "ⱼ": "j",
    "ⲅ": "r",
    "Ⲏ": "h",
    "Ⲓ": "l",
    "Ⲕ": "k",
    "Ⲙ": "m",
    "Ⲛ": "n",
    "Ⲟ": "o",
    "ⲟ": "o",
    "Ⲣ": "p",
    "ⲣ": "p",
    "Ⲥ": "c",
    "ⲥ": "c",
    "Ⲧ": "t",
    "Ⲩ": "y",
    "Ⲭ": "x",
    "Ⳑ": "l",
    "ⳑ": "l",
    "ⴸ": "v",
    "ⴹ": "e",
    "ⵏ": "l",
    "ⵔ": "o",
    "ⵕ": "q",
    "ⵝ": "x",
    "⸦": "c",
    "〇": "o",
    "し": "l",
    "と": "y",
    "の": "o",
    "ひ": "u",
    "り": "d",
    "ゐ": "q",
    "ん": "h",
    "ズ": "k",
    "ム": "g",
    "メ": "x",
    "ヨ": "e",
    "レ": "v",
    "ㄒ": "t",
    "ㄖ": "o",
    "ㄚ": "y",
    "ㄥ": "l",
    "ㄩ": "u",
    "㉚": "eo",
    "㉛": "ei",
    "㉝": "ee",
    "㉞": "ea",
    "㉟": "es",
    "㊉": "t",
    "㊴": "eg",
    "㊵": "ao",
    "㊶": "ai",
    "㊸": "ae",
    "㊹": "aa",
    "㊺": "as",
    "㊼": "at",
    "㊾": "ag",
    "㊿": "so",
    "丂": "s",
    "丅": "t",
    "丨": "i",
    "丹": "a",
    "乂": "x",
    "乃": "b",
    "乇": "e",
    "乍": "f",
    "乙": "z",
    "亡": "c",
    "冊": "m",
    "几": "n",
    "凵": "u",
    "刀": "n",
    "勹": "j",
    "匚": "c",
    "卂": "a",
    "千": "f",
    "卄": "h",
    "卞": "t",
    "卩": "p",
    "句": "d",
    "呂": "g",
    "回": "o",
    "尸": "p",
    "尺": "r",
    "山": "w",
    "工": "i",
    "己": "s",
    "廾": "h",
    "日": "b",
    "爪": "m",
    "片": "k",
    "甲": "q",
    "ꓐ": "b",
    "ꓑ": "p",
    "ꓒ": "d",
    "ꓓ": "d",
    "ꓔ": "t",
    "ꓖ": "g",
    "ꓗ": "k",
    "ꓙ": "j",
    "ꓚ": "c",
    "ꓜ": "z",
    "ꓝ": "f",
    "ꓟ": "m",
    "ꓠ": "n",
    "ꓡ": "l",
    "ꓢ": "s",
    "ꓣ": "r",
    "ꓦ": "v",
    "ꓧ": "h",
    "ꓪ": "w",
    "ꓫ": "x",
    "ꓬ": "y",
    "ꓮ": "a",
    "ꓰ": "e",
    "ꓲ": "l",
    "ꓳ": "o",
    "ꓴ": "u",
    "ꙅ": "s",
    "ꙇ": "i",
    "ꛟ": "v",
    "ꜰ": "f",
    "ꜱ": "s",
    "ꞁ": "j",
    "Ꞙ": "f",
    "ꞙ": "f",
    "ꞟ": "u",
    "Ʝ": "j",
    "Ꭓ": "x",
    "Ꞵ": "b",
    "ꬲ": "e",
    "ꬵ": "f",
    "ꬽ": "o",
    "ꭇ": "r",
    "ꭈ": "r",
    "ꭎ": "u",
    "ꭒ": "u",
    "ꭚ": "y",
    "ꭰ": "d",
    "ꭱ": "r",
    "ꭲ": "t",
    "ꭵ": "i",
    "ꭺ": "a",
    "ꭻ": "j",
    "ꭼ": "e",
    "ꮁ": "r",
    "ꮃ": "w",
    "ꮋ": "h",
    "ꮐ": "g",
    "ꮓ": "z",
    "ꮢ": "r",
    "ꮩ": "v",
    "ꮪ": "s",
    "ꮮ": "l",
    "ꮯ": "c",
    "ꮲ": "p",
    "𐊂": "b",
    "𐊆": "e",
    "𐊇": "f",
    "𐊊": "l",
    "𐊐": "x",
    "𐊒": "o",
    "𐊕": "p",
    "𐊖": "s",
    "𐊗": "t",
    "𐊠": "a",
    "𐊡": "b",
    "𐊢": "c",
    "𐊥": "f",
    "𐊫": "o",
    "𐊰": "m",
    "𐊱": "t",
    "𐊲": "y",
    "𐊴": "x",
    "𐋏": "h",
    "𐋵": "z",
    "𐌁": "b",
    "𐌂": "c",
    "𐌉": "l",
    "𐌑": "m",
    "𐌕": "t",
    "𐌗": "x",
    "𐌠": "l",
    "𐌢": "x",
    "𐐄": "o",
    "𐐕": "c",
    "𐐛": "l",
    "𐐠": "s",
    "𐐬": "o",
    "𐐽": "c",
    "𐑃": "l",
    "𐑈": "s",
    "𐒴": "r",
    "𐓂": "o",
    "𐓎": "u",
    "𐓪": "o",
    "𐓶": "u",
    "𐔓": "n",
    "𐔖": "o",
    "𐔘": "k",
    "𐔜": "c",
    "𐔝": "v",
    "𐔥": "f",
    "𐔦": "l",
    "𐔧": "x",
    "𑓐": "o",
    "𑜆": "v",
    "𑜊": "w",
    "𑜎": "w",
    "𑜏": "w",
    "𑢠": "v",
    "𑢢": "f",
    "𑢣": "l",
    "𑢤": "y",
    "𑢦": "e",
    "𑢩": "z",
    "𑢮": "e",
    "𑢲": "l",
    "𑢵": "o",
    "𑢸": "u",
    "𑢼": "t",
    "𑣀": "v",
    "𑣁": "s",
    "𑣂": "f",
    "𑣃": "i",
    "𑣄": "z",
    "𑣈": "o",
    "𑣗": "o",
    "𑣘": "u",
    "𑣜": "y",
    "𑣠": "o",
    "𑣥": "z",
    "𑣦": "w",
    "𑣩": "c",
    "𑣬": "x",
    "𑣯": "w",
    "𑣲": "c",
    "𖼈": "v",
    "𖼊": "t",
    "𖼖": "l",
    "𖼨": "l",
    "𖼵": "r",
    "𖼺": "s",
    "𖽀": "a",
    "𖽂": "u",
    "𖽃": "y",
    "𝈍": "v",
    "𝈓": "f",
    "𝈖": "r",
    "𝈪": "l",
    "𝐀": "a",
    "𝐁": "b",
    "𝐂": "c",
    "𝐃": "d",
    "𝐄": "e",
    "𝐅": "f",
    "𝐆": "g",
    "𝐇": "h",
    "𝐈": "l",
    "𝐉": "j",
    "𝐊": "k",
    "𝐋": "l",
    "𝐌": "m",
    "𝐍": "n",
    "𝐎": "o",
    "𝐏": "p",
    "𝐐": "q",
    "𝐑": "r",
    "𝐒": "s",
    "𝐓": "t",
    "𝐔": "u",
    "𝐕": "v",
    "𝐖": "w",
    "𝐗": "x",
    "𝐘": "y",
    "𝐙": "z",
    "𝐚": "a",
    "𝐛": "b",
    "𝐜": "c",
    "𝐝": "d",
    "𝐞": "e",
    "𝐟": "f",
    "𝐠": "g",
    "𝐡": "h",
    "𝐢": "i",
    "𝐣": "j",
    "𝐤": "k",
    "𝐥": "l",
    "𝐦": "m",
    "𝐧": "n",
    "𝐨": "o",
    "𝐩": "p",
    "𝐪": "q",
    "𝐫": "r",
    "𝐬": "s",
    "𝐭": "t",
    "𝐮": "u",
    "𝐯": "v",
    "𝐰": "w",
    "𝐱": "x",
    "𝐲": "y",
    "𝐳": "z",
    "𝐴": "a",
    "𝐵": "b",
    "𝐶": "c",
    "𝐷": "d",
    "𝐸": "e",
    "𝐹": "f",
    "𝐺": "g",
    "𝐻": "h",
    "𝐼": "l",
    "𝐽": "j",
    "𝐾": "k",
    "𝐿": "l",
    "𝑀": "m",
    "𝑁": "n",
    "𝑂": "o",
    "𝑃": "p",
    "𝑄": "q",
    "𝑅": "r",
    "𝑆": "s",
    "𝑇": "t",
    "𝑈": "u",
    "𝑉": "v",
    "𝑊": "w",
    "𝑋": "x",
    "𝑌": "y",
    "𝑍": "z",
    "𝑎": "a",
    "𝑏": "b",
    "𝑐": "c",
    "𝑑": "d",
    "𝑒": "e",
    "𝑓": "f",
    "𝑔": "g",
    "𝑖": "i",
    "𝑗": "j",
    "𝑘": "k",
    "𝑙": "l",
    "𝑛": "n",
    "𝑜": "o",
    "𝑝": "p",
    "𝑞": "q",
    "𝑟": "r",
    "𝑠": "s",
    "𝑡": "t",
    "𝑢": "u",
    "𝑣": "v",
    "𝑤": "w",
    "𝑥": "x",
    "𝑦": "y",
    "𝑧": "z",
    "𝑨": "a",
    "𝑩": "b",
    "𝑪": "c",
    "𝑫": "d",
    "𝑬": "e",
    "𝑭": "f",
    "𝑮": "g",
    "𝑯": "h",
    "𝑰": "l",
    "𝑱": "j",
    "𝑲": "k",
    "𝑳": "l",
    "𝑴": "m",
    "𝑵": "n",
    "𝑶": "o",
    "𝑷": "p",
    "𝑸": "q",
    "𝑹": "r",
    "𝑺": "s",
    "𝑻": "t",
    "𝑼": "u",
    "𝑽": "v",
    "𝑾": "w",
    "𝑿": "x",
    "𝒀": "y",
    "𝒁": "z",
    "𝒂": "a",
    "𝒃": "b",
    "𝒄": "c",
    "𝒅": "d",
    "𝒆": "e",
    "𝒇": "f",
    "𝒈": "g",
    "𝒉": "h",
    "𝒊": "i",
    "𝒋": "j",
    "𝒌": "k",
    "𝒍": "l",
    "𝒏": "n",
    "𝒐": "o",
    "𝒑": "p",
    "𝒒": "q",
    "𝒓": "r",
    "𝒔": "s",
    "𝒕": "t",
    "𝒖": "u",
    "𝒗": "v",
    "𝒘": "w",
    "𝒙": "x",
    "𝒚": "y",
    "𝒛": "z",
    "𝒜": "a",
    "𝒞": "c",
    "𝒟": "d",
    "𝒢": "g",
    "𝒥": "j",
    "𝒦": "k",
    "𝒩": "n",
    "𝒪": "o",
    "𝒫": "p",
    "𝒬": "q",
    "𝒮": "s",
    "𝒯": "t",
    "𝒰": "u",
    "𝒱": "v",
    "𝒲": "w",
    "𝒳": "x",
    "𝒴": "y",
    "𝒵": "z",
    "𝒶": "a",
    "𝒷": "b",
    "𝒸": "c",
    "𝒹": "d",
    "𝒻": "f",
    "𝒽": "h",
    "𝒾": "i",
    "𝒿": "j",
    "𝓀": "k",
    "𝓁": "l",
    "𝓂": "m",
    "𝓃": "n",
    "𝓅": "p",
    "𝓆": "q",
    "𝓇": "r",
    "𝓈": "s",
    "𝓉": "t",
    "𝓊": "u",
    "𝓋": "v",
    "𝓌": "w",
    "𝓍": "x",
    "𝓎": "y",
    "𝓏": "z",
    "𝓐": "a",
    "𝓑": "b",
    "𝓒": "c",
    "𝓓": "d",
    "𝓔": "e",
    "𝓕": "f",
    "𝓖": "g",
    "𝓗": "h",
    "𝓘": "l",
    "𝓙": "j",
    "𝓚": "k",
    "𝓛": "l",
    "𝓜": "m",
    "𝓝": "n",
    "𝓞": "o",
    "𝓟": "p",
    "𝓠": "q",
    "𝓡": "r",
    "𝓢": "s",
    "𝓣": "t",
    "𝓤": "u",
    "𝓥": "v",
    "𝓦": "w",
    "𝓧": "x",
    "𝓨": "y",
    "𝓩": "z",
    "𝓪": "a",
    "𝓫": "b",
    "𝓬": "c",
    "𝓭": "d",
    "𝓮": "e",
    "𝓯": "f",
    "𝓰": "g",
    "𝓱": "h",
    "𝓲": "i",
    "𝓳": "j",
    "𝓴": "k",
    "𝓵": "l",
    "𝓶": "m",
    "𝓷": "n",
    "𝓸": "o",
    "𝓹": "p",
    "𝓺": "q",
    "𝓻": "r",
    "𝓼": "s",
    "𝓽": "t",
    "𝓾": "u",
    "𝓿": "v",
    "𝔀": "w",
    "𝔁": "x",
    "𝔂": "y",
    "𝔃": "z",
    "𝔄": "a",
    "𝔅": "b",
    "𝔇": "d",
    "𝔈": "e",
    "𝔉": "f",
    "𝔊": "g",
    "𝔍": "j",
    "𝔎": "k",
    "𝔏": "l",
    "𝔐": "m",
    "𝔑": "n",
    "𝔒": "o",
    "𝔓": "p",
    "𝔔": "q",
    "𝔖": "s",
    "𝔗": "t",
    "𝔘": "u",
    "𝔙": "v",
    "𝔚": "w",
    "𝔛": "x",
    "𝔜": "y",
    "𝔞": "a",
    "𝔟": "b",
    "𝔠": "c",
    "𝔡": "d",
    "𝔢": "e",
    "𝔣": "f",
    "𝔤": "g",
    "𝔥": "h",
    "𝔦": "i",
    "𝔧": "j",
    "𝔨": "k",
    "𝔩": "l",
    "𝔪": "m",
    "𝔫": "n",
    "𝔬": "o",
    "𝔭": "p",
    "𝔮": "q",
    "𝔯": "r",
    "𝔰": "s",
    "𝔱": "t",
    "𝔲": "u",
    "𝔳": "v",
    "𝔴": "w",
    "𝔵": "x",
    "𝔶": "y",
    "𝔷": "z",
    "𝔸": "a",
    "𝔹": "b",
    "𝔻": "d",
    "𝔼": "e",
    "𝔽": "f",
    "𝔾": "g",
    "𝕀": "l",
    "𝕁": "j",
    "𝕂": "k",
    "𝕃": "l",
    "𝕄": "m",
    "𝕆": "o",
    "𝕊": "s",
    "𝕋": "t",
    "𝕌": "u",
    "𝕍": "v",
    "𝕎": "w",
    "𝕏": "x",
    "𝕐": "y",
    "𝕒": "a",
    "𝕓": "b",
    "𝕔": "c",
    "𝕕": "d",
    "𝕖": "e",
    "𝕗": "f",
    "𝕘": "g",
    "𝕙": "h",
    "𝕚": "i",
    "𝕛": "j",
    "𝕜": "k",
    "𝕝": "l",
    "𝕞": "m",
    "𝕟": "n",
    "𝕠": "o",
    "𝕡": "p",
    "𝕢": "q",
    "𝕣": "r",
    "𝕤": "s",
    "𝕥": "t",
    "𝕦": "u",
    "𝕧": "v",
    "𝕨": "w",
    "𝕩": "x",
    "𝕪": "y",
    "𝕫": "z",
    "𝕬": "a",
    "𝕭": "b",
    "𝕮": "c",
    "𝕯": "d",
    "𝕰": "e",
    "𝕱": "f",
    "𝕲": "g",
    "𝕳": "h",
    "𝕴": "l",
    "𝕵": "j",
    "𝕶": "k",
    "𝕷": "l",
    "𝕸": "m",
    "𝕹": "n",
    "𝕺": "o",
    "𝕻": "p",
    "𝕼": "q",
    "𝕽": "r",
    "𝕾": "s",
    "𝕿": "t",
    "𝖀": "u",
    "𝖁": "v",
    "𝖂": "w",
    "𝖃": "x",
    "𝖄": "y",
    "𝖅": "z",
    "𝖆": "a",
    "𝖇": "b",
    "𝖈": "c",
    "𝖉": "d",
    "𝖊": "e",
    "𝖋": "f",
    "𝖌": "g",
    "𝖍": "h",
    "𝖎": "i",
    "𝖏": "j",
    "𝖐": "k",
    "𝖑": "l",
    "𝖒": "m",
    "𝖓": "n",
    "𝖔": "o",
    "𝖕": "p",
    "𝖖": "q",
    "𝖗": "r",
    "𝖘": "s",
    "𝖙": "t",
    "𝖚": "u",
    "𝖛": "v",
    "𝖜": "w",
    "𝖝": "x",
    "𝖞": "y",
    "𝖟": "z",
    "𝖠": "a",
    "𝖡": "b",
    "𝖢": "c",
    "𝖣": "d",
    "𝖤": "e",
    "𝖥": "f",
    "𝖦": "g",
    "𝖧": "h",
    "𝖨": "l",
    "𝖩": "j",
    "𝖪": "k",
    "𝖫": "l",
    "𝖬": "m",
    "𝖭": "n",
    "𝖮": "o",
    "𝖯": "p",
    "𝖰": "q",
    "𝖱": "r",
    "𝖲": "s",
    "𝖳": "t",
    "𝖴": "u",
    "𝖵": "v",
    "𝖶": "w",
    "𝖷": "x",
    "𝖸": "y",
    "𝖹": "z",
    "𝖺": "a",
    "𝖻": "b",
    "𝖼": "c",
    "𝖽": "d",
    "𝖾": "e",
    "𝖿": "f",
    "𝗀": "g",
    "𝗁": "h",
    "𝗂": "i",
    "𝗃": "j",
    "𝗄": "k",
    "𝗅": "l",
    "𝗇": "n",
    "𝗈": "o",
    "𝗉": "p",
    "𝗊": "q",
    "𝗋": "r",
    "𝗌": "s",
    "𝗍": "t",
    "𝗎": "u",
    "𝗏": "v",
    "𝗐": "w",
    "𝗑": "x",
    "𝗒": "y",
    "𝗓": "z",
    "𝗔": "a",
    "𝗕": "b",
    "𝗖": "c",
    "𝗗": "d",
    "𝗘": "e",
    "𝗙": "f",
    "𝗚": "g",
    "𝗛": "h",
    "𝗜": "l",
    "𝗝": "j",
    "𝗞": "k",
    "𝗟": "l",
    "𝗠": "m",
    "𝗡": "n",
    "𝗢": "o",
    "𝗣": "p",
    "𝗤": "q",
    "𝗥": "r",
    "𝗦": "s",
    "𝗧": "t",
    "𝗨": "u",
    "𝗩": "v",
    "𝗪": "w",
    "𝗫": "x",
    "𝗬": "y",
    "𝗭": "z",
    "𝗮": "a",
    "𝗯": "b",
    "𝗰": "c",
    "𝗱": "d",
    "𝗲": "e",
    "𝗳": "f",
    "𝗴": "g",
    "𝗵": "h",
    "𝗶": "i",
    "𝗷": "j",
    "𝗸": "k",
    "𝗹": "l",
    "𝗻": "n",
    "𝗼": "o",
    "𝗽": "p",
    "𝗾": "q",
    "𝗿": "r",
    "𝘀": "s",
    "𝘁": "t",
    "𝘂": "u",
    "𝘃": "v",
    "𝘄": "w",
    "𝘅": "x",
    "𝘆": "y",
    "𝘇": "z",
    "𝘈": "a",
    "𝘉": "b",
    "𝘊": "c",
    "𝘋": "d",
    "𝘌": "e",
    "𝘍": "f",
    "𝘎": "g",
    "𝘏": "h",
    "𝘐": "l",
    "𝘑": "j",
    "𝘒": "k",
    "𝘓": "l",
    "𝘔": "m",
    "𝘕": "n",
    "𝘖": "o",
    "𝘗": "p",
    "𝘘": "q",
    "𝘙": "r",
    "𝘚": "s",
    "𝘛": "t",
    "𝘜": "u",
    "𝘝": "v",
    "𝘞": "w",
    "𝘟": "x",
    "𝘠": "y",
    "𝘡": "z",
    "𝘢": "a",
    "𝘣": "b",
    "𝘤": "c",
    "𝘥": "d",
    "𝘦": "e",
    "𝘧": "f",
    "𝘨": "g",
    "𝘩": "h",
    "𝘪": "i",
    "𝘫": "j",
    "𝘬": "k",
    "𝘭": "l",
    "𝘮": "m",
    "𝘯": "n",
    "𝘰": "o",
    "𝘱": "p",
    "𝘲": "q",
    "𝘳": "r",
    "𝘴": "s",
    "𝘵": "t",
    "𝘶": "u",
    "𝘷": "v",
    "𝘸": "w",
    "𝘹": "x",
    "𝘺": "y",
    "𝘻": "z",
    "𝘼": "a",
    "𝘽": "b",
    "𝘾": "c",
    "𝘿": "d",
    "𝙀": "e",
    "𝙁": "f",
    "𝙂": "g",
    "𝙃": "h",
    "𝙄": "l",
    "𝙅": "j",
    "𝙆": "k",
    "𝙇": "l",
    "𝙈": "m",
    "𝙉": "n",
    "𝙊": "o",
    "𝙋": "p",
    "𝙌": "q",
    "𝙍": "r",
    "𝙎": "s",
    "𝙏": "t",
    "𝙐": "u",
    "𝙑": "v",
    "𝙒": "w",
    "𝙓": "x",
    "𝙔": "y",
    "𝙕": "z",
    "𝙖": "a",
    "𝙗": "b",
    "𝙘": "c",
    "𝙙": "d",
    "𝙚": "e",
    "𝙛": "f",
    "𝙜": "g",
    "𝙝": "h",
    "𝙞": "i",
    "𝙟": "j",
    "𝙠": "k",
    "𝙡": "l",
    "𝙢": "m",
    "𝙣": "n",
    "𝙤": "o",
    "𝙥": "p",
    "𝙦": "q",
    "𝙧": "r",
    "𝙨": "s",
    "𝙩": "t",
    "𝙪": "u",
    "𝙫": "v",
    "𝙬": "w",
    "𝙭": "x",
    "𝙮": "y",
    "𝙯": "z",
    "𝙰": "a",
    "𝙱": "b",
    "𝙲": "c",
    "𝙳": "d",
    "𝙴": "e",
    "𝙵": "f",
    "𝙶": "g",
    "𝙷": "h",
    "𝙸": "l",
    "𝙹": "j",
    "𝙺": "k",
    "𝙻": "l",
    "𝙼": "m",
    "𝙽": "n",
    "𝙾": "o",
    "𝙿": "p",
    "𝚀": "q",
    "𝚁": "r",
    "𝚂": "s",
    "𝚃": "t",
    "𝚄": "u",
    "𝚅": "v",
    "𝚆": "w",
    "𝚇": "x",
    "𝚈": "y",
    "𝚉": "z",
    "𝚊": "a",
    "𝚋": "b",
    "𝚌": "c",
    "𝚍": "d",
    "𝚎": "e",
    "𝚏": "f",
    "𝚐": "g",
    "𝚑": "h",
    "𝚒": "i",
    "𝚓": "j",
    "𝚔": "k",
    "𝚕": "l",
    "𝚖": "m",
    "𝚗": "n",
    "𝚘": "o",
    "𝚙": "p",
    "𝚚": "q",
    "𝚛": "r",
    "𝚜": "s",
    "𝚝": "t",
    "𝚞": "u",
    "𝚟": "v",
    "𝚠": "w",
    "𝚡": "x",
    "𝚢": "y",
    "𝚣": "z",
    "𝚤": "i",
    "𝚨": "a",
    "𝚩": "b",
    "𝚬": "e",
    "𝚭": "z",
    "𝚮": "h",
    "𝚰": "l",
    "𝚱": "k",
    "𝚳": "m",
    "𝚴": "n",
    "𝚶": "o",
    "𝚸": "p",
    "𝚻": "t",
    "𝚼": "y",
    "𝚾": "x",
    "𝛂": "a",
    "𝛄": "y",
    "𝛊": "i",
    "𝛎": "v",
    "𝛐": "o",
    "𝛒": "p",
    "𝛔": "o",
    "𝛕": "t",
    "𝛖": "u",
    "𝛠": "p",
    "𝛢": "a",
    "𝛣": "b",
    "𝛦": "e",
    "𝛧": "z",
    "𝛨": "h",
    "𝛪": "l",
    "𝛫": "k",
    "𝛭": "m",
    "𝛮": "n",
    "𝛰": "o",
    "𝛲": "p",
    "𝛵": "t",
    "𝛶": "y",
    "𝛸": "x",
    "𝛼": "a",
    "𝛾": "y",
    "𝜄": "i",
    "𝜈": "v",
    "𝜊": "o",
    "𝜌": "p",
    "𝜎": "o",
    "𝜏": "t",
    "𝜐": "u",
    "𝜚": "p",
    "𝜜": "a",
    "𝜝": "b",
    "𝜠": "e",
    "𝜡": "z",
    "𝜢": "h",
    "𝜤": "l",
    "𝜥": "k",
    "𝜧": "m",
    "𝜨": "n",
    "𝜪": "o",
    "𝜬": "p",
    "𝜯": "t",
    "𝜰": "y",
    "𝜲": "x",
    "𝜶": "a",
    "𝜸": "y",
    "𝜾": "i",
    "𝝂": "v",
    "𝝄": "o",
    "𝝆": "p",
    "𝝈": "o",
    "𝝉": "t",
    "𝝊": "u",
    "𝝔": "p",
    "𝝖": "a",
    "𝝗": "b",
    "𝝚": "e",
    "𝝛": "z",
    "𝝜": "h",
    "𝝞": "l",
    "𝝟": "k",
    "𝝡": "m",
    "𝝢": "n",
    "𝝤": "o",
    "𝝦": "p",
    "𝝩": "t",
    "𝝪": "y",
    "𝝬": "x",
    "𝝰": "a",
    "𝝲": "y",
    "𝝸": "i",
    "𝝼": "v",
    "𝝾": "o",
    "𝞀": "p",
    "𝞂": "o",
    "𝞃": "t",
    "𝞄": "u",
    "𝞎": "p",
    "𝞐": "a",
    "𝞑": "b",
    "𝞔": "e",
    "𝞕": "z",
    "𝞖": "h",
    "𝞘": "l",
    "𝞙": "k",
    "𝞛": "m",
    "𝞜": "n",
    "𝞞": "o",
    "𝞠": "p",
    "𝞣": "t",
    "𝞤": "y",
    "𝞦": "x",
    "𝞪": "a",
    "𝞬": "y",
    "𝞲": "i",
    "𝞶": "v",
    "𝞸": "o",
    "𝞺": "p",
    "𝞼": "o",
    "𝞽": "t",
    "𝞾": "u",
    "𝟈": "p",
    "𝟊": "f",
    "𝟋": "f",
    "𝟎": "o",
    "𝟏": "l",
    "𝟘": "o",
    "𝟙": "l",
    "𝟢": "o",
    "𝟣": "l",
    "𝟬": "o",
    "𝟭": "l",
    "𝟶": "o",
    "𝟷": "l",
    "𞣇": "l",
    "𞸀": "l",
    "𞸤": "o",
    "𞹤": "o",
    "𞺀": "l",
    "𞺄": "o",
    "🄰": "a",
    "🄱": "b",
    "🄲": "c",
    "🄳": "d",
    "🄴": "e",
    "🄵": "f",
    "🄶": "g",
    "🄷": "h",
    "🄸": "i",
    "🄹": "j",
    "🄺": "k",
    "🄻": "l",
    "🄼": "m",
    "🄽": "n",
    "🄾": "o",
    "🄿": "p",
    "🅀": "q",
    "🅁": "r",
    "🅂": "s",
    "🅃": "t",
    "🅄": "u",
    "🅅": "v",
    "🅆": "w",
    "🅇": "x",
    "🅈": "y",
    "🅉": "z",
    "🅐": "a",
    "🅑": "b",
    "🅒": "c",
    "🅓": "d",
    "🅔": "e",
    "🅕": "f",
    "🅖": "g",
    "🅗": "h",
    "🅘": "i",
    "🅙": "j",
    "🅚": "k",
    "🅛": "l",
    "🅜": "m",
    "🅝": "n",
    "🅞": "o",
    "🅟": "p",
    "🅠": "q",
    "🅡": "r",
    "🅢": "s",
    "🅣": "t",
    "🅤": "u",
    "🅥": "v",
    "🅦": "w",
    "🅧": "x",
    "🅨": "y",
    "🅩": "z",
    "🅰": "a",
    "🅱": "b",
    "🅲": "c",
    "🅳": "d",
    "🅴": "e",
    "🅵": "f",
    "🅶": "g",
    "🅷": "h",
    "🅸": "i",
    "🅹": "j",
    "🅺": "k",
    "🅻": "l",
    "🅼": "m",
    "🅽": "n",
    "🅾": "o",
    "🅿": "p",
    "🆀": "q",
    "🆁": "r",
    "🆂": "s",
    "🆃": "t",
    "🆄": "u",
    "🆅": "v",
    "🆆": "w",
    "🆇": "x",
    "🆈": "y",
    "🆉": "z",
    "🇦": "a",
    "🇧": "b",
    "🇨": "c",
    "🇩": "d",
    "🇪": "e",
    "🇫": "f",
    "🇬": "g",
    "🇭": "h",
    "🇮": "i",
    "🇯": "j",
    "🇰": "k",
    "🇱": "l",
    "🇲": "m",
    "🇳": "n",
    "🇴": "o",
    "🇵": "p",
    "🇶": "q",
    "🇷": "r",
    "🇸": "s",
    "🇹": "t",
    "🇺": "u",
    "🇻": "v",
    "🇼": "w",
    "🇽": "x",
    "🇾": "y",
    "🇿": "z",
    "🌞": "o",
    "🍬": "o",
    "💍": "o",
    "💙": "o",
    "🝌": "c",
    "🝨": "t",
    "🯰": "o",
    "🯱": "l",
    "ﮦ": "o",
    "ﮧ": "o",
    "ﮨ": "o",
    "ﮩ": "o",
    "ﮪ": "o",
    "ﮫ": "o",
    "ﮬ": "o",
    "ﮭ": "o",
    "ﺍ": "l",
    "ﺎ": "l",
    "ﻩ": "o",
    "ﻪ": "o",
    "ﻫ": "o",
    "ﻬ": "o",
    "ﻮ": "g",
    "０": "o",
    "１": "l",
    "Ａ": "a",
    "Ｂ": "b",
    "Ｃ": "c",
    "Ｄ": "d",
    "Ｅ": "e",
    "Ｆ": "f",
    "Ｇ": "g",
    "Ｈ": "h",
    "Ｉ": "l",
    "Ｊ": "j",
    "Ｋ": "k",
    "Ｌ": "l",
    "Ｍ": "m",
    "Ｎ": "n",
    "Ｏ": "o",
    "Ｐ": "p",
    "Ｑ": "q",
    "Ｒ": "r",
    "Ｓ": "s",
    "Ｔ": "t",
    "Ｕ": "u",
    "Ｖ": "v",
    "Ｗ": "w",
    "Ｘ": "x",
    "Ｙ": "y",
    "Ｚ": "z",
    "ａ": "a",
    "ｂ": "b",
    "ｃ": "c",
    "ｄ": "d",
    "ｅ": "e",
    "ｆ": "f",
    "ｇ": "g",
    "ｈ": "h",
    "ｉ": "i",
    "ｊ": "j",
    "ｋ": "k",
    "ｌ": "l",
    "ｍ": "m",
    "ｎ": "n",
    "ｏ": "o",
    "ｐ": "p",
    "ｑ": "q",
    "ｒ": "r",
    "ｓ": "s",
    "ｔ": "t",
    "ｕ": "u",
    "ｖ": "v",
    "ｗ": "w",
    "ｘ": "x",
    "ｙ": "y",
    "ｚ": "z",
    "ｱ": "p",
    "ｲ": "t",
    "ｷ": "f",
    "ﾉ": "i",
    "ﾌ": "j",
    "ﾑ": "a",
    "ﾒ": "x",
    "ﾘ": "y",
    "ﾚ": "l",
    "ﾶ": "m",
    "￨": "l"
  };
  Latinise.convert = function (s) {
    Object.keys(Latinise.latin_map).forEach((key) => {
      s = s.replaceAll(key, Latinise.latin_map[key]);
    });
    return s;
  };
  yikes_or_nah.lm = Latinise.latin_map;
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
      var _TD =
        typeof TextDecoder === "function" ? new TextDecoder() : undefined;
      var _TE =
        typeof TextEncoder === "function" ? new TextEncoder() : undefined;
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
        return urlsafe
          ? _mkUriSafe(_fromUint8Array(u8a))
          : _fromUint8Array(u8a);
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
          return Object.defineProperty(
            Uint8Array.prototype,
            name,
            _noEnum(body)
          );
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

  yikes_or_nah.categories = [
    "identity",
    "insult",
    "obscene",
    "severeToxicity",
    "secuallyExplicit",
    "threat",
    "generalToxicity",
  ];

  yikes_or_nah.checkEm = async function (
    sentences,
    callback = function (results) { },
    extraStuff = [],
    consoleLog = false
  ) {
    if (!yikes_or_nah.hasOwnProperty("bannedWords")) {
      //load json
      fetch("./yikesOrNah.json")
        .then((response) => {
          return response.json();
        })
        .then(
          (jsondata) => (yikes_or_nah = jsonConcat(jsondata, yikes_or_nah))
        );

      function jsonConcat(o1, o2) {
        for (var key in o2) {
          o1[key] = o2[key];
        }
        return o1;
      }
      // console.log(yikes_or_nah);
    }
    const model = await toxicity.load();
    // unlatinizedSentences = sentences.slice();
    //replace homoglypgs
    for (i = 0; i < sentences.length; i++) {
      sentences[i] = Latinise.convert(sentences[i].toLowerCase());
      // console.log(sentences[i]);
    }

    res = new Array(sentences.length).fill(0);

    function occurrences(string, subString, allowOverlapping = true) {

      string += "";
      subString += "";
      if (subString.length <= 0) return (string.length + 1);

      var n = 0,
        pos = 0,
        step = allowOverlapping ? 1 : subString.length;

      while (true) {
        pos = string.indexOf(subString, pos);
        if (pos >= 0) {
          ++n;
          pos += step;
        } else break;
      }
      return n;
    }

    // .replace(/[^\p{L}\p{N}\p{P}\p{Z}^$\n]/gu, '');//remove emoji//nah this is covered
    //check for big nonos yikes_or_nah.bannedWordsSeverity;
    for (i = 0; i < sentences.length; i++) {
      s = " " + sentences[i] + " ";
      sNoPunct = s;
      //these checks prevent things like, if the banned word was moist:
      //m.o.i.s.t or m<o.i,s-t or m .o. i,s t, or just m  o  i  s  t
      //or mmmmmmooooooiiiiiiiissssssttttt
      //replace punction with spaces
      sNoPunct = sNoPunct.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, " "); //replace multiple spaces with one space
      //remove multiple letters
      sNoPunctNoRepeatedLetters = sNoPunct.replace(/(.)\1+/g,'$1');
      // console.log(sNoPunctNoRepeatedLetters)
      sNoPunctNoSpace = sNoPunct;
      sNoPunctNoSpaceRepeatedLetters = sNoPunctNoRepeatedLetters;
      //remove all spaces
      sNoPunctNoSpace = sNoPunctNoSpace.replace(/\s/g, "");
      sNoPunctNoSpaceRepeatedLetters = sNoPunctNoSpaceRepeatedLetters.replace(
        /\s/g,
        ""
      );
      // console.log(sNoPunctNoSpace);
      
      stringsToCheck = [s, sNoPunct, sNoPunctNoSpace, sNoPunctNoRepeatedLetters, sNoPunctNoSpaceRepeatedLetters];

      directMatchSeverity = 0;
      for (bw = 0; bw < yikes_or_nah.bannedWords.length; bw++) {
        el = Base64.decode(yikes_or_nah.bannedWords[bw]);

        //finding a direct match in s is more telling than a match in snospaces which could be a false positive
        toleranceStrengthForStrings = [1.7, 1.4, 0.4, 0.3, 0.2];
        for (stc = 0; stc < stringsToCheck.length; stc++) {
          badWordCount = occurrences(stringsToCheck[stc], el);
          if (badWordCount > 0) {
            //ok bare with me here, i know we do 0-4 for severity but i wanted to scale that down, so in reality we have 
            //stregth for string, lets say its nopuct so like 1 * bad word cound, and say we have it once, the severity would be dividing by 2/6, 3/6 4/6 5/6 6/6
            //or .33 - 1 a bit smaller of a scale, play around with it if you
            directMatchSeverity += (toleranceStrengthForStrings[stc] * badWordCount) / ((yikes_or_nah.bannedWordsSeverity[bw]+2)/6);
            if (consoleLog) {
              position = stringsToCheck[stc].indexOf(el);
              console.log("direct match for banned word '" + el + "' found " + String(badWordCount) + " times");
              console.log("bannedWordScore=");
              console.log(String(directMatchSeverity));
              console.log("/n");
              // console.log(stc);
              // console.log(Math.max(position-4,0), Math.min(position+el.length+4, stringsToCheck[0].length-1));
              console.log("/n");
              if (stc != 0) {
                posInStc0 = position / stringsToCheck[stc].length;
                posInStc0 = Math.round(posInStc0 * stringsToCheck[0].length);
                console.log(stringsToCheck[0].slice(Math.max(posInStc0 - 60, 0), Math.min(posInStc0 + el.length + 30, stringsToCheck[0].length - 1)))
              }
              console.log(stringsToCheck[stc].slice(Math.max(position - 10, 0), Math.min(position + el.length + 10, stringsToCheck[stc].length - 1)))
            }

          }
        }
      }
      if (consoleLog) {
      console.log("/n");
      //our string length scale will be against no punct or repeated letters sice punctuation dosent come up much, neither do repeated letters
      console.log("bannedWordScore="+String(directMatchSeverity)+"  length/10="+String(Math.pow(sNoPunctNoRepeatedLetters.length, 1.026) / 18));
      console.log("/n");
      }
        if (directMatchSeverity > (Math.pow(sNoPunctNoRepeatedLetters.length, 1.026) / 18)) {
          res[i] = "nono";
          // if (consoleLog) {
          //   console.log(sentences[i]);
          //   console.log(": contains a banned word/phrase, direct match/n");
          // }
        }
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
              res[j].push(predictions[i].results[j].probabilities[1]);
            }
          }
        }

        //this code block is yikes lol
        //for each sentence result, which looks like [0.3,0.432,0.334... for all 7 categories]
        if (consoleLog) {
          // console.log(res);

          for (i = 0; i < res.length; i += 1) {
            console.log("for the phrase '");
            console.log(sentences[i]);
            console.log("/n");
            for (j = 0; j < res[i].length; j += 1) {
              if (res[i] == "nono") {
                console.log("direct bad word match found/n");
              } else {
                console.log(yikes_or_nah.categories[j]);
                console.log(": ");
                console.log(res[i][j]);
                console.log("/n");
              }
            }
          }
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
          } else {
            yikes = true;
          }
          yikesArray[i] = yikes;
        }

        callback(yikesArray, extraStuff);
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
    }) ();
