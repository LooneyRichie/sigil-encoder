const ASCII_ART = {
    'A': [
        "   AAA   ",
        "  A   A  ",
        " A     A ",
        " AAAAAAA ",
        " A     A ",
        " A     A ",
        " A     A ",
        "         ",
        "         "
    ],
    'B': [
        " BBBBBBB ",
        " B     B ",
        " B     B ",
        " BBBBBBB ",
        " B     B ",
        " B     B ",
        " BBBBBBB ",
        "         ",
        "         "
    ],
    'C': [
        "  CCCCCCC",
        " C       ",
        " C       ",
        " C       ",
        " C       ",
        " C       ",
        "  CCCCCCC",
        "         ",
        "         "
    ],
    'D': [
        " DDDDDDD ",
        " D     D ",
        " D     D ",
        " D     D ",
        " D     D ",
        " D     D ",
        " DDDDDDD ",
        "         ",
        "         "
    ],
    'E': [
        " EEEEEEE ",
        " E       ",
        " E       ",
        " EEEEEEE ",
        " E       ",
        " E       ",
        " EEEEEEE ",
        "         ",
        "         "
    ],
    'F': [
        " FFFFFFF ",
        " F       ",
        " F       ",
        " FFFFFFF ",
        " F       ",
        " F       ",
        " F       ",
        "         ",
        "         "
    ],
    'G': [
        "  GGGGGGG",
        " G       ",
        " G       ",
        " G   GGG ",
        " G     G ",
        " G     G ",
        "  GGGGGGG",
        "         ",
        "         "
    ],
    'H': [
        " H     H ",
        " H     H ",
        " H     H ",
        " HHHHHHH ",
        " H     H ",
        " H     H ",
        " H     H ",
        "         ",
        "         "
    ],
    'I': [
        " IIIIIII ",
        "    I    ",
        "    I    ",
        "    I    ",
        "    I    ",
        "    I    ",
        " IIIIIII ",
        "         ",
        "         "
    ],
    'J': [
        " JJJJJJJ ",
        "      J  ",
        "      J  ",
        "      J  ",
        "      J  ",
        " J    J  ",
        "  JJJJ   ",
        "         ",
        "         "
    ],
    'K': [
        " K     K ",
        " K   K   ",
        " K K     ",
        " KK      ",
        " K K     ",
        " K   K   ",
        " K     K ",
        "         ",
        "         "
    ],
    'L': [
        " L       ",
        " L       ",
        " L       ",
        " L       ",
        " L       ",
        " L       ",
        " LLLLLLL ",
        "         ",
        "         "
    ],
    'M': [
        " M     M ",
        " MM   MM ",
        " M M M M ",
        " M  M  M ",
        " M     M ",
        " M     M ",
        " M     M ",
        "         ",
        "         "
    ],
    'N': [
        " N     N ",
        " NN    N ",
        " N N   N ",
        " N  N  N ",
        " N   N N ",
        " N    NN ",
        " N     N ",
        "         ",
        "         "
    ],
    'O': [
        "  OOOOO  ",
        " O     O ",
        " O     O ",
        " O     O ",
        " O     O ",
        " O     O ",
        "  OOOOO  ",
        "         ",
        "         "
    ],
    'P': [
        " PPPPPPP ",
        " P     P ",
        " P     P ",
        " PPPPPPP ",
        " P       ",
        " P       ",
        " P       ",
        "         ",
        "         "
    ],
    'Q': [
        "  QQQQQ  ",
        " Q     Q ",
        " Q     Q ",
        " Q     Q ",
        " Q   Q Q ",
        " Q    QQ ",
        "  QQQQQQ ",
        "         ",
        "         "
    ],
    'R': [
        " RRRRRRR ",
        " R     R ",
        " R     R ",
        " RRRRRRR ",
        " R   R   ",
        " R    R  ",
        " R     R ",
        "         ",
        "         "
    ],
    'S': [
        "  SSSSSSS",
        " S       ",
        " S       ",
        "  SSSSSS ",
        "       S ",
        "       S ",
        " SSSSSSS ",
        "         ",
        "         "
    ],
    'T': [
        " TTTTTTT ",
        "    T    ",
        "    T    ",
        "    T    ",
        "    T    ",
        "    T    ",
        "    T    ",
        "         ",
        "         "
    ],
    'U': [
        " U     U ",
        " U     U ",
        " U     U ",
        " U     U ",
        " U     U ",
        " U     U ",
        "  UUUUU  ",
        "         ",
        "         "
    ],
    'V': [
        " V     V ",
        " V     V ",
        " V     V ",
        " V     V ",
        "  V   V  ",
        "   V V   ",
        "    V    ",
        "         ",
        "         "
    ],
    'W': [
        " W     W ",
        " W     W ",
        " W     W ",
        " W  W  W ",
        " W W W W ",
        " WW   WW ",
        " W     W ",
        "         ",
        "         "
    ],
    'X': [
        " X     X ",
        "  X   X  ",
        "   X X   ",
        "    X    ",
        "   X X   ",
        "  X   X  ",
        " X     X ",
        "         ",
        "         "
    ],
    'Y': [
        " Y     Y ",
        "  Y   Y  ",
        "   Y Y   ",
        "    Y    ",
        "    Y    ",
        "    Y    ",
        "    Y    ",
        "         ",
        "         "
    ],
    'Z': [
        " ZZZZZZZ ",
        "      Z  ",
        "     Z   ",
        "    Z    ",
        "   Z     ",
        "  Z      ",
        " ZZZZZZZ ",
        "         ",
        "         "
    ],
    '0': [
        "  00000  ",
        " 0     0 ",
        " 0    00 ",
        " 0   0 0 ",
        " 0 0   0 ",
        " 00    0 ",
        "  00000  ",
        "         ",
        "         "
    ],
    '1': [
        "    1    ",
        "   11    ",
        "    1    ",
        "    1    ",
        "    1    ",
        "    1    ",
        " 1111111 ",
        "         ",
        "         "
    ],
    '2': [
        "  22222  ",
        " 2     2 ",
        "       2 ",
        "  22222  ",
        " 2       ",
        " 2       ",
        " 2222222 ",
        "         ",
        "         "
    ],
    '3': [
        "  33333  ",
        " 3     3 ",
        "       3 ",
        "  33333  ",
        "       3 ",
        " 3     3 ",
        "  33333  ",
        "         ",
        "         "
    ],
    '4': [
        " 4     4 ",
        " 4     4 ",
        " 4     4 ",
        " 4444444 ",
        "       4 ",
        "       4 ",
        "       4 ",
        "         ",
        "         "
    ],
    '5': [
        " 5555555 ",
        " 5       ",
        " 5       ",
        " 555555  ",
        "       5 ",
        " 5     5 ",
        "  55555  ",
        "         ",
        "         "
    ],
    '6': [
        "  66666  ",
        " 6       ",
        " 6       ",
        " 666666  ",
        " 6     6 ",
        " 6     6 ",
        "  66666  ",
        "         ",
        "         "
    ],
    '7': [
        " 7777777 ",
        "       7 ",
        "      7  ",
        "     7   ",
        "    7    ",
        "   7     ",
        "  7      ",
        "         ",
        "         "
    ],
    '8': [
        "  88888  ",
        " 8     8 ",
        " 8     8 ",
        "  88888  ",
        " 8     8 ",
        " 8     8 ",
        "  88888  ",
        "         ",
        "         "
    ],
    '9': [
        "  99999  ",
        " 9     9 ",
        " 9     9 ",
        "  999999 ",
        "       9 ",
        "       9 ",
        "  99999  ",
        "         ",
        "         "
    ],
    ' ': [
        "         ",
        "         ",
        "         ",
        "         ",
        "         ",
        "         ",
        "         ",
        "         ",
        "         "
    ],
    '.': [
        "         ",
        "         ",
        "         ",
        "         ",
        "         ",
        "         ",
        "    ..   ",
        "         ",
        "         "
    ],
    ',': [
        "         ",
        "         ",
        "         ",
        "         ",
        "         ",
        "    ,,   ",
        "   ,     ",
        "         ",
        "         "
    ],
    '!': [
        "    !    ",
        "    !    ",
        "    !    ",
        "    !    ",
        "    !    ",
        "         ",
        "    !    ",
        "         ",
        "         "
    ],
    '?': [
        "  ?????  ",
        " ?     ? ",
        "       ? ",
        "   ???? ",
        "    ?    ",
        "         ",
        "    ?    ",
        "         ",
        "         "
    ],
    ':': [
        "         ",
        "         ",
        "    :    ",
        "         ",
        "         ",
        "    :    ",
        "         ",
        "         ",
        "         "
    ],
    ';': [
        "         ",
        "         ",
        "    ;    ",
        "         ",
        "         ",
        "    ;    ",
        "   ;     ",
        "         ",
        "         "
    ],
    "'": [
        "    '    ",
        "    '    ",
        "   '     ",
        "         ",
        "         ",
        "         ",
        "         ",
        "         ",
        "         "
    ],
    '"': [
        '  "   "  ',
        '  "   "  ',
        ' "   "   ',
        "         ",
        "         ",
        "         ",
        "         ",
        "         ",
        "         "
    ],
    '-': [
        "         ",
        "         ",
        "         ",
        " ------- ",
        "         ",
        "         ",
        "         ",
        "         ",
        "         "
    ],
    '_': [
        "         ",
        "         ",
        "         ",
        "         ",
        "         ",
        "         ",
        " _______ ",
        "         ",
        "         "
    ],
    '(': [
        "    (    ",
        "   (     ",
        "  (      ",
        "  (      ",
        "  (      ",
        "   (     ",
        "    (    ",
        "         ",
        "         "
    ],
    ')': [
        "    )    ",
        "     )   ",
        "      )  ",
        "      )  ",
        "      )  ",
        "     )   ",
        "    )    ",
        "         ",
        "         "
    ],
    '[': [
        " [[[[[   ",
        " [       ",
        " [       ",
        " [       ",
        " [       ",
        " [       ",
        " [[[[[   ",
        "         ",
        "         "
    ],
    ']': [
        "   [[[[[",
        "       [",
        "       [",
        "       [",
        "       [",
        "       [",
        "   [[[[[",
        "         ",
        "         "
    ],
    '{': [
        "    {{{  ",
        "   {     ",
        "   {     ",
        " {{      ",
        "   {     ",
        "   {     ",
        "    {{{  ",
        "         ",
        "         "
    ],
    '}': [
        "  {{{    ",
        "     {   ",
        "     {   ",
        "      {{ ",
        "     {   ",
        "     {   ",
        "  {{{    ",
        "         ",
        "         "
    ],
    '<': [
        "         ",
        "      <  ",
        "    <    ",
        "  <      ",
        "    <    ",
        "      <  ",
        "         ",
        "         ",
        "         "
    ],
    '>': [
        "         ",
        "  >      ",
        "    >    ",
        "      >  ",
        "    >    ",
        "  >      ",
        "         ",
        "         ",
        "         "
    ],
    '+': [
        "         ",
        "    +    ",
        "    +    ",
        " +++++++ ",
        "    +    ",
        "    +    ",
        "         ",
        "         ",
        "         "
    ],
    '=': [
        "         ",
        "         ",
        " ======= ",
        "         ",
        " ======= ",
        "         ",
        "         ",
        "         ",
        "         "
    ],
    '*': [
        "         ",
        " *  *  * ",
        "   ***   ",
        " ******* ",
        "   ***   ",
        " *  *  * ",
        "         ",
        "         ",
        "         "
    ],
    '/': [
        "         ",
        "       / ",
        "      /  ",
        "     /   ",
        "    /    ",
        "   /     ",
        "  /      ",
        "         ",
        "         "
    ],
    '\\': [
        "         ",
        " \\       ",
        "  \\      ",
        "   \\     ",
        "    \\    ",
        "     \\   ",
        "      \\  ",
        "         ",
        "         "
    ],
    '|': [
        "    |    ",
        "    |    ",
        "    |    ",
        "    |    ",
        "    |    ",
        "    |    ",
        "    |    ",
        "         ",
        "         "
    ],
    '&': [
        "  &&&&&  ",
        " &     & ",
        "  &&&&&  ",
        " &   &   ",
        " &    &  ",
        " &     & ",
        "  &&&&& &",
        "         ",
        "         "
    ],
    '%': [
        " %%   %% ",
        " %%  %%  ",
        "    %%   ",
        "   %%    ",
        "  %%     ",
        " %%  %%  ",
        " %%   %% ",
        "         ",
        "         "
    ],
    '$': [
        "    $    ",
        "  $$$$$$ ",
        " $       ",
        "  $$$$$  ",
        "       $ ",
        " $$$$$$ ",
        "    $    ",
        "         ",
        "         "
    ],
    '#': [
        "  #   #  ",
        " ####### ",
        "  #   #  ",
        "  #   #  ",
        " ####### ",
        "  #   #  ",
        "         ",
        "         ",
        "         "
    ],
    '@': [
        "  @@@@@@ ",
        " @      @",
        " @ @@@@ @",
        " @ @  @ @",
        " @ @@@@ @",
        " @       ",
        "  @@@@@@ ",
        "         ",
        "         "
    ],
    '~': [
        "         ",
        "         ",
        " ~~   ~~ ",
        "   ~~~   ",
        "         ",
        "         ",
        "         ",
        "         ",
        "         "
    ],
    '`': [
        "    `    ",
        "     `   ",
        "         ",
        "         ",
        "         ",
        "         ",
        "         ",
        "         ",
        "         "
    ],
    '^': [
        "    ^    ",
        "   ^ ^   ",
        "  ^   ^  ",
        "         ",
        "         ",
        "         ",
        "         ",
        "         ",
        "         "
    ]
};

const OCCULT_SIGILS = {
    'A': "⛧☽",   'B': "☿☽",   'C': "☉",     'D': "☉☽",   'E': "☼☽",
    'F': "☾☉",   'G': "✝☽",   'H': "☪☽",   'I': "✡☽",   'J': "ॐ☽",
    'K': "☸☽",   'L': "☯☽",   'M': "⛩☽",   'N': "☬☽",   'O': "卐☽",
    'P': "☫☽",   'Q': "♁☽",   'R': "♆☽",   'S': "♄☽",   'T': "♃☽",
    'U': "♅☽",   'V': "♇☽",   'W': "⚕☽",   'X': "⚚☽",   'Y': "☤☽",
    'Z': "☥☽",   '0': "⦰☽",   '1': "¹☽",   '2': "²☽",   '3': "³☽",
    '4': "⁴☽",   '5': "⁵☽",   '6': "⁶☽",   '7': "⁷☽",   '8': "⁸☽",
    '9': "⁹☽",   ' ': "•☽",   '.': "∘☽",   ',': "‚☽",   '!': "¡☽",
    '?': "¿☽",   ':': "÷☽",   ';': "∵☽",   "'": "´☽",   '"': "″☽",
    '-': "—☽",   '_': "⁻☽",   '(': "◐☽",   ')': "◑☽",   '[': "⊏☽",
    ']': "⊐☽",   '{': "⊃☽",   '}': "⊂☽",   '<': "◁☽",   '>': "▷☽",
    '+': "⊕☽",   '=': "≡☽",   '*': "✦☽",   '/': "⁄☽",   '\\': "∖☽",
    '|': "│☽",   '&': "⚦☽",   '%': "‰☽",   '$': "¤☽",   '#': "♯☽",
    '@': "◉☽",   '~': "∼☽",   '`': "‛☽",   '^': "∧☽"
};

class SimpleSigil {
    constructor(text, style = "ascii") {
        this.text = text;
        this.style = style;
        this.metadata = this._generateMetadata();
        this.key = this._generateKey();
        this.encoded = this._encodeText();
    }

    _generateMetadata() {
        const counter = {};
        for (const char of this.text) {
            counter[char] = (counter[char] || 0) + 1;
        }
        return counter;
    }

    _generateKey() {
        const key = {};
        const uniqueChars = [...new Set(this.text)];
        
        for (const char of uniqueChars) {
            if (/[a-zA-Z0-9 ]/.test(char)) {
                key[char] = this._letterShape(char);
            } else {
                key[char] = char;
            }
        }
        return key;
    }

    _letterShape(char) {
        const upperChar = char.toUpperCase();
        
        if (this.style === "ascii") {
            const art = ASCII_ART[upperChar] || [char.repeat(9)].concat(Array(8).fill(" ".repeat(9)));
            return art.join("\n") + "\n";
        } else if (this.style === "random") {
            const randChar = "!@#$%^&*"[Math.floor(Math.random() * 8)];
            return (randChar.repeat(9) + "\n").repeat(9);
        } else if (this.style === "occult") {
            const sigil = OCCULT_SIGILS[upperChar] || "?";
            return (sigil.repeat(9) + "\n").repeat(9);
        } else {
            return (char.repeat(9) + "\n").repeat(9);
        }
    }

    _encodeText() {
        return this.text.split('').map(c => this.key[c] || c).join('');
    }

    generateBinaryKey() {
        const binaryKey = {};
        const uniqueChars = [...new Set(this.text)];
        
        for (const char of uniqueChars) {
            binaryKey[char] = char.charCodeAt(0).toString(2).padStart(8, '0');
        }
        return binaryKey;
    }

    static decodeBinaryKey(binaryList) {
        return binaryList.map(b => String.fromCharCode(parseInt(b, 2))).join('');
    }

    embedBinarySteganographic(scrambledBinary) {
        let char1, char0, stegoArt = [];
        
        if (this.style === "occult") {
            char1 = "☽";
            char0 = "☉";
            let bitIdx = 0;
            
            for (const c of this.encoded) {
                if (c === "☽" || c === "☉") {
                    if (bitIdx < scrambledBinary.length) {
                        stegoArt.push(scrambledBinary[bitIdx] === '1' ? char1 : char0);
                        bitIdx++;
                    } else {
                        stegoArt.push(c);
                    }
                } else {
                    stegoArt.push(c);
                }
            }
        } else {
            const sigilChars = this.encoded.replace(/\n/g, '');
            const uniqueChars = [];
            
            for (const c of sigilChars) {
                if (!uniqueChars.includes(c)) {
                    uniqueChars.push(c);
                }
                if (uniqueChars.length === 2) break;
            }
            
            if (uniqueChars.length < 2) {
                throw new Error("Need at least two unique characters in the sigil to embed binary.");
            }
            
            char1 = uniqueChars[0];
            char0 = uniqueChars[1];
            let bitIdx = 0;
            
            for (const c of this.encoded) {
                if (c === char1 || c === char0) {
                    if (bitIdx < scrambledBinary.length) {
                        stegoArt.push(scrambledBinary[bitIdx] === '1' ? char1 : char0);
                        bitIdx++;
                    } else {
                        stegoArt.push(c);
                    }
                } else {
                    stegoArt.push(c);
                }
            }
        }
        
        return [stegoArt.join(''), char1, char0];
    }
}

// Utility functions for the web interface
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function encodeSigil() {
    const text = document.getElementById('inputText').value;
    const style = document.getElementById('styleSelect').value;
    
    if (!text) {
        alert('Please enter some text to encode');
        return;
    }
    
    const sigil = new SimpleSigil(text, style);
    const binaryKey = sigil.generateBinaryKey();
    const binaryString = text.split('').map(c => binaryKey[c]).join('');
    
    // Create scrambled pattern
    const pattern = Array.from({length: binaryString.length}, (_, i) => i);
    const shuffledPattern = shuffleArray(pattern);
    const scrambled = shuffledPattern.map(i => binaryString[i]).join('');
    
    // Embed binary in sigil art
    const [stegoArt, char1, char0] = sigil.embedBinarySteganographic(scrambled);
    
    // Display results
    document.getElementById('originalSigil').textContent = sigil.encoded;
    document.getElementById('stegoSigil').textContent = stegoArt;
    document.getElementById('binaryInfo').innerHTML = `
        <strong>Binary Characters:</strong> '${char1}' for 1, '${char0}' for 0<br>
        <strong>Pattern:</strong> [${shuffledPattern.join(', ')}]<br>
        <strong>Binary Key:</strong> ${JSON.stringify(binaryKey)}
    `;
    
    document.getElementById('results').style.display = 'block';
}

function decodeBinary() {
    const binaryInput = document.getElementById('binaryInput').value.trim();
    
    if (!binaryInput) {
        alert('Please enter binary values to decode');
        return;
    }
    
    const binaryList = binaryInput.split(/\s+/);
    
    try {
        const decoded = SimpleSigil.decodeBinaryKey(binaryList);
        document.getElementById('decodedText').textContent = decoded;
        document.getElementById('decodeResults').style.display = 'block';
    } catch (error) {
        alert('Error decoding: ' + error.message);
    }
}

function loadFileToEncode() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    
    if (!file) {
        alert('Please select a file first');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('inputText').value = e.target.result;
    };
    reader.readAsText(file);
}