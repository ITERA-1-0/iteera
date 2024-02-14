<template>
  <div class="page-container">
    <!-- Banner -->
    <div class="banner">
      <div class="banner-content">
        <h1>Bienvenido a nuestra Página Principal</h1>
        <p>Por cualquier duda, comunícate con tu correo <strong>iteraanahuac@anahuac.mx</strong></p>
      </div>
      <button class="search-button">Buscar más</button>
    </div>

    <!-- Contenido principal -->
    <div class="content-container">
      <!-- Contenido izquierdo -->
      <div class="left-content">
        <div class="button-container">
          <button class="square-button orange">Alumnos 📝</button>
          <button class="square-button purple">Egresados 🎓</button>
          <button class="square-button orange">Bolsa de Trabajo 💼</button>
          <button class="square-button purple">Empresas 🏢</button>
        </div>
      </div>

      <!-- Carrusel -->
      <div class="carousel-container">
        <div class="carousel">
          <div class="carousel-inner">
            <div v-for="(image, index) in images" :key="index" :class="{ 'carousel-item': true, 'active': index === currentIndex }">
              <img :src="image" class="d-block w-100" :alt="'Slide ' + (index + 1)">
            </div>
          </div>
          <a class="carousel-control-prev" @click="prevSlide" role="button">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" @click="nextSlide" role="button">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        'https://via.placeholder.com/600x400?text=Slide+1',
        'https://via.placeholder.com/600x400?text=Slide+2',
        'https://via.placeholder.com/600x400?text=Slide+3'
      ],
      currentIndex: 0
    };
  },
  methods: {
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }
  }
};
</script>

<style>
.page-container {
  background-image: url('https://static.vecteezy.com/system/resources/previews/001/226/213/original/orange-polygonal-shapes-geometric-background-vector.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.banner {
  background-color:transparent;
  color: white;
  padding: 215px;
  margin-bottom: 20px;
  text-align: center; /* Centra el texto */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.banner-content {
  text-align: center; /* Centramos horizontalmente el contenido */
}

.banner h1 {
  font-size: 36px;
  margin-bottom: 10px; /* Ajustamos el margen inferior */
}

.banner p {
  font-size: 18px;
}

.search-button {
  background-color: ghostwhite;
  border: none;
  color: orangered;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  width: 100%;
}

.search-button:hover {
  background-color: rgba(255, 255, 255, 0.2);
  width: 100%;
  color: wheat;
}

.content-container {
  display: flex;
  flex: 1;
}

.left-content {
  margin-right: 20px;
}

.button-container {
  display: flex;
  flex-direction: column;
}

.square-button {
  margin-bottom: 10px;
  padding: 40px;
  width: 300px;
  font-size: 24px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.square-button.orange {
  background-color: #FFC9BD;
  color: #FF6800;
}

.square-button.purple {
  background-color: #9B30FF;
  color: white;
}

.square-button:hover {
  background-color: #333;
  color: white;
}

.carousel-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
}

.carousel {
  position: relative;
}

.carousel-inner {
  display: flex;
}

.carousel-item {
  width: 100%;
  transition: transform 0.5s ease;
}

.carousel-item img {
  width: 100%;
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  width: 20px;
  height: 20px;
  background-size: contain;
}

@media (max-width: 768px) {
  .carousel-container {
    max-width: 100%;
    width: 100%;
  }
}
</style>
