const inputText = document.getElementById('inputText');
    const shiftInput = document.getElementById('shift');
    const shiftValue = document.getElementById('shiftValue');
    const modeSwitch = document.getElementById('modeSwitch');
    const convertBtn = document.getElementById('convertBtn');
    const resetBtn = document.getElementById('resetBtn');
    const resultDiv = document.getElementById('result');

    shiftInput.addEventListener('input', () => {
      shiftValue.textContent = shiftInput.value;
    });

    const caesarCipher = (str, shift, encrypt = true) => {
      const s = encrypt ? shift : (26 - shift) % 26;
      return str
        .split('')
        .map(char => {
          if (/[a-z]/i.test(char)) {
            const base = char === char.toUpperCase() ? 65 : 97;
            return String.fromCharCode(((char.charCodeAt(0) - base + s) % 26) + base);
          }
          return char;
        })
        .join('');
    };

    convertBtn.addEventListener('click', () => {
      const text = inputText.value;
      const shift = parseInt(shiftInput.value);
      const encrypt = modeSwitch.checked;
      const output = caesarCipher(text, shift, encrypt);
      resultDiv.textContent = output;
    });

    resetBtn.addEventListener('click', () => {
      inputText.value = '';
      resultDiv.textContent = '';
      shiftInput.value = 3;
      shiftValue.textContent = 3;
      modeSwitch.checked = true;
    });