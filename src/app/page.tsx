'use client';

import {useState} from 'react';
import {Particle, leptons, baryons, mesons, strange_particles} from "@/lib/particle_data";
import Tex2SVG from "react-hook-mathjax";
import {Symbol} from "@/lib/ParticlesUI";

export default function Page() {
    const [reactants, setReactants] = useState<Particle[]>([]);
    const [products, setProducts] = useState<Particle[]>([]);

    function add_reactants(particle: Particle) {
        setReactants([...reactants, particle]);
    }

    function delete_reactants() {
        if (reactants.length > 0) {
            setReactants(reactants.slice(0, reactants.length - 1));
        }
    }

    function add_products(particle: Particle) {
        setProducts([...products, particle]);
    }

    return <div className={'grid grid-cols-2'}>
        <div>
            <h1>Reactants</h1>
            <div className={'grid grid-cols-10 min-h-40'}>
                {reactants.map((particle, index) => (
                    <Symbol particle={particle} key={index}/>
                ))}
            </div>
            <div>
                <h2>Leptons</h2>
                <div className={'keyboard_section'}>
                    {leptons.map((particle, index) => (
                        <button key={particle.name} onClick={() => add_reactants(particle)}
                                className={'input-button'}>
                            <Symbol particle={particle} key={index}/>
                        </button>
                    ))}
                </div>

                <h2>Baryons</h2>
                <div className={'keyboard_section'}>
                    {baryons.map((particle, index) => (
                        <button key={particle.name} onClick={() => add_reactants(particle)}
                                className={'input-button'}>
                            <Symbol particle={particle} key={index}/>
                        </button>
                    ))}
                </div>

                <h2>Mesons</h2>
                <div className={'keyboard_section'}>
                    {mesons.map((particle, index) => (
                        <button key={particle.name} onClick={() => add_reactants(particle)}
                                className={'input-button'}>
                            <Symbol particle={particle} key={index}/>
                        </button>
                    ))}
                </div>
                <h2>Strange particles</h2>
                <div className={'keyboard_section'}>
                    {strange_particles.map((particle, index) => (
                        <button key={particle.name} onClick={() => add_reactants(particle)}
                                className={'input-button'}>
                            <Symbol particle={particle} key={index}/>
                        </button>
                    ))}
                </div>
                <button onClick={delete_reactants} className={'input-button'}>
                    Delete
                </button>
            </div>
        </div>
        <div>
            <h1>Products</h1>
            {products.map((particle, index) => (
                <Tex2SVG latex={particle.symbol} key={index}/>
            ))}
        </div>
    </div>;
}