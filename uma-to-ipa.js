let correspondences = [
    {
      "UMA": "p",
      "IPA": "p"
    },
    {
      "UMA": "t",
      "IPA": "t"
    },
    {
      "UMA": "c",
      "IPA": "c"
    },
    {
      "UMA": "k",
      "IPA": "k"
    },
    {
      "UMA": "q",
      "IPA": "q"
    },
    {
      "UMA": "'",
      "IPA": "ʔ"
    },
    {
      "UMA": "b'",
      "IPA": "ɓ"
    },
    {
      "UMA": "t'",
      "IPA": "t'"
    },
    {
      "UMA": "c'",
      "IPA": "c'"
    },
    {
      "UMA": "k'",
      "IPA": "k'"
    },
    {
      "UMA": "q'",
      "IPA": "q'"
    },
    {
      "UMA": "tz",
      "IPA": "ts"
    },
    {
      "UMA": "ch",
      "IPA": "tʃ"
    },
    {
      "UMA": "tz'",
      "IPA": "ts'"
    },
    {
      "UMA": "ch'",
      "IPA": "tʃ'"
    },
    {
      "UMA": "j",
      "IPA": "χ"
    },
    {
      "UMA": "m",
      "IPA": "m"
    },
    {
      "UMA": "n",
      "IPA": "n"
    },
    {
      "UMA": "l",
      "IPA": "l"
    },
    {
      "UMA": "r",
      "IPA": "r"
    },
    {
      "UMA": "w",
      "IPA": "w"
    },
    {
      "UMA": "y",
      "IPA": "j"
    },
    {
      "UMA": "ä",
      "IPA": "a"
    },
    {
      "UMA": "a",
      "IPA": "a"
    },
    {
      "UMA": "a",
      "IPA": "aː"
    },
    {
      "UMA": "aa",
      "IPA": "aː"
    },
    {
      "UMA": "e",
      "IPA": "e"
    },
    {
      "UMA": "ë",
      "IPA": "e"
    },
    {
      "UMA": "e",
      "IPA": "eː"
    },
    {
      "UMA": "ee",
      "IPA": "eː"
    },
    {
      "UMA": "ï",
      "IPA": "i"
    },
    {
      "UMA": "i",
      "IPA": "iː"
    },
    {
      "UMA": "i",
      "IPA": "i"
    },
    {
      "UMA": "ii",
      "IPA": "iː"
    },
    {
      "UMA": "ö",
      "IPA": "o"
    },
    {
      "UMA": "o",
      "IPA": "oː"
    },
    {
      "UMA": "o",
      "IPA": "o"
    },
    {
      "UMA": "oo",
      "IPA": "oː"
    },
    {
      "UMA": "ü",
      "IPA": "u"
    },
    {
      "UMA": "u",
      "IPA": "uː"
    },
    {
      "UMA": "u",
      "IPA": "u"
    },
    {
      "UMA": "uu",
      "IPA": "uː"
    }
  ]

let transcribe = text => {
    let output = ''
    for (let index = 0; index < text.length; index++) {
        let letter = text[index]
        let selection = letter+text[index+1]
        // console.log(letter+text[index+1])
        // console.log(text[index+1])
        // gets 2 characters at a time
        if (correspondences.find(pair => pair["UMA"] === selection)) {
            output += correspondences.find(pair => pair["UMA"] === selection["IPA"])
            console.log(correspondences.find(pair => pair["UMA"] === selection["IPA"]))
        }
        else {
            output += correspondences.find(pair => pair["UMA"] === letter["IPA"])
            console.log(correspondences.find(pair => pair["UMA"] === letter["IPA"]))

        }
    }
    document.querySelector("#transcription-output").value = output
}

