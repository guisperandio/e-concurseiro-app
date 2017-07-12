<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
<meta name="description" content="">
<meta name="author" content="">
<link rel="icon" href="../../favicon.ico">
<title>e-concurseiro</title>
<?php include('estilos.html'); ?>
</head>
<body>
<?php include('topo.html'); ?>

<div class="container_16 home-concurseiro" id="wrapper-interna">
  <?php include('coluna_esquerda.html'); ?>
  <div class="grid_8" id="content-middle">
    <div class="publicacao clearfix">
      <h4>O que encontro nesta página?</h4>
      <p>
        No FEED DE NOTÍCIAS você recebe as atualizações dos assuntos de seu interesse e dos concurseiros e professores que fazem parte da sua rede.
        <br />Você também pode publicar rapidamente seu status, no campo abaixo.
      </p>
      <input type="text" class="publish-title" placeholder="clique aqui para adicionar um título (opcional)"/>
      <textarea></textarea>
      <div class="publish-options clearfix">
        <i class="sprite sprite-img_pq"></i>
        <i class="sprite sprite-video_pq"></i>
        <fieldset>
          <label>TAGS</label>
          <input type="text" class="input-tag"/>
        </fieldset>
        <i class="sprite sprite-plus_pq"></i>
      </div>
      <button class="btn btn-publish btn-darkblue">Publicar</button>
      <button class="btn btn-avanced btn-clear no-transform">Publicar no MODO AVANÇADO</button>

    </div>

    <div class="box-feed shadow clearfix publicacao" id="published-avancado">
      <i class="sprite sprite2 sprite-close_blue right"></i>
      <div id="passo1">
        <fieldset class="clearfix">
          <span class="title-text">O que você deseja publicar?</span>

          <div class="select-option">
            <select class="sprite4 sprite-seta_option quarter">
              <option>
                Selecione o tipo de publicação
              </option>
              <option>
                Teste
              </option>
            </select>
          </div>
          <ul class="areas clearfix">
            <li>
              <a href="#"><i class="sprite sprite2 sprite-tik_gray"></i><span class="menu-name">Área</span></a>
            </li>
            <li>
              <a href="#"><i class="sprite sprite2 sprite-tik_gray"></i><span class="menu-name">Concurso</span></a>
            </li>
            <li>
              <a href="#"><i class="sprite sprite2 sprite-tik_gray"></i><span class="menu-name">Matéria</span></a>
            </li>
            <li>
              <a href="#"><i class="sprite sprite2 sprite-tik_gray"></i><span class="menu-name">Assunto</span></a>
            </li>
          </ul>
        </fieldset>
        <fieldset class="clearfix">
          <input type="text"  placeholder="Texto sendo digitado" class="interesses"/> <i class="sprite sprite-plus"></i>
          <span class="title-text">Interesses vinculados</span>
          <div class="interesses">
            <div class="interesse i0">
              <span class="text-interesse left">Dicas de estudo</span>
              <i class="sprite sprite2 sprite-close_gray"></i>
            </div>
            <div class="interesse i0">
              <span class="text-interesse left">Dicas de estudo</span>
              <i class="sprite sprite2 sprite-close_gray"></i>
            </div>
            <div class="interesse i0">
              <span class="text-interesse left">Dicas de estudo</span>
              <i class="sprite sprite2 sprite-close_gray"></i>
            </div>
            <div class="interesse i0">
              <span class="text-interesse left">Dicas de estudo</span>
              <i class="sprite sprite2 sprite-close_gray"></i>
            </div>
          </div>
        </fieldset>
        <button class="btn btn-gray btn-voltar left quarter">Voltar</button>
        <button class="btn btn-blue btn-avancar right no-margin quarter">Avançar</button>
      </div>

      <div id="passo2">
        <input type="text" placeholder="Insira um título para sua publicação (opcional)" class="title-avancado"/>

        <div class="botoes">
          Menu de opções de edição de texto são inseridos no desenvolvimento
        </div>

        <textarea class="text-avancado"></textarea>

        <p class="alert-avancado">
          As publicações devem respeitar os direitos autorais, os demais membros da comunidade e os termos de uso do e-concurseiro.
        </p>
        <button class="btn btn-gray btn-voltar left quarter">Voltar</button>
        <button class="btn btn-blue btn-avancar right no-margin quarter">Publicar</button>
      </div>
    </div>



    <ul id="expand-list" class="clearfix">
      <li>
        <a href="#" class="expand">Expandir publicações</a>
      </li>
      <li>
        <a href="#" class="list expand">Exibir tipo lista</a>
      </li>
    </ul>
    <?php include('publicacoes.html'); ?>

  </div>
  <!-- end .grid_6 -->
  <div class="grid_4 no-margin-right" id="content-right">
    <div class="box-direita" id="ead">
      <span class="title-box">Estude online com os professores da rede!</span>
      <p>Siga os professores do seu interesse e acesse os melhores conteúdos e cursos, PDF ou videoaulas. Estude com foco e qualidade, sem sair de casa!</p>
      <i class="sprite sprite-professore">Professores</i>
      <button class="btn btn-ok btn-cursos"><i class="sprite sprite-cursos"></i><span class="btn-text">Cursos Online</span></button>
    </div>

    <div class="box-direita" id="concurso">
      <span class="title-box">Acompanhe aqui o status de cada concurso!</span>
      <p>Autorizações, publicações de editais, datas das provas, etc.</p>
      <button class="btn btn-warning btn-concurso full"><i class="sprite sprite-mapa"></i><span class="btn-text">Mapa dos concursos</span></button>
    </div>

    <div class="box-direita" id="papo">
      <span class="title-box">Papo de concurseiro</span>
      <p>Conheça o canal oficial do e-concurseiro, com muitas dicas, entrevistas e eventos ao vivo.</p>
      <button class="btn btn-orange btn-papo full"><i class="sprite sprite-papo"></i><span class="btn-text">Papo de concurseiro</span></button>
    </div>

    <div class="anuncio small">
      <h4>Anúncio Patrocinado</h4>
      <div class="banner-patrocinio" style="background-image: url('banners/banner.jpg')"></div>
      <span class="name-anunciantes">Nome do anunciante</span>
      <span class="site-anunciante">www.nomedoanunciante.com.br</span>
      <p class="text-anunciantes">
        Texto do anúncio com quantidade limitada de caracteres, de modo que ocupe até 2 linhas de texto.
      </p>
    </div>

    <div class="box-direita" id="anuncie">

      <p class="anuncie">
        Anuncie em nossa rede e apareça para milhares de concurseiros de todo o país.
      </p>
      <i class="sprite sprite-anuncie_pq"></i>
      <a href="#" class="anuncie-aqui">
        Conheça nossos planos e vantegens!
        <br />CLIQUE AQUI
      </a>
    </div>

    <div class="anuncio small">
      <h4>Anúncio Patrocinado</h4>
      <div class="banner-patrocinio" style="background-image: url('banners/banner.jpg')"></div>
      <span class="name-anunciantes">Nome do anunciante</span>
      <span class="site-anunciante">www.nomedoanunciante.com.br</span>
      <p class="text-anunciantes">
        Texto do anúncio com quantidade limitada de caracteres, de modo que ocupe até 2 linhas de texto.
      </p>
    </div>
  </div>
  <!-- end .grid_6 -->

</div>
<!-- end .container_12 -->
<?php include('scripts.html'); ?>
</body>
</html>
