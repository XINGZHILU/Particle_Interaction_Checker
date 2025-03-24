'use client';

import {Particle} from "@/lib/particle_data";
import {Tex2SVG} from "react-hook-mathjax";

function charge_check(reactants : Particle[], products : Particle[]) {
    let reactants_charge = 0;
    let products_charge = 0;
    for (let particle of reactants) {
        reactants_charge += particle.charge;
    }
    for (let particle of products) {
        products_charge += particle.charge;
    }
    if (reactants_charge === products_charge) {
        return <p>Charge is conserved</p>;
    }
    return <p>Charge is not conserved</p>;
}

export function Check(reactants : Particle[], products : Particle[]) {
    if (reactants.length === 0 || products.length === 0) {
        return <div>
            <p>You have not entered reactants and/or products</p>
        </div>;
    }

    const reactant_symbols = reactants.map(particle => particle.symbol);
    const product_symbols = products.map(particle => particle.symbol);


    return <div>
        <h2>Charge conservation</h2>
        {charge_check(reactants, products)}
    </div>;
}