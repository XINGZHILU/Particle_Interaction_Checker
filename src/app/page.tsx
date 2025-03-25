'use client';

import React, {useState} from 'react';
import {Particle, leptons, baryons, mesons, strange_particles} from "@/lib/particle_data";
import {TeX} from "@/lib/ParticlesUI";
import { FaDeleteLeft } from "react-icons/fa6";
import {Check} from "@/lib/check";
import { Modal, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export default function Page() {
    const [opened, { close, open }] = useDisclosure(false);
    const [reactants, setReactants] = useState<Particle[]>([]);
    const [products, setProducts] = useState<Particle[]>([]);
    const [reaction_symbols, setReactionSymbols] = useState<string[]>([]);
    const [product_symbols, setProductSymbols] = useState<string[]>([]);
    const [check_result, setCheckResult] = useState<React.JSX.Element>(<div></div>);
    //const [equation, setEquation] = useState<string>('');

    function add_reactants(particle: Particle) {
        setReactants([...reactants, particle]);
        setReactionSymbols([...reaction_symbols, particle.symbol]);
        //setEquation(`${reaction_symbols.join(' + ')} \\rightarrow ${product_symbols.join(' + ')}`)
    }

    function delete_reactants() {
        if (reactants.length > 1) {
            setReactants(reactants.slice(0, reactants.length - 1));
            setReactionSymbols(reaction_symbols.slice(0, reaction_symbols.length - 1));
        }
        else if (reactants.length === 1) {
            setReactants([]);
            setReactionSymbols([]);
        }
        //setEquation(`${reaction_symbols.join(' + ')} \\rightarrow ${product_symbols.join(' + ')}`)
    }

    function clear_reactants() {
        setReactants([]);
        setReactionSymbols([]);
    }

    function add_products(particle: Particle) {
        setProducts([...products, particle]);
        setProductSymbols([...product_symbols, particle.symbol]);
        //setEquation(`${reaction_symbols.join(' + ')} \\rightarrow ${product_symbols.join(' + ')}`)
    }

    function delete_products() {
        if (products.length > 1) {
            setProducts(products.slice(0, products.length - 1));
            setProductSymbols(product_symbols.slice(product_symbols.length - 1));
        }
        else if (products.length === 1) {
            setProducts([]);
            setProductSymbols([]);
        }
        //setEquation(`${reaction_symbols.join(' + ')} \\rightarrow ${product_symbols.join(' + ')}`)
    }

    function clear_products(){
        setProducts([]);
        setProductSymbols([]);
    }

    function check() {
        setCheckResult(Check(reactants, products));
        open();
    }



    return <div>
        <center>
            <h1>Particle Reaction Validator</h1>
        </center>
        <div className={'grid grid-cols-2 gap-x-10'}>
            <div>
                <h2>Reactants</h2>
                <div className={'reactants-box'}>
                    <TeX latex={reaction_symbols.join('+')}/>
                </div>
                <div className='grid grid-cols-2 gap-x-15'>
                    <Button variant={'default'} color={'gray'} onClick={() => {
                        delete_reactants();
                    }}>
                        <FaDeleteLeft />
                    </Button>
                        <Button variant={'default'} color={'gray'} onClick={() => {
                        clear_reactants();
                    }}>
                        Clear
                    </Button>
                </div>
                
                <div>
                    <h3>Leptons</h3>
                    <div className={'keyboard_section'}>
                        {leptons.map((particle, index) => (
                            <Button key={particle.name} onClick={() => {
                                add_reactants(particle);
                            }}
                                    variant={'default'} color={'gray'}>
                                <TeX latex={particle.symbol}/>
                            </Button>
                        ))}
                    </div>

                    <h3>Baryons</h3>
                    <div className={'keyboard_section'}>
                        {baryons.map((particle, index) => (
                            <Button key={particle.name} onClick={() => {
                                add_reactants(particle);
                            }}
                                    variant={'default'} color={'gray'}>
                                <TeX latex={particle.symbol}/>
                            </Button>
                        ))}
                    </div>

                    <h3>Mesons</h3>
                    <div className={'keyboard_section'}>
                        {mesons.map((particle, index) => (
                            <Button key={particle.name} onClick={() => {
                                add_reactants(particle);
                            }}
                                    variant={'default'} color={'gray'}>
                                <TeX latex={particle.symbol}/>
                            </Button>
                        ))}
                    </div>
                    <h3>Strange particles</h3>
                    <div className={'keyboard_section'}>
                        {strange_particles.map((particle, index) => (
                            <Button key={particle.name} onClick={() => {
                                add_reactants(particle);
                            }}
                                    variant={'default'} color={'gray'}>
                                <TeX latex={particle.symbol}/>
                            </Button>
                        ))}
                    </div>

                </div>
            </div>
            <div>
                <h2>Products</h2>
                <div className='reactants-box'>
                    <TeX latex={product_symbols.join('+')}/>
                </div>
                <div className='grid grid-cols-2 gap-x-15'>
                    <Button variant={'default'} color={'gray'} onClick={() => {
                        delete_products();
                    }}>
                        <FaDeleteLeft />
                    </Button>
                        <Button variant={'default'} color={'gray'} onClick={() => {
                        clear_products();
                    }}>
                        Clear
                    </Button>
                </div>
                <div>
                    <h3>Leptons</h3>
                    <div className={'keyboard_section'}>
                        {leptons.map((particle, index) => (
                            <Button key={particle.name} onClick={() => add_products(particle)}
                                    variant={'default'} color={'gray'}>
                                <TeX latex={particle.symbol}/>
                            </Button>
                        ))}
                    </div>

                    <h3>Baryons</h3>
                    <div className={'keyboard_section'}>
                        {baryons.map((particle, index) => (
                            <Button key={particle.name} onClick={() => add_products(particle)}
                                    variant={'default'} color={'gray'}>
                                <TeX latex={particle.symbol}/>
                            </Button>
                        ))}
                    </div>

                    <h3>Mesons</h3>
                    <div className={'keyboard_section'}>
                        {mesons.map((particle, index) => (
                            <Button key={particle.name} onClick={() => add_products(particle)}
                                    variant={'default'} color={'gray'}>
                                <TeX latex={particle.symbol}/>
                            </Button>
                        ))}
                    </div>
                    <h3>Strange particles</h3>
                    <div className={'keyboard_section'}>
                        {strange_particles.map((particle, index) => (
                            <Button key={particle.name} onClick={() => add_products(particle)}
                                    variant={'default'} color={'gray'}>
                                <TeX latex={particle.symbol}/>
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <br/>
        <Button onClick={check} variant={'primary'} color={'cyan'} fullWidth={true}>Check!</Button>
        <Modal
            opened={opened}
            onClose={close}
            fullScreen
            radius={0}
            transitionProps={{ transition: 'fade', duration: 200 }}
        >
            
            {check_result}
        </Modal>
    </div>;
}