import cifradoAsimetrico from "./routes/cifradoAsimetrico.svelte";
import cifradoSimetrico from "./routes/cifradoSimetrico.svelte";
import hash from "./routes/hash.svelte";
import cifladoCesar from "./routes/cifladoCesarPages.svelte";
import cifladoCesar from "./routes/cifladoCesarPages.svelte";

const routes = {
  "/": cifradoSimetrico,
  "/cifradoAsimetrico": cifradoAsimetrico,
  "/hash": hash,
  "/cifladoCesar": cifladoCesar,
};

export default routes;