// IMPORT PADRÃO
import React, { useState } from "react";
import "./Chat-Window.css";

// Import Emoji
import EmojiPicker from "emoji-picker-react";

//  IMPORT DE ICONES DO MATERIAL UI
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import MicIcon from "@mui/icons-material/Mic";
import { width } from "@mui/system";

export default () => {
  const [emojiOpen, setEmojiOpen] = useState(false);
  {
    /* Responsavel por criar o SetEmojiOpen / SetEmojiClose*/
  }

  const heandleEmojiClick = () => {};

  const handleOpenEmoji = () => {
    {
      /* Função que abre o icone do emoji*/
    }

    setEmojiOpen(true);
  };

  const handleClose = () => {
    {
      /* Função que fecha o icone do close*/
    }

    setEmojiOpen(false);
  };

  return (
    <div className="chatWindow">
      <div className="chatWindow-header">
        <div className="chatWindow-headerinfo">
          <img
            className="chatWindow-avatar"
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt=""
          />
          <div className="chatWindow-name">Diego Rodrigues</div>
        </div>

        <div className="chatWindow-headerbuttons">
          <div className="chatWindow-btn">
            {" "}
            {/* HEADER-  DIV QUE CONTEM OS BOTÕES DO PERFIL (PESQUISA, 3 PONTINHOS, ARQUIVOS)*/}
            <SearchIcon style={{ color: "#919191" }} />
          </div>

          <div className="chatWindow-btn">
            <AttachFileIcon style={{ color: "#919191" }} />
          </div>

          <div className="chatWindow-btn">
            <MoreVertIcon style={{ color: "#919191" }} />
          </div>
        </div>
      </div>

      <div className="chatWindow-body"></div>

      <div
        className="chatWindow-emojiarea"
        style={{ height: emojiOpen ? "200px" : "0" }}
      >
        {" "}
        {/* CONFIG DOS EMOJI */}
        <EmojiPicker
          width={"auto"}
          onEmojiClick={heandleEmojiClick}
          searchDisabled
          skinTonesDisabled
          previewConfig={{ showPreview: false }}
          lazyLoadEmojis={false}
        />
      </div>

      <div className="chatWindow-footer">
        {" "}
        {/* FOOTER (ESCREVA SUA MENSAGEM, BOTÃO DE EMOJI, ENVIO, AUDIO, CLOSE) */}
        <div className="chatWindow-pre">
          <div
            className="chatWindow-btn"
            onClick={handleClose}
            style={{ width: emojiOpen ? 40 : 0 }}
          >
            <CloseIcon style={{ color: "#919191" }} />
          </div>
          <div className="chatWindow-btn" onClick={handleOpenEmoji}>
            <InsertEmoticonIcon style={{ color: "#919191" }} />
          </div>
        </div>
        <div className="chatWindow-inputarea">
          <input
            className="chatWindow-input"
            tipe="text"
            placeholder="Digite uma mensagem"
          />
        </div>
        <div className="chatWindow-pos">
          <div className="chatWindow-btn">
            <SendIcon style={{ color: "#919191" }} />
          </div>
        </div>
      </div>
    </div>
  );
};
