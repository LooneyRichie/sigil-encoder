# ⛧ Sigil Encoder/Decoder Web Server ⛧

A dark, terminal-styled web application for encoding and decoding text using ASCII art sigils and occult symbols. This project demonstrates steganographic techniques by embedding binary data within artistic representations.

## Features

- **ASCII Art Encoding**: Convert text into large ASCII art representations
- **Occult Sigil Encoding**: Transform text using mystical symbols and sigils
- **Binary Steganography**: Hide binary data within the sigil artwork
- **File Upload Support**: Load text files for encoding
- **Binary Decoding**: Decode binary sequences back to readable text
- **Dark Terminal Theme**: Retro hacker aesthetic with glowing effects

## Project Structure

```
basic-web-server/
├── src/
│   ├── server.js           # Node.js web server
│   └── sigil_simple.py     # Original Python implementation (reference)
├── public/
│   ├── index.html          # Main web interface
│   ├── styles.css          # Dark terminal styling
│   └── sigil.js            # JavaScript sigil encoding logic
├── package.json            # npm configuration
|- README.md               # This file
|_ License.mit             # MIT license
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- A modern web browser

### Installation

1. Clone or download this repository:
   ```bash
   git clone https://github.com/looneyrichie/sigil-encoder.git
   cd sigil-encoder
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://127.0.0.1:3000
   ```

## Usage

### Encoding Text

1. **Enter your text** in the input field or upload a text file
2. **Choose encoding style**:
   - **ASCII Art**: Large block letter representations
   - **Random Characters**: Randomized symbol patterns  
   - **Occult Sigils**: Mystical symbols and occult imagery
3. **Click "Generate Sigil"** to create your encoded artwork

### Features Explained

- **Original Sigil**: The basic encoded representation
- **Steganographic Sigil**: Binary data embedded within the artwork
- **Binary Information**: Shows the encoding pattern and character mappings

### Decoding Binary

1. Enter space-separated 8-bit binary values (e.g., `01001000 01101001`)
2. Click "Decode" to convert back to readable text

## Technical Details

### Encoding Process

1. Text is converted to individual characters
2. Each character gets mapped to ASCII art or sigil symbols
3. Binary representation is generated for steganographic embedding
4. Pattern scrambling adds security through obfuscation
5. Binary data is embedded within the visual sigil structure

### Character Support

The encoder supports:
- **Letters**: A-Z (uppercase and lowercase)
- **Digits**: 0-9
- **Punctuation**: . , ! ? : ; ' " - _ ( ) [ ] { } < > + = * / \ | & % $ # @ ~ ` ^
- **Spaces**: Rendered as blank patterns

### Sigil Styles

- **ASCII**: Traditional block letter ASCII art
- **Random**: Randomized patterns for obfuscation
- **Occult**: Mystical symbols including ⛧ ☽ ☉ ✝ ☪ ✡ ॐ ☸ ☯ and more

## Development

### Server Configuration

The server runs on:
- **Host**: 127.0.0.1 (localhost)
- **Port**: 3000
- **Static Files**: Served from `/public` directory

### File Structure

- `server.js`: Basic HTTP server with static file serving
- `sigil.js`: Complete sigil encoding/decoding logic
- `index.html`: Responsive web interface
- `styles.css`: Dark terminal aesthetic with CSS animations

## Security & Privacy

- All processing happens locally (no data sent to external servers)
- Steganographic techniques provide data obfuscation
- Pattern scrambling adds additional security layer
- No data persistence (everything is client-side)

## License

This project is licensed under the MIT License.

## Contributing

Feel free to submit issues, fork the repository, and create pull requests for any improvements.

---

*"In the realm of digital mysticism, where code meets occult, sigils become the bridge between the seen and unseen data."*