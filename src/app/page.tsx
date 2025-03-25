'use client';

import React, { useState } from 'react';
import { Particle, leptons, baryons, mesons, strange_particles } from "@/lib/particle_data";
import { TeX } from "@/lib/ParticlesUI";
import { Button } from '@mantine/core';

export default function ParticleDataPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    // Function to filter particles based on search term
    const filterParticles = (particles : Particle[]) => {
        if (!searchTerm) return particles;
        return particles.filter(particle => 
            particle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            particle.symbol.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };
    
    // Function to format number with sign
    const formatNumberWithSign = (num: number) => {
        return num > 0 ? `+${num}` : num.toString();
    };

    // Get all particles from different categories
    const allParticles = [...leptons, ...baryons, ...mesons, ...strange_particles];
    
    // Determine which particles to display based on selected category
    let displayParticles = [];
    switch (selectedCategory) {
        case 'leptons':
            displayParticles = filterParticles(leptons);
            break;
        case 'baryons':
            displayParticles = filterParticles(baryons);
            break;
        case 'mesons':
            displayParticles = filterParticles(mesons);
            break;
        case 'strange':
            displayParticles = filterParticles(strange_particles);
            break;
        default:
            displayParticles = filterParticles(allParticles);
    }

    // Helper function to render boolean as Yes/No
    const renderBoolean = (value : boolean) => value ? 'Yes' : 'No';

    return (
        <div className="container mx-auto p-4">            
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold">Particle Physics Data</h1>
                <p className="lead">Explore the properties of fundamental particles in physics</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                    <div className="form-group">
                        <label htmlFor="search" className="form-label">Search Particles</label>
                        <input 
                            type="text" 
                            id="search" 
                            className="form-control" 
                            placeholder="Search by name or symbol..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex-1">
                    <div className="form-group">
                        <label htmlFor="category" className="form-label">Filter by Category</label>
                        <select 
                            id="category" 
                            className="form-control"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            <option value="all">All Particles</option>
                            <option value="leptons">Leptons</option>
                            <option value="baryons">Baryons</option>
                            <option value="mesons">Mesons</option>
                            <option value="strange">Strange Particles</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="card shadow-lg mb-4">
                <div className="card-header bg-primary text-white">
                    <h2 className="m-0">Particle Properties ({displayParticles.length} results)</h2>
                </div>
                <div className="card-body p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="p-4 border text-left">Name</th>
                                    <th className="p-4 border text-center">Symbol</th>
                                    <th className="p-4 border text-center">Charge</th>
                                    <th className="p-4 border text-center">Baryon Number</th>
                                    <th className="p-4 border text-center">Electron Lepton</th>
                                    <th className="p-4 border text-center">Muon Lepton</th>
                                    <th className="p-4 border text-center">Tau Lepton</th>
                                    <th className="p-4 border text-center">Strangeness</th>
                                    <th className="p-4 border text-center">Is Lepton</th>
                                </tr>
                            </thead>
                            <tbody>
                                {displayParticles.map((particle, index) => (
                                    <tr key={`${particle.name}-${index}`} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="p-4 border font-semibold">{particle.name}</td>
                                        <td className="p-4 border text-center">
                                            <TeX latex={particle.symbol} />
                                        </td>
                                        <td className="p-4 border text-center">{formatNumberWithSign(particle.charge)}</td>
                                        <td className="p-4 border text-center">{formatNumberWithSign(particle.baryon)}</td>
                                        <td className="p-4 border text-center">{formatNumberWithSign(particle.electron_lepton)}</td>
                                        <td className="p-4 border text-center">{formatNumberWithSign(particle.muon_lepton)}</td>
                                        <td className="p-4 border text-center">{formatNumberWithSign(particle.tau_lepton)}</td>
                                        <td className="p-4 border text-center">{formatNumberWithSign(particle.strangeness)}</td>
                                        <td className="p-4 border text-center">{renderBoolean(particle.lepton)}</td>
                                    </tr>
                                ))}
                                {displayParticles.length === 0 && (
                                    <tr>
                                        <td colSpan={9} className="p-4 text-center">No particles found matching your criteria</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="card shadow">
                    <div className="card-header bg-secondary text-white">
                        <h3 className="m-0">Particle Categories</h3>
                    </div>
                    <div className="card-body">
                        <ul>
                            <li className="mb-2"><strong>Leptons:</strong> {leptons.length} particles</li>
                            <li className="mb-2"><strong>Baryons:</strong> {baryons.length} particles</li>
                            <li className="mb-2"><strong>Mesons:</strong> {mesons.length} particles</li>
                            <li><strong>Strange Particles:</strong> {strange_particles.length} particles</li>
                        </ul>
                    </div>
                </div>

                <div className="card shadow">
                    <div className="card-header bg-secondary text-white">
                        <h3 className="m-0">Conservation Laws</h3>
                    </div>
                    <div className="card-body">
                        <p className="mb-2">In particle physics, several quantities are conserved during interactions:</p>
                        <ul>
                            <li className="mb-1">Electric charge</li>
                            <li className="mb-1">Baryon number</li>
                            <li className="mb-1">Lepton numbers (electron, muon, tau)</li>
                            <li className="mb-1">Strangeness (in strong interactions)</li>
                        </ul>
                    </div>
                </div>

                <div className="card shadow">
                    <div className="card-header bg-secondary text-white">
                        <h3 className="m-0">Particle Definitions</h3>
                    </div>
                    <div className="card-body">
                        <dl>
                            <dt className="font-semibold">Leptons</dt>
                            <dd className="mb-2">Fundamental particles that do not participate in strong interactions.</dd>
                            
                            <dt className="font-semibold">Baryons</dt>
                            <dd className="mb-2">Composite particles made of three quarks with baryon number = 1.</dd>
                            
                            <dt className="font-semibold">Mesons</dt>
                            <dd className="mb-2">Composite particles consisting of one quark and one antiquark.</dd>
                            
                            <dt className="font-semibold">Strange Particles</dt>
                            <dd>Particles containing at least one strange quark or antiquark.</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
}