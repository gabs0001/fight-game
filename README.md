## 🥊 Fighting Game: Combate e Animação Sincronizada

Um jogo de luta 2D estilo arcade, onde o *player* controla ambos os personagens para testar a mecânica de combate. Desenvolvido em **JavaScript puro** e **HTML5 Canvas**, com forte ênfase em **Programação Orientada a Objetos (POO)**.

O projeto foi baseado em um treinamento no YouTube, mas foi significativamente aprimorado com lógica de *gameplay* e otimização visual.

-----

## ✨ Destaques Técnicos e Funcionalidades

Este jogo é uma demonstração robusta de como gerenciar estados de combate e colisão complexa em tempo real.

  * **Arquitetura Orientada a Objetos (POO):** O projeto segue rigorosamente a POO, com classes dedicadas para `Fighter` (personagem base) e `Sprite`, garantindo código limpo e de fácil manutenção.
  * **Sistema de Combate e Vida:** Lógica precisa para **subtração de vida** em ataques bem-sucedidos. O primeiro lutador a atingir 0 de vida perde.
  * **Detecção de Colisão Sincronizada:** Implementação de uma lógica complexa de **colisão de *hitboxes*** que verifica:
      * Colisão entre o **personagem** e os **limites da tela**.
      * Colisão entre a **área de ataque** de um lutador e a **área do corpo** do oponente, no *frame* exato do ataque.
  * **Animações Aprimoradas:** Refatoração nas animações de *sprites* para obter um **efeito visual mais suave e fluido** (caminhar, atacar, cair).
  * **Novo Ataque Implementado:** **Implementação própria** de um novo ataque único para cada personagem, exigindo o *design* de novos *sprites* e integração da lógica de colisão.
  * **Controle Duplo:** O *game loop* aceita e processa *inputs* de dois conjuntos de teclas simultaneamente.

-----

## 💻 Tecnologias Utilizadas

O projeto foi construído apenas com tecnologias nativas da web, mostrando o domínio do *Vanilla* JavaScript.

  * **HTML5 Canvas** (Renderização gráfica e *game loop* central)
  * **JavaScript (Puro)** (Toda a lógica de combate, POO, e manipulação de estado)
  * **CSS3** (Estilização e *layout*)

-----

## 🛠️ Primeiros Passos

O projeto é executável diretamente no navegador.

### 📥 Instalação

1.  **Clone o repositório:**
    ```bash
    git clone https://docs.github.com/pt/repositories/creating-and-managing-repositories/quickstart-for-repositories
    ```
2.  **Navegue até a pasta do projeto:**
    ```bash
    cd fighting-game-2d
    ```
3.  **Abra o arquivo `index.html`** no seu navegador.

### 🕹️ Controles

| Personagem | Ação | Tecla |
| :---: | :--- | :--- |
| **Player 1** | Mover Esquerda | **A** |
| | Mover Direita | **D** |
| | Pular | **W** |
| | Atacar | **Barra de Espaço** |
| **Player 2** | Mover Esquerda | **Seta Esquerda** |
| | Mover Direita | **Seta Direita** |
| | Pular | **Seta Cima** |
| | Atacar | **Seta Baixo** |

-----

## 🧠 Foco em Implementação Própria

As melhorias focaram em transformar o projeto de um exercício de aprendizado para uma demonstração de código otimizado:

  * **Otimização de Animação:** Ajustes finos no tempo e na transição dos *frames* de *sprites* para garantir que o **combate pareça mais responsivo e profissional**.
  * **Design de Combate:** Criação de novos ataques (incluindo a lógica de *timing* e *hitbox*) para **aumentar a complexidade e a variedade do *gameplay***.

Este README destaca sua habilidade em dominar o POO para criar uma lógica complexa e sincronizada, o que é um grande feito para um projeto de *fighting game* em JavaScript puro\!
