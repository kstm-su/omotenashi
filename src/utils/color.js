export class Hue {
  constructor(hue) {
    this.hue = hue;
  }

  hsl(saturation, lightness) {
    return `hsl(${this.hue}, ${saturation * 100}%, ${lightness * 100}%)`;
  }

  gradient(angle, ...stops) {
    return `linear-gradient(${angle}, ${stops.map(stop => {
      return this.hsl(...stop);
    })})`;
  }

  shadow(x, y, blur, spread, saturation, lightness, inset) {
    let color = this.hsl(saturation, lightness);
    return `${[x, y, blur, spread].map(length => {
      let n = +length;
      if (isNaN(n)) {
        return length;
      }
      return n + 'px';
    }).join(' ')} ${color}${inset ? ' inset' : ''}`;
  }
}
