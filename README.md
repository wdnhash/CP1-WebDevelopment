# CP1 – WebDevelopment 2025-2 (Tempo de Reunião)

Este projeto foi desenvolvido como **trabalho da faculdade**, seguindo os requisitos propostos no repositório [CP1-Webdev-2025-2](https://github.com/mmamorim/CP1-Webdev-2025-2).  
A ideia foi criar uma **calculadora de duração de reunião**, utilizando **somente operações matemáticas** para determinar o tempo entre início e fim, sem recorrer a bibliotecas ou funções de data/hora.


---


## 👥 Participantes

- **Wenderson** – [wdnhash](https://github.com/wdnhash) - RM:567847
- **Douglas** – [DGdoougz](https://github.com/DGdoougz) - RM:567846


---


## 🎯 Objetivo do projeto

- Atender aos critérios acadêmicos estipulados para o trabalho da disciplina de WebDevelopment.  
- Implementar uma calculadora que receba horário de **início** e **término** e retorne a **duração total** da reunião.  
- Fazer todos os cálculos de tempo através de **lógica matemática explícita** (conversão para minutos, subtração, tratamento de virada de dia, etc.), garantindo clareza e aprendizado prático.


---


## 🗂️ Estrutura do repositório

```
CP1-Webdev-2025-2/
├── index.html      # Estrutura da página
├── style.css       # Estilização básica e layout
└── script.js       # Lógica do cálculo da duração
```


---


## 🧠 Como funciona

1. O usuário informa os horários de **início** e **término** (hora e minuto).  
2. O JavaScript converte cada horário em **minutos totais**, subtrai os valores e calcula a diferença.  
3. Caso o horário de término seja **anterior ao início** (reunião passando da meia-noite), a lógica ajusta automaticamente adicionando 24 horas em minutos.  
4. O resultado é exibido em formato **HH:MM**.


---


## 💡 Observação

Embora não fosse uma exigência do trabalho, aproveitamos os conhecimentos adquiridos na disciplina de **Front-End** para criar um **CSS básico**.  
O objetivo foi aplicar o que aprendemos em aula para dar um estilo simples e organizado à página, reforçando o aprendizado de estruturação e estilização, sem fugir do foco principal de realizar o cálculo da duração da reunião.
