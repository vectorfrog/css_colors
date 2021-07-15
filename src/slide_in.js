export default function(){
  return {
    show: false,
    color: {
      name: "placeholder",
      base: "placeholder",
      hex: "#na",
      style: "none"
    },
    set(color){
      this.color.name = color.name,
      this.color.rgb = color.rgb,
      this.color.base = color.base,
      this.color.hex = color.hex,
      this.color.style= color.style
      this.color.dark_text= color.dark_text
      this.show = true;
    }
  }
}
