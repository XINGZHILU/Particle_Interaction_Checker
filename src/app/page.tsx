'use client';

import React, { useState } from 'react';
import { Particle, leptons, baryons, mesons, strange_particles } from "@/lib/particle_data";
import { TeX } from "@/lib/ParticlesUI";
import { FaDeleteLeft, FaArrowRight } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { Check } from "@/lib/check";
import { Modal, Button, Tabs, Card, Text, Group, Divider, Tooltip } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ParticleDataPage from '@/lib/DataPage';

export default function Page() {
    const [opened, { close, open }] = useDisclosure(false);
    const [infoOpened, { close: closeInfo, open: openInfo }] = useDisclosure(false);
    const [dataOpened, { close: closeData, open: openData }] = useDisclosure(false);
    const [reactants, setReactants] = useState<Particle[]>([]);
    const [products, setProducts] = useState<Particle[]>([]);
    const [reaction_symbols, setReactionSymbols] = useState<string[]>([]);
    const [product_symbols, setProductSymbols] = useState<string[]>([]);
    const [check_result, setCheckResult] = useState<React.JSX.Element>(<div></div>);

    function add_reactants(particle: Particle) {
        setReactants([...reactants, particle]);
        setReactionSymbols([...reaction_symbols, particle.symbol]);
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
    }

    function clear_reactants() {
        setReactants([]);
        setReactionSymbols([]);
    }

    function add_products(particle: Particle) {
        setProducts([...products, particle]);
        setProductSymbols([...product_symbols, particle.symbol]);
    }

    function delete_products() {
        if (products.length > 1) {
            setProducts(products.slice(0, products.length - 1));
            setProductSymbols(product_symbols.slice(0, product_symbols.length - 1));
        }
        else if (products.length === 1) {
            setProducts([]);
            setProductSymbols([]);
        }
    }

    function clear_products() {
        setProducts([]);
        setProductSymbols([]);
    }

    function check() {
        setCheckResult(Check(reactants, products));
        open();
    }

    // Function to render particle buttons
    const renderParticleButtons = (particles: Particle[], addFunction: (particle: Particle) => void) => (
        <div className={'keyboard_section'}>
            {particles.map((particle) => (
                <Tooltip key={particle.name} label={particle.name} position="top" withArrow>
                    <Button
                        onClick={() => addFunction(particle)}
                        variant={'outline'}
                        color={'gray'}
                        className="hover:bg-gray-100"
                    >
                        <TeX latex={particle.symbol} />
                    </Button>
                </Tooltip>
            ))}
        </div>
    );

    return (
        <div className="container mx-auto p-4 max-w-6xl">
            <header className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-center">Particle Reaction Validator</h1>
                <Group>
                    <Button
                        variant="subtle"
                        color="blue"
                        onClick={openInfo}
                        leftSection={<IoMdInformationCircleOutline size={20} />}
                    >
                        Info
                    </Button>
                    <Button 
                        variant="subtle" 
                        color="gray"
                        onClick={openData}
                    >
                        Particle Data
                    </Button>
                </Group>
            </header>

            {/* Reaction Equation Display */}
            <Card shadow="sm" padding="lg" radius="md" withBorder className="mb-6">
                <Card.Section p="md" className="bg-blue-50">
                    <div className="flex items-center justify-center gap-4 py-4 text-xl">
                        <div className="min-w-32 text-center">
                            {reaction_symbols.length > 0 ?
                                <TeX latex={reaction_symbols.join('+')} /> :
                                <Text color="dimmed">Select reactants</Text>
                            }
                        </div>
                        <FaArrowRight className="text-blue-500" />
                        <div className="min-w-32 text-center">
                            {product_symbols.length > 0 ?
                                <TeX latex={product_symbols.join('+')} /> :
                                <Text color="dimmed">Select products</Text>
                            }
                        </div>
                    </div>
                </Card.Section>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Reactants Column */}
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Card.Section withBorder inheritPadding py="xs" className="bg-blue-50">
                        <Group justify="space-between">
                            <Text fw={700}>Reactants</Text>
                            <Group>
                                <Button
                                    variant="outline"
                                    color="red"
                                    size="xs"
                                    onClick={delete_reactants}
                                >
                                    <FaDeleteLeft />
                                </Button>
                                <Button
                                    variant="outline"
                                    color="gray"
                                    size="xs"
                                    onClick={clear_reactants}
                                >
                                    Clear
                                </Button>
                            </Group>
                        </Group>
                    </Card.Section>

                    <Tabs defaultValue="leptons" className="mt-4">
                        <Tabs.List>
                            <Tabs.Tab value="leptons">Leptons</Tabs.Tab>
                            <Tabs.Tab value="baryons">Baryons</Tabs.Tab>
                            <Tabs.Tab value="mesons">Mesons</Tabs.Tab>
                            <Tabs.Tab value="strange">Strange</Tabs.Tab>
                        </Tabs.List>

                        <Tabs.Panel value="leptons" pt="xs">
                            {renderParticleButtons(leptons, add_reactants)}
                        </Tabs.Panel>

                        <Tabs.Panel value="baryons" pt="xs">
                            {renderParticleButtons(baryons, add_reactants)}
                        </Tabs.Panel>

                        <Tabs.Panel value="mesons" pt="xs">
                            {renderParticleButtons(mesons, add_reactants)}
                        </Tabs.Panel>

                        <Tabs.Panel value="strange" pt="xs">
                            {renderParticleButtons(strange_particles, add_reactants)}
                        </Tabs.Panel>
                    </Tabs>
                </Card>

                {/* Products Column */}
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <Card.Section withBorder inheritPadding py="xs" className="bg-blue-50">
                        <Group justify="space-between">
                            <Text fw={700}>Products</Text>
                            <Group>
                                <Button
                                    variant="outline"
                                    color="red"
                                    size="xs"
                                    onClick={delete_products}
                                >
                                    <FaDeleteLeft />
                                </Button>
                                <Button
                                    variant="outline"
                                    color="gray"
                                    size="xs"
                                    onClick={clear_products}
                                >
                                    Clear
                                </Button>
                            </Group>
                        </Group>
                    </Card.Section>

                    <Tabs defaultValue="leptons" className="mt-4">
                        <Tabs.List>
                            <Tabs.Tab value="leptons">Leptons</Tabs.Tab>
                            <Tabs.Tab value="baryons">Baryons</Tabs.Tab>
                            <Tabs.Tab value="mesons">Mesons</Tabs.Tab>
                            <Tabs.Tab value="strange">Strange</Tabs.Tab>
                        </Tabs.List>

                        <Tabs.Panel value="leptons" pt="xs">
                            {renderParticleButtons(leptons, add_products)}
                        </Tabs.Panel>

                        <Tabs.Panel value="baryons" pt="xs">
                            {renderParticleButtons(baryons, add_products)}
                        </Tabs.Panel>

                        <Tabs.Panel value="mesons" pt="xs">
                            {renderParticleButtons(mesons, add_products)}
                        </Tabs.Panel>

                        <Tabs.Panel value="strange" pt="xs">
                            {renderParticleButtons(strange_particles, add_products)}
                        </Tabs.Panel>
                    </Tabs>
                </Card>
            </div>

            <Button
                onClick={check}
                variant="filled"
                color="blue"
                size="lg"
                fullWidth
                className="mt-4"
                disabled={reactants.length === 0 || products.length === 0}
            >
                Validate Reaction
            </Button>

            {/* Results Modal */}
            <Modal
                opened={opened}
                onClose={close}
                size="lg"
                radius="md"
                title={
                    <div className="text-xl font-bold">
                        Reaction Analysis
                    </div>
                }
                centered
            >
                <Card shadow="sm" padding="lg" radius="md" withBorder className="mb-4">
                    <Text fw={700} size="lg" className="mb-2">Reaction</Text>
                    <div className="bg-gray-50 p-4 rounded-md text-center">
                        <TeX latex={`${reaction_symbols.join(' + ')} \\rightarrow ${product_symbols.join(' + ')}`} />
                    </div>
                </Card>

                <Divider my="md" />

                <div className="mt-4">
                    {check_result}
                </div>

                <Button fullWidth mt="xl" color="blue" onClick={close}>
                    Close
                </Button>
            </Modal>

            {/* Info Modal */}
            <Modal
                opened={infoOpened}
                onClose={closeInfo}
                title="About Particle Reaction Validator"
                size="lg"
                radius="md"
                centered
            >
                <Text size="md" className="mb-4">
                    This tool helps validate particle reactions by checking conservation laws in particle physics.
                </Text>

                <Text fw={700} size="md" className="mb-2">How to use:</Text>
                <ol className="list-decimal pl-6 mb-4 space-y-2">
                    <li>Select particles for the reactants side (left)</li>
                    <li>Select particles for the products side (right)</li>
                    <li>Click "Validate Reaction" to check if the reaction conserves various quantum numbers</li>
                </ol>

                <Text fw={700} size="md" className="mb-2">Conservation laws checked:</Text>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>Electric charge conservation</li>
                    <li>Baryon number conservation</li>
                    <li>Lepton number conservation (electron, muon, tau)</li>
                </ul>

                <Button color="blue" fullWidth onClick={closeInfo}>
                    Got it
                </Button>
            </Modal>

            {/* Particle Data Modal */}
            <Modal
                opened={dataOpened}
                onClose={closeData}
                fullScreen
                radius={0}
                transitionProps={{ transition: 'fade', duration: 200 }}
                title={
                    <div className="text-xl font-bold flex items-center">
                        <Button variant="subtle" color="gray" onClick={closeData} className="mr-4">
                            ← Back
                        </Button>
                        Particle Data Reference
                    </div>
                }
            >
                <div className="p-4">
                    <ParticleDataPage />
                </div>
            </Modal>
        </div>
    );
}