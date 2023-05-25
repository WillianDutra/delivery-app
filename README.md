# 🚚 Delivery App

Este projeto é uma aplicação web completa para um serviço de delivery online. Ele inclui funcionalidades para clientes, vendedores e administradores.

## 📝 Índice

- [🚚 Delivery App](#-deliveryapp)
  - [📝 Índice](#-índice)
  - [🎁 Recursos](#-recursos)
    - [Cliente](#cliente)
    - [Vendedor](#vendedor)
    - [Administrador](#administrador)
  - [🛠 Instalação](#-instalação)
  - [🚀 Uso](#-uso)
  - [🧪 Testes](#-testes)
  - [👨‍💻 Desenvolvedores](#-desenvolvedores)
  - [🤝 Suporte](#-suporte)
  - [📄 Licença](#-licença)

## 🎁 Recursos

### Cliente

- Visualizar a lista de produtos disponíveis
- Adicionar produtos ao carrinho
- Fazer checkout do pedido
- Visualizar seus pedidos
- Ver detalhes de um pedido
- Alterar o status do pedido para "Entregue"

### Vendedor

- Visualizar a lista de pedidos
- Ver detalhes de um pedido
- Alterar o status do pedido para "Preparando" ou "Em trânsito"

### Administrador

- Cadastrar novos usuários (clientes e vendedores)
- Impedir o cadastro de usuários já existentes

## 🛠 Instalação

Certifique-se de que não há processos rodando nas portas 3306, 3001 e 3000 antes de prosseguir.

1. Clone este repositório: `git clone https://github.com/-->github<--/delivery-app`
2. Navegue até a pasta raiz do projeto: `cd delivery-app`
3. Inicie os containers Docker: `docker-compose up`
4. Navegue até a pasta "backend": `cd backend`
5. Instale as dependências: `npm install`
6. Faça a build: `npm run build`
7. Inicie o servidor de desenvolvimento: `npm run dev`
8. Abra outra janela do terminal
9. Navegue até a pasta "frontend": `cd frontend`
10. Instale as dependências: `npm install`
11. Inicie o aplicativo frontend: `npm start`
12. Agora você pode acessar o aplicativo em seu navegador no endereço http://localhost:3000.

## 🚀 Uso

Para usar a aplicação, navegue até `localhost:3000` em seu navegador. A partir daí, você pode criar uma conta e começar a usar os recursos disponíveis de acordo com o seu papel (cliente, vendedor ou administrador).

## 🧪 Testes

Este projeto inclui vários testes para garantir que tudo funcione como esperado. Para executar os testes, use o comando `npm test`.

## 👨‍💻 Desenvolvedores

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/mateusmsf94" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/62353112?v=4" width="180px" alt="Mateus Melo"/>
        <p>Mateus Melo</p>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/WillianDutra" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/66283825?v=4" width="180px" alt="Willian Dutra"/>
        <p>Willian Dutra</p>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/tulioba" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/108943977?v=4" width="180px" alt="Tulio Amorim"/>
        <p>Tulio Amorim</p>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/andreugross" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/58981672?v=4" width="180px" alt="Andre Gross"/>
        <p>Andre Gross</p>
      </a>
    </td>
  </tr>
</table>


## 🤝 Suporte

Se você encontrar algum problema ou tiver alguma sugestão, por favor, abra uma issue no GitHub.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito com ❤️ e muita programação!