/*global Ultraviolet*/
self.__uv$config = {
  prefix: "/lib/uv/service/",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/lib/uv/uv.handler.js",
  client: "/lib/uv/uv.client.js",
  bundle: "/lib/uv/uv.bundle.js",
  config: "/lib/uv/uv.config.js",
  sw: "/lib/uv/uv.sw.js",
};
