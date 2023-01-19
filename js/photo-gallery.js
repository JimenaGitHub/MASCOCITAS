$(function(){
    const strL = 'https://images.unsplash.com/photo-';
    const strR = '?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ';
    const imgs = [
      {
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        titulo: 'Happy',
        url: strL+'1544568100-847a948585b9'+strR,
      },
      {
        descripcion: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        titulo: 'I want a bitchfriend',
        url:'imagenes/Tobi.jpeg',
      },
      {
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        titulo: 'I love flowers',
        url: strL+'1510771463146-e89e6e86560e'+strR,
      },
      {
        descripcion: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        titulo: 'I am a cute puppy',
        url: strL+'1507146426996-ef05306b995a'+strR,
      },
      {
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        titulo: 'In the beach',
        url: strL+'1530281700549-e82e7bf110d6'+strR,
      },
      {
        descripcion: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        titulo: 'Happy friends',
        url: strL+'1548199973-03cce0bbc87b'+strR,
      },
      {
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        titulo: 'A great dog',
        url: strL+'1552053831-71594a27632d'+strR,
      },
      {
        descripcion: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        titulo: 'Universitary dog',
        url: strL+'1535930891776-0c2dfb7fda1a'+strR,
      },
      {
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        titulo: 'I love brother',
        url: strL+'1504595403659-9088ce801e29'+strR,
      },
      {
        descripcion: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        titulo: 'I want a bone',
        url: strL+'1518717758536-85ae29035b6d'+strR,
      },
      {
        descripcion: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        titulo: 'I want a friend',
        url:'imagenes/dachshund.jpg',
      },
      {
        descripcion: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        titulo: 'I want a friend to play',
        url:'imagenes/labrador-retriever.jpg',
      },

    ]
  
    $.each(imgs, function(i, img){
      $('.galeria .contenedorImgs').append(`
        <div class="imagen" style="background-image:url('${img.url}')">
          <p class="nombre">${img.titulo}</p>
        </div>`
      );
    }) 
    setTimeout(() => {
      $('.galeria').addClass('vis');
    }, 1000)
    $('.galeria').on('click', '.contenedorImgs .imagen', function(){
      var imagen = imgs[$(this).index()].url;
      var titulo = imgs[$(this).index()].titulo;
      var descripcion = imgs[$(this).index()].descripcion;
      $('.galeria').addClass('scale');
      $(this).addClass('activa');
      if(!$('.fullPreview').length){
        $('body').append(`
          <div class="fullPreview">
            <div class="cerrarModal"></div>
            <div class="wrapper">
              <div class="blur" style="background-image:url(${imagen})"></div>
              <p class="titulo">${titulo}</p>
              <img id="foto" src="${imagen}">

              <img onclick="changelike(this)" id="like" class="like invisible" src="imagenes/heart.png">
              <img onclick="changelike(this)" id="dislike" class="like visible" src="imagenes/heart2.png">

              <p class="desc">${descripcion}</p>
            </div>
            <div class="controles">
              <div class="control av"></div>
              <div class="control ret"></div>
            </div>
          </div>`
        )
        $('.fullPreview').fadeIn().css('display','flex');
      }
    })
    $('body').on('click', '.fullPreview .cerrarModal', function(){
      $('.contenedorImgs .imagen.activa').removeClass('activa');
      $('.galeria').removeClass('scale');
      $(this).parent().fadeOut(function(){
        $(this).remove();
      })
    })
    $('body').on('click', '.fullPreview .control', function(){
      var activa = $('.contenedorImgs .imagen.activa');
      var index;
      if($(this).hasClass('av')){
        index = activa.next().index();
        if(index < 0) index = 0;
      }else{
        index = activa.prev().index();
        if(index < 0) index = imgs.length - 1;
      }
      $('.fullPreview').addClass('anim');
      setTimeout(()=>{
        $('.contenedorImgs .imagen.activa').removeClass('activa');
        $('.contenedorImgs .imagen').eq(index).addClass('activa');
        $('.fullPreview').find('.blur').css('background-image', 'url('+imgs[index].url+')');
        $('.fullPreview').find('#foto').attr('src', imgs[index].url);
        $('.fullPreview').find('.titulo').text(imgs[index].titulo);
        $('.fullPreview').find('.desc').text(imgs[index].descripcion);
        $('.fullPreview').removeClass('anim');
      }, 500)
    })
  })

  function changelike(element){
    
    if (element.id==="dislike"){
      $("#dislike").addClass("invisible")
      $("#dislike").removeClass("visible")
      $("#like").addClass("visible")
      $("#like").removeClass("invisible")
    }

    else {
      $("#dislike").addClass("visible")
      $("#dislike").removeClass("invisible")
      $("#like").addClass("invisible")
      $("#like").removeClass("visible")

    }
  }