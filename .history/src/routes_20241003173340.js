import cifradoAsimetrico from "./routes/cifradoAsimetrico.svelte";
import cifradoSimetrico from "./routes/cifradoSimetrico.svelte";
import hash from "./routes/hash.svelte";
import cifladoCesar from "./routes/cifladoCesarPages.svelte";
import cifladoEscitala from "./routes/cifladoEscitala.svelte";
import infor from "./routes/infor.svelte";

const routes = {
  "/": cifradoSimetrico,
  "/cifradoAsimetrico": cifradoAsimetrico,
  "/hash": hash,
  "/cifladoCesar": cifladoCesar,
  "/cifladoEscitala": cifladoEscitala,
  "/prueba": infor,
};

export default routes;
