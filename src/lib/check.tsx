import {Particle} from "@/lib/particle_data";

function charge_check(reactants : Particle[], products : Particle[]) {
    let reactants_charge = 0;
    let products_charge = 0;
    for (let particle of reactants) {
        reactants_charge += particle.charge;
    }
    for (let particle of products) {
        products_charge += particle.charge;
    }
    return reactants_charge === products_charge;
}

export function check(reactants : Particle[], products : Particle[]) {
    if (charge_check(reactants, products)) {
        return 'Balanced';
    } else {
        return 'Not Balanced';
    }
}