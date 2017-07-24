angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



  .state('header2.papo', {
    url: '/papo',
    views: {
      'tab1': {
        templateUrl: 'templates/papo.html',
        controller: 'papoCtrl'
      }
    }
  })

  .state('header2.feed', {
    url: '/feed',
    views: {
      'tab6': {
        templateUrl: 'templates/feed.html',
        controller: 'feedCtrl'
      }
    }
  })
  .state('header2.feed_professor', {
    url: '/feed_professor',
    views: {
      'tab6': {
        templateUrl: 'templates/feed_professor.html',
        controller: 'professor_feedCtrl'
      }
    }
  })
  // .state('feed_professor', {
  //   url: '/feed_professor',
  //   templateUrl: 'templates/feed_professor.html',
  //   controller: 'professor_feedCtrl'
  // })

  .state('header2.desafios', {
    url: '/desafios',
    views: {
      'tab2': {
        templateUrl: 'templates/desafios.html',
        controller: 'desafiosCtrl'
      }
    }
  })

  .state('header2.notificacoes', {
    url: '/notificacoe',
    views: {
      'tab3': {
        templateUrl: 'templates/notificacoes.html',
        controller: 'notificacoesCtrl'
      }
    }
  })

  .state('header2.chats', {
    url: '/chats',
    views: {
      'tab5': {
        templateUrl: 'templates/chats.html',
        controller: 'chatsCtrl'
      }
    }
  })

  .state('header2', {
    url: '/header2',
    templateUrl: 'templates/header2.html',
    abstract:true
  })


  .state('interesses', {
    url: '/interesses',
    templateUrl: 'templates/interesses.html',
    controller: 'interessesCtrl'

  })
  .state('favoritos', {
    url: '/favoritos',
    templateUrl: 'templates/favoritos.html',
    controller: 'favoritosCtrl'

  })
  .state('minha-rede', {
    url: '/minha-rede',
    templateUrl: 'templates/minha-rede.html',
    controller: 'minha-redeCtrl'

  })
  .state('indicacoes', {
    url: '/indicacoes',
    templateUrl: 'templates/indicacoes.html',
    controller: 'indicacoesCtrl'

  })
  .state('boatos', {
    url: '/boatos',
    templateUrl: 'templates/boatos.html',
    controller: 'boatosCtrl'

  })
  .state('dicas', {
    url: '/dicas',
    templateUrl: 'templates/dicas.html',
    controller: 'ctrlPadrao'

  })
  .state('mapas', {
    url: '/mapas',
    templateUrl: 'templates/mapas.html',
    controller: 'ctrlPadrao'

  })
  .state('provas', {
    url: '/provas',
    templateUrl: 'templates/provas.html',
    controller: 'ctrlPadrao'

  })
  .state('editais', {
    url: '/editais',
    templateUrl: 'templates/editais.html',
    controller: 'ctrlPadrao'

  })
  .state('historias', {
    url: '/historias',
    templateUrl: 'templates/historias.html',
    controller: 'ctrlPadrao'

  })
  .state('motivacao', {
    url: '/motivacao',
    templateUrl: 'templates/motivacao.html',
    controller: 'ctrlPadrao'

  })
  .state('descontrair', {
    url: '/descontrair',
    templateUrl: 'templates/descontrair.html',
    controller: 'ctrlPadrao'

  })
  .state('perfil', {
    url: '/perfil',
    templateUrl: 'templates/perfil.html',
    controller: 'ctrlPadrao'

  })
  .state('papo_home', {
    url: '/papo_home',
    templateUrl: 'templates/papo_home.html',
    controller: 'ctrlPadrao'

  })
  .state('mapa_concursos1', {
    url: '/mapa_concursos1',
    templateUrl: 'templates/mapa_concursos1.html',
    controller: 'ctrlPadrao'

  })
  .state('mapa_concursos2', {
    url: '/mapa_concursos2',
    templateUrl: 'templates/mapa_concursos2.html',
    controller: 'ctrlPadrao'

  })
  .state('mapa_concursos3', {
    url: '/mapa_concursos3',
    templateUrl: 'templates/mapa_concursos3.html',
    controller: 'ctrlPadrao'

  })
  .state('mapa_concursos4', {
    url: '/mapa_concursos4',
    templateUrl: 'templates/mapa_concursos4.html',
    controller: 'ctrlPadrao'

  })
  .state('medalhas', {
    url: '/medalhas',
    templateUrl: 'templates/medalhas.html',
    controller: 'ctrlPadrao'

  })
  .state('mensagens', {
    url: '/mensagens',
    templateUrl: 'templates/mensagens.html',
    controller: 'ctrlPadrao'

  })
  .state('mensagem', {
    url: '/mensagem',
    templateUrl: 'templates/mensagem.html',
    controller: 'ctrlPadrao'

  })
  .state('desafios_home', {
    url: '/desafios_home',
    templateUrl: 'templates/desafios_home.html',
    controller: 'desafios_homeCtrl'

  })
  .state('lista_professores', {
    url: '/lista_professores',
    templateUrl: 'templates/lista_professores.html',
    controller: 'listaCtrl'
  })
  .state('tutoriais', {
    url: '/tutoriais',
    templateUrl: 'templates/tutoriais.html',
    controller: 'ctrlPadrao'
  })
  .state('visao-professor', {
    url: '/visao-professor',
    templateUrl: 'templates/visao-professor.html',
    controller: 'ctrlPadrao'
  })
  .state('visao-professor-listar-cursos', {
    url: '/visao-professor-listar-cursos',
    templateUrl: 'templates/visao-professor-listar-cursos.html',
    controller: 'visaoProfessorCtrl'
  })
  .state('visao-professor-listar-cursos-resultados', {
    url: '/visao-professor-listar-cursos-resultados',
    templateUrl: 'templates/visao-professor-listar-cursos-resultados.html',
    controller: 'visaoProfessorCtrl'
  })
  .state('visao-professor-meus-cursos', {
    url: '/visao-professor-meus-cursos',
    templateUrl: 'templates/visao-professor-meus-cursos.html',
    controller: 'visaoProfessorCtrl'
  })
  .state('visao-professor-desempenho', {
    url: '/visao-professor-desempenho',
    templateUrl: 'templates/visao-professor-desempenho.html',
    controller: 'ctrlPadrao'
  })
  .state('visao-professor-demonstrativo-mensal', {
    url: '/visao-professor-demonstrativo-mensal',
    templateUrl: 'templates/visao-professor-demonstrativo-mensal.html',
    controller: 'ctrlPadrao'
  })
  .state('visao-professor-demonstrativo-periodo', {
    url: '/visao-professor-demonstrativo-periodo',
    templateUrl: 'templates/visao-professor-demonstrativo-periodo.html',
    controller: 'ctrlPadrao'
  })
  .state('visao-professor-demonstrativo-listar', {
    url: '/visao-professor-demonstrativo-listar',
    templateUrl: 'templates/visao-professor-demonstrativo-listar.html',
    controller: 'ctrlPadrao'
  })
  .state('visao-professor-demonstrativo-vendas', {
    url: '/visao-professor-demonstrativo-vendas',
    templateUrl: 'templates/visao-professor-demonstrativo-vendas.html',
    controller: 'ctrlPadrao'
  })
  .state('visualizar_usuario', {
    url: '/visualizar_usuario',
    templateUrl: 'templates/visualizar_usuario.html',
    controller: 'ctrlPadrao'
  })
  .state('visualizar_professor', {
    url: '/visualizar_professor',
    templateUrl: 'templates/visualizar_professor.html',
    controller: 'ctrlPadrao'
  })
  .state('visao_visitante', {
    url: '/visao_visitante',
    templateUrl: 'templates/visao_visitante.html',
    controller: 'ctrlPadrao'
  })
  .state('visao-visitante-detalhes-curso', {
    url: '/visao-visitante-detalhes-curso',
    templateUrl: 'templates/visao-visitante-detalhes-curso.html',
    controller: 'ctrlPadrao'
  })
  .state('visao-visitante-listar-cursos-resultados', {
    url: '/visao-visitante-listar-cursos-resultados',
    templateUrl: 'templates/visao-visitante-listar-cursos-resultados.html',
    controller: 'ctrlPadrao'
  })
  .state('visao-visitante-listar-cursos', {
    url: '/visao-visitante-listar-cursos',
    templateUrl: 'templates/visao-visitante-listar-cursos.html',
    controller: 'ctrlPadrao'
  })
  .state('visao-visitante-seguidores-do-professor', {
    url: '/visao-visitante-seguidores-do-professor',
    templateUrl: 'templates/visao-visitante-seguidores-do-professor.html',
    controller: 'ctrlPadrao'
  })
  .state('visao-professor-meus-cursos-cadastro', {
    url: '/visao-professor-meus-cursos-cadastro',
    templateUrl: 'templates/visao-professor-meus-cursos-cadastro.html',
    controller: 'visao-professor'
  })
  .state('visao-professor-eventos', {
    url: '/visao-professor-eventos',
    templateUrl: 'templates/visao-professor-eventos.html',
    controller: 'visao-professor'
  })
  .state('visao-professor-eventos-modal', {
    url: '/eventos-modal',
    templateUrl: 'templates/visao-professor-eventos-modal.html',
    controller: 'visao-professor'
  })
  .state('visao-professor-financeiro', {
    url: '/visao-professor-financeiro',
    templateUrl: 'templates/visao-professor-financeiro.html',
    controller: 'visao-professor'
  })
  .state('visao-professor-financeiro-ganhos', {
    url: '/visao-professor-financeiro-ganhos',
    templateUrl: 'templates/visao-professor-financeiro-ganhos.html',
    controller: 'visao-professor'
  })
  .state('ciclos-de-estudos', {
    url: '/ciclos-de-estudos',
    templateUrl: 'templates/ciclos-de-estudos.html',
    controller: 'ctrlPadrao'
  })
  .state('ciclos-de-estudos-tela1', {
    url: '/ciclos-de-estudos-tela1',
    templateUrl: 'templates/ciclos-de-estudos-tela1.html',
    controller: 'ctrlPadrao'
  })
  .state('ciclos-de-estudos-tela2', {
    url: '/ciclos-de-estudos-tela2',
    templateUrl: 'templates/ciclos-de-estudos-tela2.html',
    controller: 'ctrlPadrao'
  })
  .state('ciclos-de-estudos-tela3', {
    url: '/ciclos-de-estudos-tela3',
    templateUrl: 'templates/ciclos-de-estudos-tela3.html',
    controller: 'ctrlPadrao'
  })
  .state('ciclos-de-estudos-tela3-modal1', {
    url: '/ciclos-de-estudos-tela3-modal1',
    templateUrl: 'templates/ciclos-de-estudos-tela3-modal1.html',
    controller: 'ctrlPadrao'
  })
  .state('ciclos-de-estudos-tela3-modal2', {
    url: '/ciclos-de-estudos-tela3-modal2',
    templateUrl: 'templates/ciclos-de-estudos-tela3-modal2.html',
    controller: 'ctrlPadrao'
  })
  .state('ciclos-de-estudos-tela3_1', {
    url: '/ciclos-de-estudos-tela3_1',
    templateUrl: 'templates/ciclos-de-estudos-tela3_1.html',
    controller: 'ctrlPadrao'
  })
  .state('ciclos-de-estudos-tela4', {
    url: '/ciclos-de-estudos-tela4',
    templateUrl: 'templates/ciclos-de-estudos-tela4.html',
    controller: 'ctrlPadrao'
  })
  .state('ciclos-de-estudos-tela4-modal1', {
    url: '/ciclos-de-estudos-tela4-modal1',
    templateUrl: 'templates/ciclos-de-estudos-tela4-modal1.html',
    controller: 'ctrlPadrao'
  })
  .state('ciclos-de-estudos-tela4-modal2', {
    url: '/ciclos-de-estudos-tela4-modal2',
    templateUrl: 'templates/ciclos-de-estudos-tela4-modal2.html',
    controller: 'ctrlPadrao'
  })
  .state('ciclos-de-estudos-tela5', {
    url: '/ciclos-de-estudos-tela5',
    templateUrl: 'templates/ciclos-de-estudos-tela5.html',
    controller: 'visao-professor'
  })
  .state('ciclos-de-estudos-tela6', {
    url: '/ciclos-de-estudos-tela6',
    templateUrl: 'templates/ciclos-de-estudos-tela6.html',
    controller: 'ctrlPadrao'
  })
  .state('ciclos-de-estudos-tela6-modal1', {
    url: '/ciclos-de-estudos-tela6-modal1',
    templateUrl: 'templates/ciclos-de-estudos-tela6-modal1.html',
    controller: 'ctrlPadrao'
  })
  .state('ciclos-de-estudos-tela6-modal2', {
    url: '/ciclos-de-estudos-tela6-modal2',
    templateUrl: 'templates/ciclos-de-estudos-tela6-modal2.html',
    controller: 'ctrlPadrao'
  })
  .state('ciclos-de-estudos-tela7', {
    url: '/ciclos-de-estudos-tela7',
    templateUrl: 'templates/ciclos-de-estudos-tela7.html',
    controller: 'ctrlPadrao'
  })
  .state('ciclos-de-estudos-tela8', {
    url: '/ciclos-de-estudos-tela8',
    templateUrl: 'templates/ciclos-de-estudos-tela8.html',
    controller: 'ctrlPadrao'
  })
  .state('ciclos-de-estudos-tela9', {
    url: '/ciclos-de-estudos-tela9',
    templateUrl: 'templates/ciclos-de-estudos-tela9.html',
    controller: 'ctrlPadrao'
  })
  .state('ciclos-de-estudos-tela10', {
    url: '/ciclos-de-estudos-tela10',
    templateUrl: 'templates/ciclos-de-estudos-tela10.html',
    controller: 'ctrlPadrao'
  })
  .state('ciclos-de-estudos-tela11', {
    url: '/ciclos-de-estudos-tela11',
    templateUrl: 'templates/ciclos-de-estudos-tela11.html',
    controller: 'ctrlPadrao'
  })
  .state('resolucao-de-questoes', {
    url: '/resolucao-de-questoes',
    templateUrl: 'templates/resolucao-de-questoes.html',
    controller: 'ctrlPadrao'
  })
  .state('resolucao-de-questoes-tela2', {
    url: '/resolucao-de-questoes-tela2',
    templateUrl: 'templates/resolucao-de-questoes-tela2.html',
    controller: 'ctrlPadrao'
  })
  .state('resolucao-de-questoes-tela2_1', {
    url: '/resolucao-de-questoes-tela2_1',
    templateUrl: 'templates/resolucao-de-questoes-tela2_1.html',
    controller: 'ctrlPadrao'
  })
  .state('resolucao-de-questoes-tela2_2', {
    url: '/resolucao-de-questoes-tela2_2',
    templateUrl: 'templates/resolucao-de-questoes-tela2_2.html',
    controller: 'ctrlPadrao'
  })
  .state('resolucao-de-questoes-tela3', {
    url: '/resolucao-de-questoes-tela3',
    templateUrl: 'templates/resolucao-de-questoes-tela3.html',
    controller: 'ctrlPadrao'
  })
  .state('resolucao-de-questoes-tela3_1', {
    url: '/resolucao-de-questoes-tela3_1',
    templateUrl: 'templates/resolucao-de-questoes-tela3_1.html',
    controller: 'ctrlPadrao'
  })
  .state('resolucao-de-questoes-tela3_2', {
    url: '/resolucao-de-questoes-tela3_2',
    templateUrl: 'templates/resolucao-de-questoes-tela3_2.html',
    controller: 'ctrlPadrao'
  })
  .state('cursos-tela1', {
    url: '/cursos-tela1',
    templateUrl: 'templates/cursos-tela1.html',
    controller: 'ctrlPadrao'
  })
  .state('cursos-tela2', {
    url: '/cursos-tela2',
    templateUrl: 'templates/cursos-tela2.html',
    controller: 'ctrlPadrao'
  })
  .state('cursos-tela3', {
    url: '/cursos-tela3',
    templateUrl: 'templates/cursos-tela3.html',
    controller: 'ctrlPadrao'
  })
  .state('cursos-tela4', {
    url: '/cursos-tela4',
    templateUrl: 'templates/cursos-tela4.html',
    controller: 'ctrlPadrao'
  })
  .state('cursos-tela5', {
    url: '/cursos-tela5',
    templateUrl: 'templates/cursos-tela5.html',
    controller: 'ctrlPadrao'
  })
  .state('cursos-tela6', {
    url: '/cursos-tela6',
    templateUrl: 'templates/cursos-tela6.html',
    controller: 'ctrlPadrao'
  })
  .state('cursos-tela7', {
    url: '/cursos-tela7',
    templateUrl: 'templates/cursos-tela7.html',
    controller: 'ctrlPadrao'
  })
  .state('cursos-tela8', {
    url: '/cursos-tela8',
    templateUrl: 'templates/cursos-tela8.html',
    controller: 'ctrlPadrao'
  })
  .state('cursos-tela9', {
    url: '/cursos-tela9',
    templateUrl: 'templates/cursos-tela9.html',
    controller: 'ctrlPadrao'
  })
  .state('cursos-tela10', {
    url: '/cursos-tela10',
    templateUrl: 'templates/cursos-tela10.html',
    controller: 'ctrlPadrao'
  })
  .state('bibliografia', {
    url: '/bibliografia',
    templateUrl: 'templates/bibliografia.html',
    controller: 'ctrlPadrao'
  })
  .state('bibliografia_instituicoes', {
    url: '/bibliografia_instituicoes',
    templateUrl: 'templates/bibliografia_instituicoes.html',
    controller: 'ctrlPadrao'
  })
  .state('bibliografia_professores', {
    url: '/bibliografia_professores',
    templateUrl: 'templates/bibliografia_professores.html',
    controller: 'ctrlPadrao'
  })
  .state('principal', {
    url: '/principal',
    templateUrl: 'templates/principal.html',
    controller: 'ctrlPadrao'
  })
$urlRouterProvider.otherwise('principal')



});
