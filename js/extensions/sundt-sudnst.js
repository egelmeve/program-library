const sundt = (function() {
  let data = null;

  return {
    filedeta: {
      set: (file) => {
        const reader = new FileReader();
        reader.onload = () => {
          const arrayBuffer = reader.result;
          data = new Float32Array(arrayBuffer.slice(16));
        };
        reader.readAsArrayBuffer(file);
      }
    },

    all: () => data ? data.length : 0,

    get: (index) => data ? data[index] || 0 : 0
  };
})();

    function base64ToBlob(base64) {
        const base64Data = base64.split(',')[1] || base64;
        const byteCharacters = atob(base64Data);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        return new Blob([byteArray]);
    }


const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const activeSources = []; // 再生中ノードを保存

function fscossster(ste, sto, sampleRate = 50000) { 
    const length = sto - ste + 1; 
    const buffer = audioCtx.createBuffer(1, length, sampleRate); 
    const channelData = buffer.getChannelData(0); 

    for (let i = 0; i < length; i++) { 
        channelData[i] = sundt.get(ste + i);
    } 

    const source = audioCtx.createBufferSource(); 
    source.buffer = buffer; 
    source.connect(audioCtx.destination); 
    source.start();

    // 再生中ノードを保存
    activeSources.push(source);

    // 再生終了時に配列から削除
    source.onended = () => {
        const index = activeSources.indexOf(source);
        if (index !== -1) activeSources.splice(index, 1);
    };
}

// すべての再生を停止する関数
function stopAllFscossster() {
    activeSources.forEach(source => source.stop());
    activeSources.length = 0; // 配列をクリア
}



class sudnst {
  getInfo() {
    return {
      id: 'egelmevesudnstss',
      name: 'sudnst',
      blocks: [
        {
          opcode: 'sudnstset',
          blockType: Scratch.BlockType.COMMAND,
          text: 'set[filedeta]',
          arguments: {
            filedeta: {
              type: Scratch.ArgumentType.STRING
            }
          }
        },
        {
          opcode: 'sudnstlength',
          blockType: Scratch.BlockType.REPORTER,
          text: 'length'
        },
        {
          opcode: 'sudnstget',
          blockType: Scratch.BlockType.REPORTER,
          text: 'get[valede]',
          arguments: {
            valede: {
              type: Scratch.ArgumentType.NUMBER
            }
          }
        },
        {
          opcode: 'sundpley',
          blockType: Scratch.BlockType.COMMAND,
          text: 'sound pley [ste] to [sto] on sampleRate [sampleRate]',
          arguments: {
            ste: {
              type: Scratch.ArgumentType.NUMBER
            },
            sto: {
              type: Scratch.ArgumentType.NUMBER
            },
            sampleRate: {
              type: Scratch.ArgumentType.NUMBER
            }
          }
        },
        {
          opcode: 'sundallstop',
          blockType: Scratch.BlockType.COMMAND,
          text: 'stopAll'
        }
      ]
    };
  }

  sudnstset(args) {
    return sundt.filedeta.set(base64ToBlob(args.filedeta));
  }
  sudnstlength(args) {
    return sundt.all();
  }
  sudnstget(args) {
    return sundt.get(args.valede);
  }
  sundpley(args) {
    const mysampleRate=args.sampleRate||50000;
    return fscossster(args.ste,args.sto,mysampleRate);
  }
  sundallstop(args) {
    return stopAllFscossster();
  }
}
Scratch.extensions.register(new sudnst());
