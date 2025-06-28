import collections
import random
import base64
import hashlib

ASCII_ART = {
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
    ]
}

# Enhanced occult sigils with moon/sun encoding for binary
OCCULT_SIGILS = {
    'A': "⛧☽",   # Alchemy/occult + moon
    'B': "☿☽",   # Mercury + moon
    'C': "☉",     # Moon (gets sun instead)
    'D': "☉☽",   # Sun + moon
    'E': "☼☽",   # Sun alt + moon
    'F': "☾☉",   # Moon alt (gets sun instead)
    'G': "✝☽",   # Christian cross + moon
    'H': "☪☽",   # Islamic crescent + moon
    'I': "✡☽",   # Jewish star + moon
    'J': "ॐ☽",   # Hindu Om + moon
    'K': "☸☽",   # Buddhist wheel + moon
    'L': "☯☽",   # Taoist yin-yang + moon
    'M': "⛩☽",   # Shinto shrine + moon
    'N': "☬☽",   # Sikh Khanda + moon
    'O': "卐☽",   # Jainism + moon
    'P': "☫☽",   # Baháʼí + moon
    'Q': "♁☽",   # Earth + moon
    'R': "♆☽",   # Neptune + moon
    'S': "♄☽",   # Saturn + moon
    'T': "♃☽",   # Jupiter + moon
    'U': "♅☽",   # Uranus + moon
    'V': "♇☽",   # Pluto + moon
    'W': "⚕☽",   # Caduceus + moon
    'X': "⚚☽",   # Hermes + moon
    'Y': "☤☽",   # Staff of Asclepius + moon
    'Z': "☥☽",   # Ankh + moon
    '0': "⦰☽",   # Null set + moon
    '1': "¹☽",   # Superscript one + moon
    '2': "²☽",   # Superscript two + moon
    '3': "³☽",   # Superscript three + moon
    '4': "⁴☽",   # Superscript four + moon
    '5': "⁵☽",   # Superscript five + moon
    '6': "⁶☽",   # Superscript six + moon
    '7': "⁷☽",   # Superscript seven + moon
    '8': "⁸☽",   # Superscript eight + moon
    '9': "⁹☽",   # Superscript nine + moon
    ' ': "•☽"    # Space + moon
}

class SimpleSigil:
    def __init__(self, text, style="ascii"):
        """
        :param text: The input text to encode.
        :param style: 'ascii', 'random', or 'occult'.
        """
        self.text = text
        self.style = style
        self.metadata = self._generate_metadata()
        self.key = self._generate_key()
        self.encoded = self._encode_text()

    def _generate_metadata(self):
        return dict(collections.Counter(self.text))

    def _generate_key(self):
        key = {}
        for char in set(self.text):
            if char.isalnum() or char == ' ':
                key[char] = self._letter_shape(char)
            else:
                key[char] = char
        return key

    def _letter_shape(self, char):
        char = char.upper()
        if self.style == "ascii":
            art = ASCII_ART.get(char, [char*9]*9)
            return "\n".join(art) + "\n"
        elif self.style == "random":
            rand_char = random.choice("!@#$%^&*")
            return (rand_char*9 + "\n") * 9
        elif self.style == "occult":
            return (OCCULT_SIGILS.get(char, "?")*9 + "\n") * 9
        else:
            return f"{char*9}\n" * 9

    def _encode_text(self):
        return ''.join(self.key.get(c, c) for c in self.text)

    def generate_binary_key(self):
        """
        Generates a binary key for each unique character in the text.
        :return: dict mapping character to binary string.
        """
        binary_key = {}
        for char in set(self.text):
            # Use 8-bit binary representation of Unicode code point
            binary_key[char] = format(ord(char), '08b')
        return binary_key

    @staticmethod
    def decode_binary_key(binary_list):
        """
        Decodes a list of 8-bit binary strings back to text.
        :param binary_list: List of binary strings (e.g., ['01001000', '01101001'])
        :return: Decoded string.
        """
        chars = [chr(int(b, 2)) for b in binary_list]
        return ''.join(chars)

    def embed_binary_steganographic(self, scrambled_binary):
        """
        Replaces the first two unique characters in the sigil art with the binary bits,
        embedding the binary directly into the sigil art for true steganography.
        For occult style, uses enhanced moon/sun encoding.
        Returns (stego_art, char1, char0).
        """
        if self.style == "occult":
            # For occult, use moon (☽) for 1 and sun (☉) for 0
            char1, char0 = "☽", "☉"
            stego_art = []
            bit_idx = 0
            
            for c in self.encoded:
                if c in "☽☉":  # If it's already a moon or sun symbol
                    if bit_idx < len(scrambled_binary):
                        stego_art.append(char1 if scrambled_binary[bit_idx] == '1' else char0)
                        bit_idx += 1
                    else:
                        stego_art.append(c)
                else:
                    stego_art.append(c)
        else:
            # Original logic for ascii/random styles
            sigil_chars = self.encoded.replace('\n', '')
            unique_chars = []
            for c in sigil_chars:
                if c not in unique_chars:
                    unique_chars.append(c)
                if len(unique_chars) == 2:
                    break
            if len(unique_chars) < 2:
                raise ValueError("Need at least two unique characters in the sigil to embed binary.")
            char1, char0 = unique_chars[0], unique_chars[1]

            stego_art = []
            bit_idx = 0
            for c in self.encoded:
                if c == char1 or c == char0:
                    if bit_idx < len(scrambled_binary):
                        stego_art.append(char1 if scrambled_binary[bit_idx] == '1' else char0)
                        bit_idx += 1
                    else:
                        stego_art.append(c)
                else:
                    stego_art.append(c)
        
        return ''.join(stego_art), char1, char0

    def show(self):
        print("Metadata:", self.metadata)
        print("Key:", self.key)
        print("Encoded:\n", self.encoded)

def main():
    while True:
        print("\nSimple Sigil Encoder/Decoder")
        print("1. Encode text")
        print("2. Decode from binary key")
        print("3. Exit")
        choice = input("Choose an option (1, 2, or 3): ").strip()

        if choice == "1":
            text = input("Please enter the text you want to encode: ")
            style = input("Choose encoding style (ascii, random, occult): ").strip().lower()
            if style not in ("ascii", "random", "occult"):
                print("Invalid style, defaulting to 'ascii'.")
                style = "ascii"
            
            sigil = SimpleSigil(text, style=style)
            binary_key = sigil.generate_binary_key()
            binary_string = ''.join(binary_key[c] for c in text)
            
            # Create scrambled pattern
            pattern = list(range(len(binary_string)))
            random.shuffle(pattern)
            scrambled = ''.join(binary_string[i] for i in pattern)
            
            # Embed binary in sigil art
            stego_art, char1, char0 = sigil.embed_binary_steganographic(scrambled)
            
            print("\n=== Original Sigil ===")
            print(sigil.encoded)
            print(f"\n=== Sigil Art with Embedded Binary ===")
            print(f"Using '{char1}' for 1 and '{char0}' for 0")
            print(stego_art)
            print(f"\n=== Decoding Information ===")
            print(f"Pattern: {pattern}")
            print(f"Binary Key: {binary_key}")
            
            # Ask if user wants to decode immediately
            decode_now = input("\nWould you like to decode this immediately? (y/n): ").strip().lower()
            if decode_now == "y":
                # Extract and decode
                extracted_binary = ''.join('1' if c == char1 else '0' if c == char0 else '' for c in stego_art)
                unscrambled = [''] * len(pattern)
                for i, p in enumerate(pattern):
                    if i < len(extracted_binary):
                        unscrambled[p] = extracted_binary[i]
                unscrambled = ''.join(unscrambled)
                binary_chunks = [unscrambled[i:i+8] for i in range(0, len(unscrambled), 8)]
                decoded = SimpleSigil.decode_binary_key(binary_chunks)
                print(f"Decoded text: {decoded}")

        elif choice == "2":
            print("Paste the binary key (space-separated 8-bit binary values, e.g. 01001000 01101001):")
            binary_input = input("Binary key: ").strip()
            if binary_input:
                binary_list = binary_input.split()
                try:
                    decoded = SimpleSigil.decode_binary_key(binary_list)
                    print("Decoded text:", decoded)
                except Exception as e:
                    print(f"Error decoding: {e}")
            else:
                print("No input provided.")

        elif choice == "3":
            print("Goodbye!")
            break
        else:
            print("Invalid choice. Try again.")

if __name__ == "__main__":
    main()
