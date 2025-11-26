# Documentação completa das APIs do Sketchfab (Novembro de 2025)

> **Visão geral** – O Sketchfab é uma plataforma web para visualização e compartilhamento de modelos 3D.  Para integrar aplicações de terceiros, a empresa disponibiliza várias APIs: uma **Data API** REST, a **Download API**, a **Viewer API** (JavaScript), um fluxo de autenticação via **OAuth 2.0**, um **endpoint oEmbed** para incorporação e **diretrizes de desenvolvimento**.  As seções abaixo reúnem os principais conceitos, fluxos de autenticação e descrições de endpoints com base nas páginas oficiais do Sketchfab.

## Conceitos gerais

### Autenticação e segurança

* **API Token x OAuth 2.0** – Diversos endpoints exigem autenticação. É possível utilizar um *token de API* (colocar no cabeçalho `Authorization: Token {API_TOKEN}`) ou um *token de acesso OAuth 2.0* (cabeçalho `Authorization: Bearer {ACCESS_TOKEN}`). O Sketchfab recomenda OAuth porque melhora a experiência do usuário e permite que aplicações atuem em nome do usuário. Modelos protegidos por senha exigem, adicionalmente, o cabeçalho `x‑skfb‑model‑pwd` contendo a senha codificada em Base64【590259242317675†L0-L14】.
* **Autorização de usuário (OAuth 2.0)** – Os fluxos suportados são *authorization code* (para aplicativos servidor), *implicit* (aplicações JavaScript/mobile) e *username/password* (casos sem navegador).  Após o usuário conceder permissão, a aplicação recebe um token de acesso válido por 1 mês. O token deve ser renovado com o *refresh token* ou o usuário deve repetir o processo【229677801577864†L186-L306】.  Endpoints autenticados exigem que o token seja enviado no cabeçalho de cada requisição【229677801577864†L354-L370】.
* **Paginação** – Listagens retornam páginas com 24 itens por padrão. A resposta contém os campos `next`, `previous` e um objeto `cursors` com cursor para a próxima página.  É possível alterar o número de itens por meio do parâmetro `count` (limitado a 24)【590259242317675†L15-L23】.
* **Formato de datas e limites** – Datas utilizam o padrão ISO‑8601.  O Sketchfab aplica cotas e limitações; se excedidas, o serviço retorna HTTP 429 (Too Many Requests)【590259242317675†L24-L27】.

## Data API v3 (REST)

A Data API permite ler e gravar dados na plataforma. A base de todos os endpoints é `https://api.sketchfab.com/v3`. As respostas são sempre JSON e os parâmetros enviados em requisições `POST`/`PATCH` são, em geral, JSON ou `multipart/form-data`. A seguir estão as categorias de recursos mais importantes.  Consulte a [especificação completa] de cada endpoint para obter detalhes de campos, tipos e limites.

> **Nota** – os exemplos de parâmetros e respostas resumem as opções mais comuns.  A documentação oficial contém descrições completas e possíveis variações.

### Modelos

| Endpoint | Método | Descrição resumida | Autenticação |
|---|---|---|---|
| `/v3/models` | **GET** | Lista modelos públicos e publicados. Permite ordenar por `createdAt`, `viewCount` ou `likedAt`【590259242317675†L2159-L2188】.  Aceita filtros como `search`, `tags`, `categories` e `count`.  Retorna um array de objetos `Model` e campos de paginação. | não obrigatória |
| `/v3/models` | **POST** | Carrega um novo modelo. Aceita formulário multipart com campos: `modelFile` (arquivo obrigatório), `name`, `description`, `tags`, `categories`, `private`, `password`, `isInspectable`, `license`, `isArEnabled`, `isPublished` e `options`.  O cabeçalho `Authorization` com Token ou OAuth é obrigatório【590259242317675†L2010-L2157】.  A resposta inclui o UID do modelo e o cabeçalho `Location` apontando para o recurso criado. | necessária |
| `/v3/models/{uid}` | **GET** | Retorna detalhes de um modelo específico (nome, descrição, estatísticas, arquivos, usuário autor, etc.).  Inclui campos como `viewerUrl` e `embedUrl`. | não obrigatória para modelos públicos; obrigatória para privados |
| `/v3/models/{uid}` | **PATCH** | Atualiza atributos do modelo (nome, descrição, tags, categorias, privacidade, licença, senha, opções).  Envia-se os campos a alterar em JSON ou `formData`.  | necessária |
| `/v3/models/{uid}` | **DELETE** | Remove o modelo do Sketchfab. | necessária |
| `/v3/models/{uid}/comments` | **GET** | Lista comentários do modelo. | não obrigatória |
| `/v3/models/{uid}/comments` | **POST** | Adiciona um comentário. Envia JSON com `body` (texto). | necessária |
| `/v3/models/{uid}/comments/{commentUid}` | **DELETE** | Remove um comentário do modelo. | necessária |
| `/v3/models/{uid}/like` | **POST** | Curte o modelo em nome do usuário autenticado. | necessária |
| `/v3/models/{uid}/like` | **DELETE** | Remove o “curtir”. | necessária |
| `/v3/models/{uid}/download` | **GET** | Endpoint da **Download API**. Retorna URLs temporários para os arquivos glTF/GLB e USDZ do modelo.  O usuário precisa estar autenticado (OAuth).  Os links expiram após alguns minutos【572669737908266†L180-L220】. | necessária |
| `/v3/models/{uid}/options` | **PATCH** | Atualiza opções de visualização (ex. *shading*, *physics*, *downloadable*, etc.). | necessária |
| `/v3/models/{uid}/report` | **POST** | Reporta abuso no modelo em nome de um usuário. | necessária |
| `/v3/models/{uid}/files` | **GET** | Lista os arquivos associados ao modelo (ex. versão original, glTF gerado). | necessária para modelos privados |

### Usuários e perfis

| Endpoint | Método | Descrição | Autenticação |
|---|---|---|---|
| `/v3/me` | **GET** | Retorna as informações do usuário autenticado: UID, nome, estatísticas, assinaturas, uploads disponíveis etc.【229677801577864†L354-L370】. | necessária |
| `/v3/me` | **PATCH** | Atualiza informações do perfil (biografia, cidade, país, redes sociais). | necessária |
| `/v3/users/{userUid}` | **GET** | Retorna dados públicos de um usuário específico (nome, avatar, contagem de modelos, seguidores, etc.). | não obrigatória |
| `/v3/users/{userUid}/models` | **GET** | Lista modelos publicados por um usuário.  Aceita filtros e paginação. | não obrigatória |
| `/v3/users/{userUid}/likes` | **GET** | Lista os modelos curtidos pelo usuário. | não obrigatória |
| `/v3/users/{userUid}/followers` | **GET** | Lista seguidores do usuário. | não obrigatória |
| `/v3/users/{userUid}/followings` | **GET** | Lista usuários seguidos. | não obrigatória |

### Organizações (orgs) e times

| Endpoint | Método | Descrição | Autenticação |
|---|---|---|---|
| `/v3/orgs/{orgUid}` | **GET** | Retorna detalhes de uma organização (uid ou nome precedido por `@`).  | Token ou OAuth【590259242317675†L31-L63】 |
| `/v3/orgs/{orgUid}` | **PATCH** | Atualiza informações da organização (biografia, cidade, país, nome de exibição, redes sociais, site, slogan)【590259242317675†L64-L146】. | Token ou OAuth |
| `/v3/orgs/{orgUid}/members` | **GET** | Lista os membros de uma organização. | Token ou OAuth |
| `/v3/orgs/{orgUid}/models` | **GET** | Lista modelos pertencentes a uma organização. | Token ou OAuth |
| `/v3/orgs/{orgUid}/collections` | **GET** | Lista coleções da organização. | Token ou OAuth |

### Coleções

| Endpoint | Método | Descrição | Autenticação |
|---|---|---|---|
| `/v3/collections` | **POST** | Cria uma nova coleção de modelos.  Envia-se JSON com `name` e opcionalmente `description`, `isPrivate`. | necessária |
| `/v3/collections/{uid}` | **GET** | Recupera informações da coleção (nome, descrição, modelos). | não obrigatória se pública |
| `/v3/collections/{uid}` | **PATCH** | Atualiza uma coleção (nome, descrição, privacidade). | necessária |
| `/v3/collections/{uid}` | **DELETE** | Remove uma coleção. | necessária |
| `/v3/collections/{uid}/models` | **GET** | Lista modelos na coleção. | não obrigatória |
| `/v3/collections/{uid}/models` | **POST** | Adiciona modelos à coleção (enviar array de `modelUid`). | necessária |
| `/v3/collections/{uid}/models/{modelUid}` | **DELETE** | Remove modelo da coleção. | necessária |

### Categorias, tags, licenças e pesquisas

| Endpoint | Método | Descrição |
|---|---|---|
| `/v3/categories` | **GET** | Lista categorias (slug, nome, descrição). |
| `/v3/tags` | **GET** | Lista tags populares (slug, contagem). |
| `/v3/licenses` | **GET** | Retorna as licenças suportadas (slug, nome, URL)【590259242317675†L1998-L2004】. |
| `/v3/search` | **GET** | Pesquisa modelos ou coleções. Aceita parâmetros `q` (termo de busca), `type` (models, collections, users), `categories`, `tags`, `sort_by`, `count`. |
| `/v3/notifications` | **GET** | Recupera notificações do usuário autenticado. |
| `/v3/invitations` | **GET** | Lista convites pendentes para organização/equipe. |

### Comentários e curtidas gerais

| Endpoint | Método | Descrição |
|---|---|---|
| `/v3/comments/{uid}` | **GET** | Obtém um comentário específico. |
| `/v3/comments/{uid}` | **DELETE** | Exclui um comentário (autenticado). |
| `/v3/likes/{uid}` | **GET** | Retorna o estado de curtida do modelo (se o usuário autenticado curtiu). |

### Upload de modelos: limitações e parâmetros

Ao enviar modelos (`POST /v3/models`), existem restrições de tamanho de arquivo: 50 MB para usuários básicos, 200 MB para usuários Pro e 500 MB para planos Business【590259242317675†L2130-L2133】. Campos opcionais incluem:

* `private` (booleano) – torna o modelo privado (apenas contas Pro ou superiores)
* `password` – define senha para modelos privados
* `isInspectable` (booleano) – ativa o Inspector 2D; obrigatório para modelos baixáveis【590259242317675†L2046-L2055】
* `tags` e `categories` – arrays de strings (slug)
* `license` – slug de licença suportada【590259242317675†L2066-L2076】
* `isArEnabled` – habilita AR (plano Premium)
* `isPublished` – publica automaticamente após o processamento【590259242317675†L2110-L2117】

### Exemplo de requisição GET

```
curl https://api.sketchfab.com/v3/models/7w7pAfrCfjovwykkEeRFLGw5SXS \
     -H "Authorization: Token {SEU_TOKEN_API}"
```

A resposta conterá o JSON com informações do modelo, links de visualização, estatísticas e opções.

## Download API

A Download API é uma extensão da Data API e permite baixar modelos glTF/GLB e USDZ. O fluxo é:

1. **Autenticar o usuário** – Usuários precisam estar logados; use OAuth 2.0.【572669737908266†L180-L183】
2. **Solicitar a autorização de download** – faça `GET https://api.sketchfab.com/v3/models/{uid}/download` com o token OAuth.  A resposta traz links temporários (`gltf.url` e `usdz.url`) e o tamanho dos arquivos【572669737908266†L189-L220】.
3. **Baixar o arquivo** – utilize os URLs retornados.  Não é necessário autenticação adicional, pois os links já contêm um token de acesso【572669737908266†L222-L227】.
4. **Descompactar (glTF)** – o arquivo glTF vem em formato ZIP contendo `scene.gltf`, `scene.bin` e uma pasta `textures`【572669737908266†L222-L243】.
5. **Carregar o modelo** – use uma biblioteca glTF (por exemplo, [three.js](https://threejs.org/)) ou USDZ (aberto nativamente no iOS).  O Sketchfab mantém uma lista de importadores e bibliotecas【962076692389277†L171-L214】.

No lado do cliente (JavaScript), pode‑se usar `fetch()` para solicitar o download e uma biblioteca como `zip.js` para descompactar o arquivo em memória【433877539987389†L145-L195】.

## Viewer API (JavaScript)

A Viewer API permite controlar o visualizador 3D incorporado do Sketchfab.  Ela está disponível como uma biblioteca JavaScript (`sketchfab-viewer-<versão>.js`).  O fluxo básico é:

1. **Incluir a biblioteca** – adicionar `<script src="https://static.sketchfab.com/api/sketchfab-viewer-1.12.1.js"></script>` na página【781395592864429†L195-L198】.
2. **Inserir um iframe vazio** – `<iframe src="" id="api-frame" allow="autoplay; fullscreen; xr-spatial-tracking" ...></iframe>`【781395592864429†L200-L205】.
3. **Criar a instância** – `var client = new Sketchfab(version, iframe);`【29070229379523†L175-L182】.
4. **Inicializar o modelo** – `client.init(uid, { success: onSuccess, error: onError, ...opções });`【29070229379523†L184-L199】.  No callback `onSuccess` recebe‑se um objeto `api` para controlar o visualizador.  

### Opções de inicialização e parâmetros de URL

Ao inicializar, é possível definir opções como:

| Opção | Padrão | Uso |
|---|---|---|
| `camera` | `1` | Define se a animação inicial de câmera é mostrada; `0` pula a animação【29070229379523†L309-L315】. |
| `autostart` | `0` | Inicia o carregamento automaticamente.  Útil quando há apenas um modelo na página【29070229379523†L300-L307】. |
| `autospin` | `0` | Faz o modelo girar após o carregamento; valores negativos invertem o sentido【29070229379523†L290-L299】. |
| `annotation` | `off` | Carrega diretamente uma anotação específica (1–100)【29070229379523†L264-L269】. |
| `annotation_cycle` | `off` | Define a duração (s) de cada anotação no modo Autopilot【29070229379523†L271-L277】. |
| `annotations_visible` | `1` | Mostra/oculta todas as anotações【29070229379523†L284-L288】. |
| `annotation_tooltip_visible` | `1` | Exibe/oculta o tooltip das anotações【29070229379523†L278-L283】. |
| `dnt` | `0` | Desativa medições de audiência/analytics【29070229379523†L316-L321】. |
| `navigation` | `orbit` | Pode ser `fps` para iniciar em modo primeira pessoa【29070229379523†L348-L352】. |
| `preload` | `0` | Baixa todos os recursos antes de exibir a cena; aumenta o tempo de carregamento e pode causar travamentos em dispositivos móveis【29070229379523†L355-L364】. |
| `max_texture_size` | `8192` | Limita a resolução máxima de texturas (potência de 2)【29070229379523†L340-L347】. |
| `fps_speed` | `25` | Ajusta velocidade no modo primeira pessoa【29070229379523†L333-L338】. |

Além das opções acima, qualquer parâmetro de URL suportado pelo Sketchfab (ex.: `autospin`, `autostart`) pode ser passado no objeto de inicialização ou diretamente no `src` do iframe【29070229379523†L232-L253】.

### Principais funções da API (objetos e câmera)

O objeto `api` fornecido no callback `success` expõe diversos métodos agrupados por categoria【547819503323295†L171-L199】.  Abaixo está um resumo das funções mais utilizadas.

#### Geral

| Função | Descrição |
|---|---|
| `api.addEventListener(evento, callback)` | Adiciona um ouvinte para eventos como `viewerready`, `annotationFocus`, `animationReady`, etc. O callback recebe parâmetros específicos【547819503323295†L201-L205】. |
| `api.load([callback])` | Pré‑carrega o modelo antes de iniciar o visualizador【547819503323295†L213-L218】. |
| `api.start()` / `api.stop()` | Inicia ou pausa a renderização do visualizador. |
| `api.getScreenShot([x,y,width,height], mimeType, callback)` | Captura uma imagem da tela. |
| `api.pickColor(x, y, callback)` | Retorna a cor no ponto da tela (útil para seleção). |
| `api.getWorldToScreenCoordinates(vector3, callback)` | Converte coordenadas do mundo para coordenadas de tela. |

#### Câmera

| Função | Descrição |
|---|---|
| `api.getCameraLookAt(callback)` | Retorna posição/target da câmera. |
| `api.setCameraLookAt(position, target, duration)` | Move a câmera para a posição e target especificados em determinado tempo. |
| `api.getFieldOfView(callback)` / `api.setFieldOfView(fov)` | Obtém/define o campo de visão. |
| `api.getCameraPosition(callback)` / `api.setCameraPosition(position, duration)` | Obtém/define a posição da câmera. |
| `api.getCameraOrientation(callback)` / `api.setCameraOrientation(quaternion, duration)` | Obtém/define a orientação. |
| `api.resetCamera(duration)` | Restaura a câmera para o estado inicial. |

#### Objetos e cena

| Função | Descrição |
|---|---|
| `api.getSceneGraph(callback)` | Retorna a estrutura de nós e objetos do modelo. |
| `api.getNodeMap(callback)` | Obtém um mapa de todos os nós. |
| `api.getNodeBoundingBox(nodeId, callback)` | Retorna a caixa de limites de um nó. |
| `api.hide(nodeIds)` / `api.show(nodeIds)` | Oculta ou mostra nós (por id ou array). |
| `api.isVisible(nodeId, callback)` | Indica se um nó está visível. |
| `api.setScale(nodeId, vector3)` | Ajusta a escala de um nó. |
| `api.setPosition(nodeId, vector3)` / `api.setRotation(nodeId, quaternion)` | Ajusta a posição/rotação de um nó. |

#### Materiais e texturas

| Função | Descrição |
|---|---|
| `api.getMaterialList(callback)` | Lista materiais do modelo. |
| `api.getMaterial(materialId, callback)` | Retorna dados de um material. |
| `api.updateMaterial(materialId, data)` | Atualiza parâmetros do material (cores, texturas, metalness, roughness). |
| `api.createMaterial(materialData, callback)` | Cria um material personalizado e retorna seu ID. |
| `api.deleteMaterial(materialId)` | Remove um material criado pela API. |

#### Pós‑processamento e filtros

| Função | Descrição |
|---|---|
| `api.getPostProcessingFilters(callback)` | Obtém a lista de filtros (Bloom, DOF, Vignette etc.). |
| `api.getFilter(name, callback)` / `api.setFilter(name, params)` | Lê/define parâmetros de filtros específicos. |
| `api.setPostProcessingFilter(name, enabled)` | Ativa/desativa um filtro. |

#### Animações e eventos

| Função | Descrição |
|---|---|
| `api.getAnimations(callback)` | Retorna lista de animações presentes no modelo. |
| `api.playAnimation(id, loop, autoplay, duration)` | Reproduz uma animação. |
| `api.pauseAnimation()` / `api.stopAnimation()` | Pausa ou para a animação. |
| `api.setCurrentAnimationByUID(uid)` | Define qual animação está ativa. |
| `api.addEventListener(evento, callback)` | Eventos importantes incluem `viewerready` (visualizador pronto), `annotationFocus`, `click`, `doubleClick`, `mousemove`, `touchstart` etc. |

#### Luzes e ambiente

| Função | Descrição |
|---|---|
| `api.getLightList(callback)` | Obtém as luzes da cena. |
| `api.setLight(lightId, params)` | Ajusta propriedades de uma luz (tipo, cor, intensidade). |
| `api.setBackground(color or texture)` | Altera a cor de fundo ou imagem HDRI. |
| `api.setEnvironment(mapUid)` | Define ambiente HDR personalizado. |

Para exemplos de uso, o site oficial disponibiliza um repositório de exemplos e widgets de importação.  Consulte também as páginas de **Exemplos** da Viewer API.

## oEmbed API

Para facilitar a incorporação de modelos em qualquer site, o Sketchfab implementa a especificação [oEmbed](https://oembed.com/).  O endpoint é `https://sketchfab.com/oembed`【949339565631899†L171-L186】.

### Parâmetros

* `url` (obrigatório) – URL da página do modelo (`https://sketchfab.com/models/{uid}`) ou de uma coleção.
* `maxwidth` (opcional) – largura máxima do visualizador retornado.
* `maxheight` (opcional) – altura máxima.

O Sketchfab sempre mantém proporção 16:9【949339565631899†L171-L187】.  A resposta é um JSON contendo:

```json
{
  "provider_name": "Sketchfab",
  "title": "Nome do modelo",
  "author_name": "Autor",
  "html": "<iframe width=\"640\" height=\"360\" src=\"https://sketchfab.com/models/{uid}/embed\" frameborder=\"0\" allowfullscreen mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\"></iframe>",
  "thumbnail_url": "...",
  ...
}
```

Há suporte também para playlists/coleções, bastando passar a URL de uma coleção para `url`【949339565631899†L240-L287】.

## Diretrizes de desenvolvimento

O Sketchfab incentiva que softwares de criação 3D integrem botões “Publicar no Sketchfab”.  As principais recomendações são【707229827166925†L171-L185】:

* Utilizar o endpoint `/v3/` da Data API.
* Implementar autenticação via OAuth 2.0 para melhor experiência de usuário【707229827166925†L198-L203】.
* Incluir um campo `source` ao publicar modelos (nome e URL de sua aplicação)【707229827166925†L198-L205】.
* Permitir que o usuário defina título, descrição, tags, privacidade e licenças durante o upload.
* Exibir claramente licenças Creative Commons e atribuição de autor ao baixar modelos (conforme as regras de licenciamento【805906541381869†L184-L199】).

Além disso, a página de **Importers** lista uma série de softwares de modelagem, motores de jogo e plataformas de realidade aumentada que implementam o Download API【525313905436980†L156-L181】.  Se o seu projeto pretende importar modelos, considere reutilizar bibliotecas disponíveis e seguir boas práticas.

## Resumo

Esta documentação sintetiza as várias interfaces disponibilizadas pelo Sketchfab para desenvolvedores.  A **Data API v3** oferece endpoints REST para manipular modelos, usuários, coleções e organizações com suporte a upload, curadoria e estatísticas.  A **Download API** permite baixar modelos glTF/GLB e USDZ mediante autenticação do usuário e respeito às licenças, enquanto a **Viewer API** fornece uma rica biblioteca JavaScript para embutir e controlar modelos 3D interativos em páginas web.  Complementam o ecossistema o suporte a **OAuth 2.0**, que simplifica a autenticação de usuários, o endpoint **oEmbed** para incorporação rápida e as **diretrizes de desenvolvimento** para integração em softwares.

Para obter detalhes completos de cada endpoint (parâmetros exatos, tipos e códigos de retorno), consulte a [especificação OpenAPI oficial do Sketchfab](https://docs.sketchfab.com/data-api/v3/swagger.json) ou explore os exemplos em Java, JavaScript, Python, PHP, Ruby e Swift na seção *Data API v3*.
