# Documentação da Loja Online em React Native

Esta documentação fornece uma visão geral e um guia passo a passo para instalar a loja online desenvolvida em React Native. O aplicativo consiste em várias telas e componentes que permitem a exibição de produtos, informações do produto, avaliações, comentários, descrições, especificações, dúvidas e contato com o vendedor.

A loja online em React Native foi desenvolvida utilizando a plataforma Expo, que oferece uma maneira fácil e rápida de criar aplicativos móveis. Ao usar o Expo, você pode desenvolver e testar o aplicativo tanto em dispositivos Android quanto iOS sem a necessidade de configurar emuladores separados.

Certifique-se de ter o ambiente Expo configurado em sua máquina antes de prosseguir. Siga as etapas abaixo para instalar e executar o aplicativo da loja online:
## Requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina antes de prosseguir:

- Node.js (versão 12 ou superior)
- npm (gerenciador de pacotes do Node.js)
- React Native CLI (instalado globalmente)

## Passo a Passo de Instalação

Siga as etapas abaixo para instalar e executar o aplicativo da loja online em sua máquina:

1. Clone o repositório do projeto:
   ```
   git clone <URL do repositório>
   ```

2. Acesse o diretório do projeto:
   ```
   cd <nome do diretório>
   ```

3. Instale as dependências do projeto utilizando o npm:
   ```
   npm install
   ```

4. Instale as dependências adicionais do React Native:
   ```
   npx react-native link
   ```
5. Inicie o aplicativo Expo:
   ```
   npm start 
   ```
6. Isso abrirá a interface do Expo Developer Tools no seu navegador. A partir daí, você pode escolher executar o aplicativo no seu dispositivo físico (usando o aplicativo Expo Go) ou em um emulador.

   - Para executar o aplicativo em um dispositivo físico:
     - Instale o aplicativo Expo Go no seu dispositivo a partir da loja de aplicativos (Google Play Store para Android ou App Store para iOS).
     - Abra o aplicativo Expo Go e digitalize o código QR exibido na interface do Expo Developer Tools. O aplicativo será carregado no seu dispositivo.

   - Para executar o aplicativo em um emulador:
     - Siga as instruções do Expo Developer Tools para iniciar o emulador adequado (Android ou iOS).
     - Clique no botão "Run on Android device/emulator" ou "Run on iOS simulator" na interface do Expo Developer Tools. O aplicativo será carregado no emulador.

Parabéns! Agora você pode explorar e testar a loja online em React Native usando a plataforma Expo. Lembre-se de que o Expo oferece várias funcionalidades adicionais, como o uso de APIs nativas, acesso a periféricos do dispositivo e compartilhamento fácil do aplicativo com outras pessoas.


## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte maneira:

- `Assets`: Contém as imagens utilizadas para exibir os produtos.
- `components`: Contém os componentes reutilizáveis e as subpastas `utils`.
  - `utils`: Contém o arquivo `db.json`, que é consumido pelo aplicativo para obter dados dos produtos.
  - `Página about`: Página de informações sobre a loja online.
  - `Página listaDeProdutos`: Página que lista os produtos disponíveis.
  - `Página productInfo`: Página que exibe as informações detalhadas de um produto. Utiliza o `createBottomTabNavigator` para navegar entre as telas relacionadas ao produto.
- `screens`: Contém as diferentes telas do aplicativo.
  - `contatoVendedor`: Tela de contato com o vendedor, que solicita nome, telefone, email e nota.
  - `produtoAvaliacao`: Tela que exibe as avaliações de um produto.
  - `produtoComentario`: Tela que exibe os comentários de um produto, incluindo nome, data e nota.
  - `produtoDescricao`: Tela que exibe a descrição de um produto.
  - `produtoDetalhe`: Tela que exibe a imagem, nome e preço de um produto.
  - `produtoDuvidas`: Tela que exibe as dúvidas dos clientes sobre um produto.
  - `produtoEspecificação`: Tela que exibe as especificações de um produto.
- `app.js`: Arquivo que contém os componentes renderizados, como `createStackNavigator`, `createDrawerNavigator` e `NavigationContainer`.

## Conclusão

A loja online em React Native é uma demonstração básica de um aplicativo de e-commerce. Você pode personalizar e estender o aplicativo de acordo com suas necessidades, adicionando recursos adicionais, integração com APIs de pagamento e gerenciamento de estado.

Divirta-se explorando e aprimorando a loja online em React Native!  










