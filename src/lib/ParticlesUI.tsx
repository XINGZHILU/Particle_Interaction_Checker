import {Particle} from "@/lib/particle_data";
import Tex2SVG from "react-hook-mathjax";

export function Symbol({particle} : {particle: Particle}) {
    return <div className={'m-3'}>
        <Tex2SVG latex={particle.symbol}/>
    </div>
}