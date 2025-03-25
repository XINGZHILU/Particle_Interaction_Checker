'use client';

import { Particle } from "@/lib/particle_data";
import { TeX } from "@/lib/ParticlesUI";
import { Card, Text, Divider, Group, Badge } from '@mantine/core';

// Define result type to include the optional weakInteractionNote
type ConservationResult = {
    name: string;
    reactantValue: number;
    productValue: number;
    isConserved: boolean;
    weakInteractionNote?: boolean;
};

// Function to check charge conservation
function chargeCheck(reactants: Particle[], products: Particle[]): ConservationResult {
    let reactantsCharge = 0;
    let productsCharge = 0;
    
    for (let particle of reactants) {
        reactantsCharge += particle.charge;
    }
    
    for (let particle of products) {
        productsCharge += particle.charge;
    }
    
    const isConserved = reactantsCharge === productsCharge;
    
    return {
        name: "Electric Charge",
        reactantValue: reactantsCharge,
        productValue: productsCharge,
        isConserved: isConserved
    };
}

// Function to check baryon number conservation
function baryonCheck(reactants: Particle[], products: Particle[]): ConservationResult {
    let reactantsBaryonNumber = 0;
    let productsBaryonNumber = 0;
    
    for (let particle of reactants) {
        reactantsBaryonNumber += particle.baryon;
    }
    
    for (let particle of products) {
        productsBaryonNumber += particle.baryon;
    }
    
    const isConserved = reactantsBaryonNumber === productsBaryonNumber;
    
    return {
        name: "Baryon Number",
        reactantValue: reactantsBaryonNumber,
        productValue: productsBaryonNumber,
        isConserved: isConserved
    };
}

// Function to check electron lepton number conservation
function electronLeptonCheck(reactants: Particle[], products: Particle[]): ConservationResult {
    let reactantsLeptonNumber = 0;
    let productsLeptonNumber = 0;
    
    for (let particle of reactants) {
        reactantsLeptonNumber += particle.electron_lepton;
    }
    
    for (let particle of products) {
        productsLeptonNumber += particle.electron_lepton;
    }
    
    const isConserved = reactantsLeptonNumber === productsLeptonNumber;
    
    return {
        name: "Electron Lepton Number",
        reactantValue: reactantsLeptonNumber,
        productValue: productsLeptonNumber,
        isConserved: isConserved
    };
}

// Function to check muon lepton number conservation
function muonLeptonCheck(reactants: Particle[], products: Particle[]): ConservationResult {
    let reactantsLeptonNumber = 0;
    let productsLeptonNumber = 0;
    
    for (let particle of reactants) {
        reactantsLeptonNumber += particle.muon_lepton;
    }
    
    for (let particle of products) {
        productsLeptonNumber += particle.muon_lepton;
    }
    
    const isConserved = reactantsLeptonNumber === productsLeptonNumber;
    
    return {
        name: "Muon Lepton Number",
        reactantValue: reactantsLeptonNumber,
        productValue: productsLeptonNumber,
        isConserved: isConserved
    };
}

// Function to check tau lepton number conservation
function tauLeptonCheck(reactants: Particle[], products: Particle[]): ConservationResult {
    let reactantsLeptonNumber = 0;
    let productsLeptonNumber = 0;
    
    for (let particle of reactants) {
        reactantsLeptonNumber += particle.tau_lepton;
    }
    
    for (let particle of products) {
        productsLeptonNumber += particle.tau_lepton;
    }
    
    const isConserved = reactantsLeptonNumber === productsLeptonNumber;
    
    return {
        name: "Tau Lepton Number",
        reactantValue: reactantsLeptonNumber,
        productValue: productsLeptonNumber,
        isConserved: isConserved
    };
}

// Function to check strangeness conservation
function strangenessCheck(reactants: Particle[], products: Particle[]): ConservationResult {
    let reactantsStrangeness = 0;
    let productsStrangeness = 0;
    
    for (let particle of reactants) {
        reactantsStrangeness += particle.strangeness;
    }
    
    for (let particle of products) {
        productsStrangeness += particle.strangeness;
    }
    
    const isConserved = reactantsStrangeness === productsStrangeness;
    
    return {
        name: "Strangeness",
        reactantValue: reactantsStrangeness,
        productValue: productsStrangeness,
        isConserved: isConserved,
        weakInteractionNote: !isConserved
    };
}

// Function to format numbers with a sign
function formatWithSign(num: number) {
    return num > 0 ? `+${num}` : num.toString();
}

export function Check(reactants: Particle[], products: Particle[]) {
    if (reactants.length === 0 || products.length === 0) {
        return (
            <div>
                <Text color="dimmed">You have not entered reactants and/or products</Text>
            </div>
        );
    }

    // Run all conservation checks
    const chargeResult = chargeCheck(reactants, products);
    const baryonResult = baryonCheck(reactants, products);
    const electronLeptonResult = electronLeptonCheck(reactants, products);
    const muonLeptonResult = muonLeptonCheck(reactants, products);
    const tauLeptonResult = tauLeptonCheck(reactants, products);
    const strangenessResult = strangenessCheck(reactants, products);
    
    // Determine overall validity
    const allConservedExceptStrangeness = 
        chargeResult.isConserved && 
        baryonResult.isConserved && 
        electronLeptonResult.isConserved && 
        muonLeptonResult.isConserved && 
        tauLeptonResult.isConserved;
    
    const allConserved = allConservedExceptStrangeness && strangenessResult.isConserved;
    
    // Create results table
    const results = [
        chargeResult,
        baryonResult,
        electronLeptonResult,
        muonLeptonResult,
        tauLeptonResult,
        strangenessResult
    ];
    
    return (
        <div>
            <div className="mb-6">
                <Text size="xl" fw={700} className="mb-2">Reaction validity:</Text>
                <Group>
                    {allConserved ? (
                        <Badge color="green" size="lg">Valid for all interactions</Badge>
                    ) : allConservedExceptStrangeness ? (
                        <Badge color="yellow" size="lg">Valid for weak interactions only</Badge>
                    ) : (
                        <Badge color="red" size="lg">Invalid reaction</Badge>
                    )}
                </Group>
                
                {!allConserved && allConservedExceptStrangeness && (
                    <Text size="sm" className="mt-2" fs="italic">
                        Note: Strangeness is not conserved in weak interactions.
                    </Text>
                )}
            </div>
            
            <Text size="lg" fw={700} className="mb-4">Conservation Laws:</Text>
            
            <div className="overflow-x-auto">
                <table className="w-full border-collapse mb-4">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-3 border text-left">Conservation Law</th>
                            <th className="p-3 border text-center">Reactants</th>
                            <th className="p-3 border text-center">Products</th>
                            <th className="p-3 border text-center">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((result, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                <td className="p-3 border font-medium">{result.name}</td>
                                <td className="p-3 border text-center">{formatWithSign(result.reactantValue)}</td>
                                <td className="p-3 border text-center">{formatWithSign(result.productValue)}</td>
                                <td className="p-3 border text-center">
                                    {result.isConserved ? (
                                        <Badge color="green">Conserved</Badge>
                                    ) : (
                                        <Badge color="red">Not Conserved</Badge>
                                    )}
                                    {result.weakInteractionNote && (
                                        <div className="text-xs text-gray-500 mt-1">
                                            May change in weak interactions
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            <Divider my="lg" />
            
            <div className="mt-4">
                <Text size="md" fw={700} className="mb-2">Learn More:</Text>
                <ul className="list-disc pl-6">
                    <li className="mb-1">
                        <strong>Strong interactions</strong> conserve all quantum numbers.
                    </li>
                    <li className="mb-1">
                        <strong>Electromagnetic interactions</strong> conserve all quantum numbers.
                    </li>
                    <li className="mb-1">
                        <strong>Weak interactions</strong> conserve charge, baryon number, and lepton numbers, but may change strangeness.
                    </li>
                </ul>
            </div>
        </div>
    );
}