export const helpHttp = () => {
    const customFetch = (endpoint, options) => {
      
      //se muestra los datos en json
      const defaultHeader = {
        accept: "application/json",
      };
      
      //Para poder salir de la aplicacion
      const controller = new AbortController();
      //escucha eventos
      options.signal = controller.signal;
      //se ejecuta el GET por defecto
      options.method = options.method || "GET";
      options.headers = options.headers
      ?{...defaultHeader, ...options.headers }
      :defaultHeader;
  
      options.body = JSON.stringify(options.body) || false;
      if (!options.body) delete options.body;
  
      //console.log(options);
      //limite de tiempo
      setTimeout(() => controller.abort(), 3000);
  
      return fetch(endpoint, options)
        .then((res) =>
          res.ok
            ? res.json()
            : Promise.reject({
                err: true,
                status: res.status || "00",
                statusText: res.statusText || "Ocurrió un error",
              })
        )
        .catch((err) => err);
    };
    

    //se establecen los 4 mEtodos
    const get = (url, options = {}) => customFetch(url, options);
  
    const post = (url, options = {}) => {
      options.method = "POST";
      return customFetch(url, options);
    };
  
    const put = (url, options = {}) => {
      options.method = "PUT";
      return customFetch(url, options);
    };
  
    const del = (url, options = {}) => {
      options.method = "DELETE";
      return customFetch(url, options);
    };
  
    return {
      get,
      post,
      put,
      del,
    };
  };
  