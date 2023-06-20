AFRAME.registerComponent("diver-plane",{
    schema:{
        rotation:{type:"number",default:0},
        position:{type:"number",default:0}
    },
    init:function(){
        window.addEventListener("keydown",(y)=>{
            this.data.rotation=this.el.getAttribute("rotation")
            this.data.position=this.el.getAttribute("position")
            var pos=this.data.position
            var rot=this.data.rotation

            if(y.key==="ArrowRight"){
                if(rot.x<10){
                    rot.x+=0.5
                    this.el.setAttribute("rotation",rot)
                }
            }
            if(y.key==="ArrowLeft"){
                if(rot.x>-10){
                    rot.x-=0.5
                    this.el.setAttribute("rotation",rot)
                }
            }
            if(y.key==="ArrowUp"){
                if(rot.z<20){
                    rot.z+=0.5
                    this.el.setAttribute("rotation",rot)
                }
                if(pos.y<2){
                    pos.y+=0.01
                    this.el.setAttribute("position",pos)
                }
            }
            if(y.key==="ArrowDown"){
                if(rot.z>-10){
                    rot.z-=0.5
                    this.el.setAttribute("rotation",rot)
                }
                if(pos.y>-2){
                    pos.y-=0.01
                    this.el.setAttribute("position",pos)
                }
            }
        })
    }
})