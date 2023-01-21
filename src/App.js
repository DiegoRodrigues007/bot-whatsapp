// IMPORT PADRÃO
import React, { useState, useEffect } from "react";
import "./App.css";

// Import de icones utlizados no header
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";

// Import de components
import ChatListIten from "./components/ListContact/ChatListItem";
import ChatIntro from "./components/Chat/ChatIntro.js";
import ChatWindow from "./components/ChatWindow";

export default () => {
  // Esse useState é responsavel por criar as conversar, cada objeto criado é uma nova conversa adicionada
  const [chatlist, setChatList] = useState([
    {
      chatId: 1,
      title: "Fulano",
      imagem: "https://www.w3schools.com/howto/img_avatar.png",
    },

    {
      chatId: 2,
      title: "Fulano",
      imagem: "https://www.w3schools.com/howto/img_avatar.png",
    },

    {
      chatId: 3,
      title: "Fulano",
      imagem: "https://www.w3schools.com/howto/img_avatar.png",
    },

    {
      chatId: 4,
      title: "Fulano",
      imagem: "https://www.w3schools.com/howto/img_avatar.png",
    },

    {
      chatId: 5,
      title: "Fulano",
      imagem: "https://www.w3schools.com/howto/img_avatar.png",
    },
  ]);

  // Esse useState é responsavel por dizer qual chat esta ativo no momento
  const [activeChat, setActiveChat] = useState({});

  return (
    <div className="app-window">
      <div className="sidebar">
        <header className="header">
          <img
            className="header-avatar"
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Foto de perfil"
          />
          <div className="header-buttons">
            <div className="header-btn">
              <DonutLargeIcon style={{ color: "#919191" }} />
            </div>

            <div className="header-btn">
              <ChatIcon style={{ color: "#919191" }} />
            </div>

            <div className="header-btn">
              <MoreVertIcon style={{ color: "#919191" }} />
            </div>
          </div>
        </header>

        <div className="search">
          <div className="search-input">
            <SearchIcon fontSize="small" style={{ color: "#919191" }} />
            <input
              type="search"
              placeholder="Procurar ou começar uma nova conversa"
            />
          </div>
        </div>

        {/* O USESTATE ESTA SENDO UTILIZADO NESSA DIV PARA GERAR A LISTA DE USUARIOS */}
        <div className="chatlist">
          {chatlist.map((item, key) => (
            <ChatListIten
              key={key}
              data={item}
              active={activeChat.chatId === chatlist[key].chatId}
              onClick={() => setActiveChat(chatlist[key])}
            />
          ))}
        </div>
      </div>
      <div className="contentarea">
        {/* Quando existir um chat ativo  */}

        {activeChat.chatId !== undefined && <ChatWindow />}

        {/* Quando não existir um chat ativo, ele ira retornar para a página principal */}

        {activeChat.chatId === undefined && <ChatIntro />}
      </div>
    </div>
  );
};
