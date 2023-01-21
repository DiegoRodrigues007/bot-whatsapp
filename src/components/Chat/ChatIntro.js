import React from "react";
import "../Chat/ChatIntro.css";

// Import da imagem de fundo
import minhaImagem from "../../img/imagem.jpg";

export default () => {
  return (
    <div className="chatIntro">
      {/* Imagem de fundo quando não tem nenhuma conversa selecionada */}
      <img src={minhaImagem} alt="imagem de um celular" />

      <h1>Mantenha seu celular conectado</h1>
      <h2>
        O WhatsApp conecta ao seu telefone para sincronizar suas mensagens. Para
        reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi
      </h2>
    </div>
  );
};
