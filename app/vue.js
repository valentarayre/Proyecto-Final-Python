const app = Vue.createApp({
    data() {
        return {
          peliculas: true,
          peliculasPorPagina: 5,
          paginaActual:0,
          generosPeliculas:["Accion","Sci-fi","Horror","Aventura","Suspenso","Policiales","Documentales"
          ,"Comedia","Musical","Western","Romance"],
        Listpeliculas:[
          {
            id:0001, 
            Nombre: 'Cadena perpetua',
            Año: '1994',
            Erate: '18',
            Duracion: '2h 22m',
            Director: 'Frank Darabont',
            Info: 'Andy Dufresne es encarcelado por matar a su esposa y al amante de esta. Tras una dura adaptación, \
            intenta mejorar las condiciones de la prisión y dar esperanza a sus compañeros.',
            image:["https://www.phenomena-experience.com/galeria/Historico_peliculas/C/CADENA%20PERPETUA/shawsank-redemption-poster.jpg"],
            Comentarios: 14,
            Likes: 74,
          },
          {
            id:0002, 
            Nombre: 'El padrino: Parte II',
            Año: '1974',
            Erate: '18',
            Duracion: '3h 22m',
            Director: 'Francis Ford Coppola',
            Info: 'Se retrata la juventud e inicios profesionales de Vito Corleone en la ciudad de Nueva York en \
            la década de los 20, mientras su hijo Michael expande y refuerza su control sobre el sindicato del crimen familiar.',
            image:["https://4.bp.blogspot.com/-N1lJVHeuY4g/VTKhqGGr4dI/AAAAAAAAo10/1lEXuBK-pLo/s1600/CSF3-El_padrino-Parte_2-Poster.jpg"],
            Comentarios: 10,
            Likes: 94,
          },
          {
            id:0003, 
            Nombre: 'El caballero oscuro',
            Año: '2008',
            Erate: '12',
            Duracion: '2h 32m',
            Director: 'Christopher Nolan',
            Info: 'Cuando la amenaza conocida como el Joker causa estragos y el caos en Gotham City, \
            Batman debe aceptar una de las mayores pruebas psicológicas y físicas para luchar contra la injusticia.',
            image:["https://cinecalidad.la/wp-content/uploads/2021/05/tSIH3DTA4oFQDhPaJgHxxQZoqHh.jpg"],
            Comentarios: 12,
            Likes: 54,
          },
          {
            id:0004, 
            Nombre: 'Pulp Fiction',
            Año: '1994',
            Erate: '18',
            Duracion: '2h 34m',
            Director: 'Quentin Tarantino',
            Info: 'Las vidas de dos mafiosos, un boxeador, la esposa de un gánster y un par de bandidos \
            se entrelazan en cuatro historias de violencia y redención.',
            image:["https://pics.filmaffinity.com/Pulp_Fiction-210382116-large.jpg"],
            Comentarios: 19,
            Likes: 104,
          },
          {
            id:0005, 
            Nombre: 'El club de la lucha',
            Año: '1999',
            Erate: '18',
            Duracion: '2h 19m',
            Director: 'David Fincher',
            Info: 'Un oficinista insomne y un desentendido fabricante de jabones forman un club de \
            lucha clandestino que se convierte en mucho más.',
            image:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqN9-qirdRzXuS-p19OEdDlrAbGWK-oYLTYsCSVAz77nttisR5cwzZqP2lUQHYpnOC22o&usqp=CAU"],
            Comentarios: 14,
            Likes: 44,
          }
        ],
        

        directores: false,

        }
        },
        methods:{

        directorView(){
          console.log("Directores");
          this.directores = true;
          console.log(this.directores)
          console.log("Peliculas");
          this.peliculas = false;
          console.log(this.peliculas)

        },
        filmsView(){
          console.log("Directores");
          this.directores = false;
          console.log(this.directores)
          console.log("Peliculas");
          this.peliculas = true;
          console.log(this.peliculas)

        }
        , 
        ToggleNav(){
          document.querySelector('.nav-ul').classList.toggle('show');
          console.log("a")
        },
        Test(){
          console.log("a")
        }

},
        computed:{
          
        }

})