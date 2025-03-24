'use client';

import {useState} from 'react';
import {Particle, leptons, baryons, mesons, strange_particles} from "@/lib/particle_data";
import {Symbol} from "@/lib/ParticlesUI";
import {Button} from "@mantine/core";
import { FaDeleteLeft } from "react-icons/fa6";

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

    function delete_products() {
        if (products.length > 0) {
            setProducts(products.slice(0, products.length - 1));
        }
    }

    return <div className={'grid grid-cols-2 gap-x-20'}>
        <div>
            <h2>Reactants</h2>
            <div className={'grid grid-cols-10 min-h-40'}>
                {reactants.map((particle, index) => (
                    <Symbol particle={particle} key={index}/>
                ))}
            </div>
            <Button variant={'default'} color={'gray'} onClick={delete_reactants}>
                <FaDeleteLeft />
            </Button>
            <div>
                <h3>Leptons</h3>
                <div className={'keyboard_section'}>
                    {leptons.map((particle, index) => (
                        <Button key={particle.name} onClick={() => add_reactants(particle)}
                                variant={'default'} color={'gray'}>
                            <Symbol particle={particle} key={index}/>
                        </Button>
                    ))}
                </div>

                <h3>Baryons</h3>
                <div className={'keyboard_section'}>
                    {baryons.map((particle, index) => (
                        <Button key={particle.name} onClick={() => add_reactants(particle)}
                                variant={'default'} color={'gray'}>
                            <Symbol particle={particle} key={index}/>
                        </Button>
                    ))}
                </div>

                <h3>Mesons</h3>
                <div className={'keyboard_section'}>
                    {mesons.map((particle, index) => (
                        <Button key={particle.name} onClick={() => add_reactants(particle)}
                                variant={'default'} color={'gray'}>
                            <Symbol particle={particle} key={index}/>
                        </Button>
                    ))}
                </div>
                <h3>Strange particles</h3>
                <div className={'keyboard_section'}>
                    {strange_particles.map((particle, index) => (
                        <Button key={particle.name} onClick={() => add_reactants(particle)}
                                variant={'default'} color={'gray'}>
                            <Symbol particle={particle} key={index}/>
                        </Button>
                    ))}
                </div>

            </div>
        </div>
        <div>
            <h2>Products</h2>
            <div className={'grid grid-cols-10 min-h-40'}>
                {products.map((particle, index) => (
                    <Symbol particle={particle} key={index}/>
                ))}
            </div>
            <Button variant={'default'} color={'gray'} onClick={delete_products}>
                <FaDeleteLeft />
            </Button>
            <div>
                <h3>Leptons</h3>
                <div className={'keyboard_section'}>
                    {leptons.map((particle, index) => (
                        <Button key={particle.name} onClick={() => add_products(particle)}
                                variant={'default'} color={'gray'}>
                            <Symbol particle={particle} key={index}/>
                        </Button>
                    ))}
                </div>

                <h3>Baryons</h3>
                <div className={'keyboard_section'}>
                    {baryons.map((particle, index) => (
                        <Button key={particle.name} onClick={() => add_products(particle)}
                                variant={'default'} color={'gray'}>
                            <Symbol particle={particle} key={index}/>
                        </Button>
                    ))}
                </div>

                <h3>Mesons</h3>
                <div className={'keyboard_section'}>
                    {mesons.map((particle, index) => (
                        <Button key={particle.name} onClick={() => add_products(particle)}
                                variant={'default'} color={'gray'}>
                            <Symbol particle={particle} key={index}/>
                        </Button>
                    ))}
                </div>
                <h3>Strange particles</h3>
                <div className={'keyboard_section'}>
                    {strange_particles.map((particle, index) => (
                        <Button key={particle.name} onClick={() => add_products(particle)}
                                variant={'default'} color={'gray'}>
                            <Symbol particle={particle} key={index}/>
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    </div>;
}