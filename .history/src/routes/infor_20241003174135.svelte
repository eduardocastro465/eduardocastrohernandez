<script></script>

<main>
  <h1>¿Por qué usar Svelte?</h1>
  <p>
    1. <strong>Sin Virtual DOM:</strong> Svelte compila el código directamente en JavaScript optimizado, mejorando el rendimiento sin necesidad de un Virtual DOM.<br><br>
    2. <strong>Reactividad Simple:</strong> No requiere herramientas como <code>useState</code> o <code>setState</code>, la reactividad está integrada de forma directa y natural.<br><br>
    3. <strong>Tamaño Reducido:</strong> Al compilarse en puro JavaScript, las aplicaciones son más ligeras y rápidas.<br><br>
    4. <strong>Fácil de Aprender:</strong> Usa sintaxis familiar de HTML, CSS y JavaScript, con una curva de aprendizaje suave.<br><br>
    5. <strong>Código Más Limpio:</strong> Permite escribir menos código y mantenerlo simple, sin necesidad de envolturas o API extensas.
  </p>
</main>

<style>
  body {
    background-color: #f4f7f6;
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  main {
    padding: 2rem;
    max-width: 700px;
    margin: 2rem auto;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  h1 {
    color: #2c3e50;
    font-size: 1.8rem;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.4;
    color: #34495e;
    text-align: justify;
    padding: 0 0.8rem;
  }

  strong {
    color: #2980b9;
  }

  code {
    background-color: #f1f1f1;
    padding: 0.15rem 0.3rem;
    border-radius: 3px;
  }
</style>
