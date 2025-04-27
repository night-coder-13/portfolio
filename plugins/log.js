export default defineNuxtPlugin(() => {
    return {
      provide: {
        log: (message , status = 0) => {
          console.log(`%c[Log]: ${message}`, `color: ${status == 1 ? 'green' : 'red'}; font-weight: bold;`);
        }
      }
    };
  });
  