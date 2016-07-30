## InternetButton de Particle con Node.js

Esta es la guía básica para programar el [InternetButton de Particle](https://www.particle.io/button) usando Node.js y el [Particle API JS](https://docs.particle.io/reference/javascript/)

1. Cree una cuenta en [Particle Cloud](https://dashboard.particle.io/login).
2. Instale la herramienta [Particle CLI](https://www.particle.io/cli).
3. El InternetButton incluye un [Photon de Particle](https://docs.particle.io/guide/getting-started/start/photon/#step-1-power-on-your-device), conéctelo y presione el botón de `reset` una vez mientras mantiene el botón de `setup` presionado, hay que esperar hasta que el led se ponga azul.
4. Ejecute el comando `particle setup` y siga las instrucciones para configurar el wi-fi.
5. Una vez configurado el wi-fi el led del Photon debe permanecer azul claro y fijo.
6. Siga la [guía para flashear el Photon](https://docs.particle.io/guide/getting-started/build/photon/) con el contenido del archivo del archivo `particle-client.ino`.
7. Ejecute `npm install` en el directorio donde descargo este proyecto
8. En la terminal exporte las variables de su usuario y contraseña en el Cloud de Particle: `export EMAIL=mi@email.com PASSWD=mipasswd`
9. Ejecute el código de ejemplo `node indes.js`

Hapy hacking =)

## Credits
[Adrián Estrada](https://github.com/edsadr/)
[MedellinJS](http://medellinjs.org)

###The MIT License

Copyright (c) 2016 MedellinJS

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


