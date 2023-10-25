const d = document,
  n = navigator,
  ua = n.userAgent;

export default function userDeviceInfo(id) {
  const $id = d.getElementById(id),
    isMobile = {
      android: () => ua.match(/android/i),
      iphone: () => ua.match(/iphone/i),
      windows: () => ua.match(/windows phone/i),
      any: function () {
        return this.android() || this.iphone() || this.windows();
      },
    },
    isDesktop = {
      linux: () => ua.match(/linux/i),
      mac: () => ua.match(/mac os/i),
      windows: () => ua.match(/windows nt/i),
      any: function () {
        return this.linux() || this.mac() || this.windows();
      },
    },
    isBrowser = {
      chrome: () => {
        if (ua.match(/chrome/i) && !ua.match(/edg/i)) return "Chrome";
      },
      firefox: () => ua.match(/firefox/i),
      edge: () => {
        if (ua.match(/edg/i)) return "Edge";
      },
      opera: () => ua.match(/opera/i),
      safari: () => ua.match(/safari/i),
      any: function () {
        return (
          this.chrome() ||
          this.firefox() ||
          this.edge() ||
          this.opera() ||
          this.safari()
        );
      },
    };

  $id.innerHTML = `
    <ul>
        <li>User Agent : <b>${ua}</b></li>
        <li>Plataforma : <b>${
          isMobile.any() ? isMobile.any() : isDesktop.any()
        }</b></li>
        <li>Navegador : <b>${isBrowser.any()}</b></li>
    </ul>
    `;

  if (isBrowser.chrome()) {
    $id.innerHTML += `<mark><p>Este contenido solo se ve en Chrome</mark></p>`;
  }

  if (isBrowser.edge()) {
    $id.innerHTML += `<mark><p>Este contenido solo se ve en Edge</mark></p>`;
  }

  if (isDesktop.windows()) {
    $id.innerHTML += `<mark><p>Descarga nuestro programa para Windows</mark></p>`;
  }

  if (isMobile.android()) {
    window.location.href = "https://jonmircha.com";
  }
}
